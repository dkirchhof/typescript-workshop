function logToUpperCase(str: string) {
    console.log(str.toUpperCase());
}

// variable, die irgendwoher kommt
const someString: string | null = null;

logToUpperCase(someString); // Uncaught TypeError: Cannot read property 'toUpperCase' of null

// strictNullCheck: false => ✔ => 👎
// strictNullCheck: true => Argument of type 'null' is not assignable to parameter of type 'string' => 👍
