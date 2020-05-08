function getSomeVariable() {
    const random = Math.random();

    if (random > .1) {
        return "hello world";
    } else if (random > .2 && random < .3) {
        return "hallo welt";
    }

    return 1337;
}

const aNumber = 42;

// const anArray: (string | number)[]
const anArray = [1, 2, 3, "a", "b"];

// const someVariable: "hello world" | "hallo welt" | 1337
const someVariable = getSomeVariable();

// explizit
window.addEventListener("keydown", (e: KeyboardEvent) => {
    console.log(e.key);
});

// infered
window.addEventListener("keydown", e => {
    console.log(e.key);
});
