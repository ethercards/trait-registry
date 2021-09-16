/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PunkBattleTicketValue,
  PunkBattleTicketValueInterface,
} from "../PunkBattleTicketValue";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
      {
        internalType: "uint16",
        name: "_traitId",
        type: "uint16",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "_tokenId",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint8",
        name: "_newData",
        type: "uint8",
      },
    ],
    name: "updateTraitEvent",
    type: "event",
  },
  {
    inputs: [],
    name: "ECRegistry",
    outputs: [
      {
        internalType: "contract IECRegistry",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_tokenId",
        type: "uint16",
      },
    ],
    name: "getValue",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "implementerType",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16[]",
        name: "_tokenIds",
        type: "uint16[]",
      },
      {
        internalType: "uint8[]",
        name: "_value",
        type: "uint8[]",
      },
    ],
    name: "setData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16[]",
        name: "_tokenIds",
        type: "uint16[]",
      },
      {
        internalType: "uint8[]",
        name: "_value",
        type: "uint8[]",
      },
    ],
    name: "setDataNoEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "_tokenId",
        type: "uint16",
      },
      {
        internalType: "uint8",
        name: "_value",
        type: "uint8",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "traitId",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60c0604052600160ff1660809060ff1660f81b8152503480156200002257600080fd5b5060405162000dd338038062000dd38339818101604052810190620000489190620000d5565b81818061ffff1660a08161ffff1660f01b81525050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050506200018c565b600081519050620000b88162000158565b92915050565b600081519050620000cf8162000172565b92915050565b60008060408385031215620000e957600080fd5b6000620000f985828601620000a7565b92505060206200010c85828601620000be565b9150509250929050565b6000620001238262000138565b9050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b620001638162000116565b81146200016f57600080fd5b50565b6200017d816200012a565b81146200018957600080fd5b50565b60805160f81c60a05160f01c610c0e620001c56000398061019e52806103965280610509528061056a5250806106bb5250610c0e6000f3fe608060405234801561001057600080fd5b506004361061007c5760003560e01c80635bf63c881161005b5780635bf63c88146100e9578063966525cb146101075780639879b6cf14610123578063dc535c52146101415761007c565b8062e7adde14610081578063133f67f51461009d578063384f4a13146100b9575b600080fd5b61009b60048036038101906100969190610846565b61015f565b005b6100b760048036038101906100b29190610904565b610357565b005b6100d360048036038101906100ce91906108db565b6104d5565b6040516100e09190610a3b565b60405180910390f35b6100f1610507565b6040516100fe9190610a20565b60405180910390f35b610121600480360381019061011c9190610846565b61052b565b005b61012b6106b9565b6040516101389190610a3b565b60405180910390f35b6101496106dd565b60405161015691906109e5565b60405180910390f35b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663201b1cc8337f00000000000000000000000000000000000000000000000000000000000000006040518363ffffffff1660e01b81526004016101da9291906109bc565b60206040518083038186803b1580156101f257600080fd5b505afa158015610206573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022a91906108b2565b610269576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026090610a00565b60405180910390fd5b60005b82518161ffff16101561035257818161ffff168151811061028957fe5b602002602001015160016000858461ffff16815181106102a557fe5b602002602001015161ffff1661ffff16815260200190815260200160002060006101000a81548160ff021916908360ff160217905550828161ffff16815181106102eb57fe5b602002602001015161ffff167f59e36a51ef2e8e13e64329fb6b5fbf7374047b9ea243ba010d54c737a726f8bd838361ffff168151811061032857fe5b602002602001015160405161033d9190610a3b565b60405180910390a2808060010191505061026c565b505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663201b1cc8337f00000000000000000000000000000000000000000000000000000000000000006040518363ffffffff1660e01b81526004016103d29291906109bc565b60206040518083038186803b1580156103ea57600080fd5b505afa1580156103fe573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042291906108b2565b610461576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161045890610a00565b60405180910390fd5b80600160008461ffff1661ffff16815260200190815260200160002060006101000a81548160ff021916908360ff1602179055508161ffff167f59e36a51ef2e8e13e64329fb6b5fbf7374047b9ea243ba010d54c737a726f8bd826040516104c99190610a3b565b60405180910390a25050565b6000600160008361ffff1661ffff16815260200190815260200160002060009054906101000a900460ff169050919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663201b1cc8337f00000000000000000000000000000000000000000000000000000000000000006040518363ffffffff1660e01b81526004016105a69291906109bc565b60206040518083038186803b1580156105be57600080fd5b505afa1580156105d2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105f691906108b2565b610635576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161062c90610a00565b60405180910390fd5b60005b82518161ffff1610156106b457818161ffff168151811061065557fe5b602002602001015160016000858461ffff168151811061067157fe5b602002602001015161ffff1661ffff16815260200190815260200160002060006101000a81548160ff021916908360ff1602179055508080600101915050610638565b505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600082601f83011261071257600080fd5b813561072561072082610a87565b610a56565b9150818183526020840193506020810190508385602084028201111561074a57600080fd5b60005b8381101561077a5781610760888261081c565b84526020840193506020830192505060018101905061074d565b5050505092915050565b600082601f83011261079557600080fd5b81356107a86107a382610ab3565b610a56565b915081818352602084019350602081019050838560208402820111156107cd57600080fd5b60005b838110156107fd57816107e38882610831565b8452602084019350602083019250506001810190506107d0565b5050505092915050565b60008151905061081681610b93565b92915050565b60008135905061082b81610baa565b92915050565b60008135905061084081610bc1565b92915050565b6000806040838503121561085957600080fd5b600083013567ffffffffffffffff81111561087357600080fd5b61087f85828601610701565b925050602083013567ffffffffffffffff81111561089c57600080fd5b6108a885828601610784565b9150509250929050565b6000602082840312156108c457600080fd5b60006108d284828501610807565b91505092915050565b6000602082840312156108ed57600080fd5b60006108fb8482850161081c565b91505092915050565b6000806040838503121561091757600080fd5b60006109258582860161081c565b925050602061093685828601610831565b9150509250929050565b61094981610b37565b82525050565b61095881610b49565b82525050565b600061096b600e83610adf565b91507f4e6f7420417574686f72697365640000000000000000000000000000000000006000830152602082019050919050565b6109a781610afc565b82525050565b6109b681610b2a565b82525050565b60006040820190506109d16000830185610940565b6109de602083018461099e565b9392505050565b60006020820190506109fa600083018461094f565b92915050565b60006020820190508181036000830152610a198161095e565b9050919050565b6000602082019050610a35600083018461099e565b92915050565b6000602082019050610a5060008301846109ad565b92915050565b6000604051905081810181811067ffffffffffffffff82111715610a7d57610a7c610b91565b5b8060405250919050565b600067ffffffffffffffff821115610aa257610aa1610b91565b5b602082029050602081019050919050565b600067ffffffffffffffff821115610ace57610acd610b91565b5b602082029050602081019050919050565b600082825260208201905092915050565b60008115159050919050565b600061ffff82169050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600060ff82169050919050565b6000610b4282610b6d565b9050919050565b6000610b5482610b5b565b9050919050565b6000610b6682610b0a565b9050919050565b6000610b7882610b7f565b9050919050565b6000610b8a82610b0a565b9050919050565bfe5b610b9c81610af0565b8114610ba757600080fd5b50565b610bb381610afc565b8114610bbe57600080fd5b50565b610bca81610b2a565b8114610bd557600080fd5b5056fea26469706673582212208ccb807342cd38a453dbc70861a8c8dcadf2371cdfd45e2cdff09e4f71a2e7aa64736f6c63430007050033";

export class PunkBattleTicketValue__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _registry: string,
    _traitId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PunkBattleTicketValue> {
    return super.deploy(
      _registry,
      _traitId,
      overrides || {}
    ) as Promise<PunkBattleTicketValue>;
  }
  getDeployTransaction(
    _registry: string,
    _traitId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_registry, _traitId, overrides || {});
  }
  attach(address: string): PunkBattleTicketValue {
    return super.attach(address) as PunkBattleTicketValue;
  }
  connect(signer: Signer): PunkBattleTicketValue__factory {
    return super.connect(signer) as PunkBattleTicketValue__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PunkBattleTicketValueInterface {
    return new utils.Interface(_abi) as PunkBattleTicketValueInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PunkBattleTicketValue {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as PunkBattleTicketValue;
  }
}
