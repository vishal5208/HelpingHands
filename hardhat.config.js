require("dotenv").config()
require("@nomiclabs/hardhat-etherscan")
require("@nomicfoundation/hardhat-toolbox")

const RINKEBY_PRC_URL = process.env.RINKEBY_PRC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const LOCAL_RPC_URL = process.env.LOCAL_RPC_URL

module.exports = {
    solidity: "0.8.0",

    networks: {
        rinkeby: {
            url: RINKEBY_PRC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 4,
        },
        localhost: {
            url: LOCAL_RPC_URL,
            chainId: 31337,
        },
    },

    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
}

task("accounts", "Prints the list of accounts", async () => {
    const accounts = await ethers.getSigners()

    for (const account of accounts) {
        console.log(account.address)
    }
})
