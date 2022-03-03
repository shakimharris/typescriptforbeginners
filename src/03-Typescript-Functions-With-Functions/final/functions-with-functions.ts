export function printToFile(filename: string, callback: () => void): void {
    console.log(filename);

    callback();
}

type MutationFunction = (v: number) => number;

export function mutateArray(points: number[], mutate: MutationFunction): number[] {
    return points.map(mutate);
}

const myNewMutationFunction = (v: number) => v * 100;

console.log(mutateArray([1, 2, 3], (v) => v + 1));

export const adderFunction = (num: number): (val: number) => number => {
    return (val: number) => val + num;
}

// Is the same as 

type AdderFunction = (val: number) => number;

export const adderFunctionClone = (num: number): AdderFunction => {
    return (val: number) => val + num;
}

const addOne = adderFunction(1);
console.log(addOne(55));

