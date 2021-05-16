import web3 from './web3';
import UserFactory from './build/UserFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(UserFactory.interface), '0x8964B98945310c46a2A592Bc0Df87da963380D5F');

export default instance;