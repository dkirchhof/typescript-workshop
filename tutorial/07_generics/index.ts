// region bsp. promise

function getAsyncDate() {
    // type inference funktioniert hier leider nicht => Promise<unknown>
    return new Promise<Date>(resolve => {
        setTimeout(() => {
            resolve(new Date());
        }, 1000);
    });
}

getAsyncDate().then(date => {
    console.log(date.toLocaleDateString());
});

// endregion

// region generic class

class List<T> {
    constructor(...items: T[]) {

    }

    public push(item: T) {

    }

    public remove(item: T) {

    }
}

// List<unknown>
const listOfUnkown = new List();

listOfUnkown.push(1);
listOfUnkown.push("a");

// List<string>
const listOfStrings = new List("a", "b");

listOfStrings.push("c");

// List<number>
const listOfNumbers = new List<number>();

listOfNumbers.push(1);

// endregion

// region generic constraints

class ListOfObjects<T extends { [key: string]: any; }> extends List<T> {

}

// geht nicht
const listOfStrings2 = new ListOfObjects<string>();

// nimmt nur noch { name: string } an
const listOfObjectsWithName = new ListOfObjects<{ name: string; }>();

listOfObjectsWithName.push({ name: "Object 1" });

// endregion
