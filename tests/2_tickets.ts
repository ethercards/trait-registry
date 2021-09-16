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

describe("Trait - Tickets", function () {
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
                    let tx = await TicketsTrait.setData([10], [3]);
                    let txReceit = await tx.wait();
                    console.log("            - Gas usage: - 1 value in 32 byte storage slot:     ", txReceit.cumulativeGasUsed.toNumber());

                    tx = await TicketsTrait.setData([20,21,22,23,24], [1,2,3,4,5]);
                    txReceit = await tx.wait();
                    console.log("            - Gas usage: - 5 values in 32 byte storage slot:    ", txReceit.cumulativeGasUsed.toNumber());
                });

                it("run gas estimation.", async function () {
                    expect(true).to.be.equal(true);
                });
            });

            describe("setDataNoEvent()", function () {

                before(async () => {

                    let tx = await TicketsTrait.setDataNoEvent([10], [3]);
                    let txReceit = await tx.wait();
                    console.log("            - Gas usage: - 1 value in 32 byte storage slot:     ", txReceit.cumulativeGasUsed.toNumber());

                    tx = await TicketsTrait.setDataNoEvent([20,21,22,23,24], [1,2,3,4,5]);
                    txReceit = await tx.wait();
                    console.log("            - Gas usage: - 5 values in 32 byte storage slot:    ", txReceit.cumulativeGasUsed.toNumber());
                });

                it("run gas estimation.", async function () {
                    expect(true).to.be.equal(true);
                });

            });

            describe("setValue()", function () {

                before(async () => {
                    let tx = await TicketsTrait.setValue(100, 5);
                    let txReceit = await tx.wait();
                    console.log("            - Gas usage: - set 1 value:     ", txReceit.cumulativeGasUsed.toString());
                    console.log("            - value:                        ", await TicketsTrait.getValue(100));

                    tx = await TicketsTrait.setValue(100, 4);
                    txReceit = await tx.wait();
                    console.log("            - Gas usage: - replace 1 value: ", txReceit.cumulativeGasUsed.toString());
                    console.log("            - value:                        ", await TicketsTrait.getValue(100));
                });

                it("run gas estimation.", async function () {
                    expect(true).to.be.equal(true);
                });
            });
        });



    });

});