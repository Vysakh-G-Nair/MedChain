pragma solidity ^0.4.26;

import './UserFactory.sol';
import './Patient.sol';

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
    
    function getExtSummary() public view returns(string memory, string memory) {
        return (name, designation);
    }
    
    function requestPermission(address _patient, uint _id) public {
        address dep_patient = Ufactory.patientsAddress(_patient);
        Patient patient = Patient(dep_patient);
        patient.addRequest(_id, true, name);
    }
    
    function viewRecord(address _patient, uint _id) public view returns(uint, address, string memory, string memory) {
        address dep_patient = Ufactory.patientsAddress(_patient);
        Patient patient = Patient(dep_patient);
        return (patient.viewRecord(_id));
    }
}