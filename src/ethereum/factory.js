import web3 from './web3';
import UserFactory from './build/UserFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(UserFactory.interface), '0xc6D1EC24f00E33f5c6D79589597DA58a151252cE');

export default instance;