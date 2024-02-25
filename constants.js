const ONBOARDING_RPC_URL =
  process.env.ONBOARDING_RPC_URL || "https://iot-onboarding-server.vercel.app";

const onboardingDeviceImages = [
  "https://bafkreidmkpibpkguvrnzuqgmudacxji4fl6g437wrtb74t5uliqihuhede.ipfs.nftstorage.link/",
  "https://bafkreibufkhlr6kaq4mhb4tpczbwtzm7jx2q7nrnwed2ndk6klrv6da54u.ipfs.nftstorage.link/",
  "https://bafybeideoqd4mya6div4c3drz3sfq5kbrp2p6mytcbwh6gpvgvexwf7wl4.ipfs.nftstorage.link/",
  "https://bafybeice6wite46sx5ztubkuafmxhjmacq6iivhlvl23fokf6ql3mqwc44.ipfs.nftstorage.link/",
];
const zkEVMContractAddress = '0x48f0E1F94719841Df1D185AE130f7A0E44C11DAA';
const mumbaiContractAddress = '0x5F666e59B3986985508672f740d38D8F19e82d83';
const mumbaiABI = [
  {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "approved",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "Approval",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "operator",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
          }
      ],
      "name": "ApprovalForAll",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_fromTokenId",
              "type": "uint256"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_toTokenId",
              "type": "uint256"
          }
      ],
      "name": "BatchMetadataUpdate",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "_tokenId",
              "type": "uint256"
          }
      ],
      "name": "MetadataUpdate",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "Transfer",
      "type": "event"
  },
  {
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "_firmwareHash",
              "type": "bytes32"
          },
          {
              "internalType": "bytes32",
              "name": "_deviceDataHash",
              "type": "bytes32"
          },
          {
              "internalType": "bytes32",
              "name": "_deviceGroupIdHash",
              "type": "bytes32"
          },
          {
              "internalType": "string",
              "name": "_uri",
              "type": "string"
          }
      ],
      "name": "addDevice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          }
      ],
      "name": "balanceOf",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "_firmwareHash",
              "type": "bytes32"
          },
          {
              "internalType": "bytes32",
              "name": "_deviceDataHash",
              "type": "bytes32"
          },
          {
              "internalType": "bytes32",
              "name": "_deviceGroupIdHash",
              "type": "bytes32"
          },
          {
              "internalType": "uint256",
              "name": "_deviceId",
              "type": "uint256"
          }
      ],
      "name": "generateOnboardingKeyForDevice",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_deviceId",
              "type": "uint256"
          }
      ],
      "name": "generateOnboardingKeyForSubscriber",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "getApproved",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_deviceId",
              "type": "uint256"
          }
      ],
      "name": "getDevice",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "bytes32",
                      "name": "firmwareHash",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "deviceDataHash",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "deviceGroupIdHash",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "uint256",
                      "name": "deviceId",
                      "type": "uint256"
                  },
                  {
                      "internalType": "address",
                      "name": "subscriber",
                      "type": "address"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "sessionSalt",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "bool",
                      "name": "exists",
                      "type": "bool"
                  }
              ],
              "internalType": "struct IoTOnBoardingProtocol.Device",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getDevicesCount",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "_deviceGroupIdHash",
              "type": "bytes32"
          }
      ],
      "name": "getGroupContract",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes32[]",
              "name": "hashes",
              "type": "bytes32[]"
          }
      ],
      "name": "getMerkleRoot",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "operator",
              "type": "address"
          }
      ],
      "name": "isApprovedForAll",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_deviceId",
              "type": "uint256"
          }
      ],
      "name": "isDeviceMinted",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "name",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "ownerOf",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "from",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "from",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          },
          {
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
          }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "operator",
              "type": "address"
          },
          {
              "internalType": "bool",
              "name": "approved",
              "type": "bool"
          }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "_deviceId",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "_subscriber",
              "type": "address"
          }
      ],
      "name": "setSubscriberAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes4",
              "name": "interfaceId",
              "type": "bytes4"
          }
      ],
      "name": "supportsInterface",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "symbol",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "tokenURI",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "from",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "tokenId",
              "type": "uint256"
          }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "_firmwareHash",
              "type": "bytes32"
          },
          {
              "internalType": "uint256",
              "name": "_deviceId",
              "type": "uint256"
          }
      ],
      "name": "updateFirmware",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }
];
const zkEVMABI = [
  {
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "_firmwareHash",
              "type": "bytes32"
          },
          {
              "internalType": "bytes32",
              "name": "_deviceDataHash",
              "type": "bytes32"
          },
          {
              "internalType": "bytes32",
              "name": "_deviceGroupIdHash",
              "type": "bytes32"
          },
          {
              "internalType": "address",
              "name": "_deviceId",
              "type": "address"
          }
      ],
      "name": "generateOnboardingKeyForDevice",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_deviceId",
              "type": "address"
          }
      ],
      "name": "generateOnboardingKeyForSubscriber",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_deviceId",
              "type": "address"
          }
      ],
      "name": "getDevice",
      "outputs": [
          {
              "components": [
                  {
                      "internalType": "bytes32",
                      "name": "firmwareHash",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "deviceDataHash",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "deviceGroupIdHash",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "address",
                      "name": "deviceId",
                      "type": "address"
                  },
                  {
                      "internalType": "address",
                      "name": "subscriber",
                      "type": "address"
                  },
                  {
                      "internalType": "bytes32",
                      "name": "sessionSalt",
                      "type": "bytes32"
                  },
                  {
                      "internalType": "address",
                      "name": "nftContract",
                      "type": "address"
                  },
                  {
                      "internalType": "bool",
                      "name": "exists",
                      "type": "bool"
                  }
              ],
              "internalType": "struct IoTOnBoardingProtocol.Device",
              "name": "",
              "type": "tuple"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getDevicesCount",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "_deviceGroupIdHash",
              "type": "bytes32"
          }
      ],
      "name": "getGroupContract",
      "outputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes32[]",
              "name": "hashes",
              "type": "bytes32[]"
          }
      ],
      "name": "getMerkleRoot",
      "outputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "stateMutability": "pure",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_deviceId",
              "type": "address"
          }
      ],
      "name": "isDeviceMinted",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "_deviceGroupIdHash",
              "type": "bytes32"
          }
      ],
      "name": "isGroupRegistered",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "_firmwareHash",
              "type": "bytes32"
          },
          {
              "internalType": "bytes32",
              "name": "_deviceDataHash",
              "type": "bytes32"
          },
          {
              "internalType": "bytes32",
              "name": "_deviceGroupIdHash",
              "type": "bytes32"
          },
          {
              "internalType": "address",
              "name": "_deviceId",
              "type": "address"
          },
          {
              "internalType": "string",
              "name": "_uri",
              "type": "string"
          }
      ],
      "name": "mintDevice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "_name",
              "type": "string"
          },
          {
              "internalType": "string",
              "name": "_symbol",
              "type": "string"
          },
          {
              "internalType": "bytes32",
              "name": "_firmwareHash",
              "type": "bytes32"
          },
          {
              "internalType": "bytes32",
              "name": "_deviceDataHash",
              "type": "bytes32"
          },
          {
              "internalType": "bytes32",
              "name": "_deviceGroupIdHash",
              "type": "bytes32"
          },
          {
              "internalType": "address",
              "name": "_deviceId",
              "type": "address"
          },
          {
              "internalType": "string",
              "name": "_uri",
              "type": "string"
          }
      ],
      "name": "registerGroup",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "_deviceId",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "_subscriber",
              "type": "address"
          }
      ],
      "name": "setSubscriberAddress",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "_firmwareHash",
              "type": "bytes32"
          },
          {
              "internalType": "address",
              "name": "_deviceId",
              "type": "address"
          }
      ],
      "name": "updateFirmware",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  }
];

const chains = [
  {
    name: "Mumbai Testnet",
    chainId: 80001,
    coinName: "tMATIC",
    icon: "/polygon.png",
    rpc: "https://matic-mumbai.chainstacklabs.com",
    isMainnet: false,
    blockExplorer: "https://mumbai.polygonscan.com/",
    abi: mumbaiABI,
    contract: mumbaiContractAddress,
  },
  {
    name: "Polygon zkEVM Testnet",
    chainId: 1442,
    coinName: "ETH",
    icon: "/polygon.png",
    rpc: "https://rpc.public.zkevm-test.net",
    isMainnet: false,
    blockExplorer: "https://explorer.public.zkevm-test.net",
    abi: zkEVMABI,
    contract: zkEVMContractAddress,
  },
];

module.exports = {
  zkEVMContractAddress,
  mumbaiContractAddress,
  zkEVMABI,
  mumbaiABI,
  chains,
  ONBOARDING_RPC_URL,
  onboardingDeviceImages,
};
