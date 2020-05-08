// region klassiker

const aNumber: number = ;
const aString: string = ;
const anArray: any[] = ;
const anArrayOfStrings: string[] = ;
const aMapOfStringNumberPairs: Map<string, number> = ;
const aSetOfStrings: Set<string> = ;
const aSymbol: Symbol = ;

// endregion

// region abwandlungen der klassiker

const aTuple: [string, number, number] = ;
const aReadonlyStringArray: readonly string[] = ;
const anotherReadonlyStringArray: ReadonlyArray<string> = ;

// endregion

// region interfaces

interface IPerson {
    firstname: string;
    lastname: string;
}

const person: IPerson = {
};

// endregion

// region classes

class Person implements IPerson {
    firstname: string;
    lastname: string;

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
}

const person2 = new Person();

// endregion

// region enums

enum Colors {
    Blue = "#0000ff",
    Green = "#00ff00",
    Red = "#ff0000",
    Yello = "#ffff00",
}

const enum Numbers {
    Zero, // 0
    One, // 1
    Two, // 2
}

const color: Colors = ;
const number: Numbers = ;

// endregion

// region datentypen, die nicht genutzt werden sollten

const anyType: any;
const unknownType: unknown;

console.log(anyType.toUpperCase());
console.log(unknownType.toUpperCase());

// endregion
