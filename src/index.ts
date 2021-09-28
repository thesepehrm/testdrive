import chalk from "chalk";
import clear from "clear";
import figlet from "figlet";
import { App } from './app';

clear();

console.log(
    chalk.yellow(
        figlet.textSync('TestDrive', { horizontalLayout: 'full' })
    )
);

const run = async () => {
    const app = new App();
    app.run();
}

run();