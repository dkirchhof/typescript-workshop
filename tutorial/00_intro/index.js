function greetMe(name) {
    console.log(`Hello ${name}!`);
}

function add(a, b) {
    console.log(a + b);
}

greetMe(23423); // hello 23423! 👎
greetMe({ firstname: "Max", lastname: "Mustermann" }); // Hello [object Object]! 👎
greetMe("Max Mustermann") // Hello Max Mustermann 👍

add("a", "b") // ab 👎
add(1, "fsd") // 1fsd 👎
add(1, 4) // 5 👍
