export class EthernusErrors extends Error {
    constructor(message: string) {
      super(message);
      this.name = "EthernusError";
    }
  
    static InvalidAddress(address: string): EthernusErrors {
      return new EthernusErrors(`Invalid address: ${address}`);
    }
  
    static TransactionFailed(reason: string): EthernusErrors {
      return new EthernusErrors(`Transaction failed: ${reason}`);
    }

    static CallFailed(reason: string): EthernusErrors {
        return new EthernusErrors(`Call failed: ${reason}`);
    }
  
    static ContractCallFailed(functionName: string, reason?: string): EthernusErrors {
      return new EthernusErrors(`Failed to call ${functionName}: ${reason || "Unknown error"}`);
    }
  }
  