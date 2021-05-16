import web3 from './web3';
import External from './build/External.json';

const ExternalCreator =  (address) => {
    return new web3.eth.Contract(
        JSON.parse(External.interface),
        address
    );
};

export default ExternalCreator;