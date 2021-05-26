import web3 from './web3';
import UserFactory from './build/UserFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(UserFactory.interface), '0x52a8b76d17350EC1962951ecE6A14a98a3b877D0');

export default instance;