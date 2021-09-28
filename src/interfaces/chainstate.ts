import { ProducerFunc, TransactionFunc } from "./functions";

export default interface ChainState {
    readonly name: string;
    readonly blocktime: number; // seconds

    producerFn: ProducerFunc;
    transactionFn: TransactionFunc;
    
    run(): void;
    
    getBlockHeight(): number;
    getTransactionsCount(blockNumber: number): number
    changeSupply(difference: number): void;
    getSupply(): number;
    
}

