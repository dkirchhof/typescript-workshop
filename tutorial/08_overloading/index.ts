function reverse(value: string): string;
function reverse(value: number): number;
function reverse(value: string | number) {
    const reversed = value.toString().split("").reverse().join("");

    if (typeof value === "number") {
        return parseFloat(reversed);
    }

    return reversed;
}

// function reverse(value: number): number (+1 overload)
console.log(reverse(1337));

// function reverse(value: string): string (+1 overload)
console.log(reverse("hallo"));
