function isTruthy(input) {
    return input ? "Truthy" : "Falsy";
}

console.log(isTruthy(""));
console.log(isTruthy(0));
console.log(isTruthy(null));
console.log(isTruthy("hello"));
console.log(isTruthy(42));