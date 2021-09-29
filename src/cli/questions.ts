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
        return inquirer.prompt(chainsQuestion);
    },

    askWhatAlgorithmToUse: (algorithms: string[]) => {
        let algorithmsQuestion: QuestionCollection = {
            type: 'list',
            name: 'algorithm',
            message: 'What algorithm do you want to use?',
            choices: algorithms,
            default: algorithms[0],
        };
        return inquirer.prompt(algorithmsQuestion);
    }
}