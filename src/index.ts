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
    if (chains.length === 0) {
        print(chalk.red('No chains found'));
        return;
    }
    const chain = await questions.askWhatChainToUse(chains);
    



}

run();