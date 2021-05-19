pragma solidity ^0.4.26;

contract UserFactory {
    mapping (address => address) public patientsAddress;
    mapping (address => address) medProsAddress;
    mapping (address => address) extUserAddress;
    
    modifier registered {
        require(medProsAddress[msg.sender] == 0x0000000000000000000000000000000000000000 && patientsAddress[msg.sender] == 0x0000000000000000000000000000000000000000 && extUserAddress[msg.sender] == 0x0000000000000000000000000000000000000000, "Already registered as doctor or patient");
        _;
    }
    
    function registerPatient(string memory _name, uint _age, string memory _gender, string memory _bloodGroup, bool _isdoc, address _owner, address _ownerDoc) public registered {
        address newPatient;
        if (_isdoc == false) {
            newPatient = new Patient(msg.sender, _isdoc, 0x00, _name, _age, _gender, _bloodGroup);
            patientsAddress[msg.sender] = newPatient;
        }
        else {
            newPatient = new Patient(_owner, _isdoc, _ownerDoc, _name, _age, _gender, _bloodGroup);
            patientsAddress[_owner] = newPatient;
        }
    }
    
    function registerMedPro(string memory _name, string memory _specialisation, string memory _hospName, uint _docID) public registered {
        address newMedPro = new MedicalPro(msg.sender, _name, _specialisation, _hospName, _docID);
        medProsAddress[msg.sender] = newMedPro;
    }
    
    function registerExtUser(string memory _name, string memory _designation) public {
        address newExtUser = new External(msg.sender, _name, _designation);
        extUserAddress[msg.sender] = newExtUser;
    }
    
    function loginPatient() public view returns (address) {
        require(patientsAddress[msg.sender] != 0x0000000000000000000000000000000000000000, "Not registered as patient");
        return patientsAddress[msg.sender];
    }
    
    function loginDoctor() public view returns (address) {
        require(medProsAddress[msg.sender] != 0x0000000000000000000000000000000000000000, "Not registered as doctor");
        return medProsAddress[msg.sender];
    }
    
    function loginExtUser() public view returns (address) {
        require(extUserAddress[msg.sender] != 0x0000000000000000000000000000000000000000, "Not registered as external user");
        return extUserAddress[msg.sender];
    }
}

contract MedicalPro {
    address owner;
    UserFactory Ufactory;
    string name;
    string category;
    string place;
    uint lisenceNo;
    
    constructor (address _owner, string memory _name, string memory _category, string _place, uint _lisenceNo) public {
        owner = _owner;
        name = _name;
        category = _category;
        place = _place;
        lisenceNo = _lisenceNo;
        Ufactory = UserFactory(msg.sender);
    }
    
    modifier restricted() {
        require(msg.sender == owner);
        _;
    }
    
    function getMedProSummary() public view restricted returns (address, string memory, string memory, string memory, uint) {
        return (owner, name, category, place, lisenceNo);
    }
    
    function createPatient(address _patient, string memory _name, uint _age, string memory _gender, string memory _bloodGroup) public restricted {
        Ufactory.registerPatient(_name, _age, _gender, _bloodGroup, true, _patient, owner);
    }
    
    function createRecord(address _patient, uint _id, string memory _name, string memory _nameDoc, string memory _date, string memory _desc) public restricted {
        address dep_patient = Ufactory.patientsAddress(_patient);
        Patient patient = Patient(dep_patient);
        patient.createRecord(_id, _name, _nameDoc, _date, _desc);
    }
    
    function requestPermission(address _patient, uint _id, bool _isView) public restricted {
        address dep_patient = Ufactory.patientsAddress(_patient);
        Patient patient = Patient(dep_patient);
        patient.addRequest(_id, _isView, name);
    }
    
    function viewRecord(address _patient, uint _id) public view restricted returns(uint, address, string memory, string memory, string memory, string memory) {
        address dep_patient = Ufactory.patientsAddress(_patient);
        Patient patient = Patient(dep_patient);
        return (patient.viewRecord(_id));
    }
}

contract Patient {
    struct Record {
        uint recordID;
        address creator;
        string nameDoc;
        string name;
        string date;
        string description;
        mapping (address => bool) canView;
    }
    
    struct Request {
        uint recordID;
        address viewer;
        string nameDoc;
        bool isView; // false for create
    }
    
    address ownerPatient;
    string name;
    uint age;
    string gender;
    string bloodGroup;
    Record[] records;
    mapping (uint => uint) indices;
    uint noOfRecords;
    mapping (address => bool) canCreate;
    Request[] public requests;
    UserFactory Ufactory;
    
    constructor (address _owner, bool _isdoc, address _doc, string memory _name, uint _age, string memory _gender, string memory _bloodGroup) public {
        ownerPatient = _owner;
        noOfRecords = 0;
        if (_isdoc == true) {
            canCreate[_doc] = true;
        }

        name = _name;
        age = _age;
        gender = _gender;
        bloodGroup = _bloodGroup;
    }
    
    modifier restricted() {
        require(msg.sender == ownerPatient);
        _;
    }
    
    function getPatSummary() public view restricted returns (address, string memory, uint, string memory, string memory, uint) {
        return (ownerPatient, name, age, gender, bloodGroup, noOfRecords);
    }
    
    function createRecord(uint _id, string memory _name, string memory _nameDoc, string memory _date, string memory _desc) public {
        require(canCreate[msg.sender], "You dont have permission!");
        Record memory record = Record({
            recordID: _id,
            name: _name,
            nameDoc: _nameDoc,
            date: _date,
            creator: msg.sender,
            description: _desc
        });
        records.push(record); 
        records[noOfRecords].canView[msg.sender] = true;
        indices[_id] = noOfRecords;
        noOfRecords++;
    }
    
    function addRequest(uint _id, bool _isView, string memory _name) public {
        require(msg.sender != ownerPatient, "You are the patient!");
        Request memory request = Request({
            recordID: _id,
            viewer: msg.sender,
            nameDoc: _name,
            isView: _isView
        });
        requests.push(request);
    }
    
    function grantRequest(uint _index) public restricted {
        Request storage request = requests[_index];
        if (request.isView) {
            Record storage record = records[indices[request.recordID]];
            
            record.canView[request.viewer] = true;
        }
        else {
            canCreate[request.viewer] = true;
        }
    }
    
    function revokeRequest(uint _index) public restricted {
        Request storage request = requests[_index];
        if (request.isView) {
            Record storage record = records[indices[request.recordID]];
            
            record.canView[request.viewer] = false;
        }
        else {
            canCreate[request.viewer] = false;
        }
    }
    
    function viewRecord(uint _id) public view returns(uint, address, string memory, string memory, string memory, string memory) {
        Record storage record = records[indices[_id]];
        require(record.canView[msg.sender] , "You dont have permission");
        return (record.recordID, record.creator, record.name, record.nameDoc, record.date, record.description);
    }
    
    function view1Record(uint _index) public view restricted returns(uint, address, string memory, string memory, string memory, string memory) {
        Record storage record = records[_index];
        return (record.recordID, record.creator, record.name, record.nameDoc, record.date, record.description);
    }

    function getRequestsCount() public view returns (uint) {
        return requests.length;
    }
}

contract External {
    address ownerUser;
    UserFactory Ufactory;
    string name;
    string designation;
    
    constructor (address _owner, string memory _name, string memory _designation) public {
        ownerUser = _owner;
        name = _name;
        designation = _designation;
        Ufactory = UserFactory(msg.sender);
    }
    
    modifier restricted() {
        require(msg.sender == ownerUser);
        _;
    }
    
    function getExtSummary() public view restricted returns(string memory, string memory) {
        return (name, designation);
    }
    
    function requestPermission(address _patient, uint _id) public restricted {
        address dep_patient = Ufactory.patientsAddress(_patient);
        Patient patient = Patient(dep_patient);
        patient.addRequest(_id, true, name);
    }
    
    function viewRecord(address _patient, uint _id) public view restricted returns(uint, address, string memory, string memory, string memory, string memory) {
        address dep_patient = Ufactory.patientsAddress(_patient);
        Patient patient = Patient(dep_patient);
        return (patient.viewRecord(_id));
    }
}