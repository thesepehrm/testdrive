import ChainState from "../interfaces/chainstate"
import { TransactionFunc } from "../interfaces/functions"

let expotentialTxRate: TransactionFunc = (chainState: ChainState) => {
    let x = chainState.getBlockHeight();
    return  Math.floor(x < 400 ? Math.pow(1.7, x/25) : Math.pow(1.7, 14) + Math.pow(1.05, x/20));

}

export default expotentialTxRate;