import fs from "node:fs";
import ChainState from "./interfaces/chainstate";
import Algorithm from "./interfaces/algorithm";
import chalk from "chalk";
import print from "./util/print";
import Challenge from "./interfaces/challenge";

export default class App {
    algorithms: {[key: string]: Algorithm} = {};
    chains: {[key: string]: ChainState} = {};
    challenges: {[key: string] :Challenge} = {};

    constructor() {
        
    }

    async init() {
        let algorithmsCount = await this.loadAlgorithms()
        let chainsCount = await this.loadChains()
        let challengesCount = await this.loadChallenges()

        print(chalk.green(`Loaded ${algorithmsCount} algorithms`))
        print(chalk.green(`Loaded ${chainsCount} chains`))
        print(chalk.green(`Loaded ${challengesCount} challenges`))

    }

    run(chainName: string, algorithmName: string) {
        if (!this.chains[chainName]) {
            print(chalk.red(`Chain ${chainName} not found`))
            return
        }

        if (!this.algorithms[algorithmName]) {
            print(chalk.red(`Algorithm ${algorithmName} not found`))
            return
        }

        let chain = this.chains[chainName]
        let algorithm = this.algorithms[algorithmName]

        // TODO: run
    }


    async loadAlgorithms(): Promise<number> {
        let algorithmsFiles = fs.readdirSync("./src/algorithms")
        algorithmsFiles = algorithmsFiles.filter(p => p.endsWith(".ts"))
        for (let p of algorithmsFiles) {
            let algorithm: Algorithm = new (await import (`./algorithms/${p}`)).default()
            this.algorithms[algorithm.name] = algorithm
        }

        return algorithmsFiles.length
    }

    async loadChains(): Promise<number> {
        let chainsFiles = fs.readdirSync("./src/chains")
        chainsFiles = chainsFiles.filter(p => p.endsWith(".ts"))
        for (let p of chainsFiles) {
            let chain: ChainState = new (await import (`./chains/${p}`)).default()
            this.chains[chain.name] = chain
        }

        return chainsFiles.length
    }

    async loadChallenges():Promise<number> {
        let challengesFiles = fs.readdirSync("./src/challenges")
        challengesFiles = challengesFiles.filter(p => p.endsWith(".ts"))
        for (let p of challengesFiles) {
            let challenge: Challenge = new (await import (`./challenges/${p}`)).default()
            this.challenges[challenge.name] = challenge
        }
        return challengesFiles.length
    }

    getChains(): string[] {
        return Object.keys(this.chains)
    }

    getAlgorithms(): string[] {
        return Object.keys(this.algorithms)
    }

}
