import { ethers } from "ethers";
import { Ethernus, Ethernus__factory } from "../../types/ethers-contracts";
import { EthernusErrors } from "../../domain/errors/ethernus-errors";
import { FormatDecimal } from "../../shared/utils/format-decimals";
import { EthernusAddress } from "../../shared/constants";

export class EthernusService {
  private contract: Ethernus;

  constructor(
    provider: ethers.JsonRpcProvider,
    chainId: number,
    signer?: ethers.Signer, 
) {
    this.contract = Ethernus__factory.connect(EthernusAddress[chainId], signer ?? provider);
  }

  public getBalance = async (address: string): Promise<number> => {
    try {
        const balance = await this.contract.balanceOf(address);
        const decimal = await this.contract.decimals();
        const math = FormatDecimal.formatDecimalFrom(decimal, balance);
        return Number(math);
    } catch (error: Error | any) {
        throw EthernusErrors.CallFailed(`Failed to get balance: ${error.message}`);
    }
  }
}
