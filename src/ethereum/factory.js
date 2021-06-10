import web3 from './web3';
import UserFactory from './build/UserFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(UserFactory.interface), '0x75Aff32C5443951110B71e5392b9BBDA36515F31');

export default instance;