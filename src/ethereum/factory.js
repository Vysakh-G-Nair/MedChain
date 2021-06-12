import web3 from './web3';
import UserFactory from './build/UserFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(UserFactory.interface), '0x9B246800471700D68aDf14B12d6586fa54705a61');

export default instance;