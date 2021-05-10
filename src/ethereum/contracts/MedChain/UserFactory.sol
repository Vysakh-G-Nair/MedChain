pragma solidity ^0.4.26;

import './Patient.sol';
import './Doctor.sol';
import './External.sol';

contract UserFactory {
    mapping (address => address) public patientsAddress;
    mapping (address => address) public doctorsAddress;
    mapping (address => address) public addressPatients;
    mapping (address => address) public addressDoctors;
    mapping (address => address) public extUserAddress;
    mapping (address => address) public addressExtUser;
    mapping (address => string) public address2Name;
    
    modifier registered {
        require(doctorsAddress[msg.sender] == 0x0000000000000000000000000000000000000000 && patientsAddress[msg.sender] == 0x0000000000000000000000000000000000000000, "Already registered as doctor or patient");
        _;
    }
    
    function registerPatient(string memory _name, uint _age, string memory _gender, string memory _bloodGroup) public registered {
        address newPatient = new Patient(msg.sender, false, 0x00, _name, _age, _gender, _bloodGroup);
        patientsAddress[msg.sender] = newPatient;
        addressPatients[newPatient] = msg.sender;
        address2Name[msg.sender] = _name;
    }
    
    // function addPatients(address _pat, address _dep, string memory _name) public {
    //     patientsAddress[_pat] = _dep;
    //     addressPatients[_dep] = _pat;
    //     address2Name[_pat] = _name;
    // }
    
    function registerDoctor(string memory _name, string memory _specialisation, string memory _hospName, uint _docID) public registered {
        address newDoctor = new Doctor(msg.sender, _name, _specialisation, _hospName, _docID);
        doctorsAddress[msg.sender] = newDoctor;
        addressDoctors[newDoctor] = msg.sender;
        address2Name[msg.sender] = _name;
    }
    
    function registerExtUser(string memory _name, string memory _designation) public {
        address newExtUser = new External(msg.sender, _name, _designation);
        extUserAddress[msg.sender] = newExtUser;
        addressExtUser[newExtUser] = msg.sender;
        address2Name[msg.sender] = _name;
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