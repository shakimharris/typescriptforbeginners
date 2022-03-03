import React from 'react';

//Final

const TypescriptBasics = () => {
    let myName: string = "01/13/2022";
    let myAge: number = 44;
    let myBoolean: boolean = false;
    let myHeight: null = null;
    let myRegEx: RegExp = /foo/;

    const myArray: Array<string> = ["foo", "bar", "baz"];

    const names: string[] = [
        "James",
        "Paul"
    ]

    const numberArray: Array<number> = [1, 2, 3];
/*
    const users = {
        username: string;
        password: string;
    } = {
        username: "Shakim",
        password: "jhans992"
    }

    

    const ids = {
        identification: number,
        passport: number,
    } = {
        identification: 123456789,
        passport: 987654321
    }
*/
  interface id {
      identification: number,
      passport: number
  }

  const myId: id = {
        identification: 123456789,  
        passport: 987654321
  }

    const identificationRecord: Record<number, string> = {
        10: "james",
        20: "harris"
    };

    if(identificationRecord[20] === "harris"){
        console.log("Hello");
    }

    return (
        <>
        {myName}
        {myAge}
        {myBoolean}
        {myHeight}
        {myRegEx}
        {myArray}
        {numberArray}
        {identificationRecord}

        </>
    );
}

export default TypescriptBasics;