pragma solidity ^0.4.26;

import './UserFactory.sol';
import './Patient.sol';


contract Doctor {
    address ownerDoctor;
    UserFactory Ufactory;
    string name;
    string specialisation;
    string hospName;
    uint docID;
    
    constructor (address _owner, string memory _name, string memory _specialisation, string memory _hospName, uint _docID) public {
        ownerDoctor = _owner;
        name = _name;
        specialisation = _specialisation;
        hospName = _hospName;
        docID = _docID;
        Ufactory = UserFactory(msg.sender);
    }
    
    modifier restricted() {
        require(msg.sender == ownerDoctor);
        _;
    }
    
    function getDocSummary() public view restricted returns (address, string memory, string memory, string memory, uint) {
        return (ownerDoctor, name, specialisation, hospName, docID);
    }
    
    // function createPatient(address _patient, string memory _name, uint _age, string memory _gender, string memory _bloodGroup) public restricted {
    //     address newPatient = new Patient(_patient, true, ownerDoctor, _name, _age, _gender, _bloodGroup);

    //     Ufactory.addPatients(_patient, newPatient, _name);
    // }
    
    function createRecord(address _patient, uint _id, string memory _name, string memory _desc) public restricted {
        address dep_patient = Ufactory.patientsAddress(_patient);
        Patient patient = Patient(dep_patient);
        patient.createRecord(_id, _name, _desc);
    }
    
    function requestPermission(address _patient, uint _id, bool _isView) public {
        address dep_patient = Ufactory.patientsAddress(_patient);
        Patient patient = Patient(dep_patient);
        patient.addRequest(_id, _isView, name);
    }
    
    function viewRecord(address _patient, uint _id) public view returns(uint, address, string memory, string memory) {
        address dep_patient = Ufactory.patientsAddress(_patient);
        Patient patient = Patient(dep_patient);
        return (patient.viewRecord(_id));
    }
}
