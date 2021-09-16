const { ZERO_ADDRESS, ROLE, Data } = require('./helpers/common');
import "@nomiclabs/hardhat-ethers";
import { ethers } from "hardhat";
import chai from "chai";
import { solidity } from "ethereum-waffle";
chai.use(solidity);
const { expect } = chai;
import { BitArray } from "@ethercards/ec-util";
// make sure to have ethers.js 5.X required, else this will fail!
const BigNumber = ethers.BigNumber;

describe("Trait Usage", function () {
    let data: any, owner: any, testingAccount1: any, testingAccount2: any, manager: any;

    before(async () => {

        data = new Data();
        await data.init();

        owner = data.deployerSigner;
        testingAccount1 = data.user1Signer;
        testingAccount2 = data.user2Signer;
        manager = data.user3Signer;

    });

    describe("Contract Deployment", function () {
       
        let deploymentGasCost = BigNumber.from(0);
        let txnCount = 0;
        let traitID = 0;
        let ECRegistry: any, TicketsTrait: any;

        before(async () => {

            const ECRegistryArtifacts = await ethers.getContractFactory("ECRegistryV2");
            ECRegistry = await ECRegistryArtifacts.deploy();
            await ECRegistry.deployed();
            console.log("          - ECRegistry:      ", ECRegistry.address);

            let deployTx = await ECRegistry.provider.getTransactionReceipt(ECRegistry.deployTransaction.hash);
            deploymentGasCost = deployTx.cumulativeGasUsed;
            console.log("          - Gas:             ", deployTx.cumulativeGasUsed.toString());
            txnCount++;

            const TicketsArtifacts = await ethers.getContractFactory("PunkBattleTicketValue");
            TicketsTrait = await TicketsArtifacts.deploy(
                ECRegistry.address,
                traitID
            );

            await ECRegistry.addTrait(["Punk Battle Tickets"], [TicketsTrait.address], [0], [0], [0]);
        });

        describe("Validate Trait access", function () {

            it("traitCount is 1", async function () {
                expect(await ECRegistry.traitCount()).to.be.equal(1);
            });

            it("returns true if provided address is implementer", async function () {
                expect(await ECRegistry.addressCanModifyTrait(TicketsTrait.address, traitID)).to.be.equal(true);
            });
        });



    });

});