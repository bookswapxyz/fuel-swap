/* Autogenerated file. Do not edit manually. */

/* tslint:disable */
/* eslint-disable */

/*
  Fuels version: 0.89.1
  Forc version: 0.60.0
  Fuel-Core version: 0.27.0
*/

import { Interface, Contract, ContractFactory } from "fuels";
import type { Provider, Account, AbstractAddress, BytesLike, DeployContractOptions, StorageSlot } from "fuels";
import type { AMMContractAbi, AMMContractAbiInterface } from "../AMMContractAbi";

const _abi = {
  "encoding": "1",
  "types": [
    {
      "typeId": 0,
      "type": "()",
      "components": [],
      "typeParameters": null
    },
    {
      "typeId": 1,
      "type": "(_, _)",
      "components": [
        {
          "name": "__tuple_element",
          "type": 6,
          "typeArguments": null
        },
        {
          "name": "__tuple_element",
          "type": 6,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum InitError",
      "components": [
        {
          "name": "BytecodeRootAlreadySet",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "BytecodeRootDoesNotMatch",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "BytecodeRootNotSet",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "PairDoesNotDefinePool",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 5,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        5
      ]
    },
    {
      "typeId": 5,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "struct AssetId",
      "components": [
        {
          "name": "bits",
          "type": 2,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "struct ContractId",
      "components": [
        {
          "name": "bits",
          "type": 2,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "struct RegisterPoolEvent",
      "components": [
        {
          "name": "asset_pair",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "pool",
          "type": 7,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 9,
      "type": "struct SetExchangeBytecodeRootEvent",
      "components": [
        {
          "name": "root",
          "type": 2,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "asset_pair",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "pool",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "add_pool",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "exchange_bytecode_root",
          "type": 7,
          "typeArguments": null
        }
      ],
      "name": "initialize",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read",
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset_pair",
          "type": 1,
          "typeArguments": null
        }
      ],
      "name": "pool",
      "output": {
        "name": "",
        "type": 4,
        "typeArguments": [
          {
            "name": "",
            "type": 7,
            "typeArguments": null
          }
        ]
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    }
  ],
  "loggedTypes": [
    {
      "logId": "13019369090464841419",
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": "15462583148427426590",
      "loggedType": {
        "name": "",
        "type": 8,
        "typeArguments": []
      }
    },
    {
      "logId": "15355147761263664737",
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": []
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "f383b0ce51358be57daa3b725fe44acdb2d880604e367199080b4379c41bb6ed",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  },
  {
    "key": "f383b0ce51358be57daa3b725fe44acdb2d880604e367199080b4379c41bb6ee",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export const AMMContractAbi__factory = {
  abi: _abi,

  storageSlots: _storageSlots,

  createInterface(): AMMContractAbiInterface {
    return new Interface(_abi) as unknown as AMMContractAbiInterface
  },

  connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): AMMContractAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as AMMContractAbi
  },

  async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<AMMContractAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    const contract = await factory.deployContract({
      storageSlots: _storageSlots,
      ...options,
    });

    return contract as unknown as AMMContractAbi;
  }
}