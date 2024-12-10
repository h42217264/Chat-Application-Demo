import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-ethers';
import dotenv from 'dotenv';
dotenv.config();

const config: HardhatUserConfig = {
    solidity: '0.8.24',
    networks: {
        hardhat: {
            allowUnlimitedContractSize: false,
            chainId: 1,
            forking: {
                url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
                blockNumber: 15360000
            }
        }
    }
};

export default config;
