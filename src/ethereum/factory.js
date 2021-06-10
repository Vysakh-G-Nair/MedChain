import web3 from './web3';
import UserFactory from './build/UserFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(UserFactory.interface), '0xbBA374d2d5181463349BfC84af576e037598bB7C');

export default instance;