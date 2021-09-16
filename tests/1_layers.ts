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

describe("Layers - AccidentalCollaboration", function () {
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
        let ECRegistry: any, ACTrait: any;

        before(async () => {

            const ECRegistryArtifacts = await ethers.getContractFactory("ECRegistryV2");
            ECRegistry = await ECRegistryArtifacts.deploy();
            await ECRegistry.deployed();
            console.log("          - ECRegistry:      ", ECRegistry.address);

            let deployTx = await ECRegistry.provider.getTransactionReceipt(ECRegistry.deployTransaction.hash);
            deploymentGasCost = deployTx.cumulativeGasUsed;
            console.log("          - Gas:             ", deployTx.cumulativeGasUsed.toString());
            txnCount++;

            const AccidentalCollaborationArtifacts = await ethers.getContractFactory("AccidentalCollaboration");
            ACTrait = await AccidentalCollaborationArtifacts.deploy(
                ECRegistry.address,
                traitID
            );

            await ECRegistry.addTrait(["AccidentalCollaboration"], [ACTrait.address], [0], [0], [0]);
        });

        describe("Validate Trait access", function () {

            it("traitCount is 1", async function () {
                expect(await ECRegistry.traitCount()).to.be.equal(1);
            });

            it("returns true if provided address is implementer", async function () {
                expect(await ECRegistry.addressCanModifyTrait(ACTrait.address, traitID)).to.be.equal(true);
            });
        });

        describe("Add manager trait access", function () {

            it("returns false if manager doesn't have access", async function () {
                expect(await ECRegistry.addressCanModifyTrait(manager.address, traitID)).to.be.equal(false);
            });

            it("can give an address trait access", async function () {
                await ECRegistry.setTraitControllerAccess(manager.address, 0, true);
                expect(await ECRegistry.addressCanModifyTrait(manager.address, traitID)).to.be.equal(true);
            });
        });

        describe("Gas Estimations:", function () {
                
            describe("setData()", function () {

                before(async () => {
                    let tx = await ACTrait.setData([10], [[3]]);
                    let txReceit = await tx.wait();
                    console.log("            - Gas usage: - 1 value in 32 byte storage slot:     ", txReceit.cumulativeGasUsed.toNumber());

                    tx = await ACTrait.setData([11], [[1,2,3,4,5]]);
                    txReceit = await tx.wait();
                    console.log("            - Gas usage: - 5 values in 32 byte storage slot:    ", txReceit.cumulativeGasUsed.toNumber());

                    tx = await ACTrait.setData([12], [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]]);
                    txReceit = await tx.wait();
                    console.log("            - Gas usage: - 32 values in 32 byte storage slot:   ", txReceit.cumulativeGasUsed.toNumber());

                    tx = await ACTrait.setData([13], [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]]);
                    txReceit = await tx.wait();
                    console.log("            - Gas usage: - 33 values in 2x32 byte storage slot: ", txReceit.cumulativeGasUsed.toNumber());
                });

                it("run gas estimation.", async function () {
                    expect(true).to.be.equal(true);
                });


            });

            describe("setDataNoEvent()", function () {

                before(async () => {

                    let tx = await ACTrait.setDataNoEvent([20], [[3]]);
                    let txReceit = await tx.wait();
                    console.log("            - Gas usage: - 1 value -> 32 byte storage slot:     ", txReceit.cumulativeGasUsed.toNumber());

                    tx = await ACTrait.setDataNoEvent([21], [[1,2,3,4,5]]);
                    txReceit = await tx.wait();
                    console.log("            - Gas usage: - 5 values -> 32 byte storage slot:    ", txReceit.cumulativeGasUsed.toNumber());

                    tx = await ACTrait.setDataNoEvent([22], [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]]);
                    txReceit = await tx.wait();
                    console.log("            - Gas usage: - 31 values -> 32 byte storage slot:   ", txReceit.cumulativeGasUsed.toNumber());

                    tx = await ACTrait.setDataNoEvent([23], [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32]]);
                    txReceit = await tx.wait();
                    console.log("            - Gas usage: - 32 values -> 32 byte storage slot:   ", txReceit.cumulativeGasUsed.toNumber());

                    tx = await ACTrait.setDataNoEvent([24], [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33]]);
                    txReceit = await tx.wait();
                    console.log("            - Gas usage: - 33 values -> 2x32 byte storage slots:", txReceit.cumulativeGasUsed.toNumber());

                    console.log("          - token in sequence one after the other");
                    tx = await ACTrait.setDataNoEvent([65], [[1,2,3,4,5]]);
                    txReceit = await tx.wait();
                    console.log("            - Gas usage: - 5 values    ", txReceit.cumulativeGasUsed.toNumber());
                    tx = await ACTrait.setDataNoEvent([66], [[1,2,3,4,5]]);
                    txReceit = await tx.wait();
                    console.log("            - Gas usage: - 5 values    ", txReceit.cumulativeGasUsed.toNumber());
                    tx = await ACTrait.setDataNoEvent([67], [[1,2,3,4,5]]);
                    txReceit = await tx.wait();
                    console.log("            - Gas usage: - 5 values    ", txReceit.cumulativeGasUsed.toNumber());
                });

                it("run gas estimation.", async function () {
                    expect(true).to.be.equal(true);
                });

            });

            describe("setValue()", function () {

                before(async () => {
                    let tx = await ACTrait.setValue(100, [1,1,1,1,1]);
                    let txReceit = await tx.wait();
                    console.log("            - Gas usage: - set 5 values:     ", txReceit.cumulativeGasUsed.toString());
                    // console.log(await ACTrait.getValue(100));

                    tx = await ACTrait.setValue(100, [2,2,2,2,2]);
                    txReceit = await tx.wait();
                    console.log("            - Gas usage: - replace 5 values: ", txReceit.cumulativeGasUsed.toString());
                    // console.log(await ACTrait.getValue(100));
                });

                it("run gas estimation.", async function () {
                    expect(true).to.be.equal(true);
                });
            });
        });



    });

});