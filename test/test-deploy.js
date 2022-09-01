const { ethers } = require("hardhat")
const { expect, assert } = require("chai")

// describe("SimpleStorage", () => {})

describe("HelpingHands", function () {
    let SimpleStorageFactory, SimpleStorage

    beforeEach(async function () {
        HelpingHands = await ethers.getContractFactory("HelpingHands")
        helpingHands = await HelpingHands.deploy()
    })

    it("Initial listingNonce should be 0", async function () {
        const currentVal = await helpingHands.getListingCount()
        const expectedVal = "0"
        assert.equal(currentVal.toString(), expectedVal)
    })
})
