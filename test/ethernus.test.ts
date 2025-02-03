import { ethers } from "ethers"
import { EthernusService } from "../src/infrastructure/service/ethernus-service"
import { expect } from '@jest/globals';
require('dotenv').config()

describe("Ethus service", () => {
    it("Should return the balance of an account", async () => {
        const rpcUrl = `https://polygon-mainnet.g.alchemy.com/v2/${process.env.POLYGON_RPC as string}`
        const provider = new ethers.JsonRpcProvider(rpcUrl)
        const ethusService = new EthernusService(provider, 137)
        const balance = await ethusService.getBalance("0x4CFe63294dac27cE941d42A778A37F2b35fea21b")
        expect(balance).toBeGreaterThan(0)
    })
})