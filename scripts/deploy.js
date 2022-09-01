const { ethers, run, network } = require("hardhat")

async function main() {
    const HelpingHands = await ethers.getContractFactory("HelpingHands")

    console.log("Deploying contract ...")
    const helpingHands = await HelpingHands.deploy()
    await helpingHands.deployed()

    console.log(
        `HelpingHands contract is deployed at : ${helpingHands.address}`
    )

    if (network.config.chainId == 4 && process.env.ETHERSCAN_API_KEY) {
        // wait few blocks before verifying your contract
        console.log("Waiting for block confirmations...")
        await helpingHands.deployTransaction.wait(3)
        await verify(helpingHands.address, [])
    }
}

async function verify(contractAddress, args) {
    console.log("Verifying contract...")
    try {
        await run("verify:verify", {
            address: contractAddress,
            constructorArguments: args,
        })
    } catch (e) {
        if (e.message.toLowerCase().includes("already verified")) {
            console.log("Already Verified!!!")
        } else {
            console.log(e)
        }
    }
}

main().catch((error) => {
    console.error(error)
    process.exitCode = 1
})
