function canOrderFood(isLoggedIn, hasPaymentMethod) {
    return isLoggedIn && hasPaymentMethod;
}

console.log(canOrderFood(true, true));   // true
console.log(canOrderFood(true, false));  // false
console.log(canOrderFood(false, true));  // false
console.log(canOrderFood(false, false)); // false