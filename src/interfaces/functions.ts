import ChainState from "./chainstate";

export interface ProducerFunc {
    (chainState: ChainState): void
}

export interface TransactionFunc { 
    (chainState: ChainState): number 
}
