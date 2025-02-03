export class FormatDecimal {   
    constructor() {}

    public static formatDecimalFrom(decimal: bigint, amount: bigint): bigint {
        return amount / (BigInt(10) ** decimal);
    }

    public static formatDecimalTo(decimal: bigint, amount: bigint): bigint {
        return amount * (BigInt(10) ** decimal);
    }
}