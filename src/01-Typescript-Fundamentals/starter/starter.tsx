/*** Here we have some basic Javascript code and we need to highlight the difference between Javascript
 * syntax and Typescript syntax, so this file comes already built with some basic Javascript code. 
 * In this lesson, we will convert the Javascript into Typescript
 */


import React, { FunctionComponent }from 'react';
import { StructuredType } from 'typescript';

const BasicTypescriptTypes: FunctionComponent = () => {
    let today: string = "01/13/2022";
    let tomorrow: string = "01/14/2022";
    let isLoggedIn: boolean = false;
    let numberOfPresidents: number = 45;
    let isEmptyValue: null = null;
    let RegEx: RegExp = /foo/;

    const usernames: Array<number> = [1, 2, 3, 4, 5];

    interface users {
        username: string;
        email: string;
    }

    const listofusers: users = {
        username: "Shakim",
        email: "shakim@yahoo.com"
    }

    return (
        <>
            {usernames}
            {listofusers}
        </>
    )
}

export default BasicTypescriptTypes;