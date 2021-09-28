import ChainState from "../interfaces/chainstate";
import { ProducerFunc, TransactionFunc } from "../interfaces/functions";

export default class GalaxyState implements ChainState {
    readonly name: string = "Galaxy";
    readonly blocktime: number = 7; // seconds

    private circulatingSupply: number = 0;
    private isRunning: boolean = false;

    constructor(producerFn: ProducerFunc, txFn: TransactionFunc, startingBlock: number, currentBlock: number, finishingBlock: number) {
        this.startingBlock = startingBlock;
        this.currentBlock = currentBlock;
        this.finishingBlock = finishingBlock;
        this.transactionFn = txFn;
        this.producerFn = producerFn;
    }

    private startingBlock: number;
    private currentBlock: number;
    private finishingBlock: number;

    producerFn: ProducerFunc;
    transactionFn: TransactionFunc;

    stop(): void {
        this.isRunning = false;
    }

    run(): void {
        while (this.isRunning && this.currentBlock < this.finishingBlock) {
            try {
                this.producerFn(this);
            } catch (error) {
                throw error;
            }
            this.currentBlock++;
        }
    }
    getBlockHeight(): number {
       return this.currentBlock;
    }
    getTransactionsCount(blockNumber: number): number {
        return this.transactionFn(this);
    }
    changeSupply(difference: number): void {
        this.circulatingSupply += difference;
    }
    getSupply(): number {
        return this.circulatingSupply;
    }

}
