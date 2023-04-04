import { ethers } from 'hardhat';

async function main() {
    const Nft = await ethers.getContractFactory('NFT');
    const contract = await Nft.deploy();

    await contract.deployed();

    console.log(`successfully deployed! ${contract.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});