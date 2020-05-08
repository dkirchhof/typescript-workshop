function logLength(obj) {
    console.log(obj.length);
}

const a = "hallo";
const b = [1, 2, 3, 4];
const c = 10;

logLength(a); // 5 👍
logLength(b); // 4 👍
logLength(c); // undefined 👎
