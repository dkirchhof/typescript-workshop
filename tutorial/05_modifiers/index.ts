class Person {
    private readonly firstname: string;
    private readonly lastname: string;

    // Property 'age' has no initializer and is not definitely assigned in the constructor.
    protected readonly age: number;

    public constructor(firstname: string, lastname: string) {
        this.firstname = firstname;
        this.lastname = lastname;
    }

    public get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

class PersonMinified {
    public constructor(private readonly firstname: string, private readonly lastname: string) {

    }

    public get fullname() {
        return `${this.firstname} ${this.lastname}`;
    }
}

const person = new Person("Max", "Mustermann");

// Property 'firstname' is private and only accessible within class 'Person'.
console.log(person.firstname);

// Property 'age' is protected and only accessible within class 'Person' and its subclasses.
console.log(person.age);

// Max Mustermann
console.log(person.fullname);
