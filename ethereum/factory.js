import web3 from './web3';
import UserFactory from './build/UserFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(UserFactory.interface), '0xAE29f9Ae3f46691451046D3ea04dFACd669c5Fa0');

export default instance;