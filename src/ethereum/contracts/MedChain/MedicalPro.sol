pragma solidity ^0.4.26;

import './UserFactory.sol';
import './Patient.sol';

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
    
    function requestPermission(address _patient, uint _id, bool _isView) public {
        address dep_patient = Ufactory.patientsAddress(_patient);
        Patient patient = Patient(dep_patient);
        patient.addRequest(_id, _isView, name);
    }
    
    function viewRecord(address _patient, uint _id) public view returns(uint, address, string memory, string memory, string memory, string memory) {
        address dep_patient = Ufactory.patientsAddress(_patient);
        Patient patient = Patient(dep_patient);
        return (patient.viewRecord(_id));
    }
}