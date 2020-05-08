import shortId from "shortid";

function test(message: string) {
    console.log(`${shortId()}:  ${message}`);
}

test("hello typescript");
