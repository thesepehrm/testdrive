import ChainState from './chainstate';
export default interface Algorithm {
    name: string;
    description: string;
    calculate (chainState: ChainState): void;
}