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
import type { NativeAssetContractAbi, NativeAssetContractAbiInterface } from "../NativeAssetContractAbi";

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
      "type": "b256",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 2,
      "type": "enum AccessError",
      "components": [
        {
          "name": "NotOwner",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 3,
      "type": "enum AmountError",
      "components": [
        {
          "name": "AmountMismatch",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 4,
      "type": "enum BurnError",
      "components": [
        {
          "name": "NotEnoughCoins",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 5,
      "type": "enum Identity",
      "components": [
        {
          "name": "Address",
          "type": 13,
          "typeArguments": null
        },
        {
          "name": "ContractId",
          "type": 16,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 6,
      "type": "enum InitializationError",
      "components": [
        {
          "name": "CannotReinitialized",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 7,
      "type": "enum MintError",
      "components": [
        {
          "name": "MaxMinted",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 8,
      "type": "enum Option",
      "components": [
        {
          "name": "None",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Some",
          "type": 11,
          "typeArguments": null
        }
      ],
      "typeParameters": [
        11
      ]
    },
    {
      "typeId": 9,
      "type": "enum SetError",
      "components": [
        {
          "name": "ValueAlreadySet",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 10,
      "type": "enum State",
      "components": [
        {
          "name": "Uninitialized",
          "type": 0,
          "typeArguments": null
        },
        {
          "name": "Initialized",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "Revoked",
          "type": 0,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 11,
      "type": "generic T",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 12,
      "type": "raw untyped ptr",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 13,
      "type": "struct Address",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 14,
      "type": "struct AssetId",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 15,
      "type": "struct Bytes",
      "components": [
        {
          "name": "buf",
          "type": 18,
          "typeArguments": null
        },
        {
          "name": "len",
          "type": 20,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 16,
      "type": "struct ContractId",
      "components": [
        {
          "name": "bits",
          "type": 1,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 17,
      "type": "struct OwnershipSet",
      "components": [
        {
          "name": "new_owner",
          "type": 5,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 18,
      "type": "struct RawBytes",
      "components": [
        {
          "name": "ptr",
          "type": 12,
          "typeArguments": null
        },
        {
          "name": "cap",
          "type": 20,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 19,
      "type": "struct String",
      "components": [
        {
          "name": "bytes",
          "type": 15,
          "typeArguments": null
        }
      ],
      "typeParameters": null
    },
    {
      "typeId": 20,
      "type": "u64",
      "components": null,
      "typeParameters": null
    },
    {
      "typeId": 21,
      "type": "u8",
      "components": null,
      "typeParameters": null
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "asset",
          "type": 14,
          "typeArguments": null
        }
      ],
      "name": "decimals",
      "output": {
        "name": "",
        "type": 8,
        "typeArguments": [
          {
            "name": "",
            "type": 21,
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
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 14,
          "typeArguments": null
        }
      ],
      "name": "name",
      "output": {
        "name": "",
        "type": 8,
        "typeArguments": [
          {
            "name": "",
            "type": 19,
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
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 14,
          "typeArguments": null
        }
      ],
      "name": "symbol",
      "output": {
        "name": "",
        "type": 8,
        "typeArguments": [
          {
            "name": "",
            "type": 19,
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
    },
    {
      "inputs": [],
      "name": "total_assets",
      "output": {
        "name": "",
        "type": 20,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 14,
          "typeArguments": null
        }
      ],
      "name": "total_supply",
      "output": {
        "name": "",
        "type": 8,
        "typeArguments": [
          {
            "name": "",
            "type": 20,
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
    },
    {
      "inputs": [
        {
          "name": "sub_id",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 20,
          "typeArguments": null
        }
      ],
      "name": "burn",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "payable",
          "arguments": []
        },
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
          "name": "recipient",
          "type": 5,
          "typeArguments": null
        },
        {
          "name": "sub_id",
          "type": 1,
          "typeArguments": null
        },
        {
          "name": "amount",
          "type": 20,
          "typeArguments": null
        }
      ],
      "name": "mint",
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
      "inputs": [],
      "name": "owner",
      "output": {
        "name": "",
        "type": 10,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "read"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 14,
          "typeArguments": null
        },
        {
          "name": "decimals",
          "type": 21,
          "typeArguments": null
        }
      ],
      "name": "set_decimals",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 14,
          "typeArguments": null
        },
        {
          "name": "name",
          "type": 19,
          "typeArguments": null
        }
      ],
      "name": "set_name",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "asset",
          "type": 14,
          "typeArguments": null
        },
        {
          "name": "symbol",
          "type": 19,
          "typeArguments": null
        }
      ],
      "name": "set_symbol",
      "output": {
        "name": "",
        "type": 0,
        "typeArguments": null
      },
      "attributes": [
        {
          "name": "storage",
          "arguments": [
            "write"
          ]
        }
      ]
    },
    {
      "inputs": [
        {
          "name": "owner",
          "type": 5,
          "typeArguments": null
        }
      ],
      "name": "constructor",
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
    }
  ],
  "loggedTypes": [
    {
      "logId": "4152034497430856329",
      "loggedType": {
        "name": "",
        "type": 3,
        "typeArguments": []
      }
    },
    {
      "logId": "4237256875605624201",
      "loggedType": {
        "name": "",
        "type": 4,
        "typeArguments": []
      }
    },
    {
      "logId": "4571204900286667806",
      "loggedType": {
        "name": "",
        "type": 2,
        "typeArguments": []
      }
    },
    {
      "logId": "17188485204969729195",
      "loggedType": {
        "name": "",
        "type": 7,
        "typeArguments": []
      }
    },
    {
      "logId": "13791596350235125220",
      "loggedType": {
        "name": "",
        "type": 9,
        "typeArguments": []
      }
    },
    {
      "logId": "2161305517876418151",
      "loggedType": {
        "name": "",
        "type": 6,
        "typeArguments": []
      }
    },
    {
      "logId": "16280289466020123285",
      "loggedType": {
        "name": "",
        "type": 17,
        "typeArguments": []
      }
    }
  ],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "MAX_SUPPLY",
      "configurableType": {
        "name": "",
        "type": 20,
        "typeArguments": null
      },
      "offset": 38352
    }
  ]
};

const _storageSlots: StorageSlot[] = [
  {
    "key": "f383b0ce51358be57daa3b725fe44acdb2d880604e367199080b4379c41bb6ed",
    "value": "0000000000000000000000000000000000000000000000000000000000000000"
  }
];

export const NativeAssetContractAbi__factory = {
  abi: _abi,

  storageSlots: _storageSlots,

  createInterface(): NativeAssetContractAbiInterface {
    return new Interface(_abi) as unknown as NativeAssetContractAbiInterface
  },

  connect(
    id: string | AbstractAddress,
    accountOrProvider: Account | Provider
  ): NativeAssetContractAbi {
    return new Contract(id, _abi, accountOrProvider) as unknown as NativeAssetContractAbi
  },

  async deployContract(
    bytecode: BytesLike,
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<NativeAssetContractAbi> {
    const factory = new ContractFactory(bytecode, _abi, wallet);

    const contract = await factory.deployContract({
      storageSlots: _storageSlots,
      ...options,
    });

    return contract as unknown as NativeAssetContractAbi;
  }
}
