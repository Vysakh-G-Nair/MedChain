import web3 from './web3';
import MedicalPro from './build/MedicalPro.json';

const MedicalProCreator =  (address) => {
    return new web3.eth.Contract(
        JSON.parse(MedicalPro.interface),
        address
    );
};

export default MedicalProCreator;