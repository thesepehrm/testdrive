interface Algorithm {
    name: string;
    description: string;
    run: (input: string) => boolean;
}