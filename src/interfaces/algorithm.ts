import { Decimal } from 'decimal.js'
export default interface Algorithm {
    name: string;
    description: string;
    run: (totalSupply: number, transactions: number,  ) => boolean;
}