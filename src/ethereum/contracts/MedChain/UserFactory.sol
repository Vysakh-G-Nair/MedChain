pragma solidity ^0.4.26;

import './Patient.sol';
import './MedicalPro.sol';
import './External.sol';

contract UserFactory {
    mapping (address => address) public patientsAddress;
    mapping (address => address) doctorsAddress;
    mapping (address => address) extUserAddress;
    
    modifier registered {
        require(doctorsAddress[msg.sender] == 0x0000000000000000000000000000000000000000 && patientsAddress[msg.sender] == 0x0000000000000000000000000000000000000000 && extUserAddress[msg.sender] == 0x0000000000000000000000000000000000000000, "Already registered as doctor or patient");
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
    
    function registerDoctor(string memory _name, string memory _specialisation, string memory _hospName, uint _docID) public registered {
        address newDoctor = new MedicalPro(msg.sender, _name, _specialisation, _hospName, _docID);
        doctorsAddress[msg.sender] = newDoctor;
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
        require(doctorsAddress[msg.sender] != 0x0000000000000000000000000000000000000000, "Not registered as doctor");
        return doctorsAddress[msg.sender];
    }
    
    function loginExtUser() public view returns (address) {
        require(extUserAddress[msg.sender] != 0x0000000000000000000000000000000000000000, "Not registered as external user");
        return extUserAddress[msg.sender];
    }
}