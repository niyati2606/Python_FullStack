const getDiscountedPrice = function (price, discountPercent) {
    let ans =  price - (price * discountPercent / 100)
    console.log("Discounted Price : ",ans)
};

getDiscountedPrice(2000, 20);