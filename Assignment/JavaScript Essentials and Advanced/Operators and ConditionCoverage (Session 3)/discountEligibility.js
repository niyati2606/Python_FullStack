function isEligibleForDiscount(totalAmount) {
    return totalAmount >= 500;
}

console.log(isEligibleForDiscount(300)) //false
console.log(isEligibleForDiscount(700)) //true