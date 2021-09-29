import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import App from './app';
import print from "./util/print";
import questions from "./cli/questions";

clear();

console.log(
    chalk.yellow(
        figlet.textSync('TestDrive', { horizontalLayout: 'full' })
    )
);

const run = async () => {
    const app = new App();
    await app.init();

    let chains = app.getChains();
    let algorithms = app.getAlgorithms();
    if (chains.length === 0) {
        print(chalk.red('No chains found'));
        return;
    }
    if (algorithms.length === 0) {
        print(chalk.red('No algorithms found'));
        return;
    }

    const { chain } = await questions.askWhatChainToUse(chains);
    const { algorithm } = await questions.askWhatAlgorithmToUse(algorithms);

    app.run(chain, algorithm);

}

run();