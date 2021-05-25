import web3 from './web3';
import UserFactory from './build/UserFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(UserFactory.interface), '0x5b24c2CE12DD2f71d4B22972fFED2D57f1149846');

export default instance;