/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface AccidentalCollaborationInterface extends ethers.utils.Interface {
  functions: {
    "ECRegistry()": FunctionFragment;
    "getValue(uint16)": FunctionFragment;
    "implementerType()": FunctionFragment;
    "setData(uint16[],uint8[][])": FunctionFragment;
    "setDataNoEvent(uint16[],uint8[][])": FunctionFragment;
    "setValue(uint16,uint8[])": FunctionFragment;
    "traitId()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "ECRegistry",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getValue",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "implementerType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setData",
    values: [BigNumberish[], BigNumberish[][]]
  ): string;
  encodeFunctionData(
    functionFragment: "setDataNoEvent",
    values: [BigNumberish[], BigNumberish[][]]
  ): string;
  encodeFunctionData(
    functionFragment: "setValue",
    values: [BigNumberish, BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "traitId", values?: undefined): string;

  decodeFunctionResult(functionFragment: "ECRegistry", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getValue", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementerType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setData", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDataNoEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setValue", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "traitId", data: BytesLike): Result;

  events: {
    "updateTraitEvent(uint16,uint8[])": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "updateTraitEvent"): EventFragment;
}

export type updateTraitEventEvent = TypedEvent<
  [number, number[]] & { _tokenId: number; _newData: number[] }
>;

export class AccidentalCollaboration extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: AccidentalCollaborationInterface;

  functions: {
    ECRegistry(overrides?: CallOverrides): Promise<[string]>;

    getValue(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[number[]]>;

    implementerType(overrides?: CallOverrides): Promise<[number]>;

    setData(
      _tokenIds: BigNumberish[],
      _value: BigNumberish[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDataNoEvent(
      _tokenIds: BigNumberish[],
      _value: BigNumberish[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setValue(
      _tokenId: BigNumberish,
      _value: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    traitId(overrides?: CallOverrides): Promise<[number]>;
  };

  ECRegistry(overrides?: CallOverrides): Promise<string>;

  getValue(
    _tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<number[]>;

  implementerType(overrides?: CallOverrides): Promise<number>;

  setData(
    _tokenIds: BigNumberish[],
    _value: BigNumberish[][],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDataNoEvent(
    _tokenIds: BigNumberish[],
    _value: BigNumberish[][],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setValue(
    _tokenId: BigNumberish,
    _value: BigNumberish[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  traitId(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    ECRegistry(overrides?: CallOverrides): Promise<string>;

    getValue(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<number[]>;

    implementerType(overrides?: CallOverrides): Promise<number>;

    setData(
      _tokenIds: BigNumberish[],
      _value: BigNumberish[][],
      overrides?: CallOverrides
    ): Promise<void>;

    setDataNoEvent(
      _tokenIds: BigNumberish[],
      _value: BigNumberish[][],
      overrides?: CallOverrides
    ): Promise<void>;

    setValue(
      _tokenId: BigNumberish,
      _value: BigNumberish[],
      overrides?: CallOverrides
    ): Promise<void>;

    traitId(overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    "updateTraitEvent(uint16,uint8[])"(
      _tokenId?: BigNumberish | null,
      _newData?: null
    ): TypedEventFilter<
      [number, number[]],
      { _tokenId: number; _newData: number[] }
    >;

    updateTraitEvent(
      _tokenId?: BigNumberish | null,
      _newData?: null
    ): TypedEventFilter<
      [number, number[]],
      { _tokenId: number; _newData: number[] }
    >;
  };

  estimateGas: {
    ECRegistry(overrides?: CallOverrides): Promise<BigNumber>;

    getValue(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    implementerType(overrides?: CallOverrides): Promise<BigNumber>;

    setData(
      _tokenIds: BigNumberish[],
      _value: BigNumberish[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDataNoEvent(
      _tokenIds: BigNumberish[],
      _value: BigNumberish[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setValue(
      _tokenId: BigNumberish,
      _value: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    traitId(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    ECRegistry(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getValue(
      _tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    implementerType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setData(
      _tokenIds: BigNumberish[],
      _value: BigNumberish[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDataNoEvent(
      _tokenIds: BigNumberish[],
      _value: BigNumberish[][],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setValue(
      _tokenId: BigNumberish,
      _value: BigNumberish[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    traitId(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
