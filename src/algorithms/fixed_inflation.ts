import Decimal from "decimal.js";
import Algorithm from "../interfaces/algorithm";
import chainstate from "../interfaces/chainstate";

export default class FixedInflationAlgorithm implements Algorithm {
    name: string = "Fixed Inflation Algorithm"
    description: string = "Adds a basic percentage algorithm"
    inflationPercentage: number = 0.05
    calculate (chainState: chainstate): number {
        const s = chainState.getSupply()
        const difference = new Decimal(s).times(this.inflationPercentage).floor().toNumber()
        return difference
    }
    
}