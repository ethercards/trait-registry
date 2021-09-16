/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IAccidentalCollaboration,
  IAccidentalCollaborationInterface,
} from "../IAccidentalCollaboration";

const _abi = [
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
        internalType: "uint8[]",
        name: "",
        type: "uint8[]",
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
      {
        internalType: "uint8[]",
        name: "_value",
        type: "uint8[]",
      },
    ],
    name: "setValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IAccidentalCollaboration__factory {
  static readonly abi = _abi;
  static createInterface(): IAccidentalCollaborationInterface {
    return new utils.Interface(_abi) as IAccidentalCollaborationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IAccidentalCollaboration {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IAccidentalCollaboration;
  }
}