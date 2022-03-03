function addNumber (num1: number, num2: number): number {
    return num1 + num2;
}

export const addStrings = (str1: string, str2: string = ""): string => `${str1} ${str2}`;

export const format = (title: string, param: string | number): string => `${title}: ${param}`;

export const printFormat = (title: string, param: string | number): void => {
    console.log(format(title, param));
}

export const fetchData = (url: string): Promise<string> => 
    Promise.resolve(`Loaded data from ${url}`);

function introduce(salutation: string, ...names: string[]): string {
    return `${salutation} ${names.join(" ")}`;
}





export default addNumber;