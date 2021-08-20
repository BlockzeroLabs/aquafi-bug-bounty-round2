// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { ContractFactory, Contract, Wallet } from 'ethers'
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
// import AquaPrimary from '../artifacts/contracts/AquaPrimary.sol/AquaProtocol.json'
// import UniswapHandler from '../artifacts/contracts/handlers/uniswap/UniswapHandler.sol/UniswapHandler.json'
// import AquaPremium from '../artifacts/contracts/aqua-premium/AquaPremiumContract.sol/AquaPremiumContract.json'
// import TimelockContract from '../artifacts/contracts/timelock-controller/AquaTimelockController.sol/AquaTimelockController.json';
// import { Printer } from "prettier";

async function getAddres() {
  const [liquidityProvider] = await ethers.getSigners()
  console.log(liquidityProvider.address)

  const v2Handler = await ethers.getContractFactory("UniswapV2Handler");
  const v2 = await v2Handler.deploy(
    "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f",
    "0x906Ed66E685B0A7EEe4045843AAffC56D4326d52",
    "0x21fcf41D7C48B2a5fF70503Bf579FA34AAb72394"
  );
  console.log(v2.address)

}

// async function predictAddress() {
//   const [liquidityProvider] = await ethers.getSigners()
//   let nonce = await liquidityProvider.getTransactionCount();
//   let address = await ethers.utils.getContractAddress({from: liquidityProvider.address, nonce})
//   console.log(address)
// }

// async function deployPrimary(): Promise<void> {
//   // Hardhat always runs the compile task when running scripts through it.
//   // If this runs in a standalone fashion you may want to call compile manually
//   // to make sure everything is compiled
//   // await run("compile");

//   // We get the contract to deploy

//   const [liquidityProvider] = await ethers.getSigners()
//   console.log(liquidityProvider.address)

//   const factory = new ContractFactory(
//     AquaPrimary.abi,
//     AquaPrimary.bytecode,
//     liquidityProvider
//   );
//   // 
//   let tx = await factory
//     .deploy(
//       '0xCa1Fa2D6754e4db83E05119924C0eE7fC94A27E4', '0x7b6315822f43bda90d296bc09516d5dfdea2e76d', '0xe7Ef8E1402055EB4E89a57d1109EfF3bAA334F5F',
//       {
//         gasLimit: 3000000,
//       }
//     )
//   console.log(tx.hash)
// }

// async function deployUniHandler(): Promise<void> {

//   const [liquidityProvider] = await ethers.getSigners()
//   console.log(liquidityProvider.address)

//   const factory = new ContractFactory(
//     UniswapHandler.abi,
//     UniswapHandler.bytecode,
//     liquidityProvider
//   );
//   let tx = await factory
//     .deploy(
//       '0x7b6315822f43bda90d296bc09516d5dfdea2e76d', '0xe7Ef8E1402055EB4E89a57d1109EfF3bAA334F5F',
//       {
//         gasLimit: 3000000,
//       }
//     )

//   console.log(tx)

// }

// async function deployAquaPremiumContract(): Promise<void> {

//   const [liquidityProvider] = await ethers.getSigners()
//   console.log(liquidityProvider.address)

//   const factory = new ContractFactory(
//     AquaPremium.abi,
//     AquaPremium.bytecode,
//     liquidityProvider
//   );
//   let tx = await factory
//     .deploy(
//       '1000', '0xe7Ef8E1402055EB4E89a57d1109EfF3bAA334F5F',
//       {
//         gasLimit: 3000000,
//       }
//     )

//   console.log(tx)

// }

// async function deployTimelockContract(): Promise<void> {

//   const [liquidityProvider] = await ethers.getSigners()
//   console.log(liquidityProvider.address)

//   const factory = new ContractFactory(
//     UniswapHandler.abi,
//     UniswapHandler.bytecode,
//     liquidityProvider
//   );
//   let tx = await factory
//     .deploy(
//       '0x97a58ab811a74a6a4cbf3deb7fbe7f5ad4f73094', '0x057d80180f20f7A0143EcE6a92F466db41e9A5c2',
//       {
//         gasLimit: 3000000,
//       }
//     )

//   console.log(tx)

// }



getAddres()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });



