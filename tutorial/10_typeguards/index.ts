interface IPerson {
    firstname: string;
    lastname: string;
}

interface IAnimal {
    name: string;
}

function doSomeComplexStuff(value: string | number | IPerson | IAnimal) {
    if(typeof value === "string") {
        value.
    }

    else if(typeof value === "number") {
        value.
    }

    else if(typeof value === "object") {
        value.
    }

    // else if würde nicht mehr IPerson oder IAnimal überprüfen
    if (isPerson(value)) {
        value.
    }
}

function isPerson(value: any): value is IPerson {
    const person = value as IPerson;

    return person.firstname !== undefined && person.lastname !== undefined;
}