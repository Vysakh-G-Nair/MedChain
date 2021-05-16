pragma solidity ^0.4.26;

import './UserFactory.sol';

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
}