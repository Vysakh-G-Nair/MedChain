pragma solidity ^0.4.26;

contract UserFactory {
    mapping (address => address) public patientsAddress;
    mapping (address => address) medProsAddress;
    mapping (address => address) extUserAddress;
    
    function canRegister() public view {
        require(medProsAddress[msg.sender] == 0x0000000000000000000000000000000000000000 && patientsAddress[msg.sender] == 0x0000000000000000000000000000000000000000 && extUserAddress[msg.sender] == 0x0000000000000000000000000000000000000000, "Already registered as a user in the system!");
    }
    
    function isRegistered(address _owner) public view returns (string memory) {
        if (medProsAddress[_owner] == 0x0000000000000000000000000000000000000000 && patientsAddress[_owner] == 0x0000000000000000000000000000000000000000 && extUserAddress[_owner] == 0x0000000000000000000000000000000000000000) {
            return ("Not registered as a user in the system!");
        }
        else {
            return ("Registered as a user in the system!");
        }
    }
    
    function registerPatient(string memory _name, uint _age, string memory _gender, string memory _bloodGroup, bool _isdoc, address _owner) public {
        canRegister();
        address newPatient;
        if (_isdoc == false) {
            newPatient = new Patient(msg.sender, _isdoc, 0x00, _name, _age, _gender, _bloodGroup);
            patientsAddress[msg.sender] = newPatient;
        }
        else {
            newPatient = new Patient(_owner, _isdoc, msg.sender, _name, _age, _gender, _bloodGroup);
            patientsAddress[_owner] = newPatient;
        }
    }
    
    function registerMedPro(string memory _name, string memory _category, string memory _place, string _lisenceNo) public {
        canRegister();
        address newMedPro = new MedicalPro(msg.sender, _name, _category, _place, _lisenceNo);
        medProsAddress[msg.sender] = newMedPro;
    }
    
    function registerExtUser(string memory _name, string memory _designation) public {
        canRegister();
        address newExtUser = new External(msg.sender, _name, _designation);
        extUserAddress[msg.sender] = newExtUser;
    }
    
    function loginPatient() public view returns (address) {
        require(patientsAddress[msg.sender] != 0x0000000000000000000000000000000000000000, "Not registered as a patient!");
        return patientsAddress[msg.sender];
    }
    
    function loginMedPro() public view returns (address) {
        require(medProsAddress[msg.sender] != 0x0000000000000000000000000000000000000000, "Not registered as a medical professional!");
        return medProsAddress[msg.sender];
    }
    
    function loginExtUser() public view returns (address) {
        require(extUserAddress[msg.sender] != 0x0000000000000000000000000000000000000000, "Not registered as a external user!");
        return extUserAddress[msg.sender];
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
        string fileHash;
        mapping (address => bool) canView;
    }
    
    struct Request {
        uint recordID;
        address viewer;
        string nameDoc;
        bool isView; // false for create
        bool granted;
    }
    
    address ownerPatient;
    string name;
    uint age;
    string gender;
    string bloodGroup;
    Record[] records;
    mapping (uint => uint) indices;
    uint noOfRecords;
    mapping (address => bool) public canCreate;
    Request[] public requests;
    bool pendingRequest;
    
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
        pendingRequest = false;
    }
    
    function restricted() public view {
        require(msg.sender == ownerPatient, "Not the owner!");
    }
    
    function getPatSummary() public view returns (address, string memory, uint, string memory, string memory, uint, bool) {
        restricted();
        return (ownerPatient, name, age, gender, bloodGroup, noOfRecords, pendingRequest);
    }
    
    function createRecord(uint _id, string memory _name, string memory _nameDoc, string memory _date, string memory _desc, string memory _hash) public {
        require(canCreate[msg.sender], "You don't have permission to create a record!");
        Record memory record = Record({
            recordID: _id,
            name: _name,
            nameDoc: _nameDoc,
            date: _date,
            creator: msg.sender,
            description: _desc,
            fileHash: _hash
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
            isView: _isView,
            granted: false
        });
        requests.push(request);
        pendingRequest = true;
    }
    
    function grantRequest(uint _index) public {
        restricted();
        Request storage request = requests[_index];
        if (request.isView) {
            Record storage record = records[indices[request.recordID]];
            
            record.canView[request.viewer] = true;
        }
        else {
            canCreate[request.viewer] = true;
        }
        request.granted = true;
        pendingRequest = false;
    }
    
    function revokeRequest(uint _index) public {
        restricted();
        Request storage request = requests[_index];
        if (request.isView) {
            Record storage record = records[indices[request.recordID]];
            
            record.canView[request.viewer] = false;
        }
        else {
            canCreate[request.viewer] = false;
        }
        request.granted = false;
        pendingRequest = false;
    }
    
    function viewRecord(uint _id) public view returns(uint, address, string memory, string memory, string memory, string memory, string memory) {
        Record storage record = records[indices[_id]];
        require(record.canView[msg.sender] , "You don't have permission to view this record!");
        return (record.recordID, record.creator, record.name, record.nameDoc, record.date, record.description, record.fileHash);
    }
    
    function viewRecords(uint _index) public view returns(uint, address, string memory, string memory, string memory, string memory, string memory) {
        restricted();
        Record storage record = records[_index];
        return (record.recordID, record.creator, record.name, record.nameDoc, record.date, record.description, record.fileHash);
    }
    
    function getRequestsCount() public view returns (uint) {
        return (requests.length);
    }
}

contract MedicalPro {
    address owner;
    UserFactory Ufactory;
    string name;
    string category;
    string place;
    string lisenceNo;
    address[] regPatients;
    string[] public namePatients;
    
    constructor (address _owner, string memory _name, string memory _category, string _place, string _lisenceNo) public {
        owner = _owner;
        name = _name;
        category = _category;
        place = _place;
        lisenceNo = _lisenceNo;
        Ufactory = UserFactory(msg.sender);
    }
    
    function restricted() public view {
        require(msg.sender == owner, "Not the owner!");
    }
    
    function getMedProSummary() public view returns (address, string memory, string memory, string memory, string memory) {
        restricted();
        return (owner, name, category, place, lisenceNo);
    }
    
    function createPatient(address _patient, string memory _name, uint _age, string memory _gender, string memory _bloodGroup) public {
        restricted();
        Ufactory.registerPatient(_name, _age, _gender, _bloodGroup, true, _patient);
        regPatients.push(_patient);
        namePatients.push(_name);
    }
    
    function noOfPatients() public view returns(uint) {
        return (regPatients.length);
    }
    
    function getPatient(address _patient) private view returns (Patient) {
        address dep_patient = Ufactory.patientsAddress(_patient);
        return (Patient(dep_patient));
    }
    
    function createRecord(address _patient, uint _id, string memory _name, string memory _nameDoc, string memory _date, string memory _desc, string memory _hash) public {
        restricted();
        Patient patient = getPatient(_patient);
        patient.createRecord(_id, _name, _nameDoc, _date, _desc, _hash);
    }
    
    function requestPermission(address _patient, uint _id, bool _isView) public {
        restricted();
        Patient patient = getPatient(_patient);
        patient.addRequest(_id, _isView, name);
    }
    
    function viewRecord(address _patient, uint _id) public view returns(uint, address, string memory, string memory, string memory, string memory, string memory) {
        restricted();
        Patient patient = getPatient(_patient);
        return (patient.viewRecord(_id));
    }
    
    function canCreateRec(address _patient) public view returns (bool) {
        Patient patient = getPatient(_patient);
        require (patient.canCreate(this), "You don't have permission to create a record!");
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
    
    function restricted() private view {
        require(msg.sender == ownerUser, "Not the owner!");
    }
    
    function getExtSummary() public view returns(address, string memory, string memory) {
        restricted();
        return (ownerUser, name, designation);
    }
    
    function getPatient(address _patient) private view returns (Patient) {
        address dep_patient = Ufactory.patientsAddress(_patient);
        return (Patient(dep_patient));
    }
    
    function requestPermission(address _patient, uint _id) public {
        restricted();
        Patient patient = getPatient(_patient);
        patient.addRequest(_id, true, name);
    }
    
    function viewRecord(address _patient, uint _id) public view returns(uint, address, string memory, string memory, string memory, string memory, string memory) {
        restricted();
        Patient patient = getPatient(_patient);
        return (patient.viewRecord(_id));
    }
}