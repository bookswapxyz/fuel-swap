/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.89.1
  Forc version: 0.60.0
  Fuel-Core version: 0.27.0
*/

import type {
  BigNumberish,
  BN,
  BytesLike,
  Contract,
  DecodedValue,
  FunctionFragment,
  Interface,
  InvokeFunction,
} from 'fuels';

import type { Enum } from "./common";

export enum InputErrorInput { DesiredLiquidityZero = 'DesiredLiquidityZero' };
export enum InputErrorOutput { DesiredLiquidityZero = 'DesiredLiquidityZero' };

export type AssetInput = { id: AssetIdInput, amount: BigNumberish };
export type AssetOutput = { id: AssetIdOutput, amount: BN };
export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;
export type AssetPairInput = { a: AssetInput, b: AssetInput };
export type AssetPairOutput = { a: AssetOutput, b: AssetOutput };
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;
export type LiquidityParametersInput = { deposits: AssetPairInput, liquidity: BigNumberish, deadline: BigNumberish };
export type LiquidityParametersOutput = { deposits: AssetPairOutput, liquidity: BN, deadline: BN };

interface AtomicAddLiquidityAbiInterface extends Interface {
  functions: {
    main: FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'main', values: [ContractIdInput, LiquidityParametersInput]): Uint8Array;

  decodeFunctionData(functionFragment: 'main', data: BytesLike): DecodedValue;
}

export class AtomicAddLiquidityAbi extends Contract {
  interface: AtomicAddLiquidityAbiInterface;
  functions: {
    main: InvokeFunction<[exchange_contract_id: ContractIdInput, liquidity_parameters: LiquidityParametersInput], BN>;
  };
}
