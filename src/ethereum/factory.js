import web3 from './web3';
import UserFactory from './build/UserFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(UserFactory.interface), '0xb8c44B886602D06673842ee6CE5c89e6fC821C90');

export default instance;