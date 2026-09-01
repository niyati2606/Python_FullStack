import getDiscountedPrice, { formatPrice } from "./JS/utils.js";

const items = [
    { name: "T-Shirt", price: 1000, discount: 10 },
    { name: "Shoes", price: 2500, discount: 20 },
    { name: "Backpack", price: 1500, discount: 15 }
];

items.forEach((item) => {
    const discountedPrice = getDiscountedPrice(
        item.price,
        item.discount
    );
    console.log("")
    console.log(`${item.name}:`);
    console.log(`Original Price: ${formatPrice(item.price)}`);
    console.log(`Discounted Price: ${formatPrice(discountedPrice)}`);
});