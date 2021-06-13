const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const provider = ganache.provider();
const web3 = new Web3(provider);

const compiledFactory = require('../src/ethereum/build/UserFactory.json');
const compiledPatient = require('../src/ethereum/build/Patient.json');
const compiledMedPro = require('../src/ethereum/build/MedicalPro.json');
const compiledExtUser = require('../src/ethereum/build/External.json');

let accounts;
let factory;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '5000000' });
});

describe('MedChain', () => {
    it('deploys user factory', () => {
        assert.ok(factory.options.address);
    });

    it('deploys a patient', async () => {
        await factory.methods.registerPatient("Allen", 68, "Male", "A+", false, "0x0000000000000000000000000000000000000000").send({ 
            from: accounts[1],
            gas: '5000000'
        });

        const patientAddr = await factory.methods.loginPatient().call({
            from: accounts[1]
        });
        const patient = await new web3.eth.Contract(JSON.parse(compiledPatient.interface),
        patientAddr);

        assert.ok(patient.options.address);
    });

    it('deploys a medical professional', async () => {
        await factory.methods.registerMedPro("Amritha", "Hospital", "Kochi", "E0489").send({ 
            from: accounts[2],
            gas: '5000000'
        });

        const medProAddr = await factory.methods.loginMedPro().call({
            from: accounts[2]
        });
        const medPro = await new web3.eth.Contract(JSON.parse(compiledMedPro.interface),
        medProAddr);

        assert.ok(medPro.options.address);
    });

    it('deploys an external user', async () => {
        await factory.methods.registerExtUser("LIC", "Insurance Company").send({ 
            from: accounts[3],
            gas: '5000000'
        });
    
        const extUserAddr = await factory.methods.loginExtUser().call({
            from: accounts[3]
        });
        const extUser = await new web3.eth.Contract(JSON.parse(compiledExtUser.interface),
        extUserAddr);
        
        assert.ok(extUser.options.address);
    });
});