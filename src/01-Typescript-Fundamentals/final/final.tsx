import React, { FunctionComponent } from 'react';

const TypescriptBasics: FunctionComponent = () => {
    let today: string = "01/13/2022";
    let tomorrow: string = "01/14/2022";
    let isLoggedin: boolean = false;
    let emptyValue: null = null;
    let numberofDays: number = 33;
    let myRegEx: RegExp = /foo/;

    const names: string[] = [
        "James",
        "Paul"
    ]

    const lastNames: Array<number> = [1, 2, 3];

    const users = {
        username: string;
        password: string;
    } = {
        username: "Shakim",
        password: "jhans992"
    }

    /**
     * interface Users {
     * username: string;
     * password: string;
     * }
     * 
     * const users: Person {
     * username: "Shakim"
     * password: "jhans992"
     * }
     */

    const ids: Record<number, string> = {
        10: "james",
        20: "harris"
    };

    if(ids[20] === "harris"){

    }
    
    for(let i =0; i < 10; i++) {
    console.log(i);
    }

    [1, 2, 3].forEach((v) => console.log(v));
    const out: number[] = [4, 5, 6].map(( v) => v * 10);

    return (
        <div>
        {today}
        {isLoggedin}
        {tomorrow}
        {emptyValue}
        {numberofDays}
        {myRegEx}
        {names}
        {lastNames}
        {ids}
        {out}
        </div>
    );
}

export default TypescriptBasics;
