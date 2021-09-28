import inquirer, { QuestionCollection } from 'inquirer';

export default {
    askWhatChainToUse: (chains: string[]) => {
        let chainsQuestion: QuestionCollection = {
            type: 'list',
            name: 'chain',
            message: 'What chain do you want to test on?',
            choices: chains,
            default: chains[0],
        };
        return inquirer.prompt(chainsQuestion)
    }
}