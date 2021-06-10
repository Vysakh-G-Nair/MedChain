import web3 from './web3';
import UserFactory from './build/UserFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(UserFactory.interface), '0x38239931c7d5e2e24fb5fe12be39a8023c07bb9d');

export default instance;