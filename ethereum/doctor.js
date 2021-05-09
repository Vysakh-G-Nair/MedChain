import web3 from './web3';
import Doctor from './build/Doctor.json';

const DoctorCreator =  (address) => {
    return new web3.eth.Contract(
        JSON.parse(Doctor.interface),
        address
    );
};

export default DoctorCreator;