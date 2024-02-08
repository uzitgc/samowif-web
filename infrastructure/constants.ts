import {clusterApiUrl, Connection} from "@solana/web3.js";

export const RpcList = [
    {
        url: 'https://api.mainnet-beta.solana.com',
        type: 'public',
    }
];

export const createConnection = () => {
    return new Connection('https://solana-mainnet.g.alchemy.com/v2/X0_zMiNWF8gZQw_KuL-ExfK1Cs80oGi8', {
        wsEndpoint: 'wss://solana-mainnet.g.alchemy.com/v2/X0_zMiNWF8gZQw_KuL-ExfK1Cs80oGi8'
    });
}