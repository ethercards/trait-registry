/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  EtherCardsForge,
  EtherCardsForgeInterface,
} from "../EtherCardsForge";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_NFTContractAddress",
        type: "address",
      },
      {
        internalType: "address",
        name: "_registry",
        type: "address",
      },
      {
        internalType: "address",
        name: "_VaultAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_addr",
        type: "address",
      },
    ],
    name: "ECRegistryUpdateEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint16",
        name: "src",
        type: "uint16",
      },
      {
        indexed: true,
        internalType: "uint16",
        name: "dst",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "callData",
        type: "bytes",
      },
    ],
    name: "LayerTransferEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "LoggedEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    inputs: [],
    name: "NFTContract",
    outputs: [
      {
        internalType: "contract IERC721",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "Vault",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_locked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "mode",
        type: "bool",
      },
    ],
    name: "lock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "logData",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "receivedTokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tracker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "retrieve721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tracker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "retrieveERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "srcTokenId",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "dstTokenId",
        type: "uint16",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "dataReadPointer",
        type: "uint256",
      },
    ],
    name: "transferLayers",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newAddress",
        type: "address",
      },
    ],
    name: "updateNFTContractAddress",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000600360146101000a81548161ffff021916908361ffff1602179055506009600360166101000a81548161ffff021916908361ffff1602179055506000600360186101000a81548160ff02191690831515021790555034801561006757600080fd5b506040516122923803806122928339818101604052606081101561008a57600080fd5b8101908080519060200190929190805190602001909291908051906020019092919050505060006100bf61022860201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35082600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505050610230565b600033905090565b6120538061023f6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80635e7bfa8b1161008c578063a5b3abfb11610066578063a5b3abfb14610428578063bde6be5914610476578063dc535c5214610557578063f2fde38b1461058b576100ea565b80635e7bfa8b14610371578063715018a6146103ea5780638da5cb5b146103f4576100ea565b806317fd1e2f116100c857806317fd1e2f1461029b578063223fcbc9146102e95780632d2c44f21461030957806331c2273b1461033d576100ea565b8063039114b5146100ef5780630dd0a04214610133578063150b7a0214610163575b600080fd5b6101316004803603602081101561010557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506105cf565b005b6101616004803603602081101561014957600080fd5b8101908080351515906020019092919050505061070f565b005b6102666004803603608081101561017957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001906401000000008111156101e057600080fd5b8201836020820111156101f257600080fd5b8035906020019184600183028401116401000000008311171561021457600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f8201169050808301925050505050505091929192905050506107db565b60405180827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200191505060405180910390f35b6102e7600480360360408110156102b157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050611140565b005b6102f16112a0565b60405180821515815260200191505060405180910390f35b6103116112b3565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103456112d9565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6103e86004803603602081101561038757600080fd5b81019080803590602001906401000000008111156103a457600080fd5b8201836020820111156103b657600080fd5b803590602001918460018302840111640100000000831117156103d857600080fd5b90919293919293905050506112ff565b005b6103f26113e8565b005b6103fc611555565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6104746004803603604081101561043e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061157e565b005b6105556004803603608081101561048c57600080fd5b81019080803561ffff169060200190929190803561ffff169060200190929190803590602001906401000000008111156104c557600080fd5b8201836020820111156104d757600080fd5b803590602001918460018302840111640100000000831117156104f957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290803590602001909291905050506116d8565b005b61055f611d68565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6105cd600480360360208110156105a157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611d8e565b005b6105d7611f80565b73ffffffffffffffffffffffffffffffffffffffff166105f5611555565b73ffffffffffffffffffffffffffffffffffffffff161461067e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055507f2d4cc53f83a363ae5dfd05da8cd250916aef524c0e99925f853827cdff76027d81604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a150565b610717611f80565b73ffffffffffffffffffffffffffffffffffffffff16610735611555565b73ffffffffffffffffffffffffffffffffffffffff16146107be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b80600360186101000a81548160ff02191690831515021790555050565b6000600360189054906101000a900460ff1615610860576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f4d757374206e6f74206265206c6f636b6564000000000000000000000000000081525060200191505060405180910390fd5b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610923576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f4d757374206265204e4654436f6e74726163742061646472657373000000000081525060200191505060405180910390fd5b6000806000806000602087019450845160001a9350600185019450845160001a925060018501945060018460ff16146109c4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f42696e61727920646174612076657273696f6e206d757374206265203100000081525060200191505060405180910390fd5b60018360ff1614156110ca57600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663201b1cc830600360149054906101000a900461ffff166040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018261ffff1681526020019250505060206040518083038186803b158015610a7557600080fd5b505afa158015610a89573d6000803e3d6000fd5b505050506040513d6020811015610a9f57600080fd5b8101908080519060200190929190505050610b22576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f466f726765206d7573742068617665207265676973747279206163636573730081525060200191505060405180910390fd5b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663201b1cc830600360169054906101000a900461ffff166040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff1681526020018261ffff1681526020019250505060206040518083038186803b158015610bc757600080fd5b505afa158015610bdb573d6000803e3d6000fd5b505050506040513d6020811015610bf157600080fd5b8101908080519060200190929190505050610c74576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f466f726765206d7573742068617665207265676973747279206163636573730081525060200191505060405180910390fd5b600185015160001a610100865160001a02019050600285019450600185015160001a610100865160001a020191506002850194508873ffffffffffffffffffffffffffffffffffffffff16600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16636352211e836040518263ffffffff1660e01b8152600401808261ffff16815260200191505060206040518083038186803b158015610d3657600080fd5b505afa158015610d4a573d6000803e3d6000fd5b505050506040513d6020811015610d6057600080fd5b810190808051906020019092919050505073ffffffffffffffffffffffffffffffffffffffff1614610ddd576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526043815260200180611faf6043913960600191505060405180910390fd5b8161ffff168814610e39576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602c815260200180611ff2602c913960400191505060405180910390fd5b610e45828289886116d8565b6000600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c9e317d68460096040518363ffffffff1660e01b8152600401808361ffff1681526020018281526020019250505060206040518083038186803b158015610eec57600080fd5b505afa158015610f00573d6000803e3d6000fd5b505050506040513d6020811015610f1657600080fd5b810190808051906020019092919050505015610fe857600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663ecff11b684600360169054906101000a900461ffff1660006040518463ffffffff1660e01b8152600401808461ffff1681526020018361ffff16815260200182151581526020019350505050600060405180830381600087803b158015610fcc57600080fd5b505af1158015610fe0573d6000803e3d6000fd5b505050508990505b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3083866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018261ffff1681526020019350505050600060405180830381600087803b15801561109d57600080fd5b505af11580156110b1573d6000803e3d6000fd5b5050505063150b7a0260e01b9650505050505050611138565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f43616c6c2074797065206e6f7420696d706c656d656e7465640000000000000081525060200191505060405180910390fd5b949350505050565b611148611f80565b73ffffffffffffffffffffffffffffffffffffffff16611166611555565b73ffffffffffffffffffffffffffffffffffffffff16146111ef576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050602060405180830381600087803b15801561126057600080fd5b505af1158015611274573d6000803e3d6000fd5b505050506040513d602081101561128a57600080fd5b8101908080519060200190929190505050505050565b600360189054906101000a900460ff1681565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600360189054906101000a900460ff1615611382576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f4d757374206e6f74206265206c6f636b6564000000000000000000000000000081525060200191505060405180910390fd5b818160405180838380828437808301925050509250505060405180910390203373ffffffffffffffffffffffffffffffffffffffff167fc6b65080b5b57aaf881560451327ffe5b50ca8a3d1177aec14288d48ebfcf06160405160405180910390a35050565b6113f0611f80565b73ffffffffffffffffffffffffffffffffffffffff1661140e611555565b73ffffffffffffffffffffffffffffffffffffffff1614611497576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b611586611f80565b73ffffffffffffffffffffffffffffffffffffffff166115a4611555565b73ffffffffffffffffffffffffffffffffffffffff161461162d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166323b872dd3033846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b1580156116bc57600080fd5b505af11580156116d0573d6000803e3d6000fd5b505050505050565b6000600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166301db4469600360149054906101000a900461ffff166040518263ffffffff1660e01b8152600401808261ffff16815260200191505060206040518083038186803b15801561176157600080fd5b505afa158015611775573d6000803e3d6000fd5b505050506040513d602081101561178b57600080fd5b8101908080519060200190929190505050905060608173ffffffffffffffffffffffffffffffffffffffff1663384f4a13876040518263ffffffff1660e01b8152600401808261ffff16815260200191505060006040518083038186803b1580156117f557600080fd5b505afa158015611809573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561183357600080fd5b810190808051604051939291908464010000000082111561185357600080fd5b8382019150602082018581111561186957600080fd5b825186602082028301116401000000008211171561188657600080fd5b8083526020830192505050908051906020019060200280838360005b838110156118bd5780820151818401526020810190506118a2565b50505050905001604052505050905060608273ffffffffffffffffffffffffffffffffffffffff1663384f4a13876040518263ffffffff1660e01b8152600401808261ffff16815260200191505060006040518083038186803b15801561192357600080fd5b505afa158015611937573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561196157600080fd5b810190808051604051939291908464010000000082111561198157600080fd5b8382019150602082018581111561199757600080fd5b82518660208202830111640100000000821117156119b457600080fd5b8083526020830192505050908051906020019060200280838360005b838110156119eb5780820151818401526020810190506119d0565b5050505090500160405250505090506000825190506060806040519150828252602083025901604052604051905082815260208302590160405260005b60058160ff161015611b45576000885160001a90506001890198508015611ac257858260ff1681518110611a5857fe5b6020026020010151848360ff1681518110611a6f57fe5b602002602001019060ff16908160ff1681525050868260ff1681518110611a9257fe5b6020026020010151838360ff1681518110611aa957fe5b602002602001019060ff16908160ff1681525050611b37565b868260ff1681518110611ad157fe5b6020026020010151848360ff1681518110611ae857fe5b602002602001019060ff16908160ff1681525050858260ff1681518110611b0b57fe5b6020026020010151838360ff1681518110611b2257fe5b602002602001019060ff16908160ff16815250505b508080600101915050611a28565b508573ffffffffffffffffffffffffffffffffffffffff1663417207988b846040518363ffffffff1660e01b8152600401808361ffff16815260200180602001828103825283818151815260200191508051906020019060200280838360005b83811015611bc0578082015181840152602081019050611ba5565b505050509050019350505050600060405180830381600087803b158015611be657600080fd5b505af1158015611bfa573d6000803e3d6000fd5b505050508573ffffffffffffffffffffffffffffffffffffffff1663417207988a836040518363ffffffff1660e01b8152600401808361ffff16815260200180602001828103825283818151815260200191508051906020019060200280838360005b83811015611c78578082015181840152602081019050611c5d565b505050509050019350505050600060405180830381600087803b158015611c9e57600080fd5b505af1158015611cb2573d6000803e3d6000fd5b505050508861ffff168a61ffff167f496fa84e52caa45fe8d263dc1e04e1f0da6954637ce54857fdc85c6add2c04228a6040518080602001828103825283818151815260200191508051906020019080838360005b83811015611d22578082015181840152602081019050611d07565b50505050905090810190601f168015611d4f5780820380516001836020036101000a031916815260200191505b509250505060405180910390a350505050505050505050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b611d96611f80565b73ffffffffffffffffffffffffffffffffffffffff16611db4611555565b73ffffffffffffffffffffffffffffffffffffffff1614611e3d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611ec3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526026815260200180611f896026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60003390509056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737344657374696e6174696f6e20746f6b656e206d757374206265206f776e6564206279207468652073616d65206164647265737320617320736f7572636520746f6b656e546f6b656e2073656e7420746f20636f6e7472616374206d757374206d6174636820737263546f6b656e4964a26469706673582212206d5a8d9ede3944afac82ed1db98f1ddc959dab48962d2e7749676f0e6cb5e97264736f6c63430007050033";

export class EtherCardsForge__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _NFTContractAddress: string,
    _registry: string,
    _VaultAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<EtherCardsForge> {
    return super.deploy(
      _NFTContractAddress,
      _registry,
      _VaultAddress,
      overrides || {}
    ) as Promise<EtherCardsForge>;
  }
  getDeployTransaction(
    _NFTContractAddress: string,
    _registry: string,
    _VaultAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _NFTContractAddress,
      _registry,
      _VaultAddress,
      overrides || {}
    );
  }
  attach(address: string): EtherCardsForge {
    return super.attach(address) as EtherCardsForge;
  }
  connect(signer: Signer): EtherCardsForge__factory {
    return super.connect(signer) as EtherCardsForge__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): EtherCardsForgeInterface {
    return new utils.Interface(_abi) as EtherCardsForgeInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EtherCardsForge {
    return new Contract(address, _abi, signerOrProvider) as EtherCardsForge;
  }
}
