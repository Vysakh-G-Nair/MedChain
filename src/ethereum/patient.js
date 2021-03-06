import web3 from './web3';
import Patient from './build/Patient.json';

const PatientCreator =  (address) => {
    return new web3.eth.Contract(
        JSON.parse(Patient.interface),
        address
    );
};

export default PatientCreator;