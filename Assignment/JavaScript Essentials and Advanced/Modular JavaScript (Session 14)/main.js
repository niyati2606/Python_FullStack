// import { formatSongTitle, getSongDurationInMinutes } from "./JS/spotifyUtils.js"

import { addToCart, calculateTotal, removeFromCart } from "./JS/cartUtils.js";

// const songTitle = "Perfect"
// const songDuration = 250

// console.log("Song Name : ", formatSongTitle(songTitle))
// console.log("Song Duration : ",getSongDurationInMinutes(songDuration))

let cart = [];

cart = addToCart(cart, {
    name: "Mobile",
    price: 15000
});

cart = addToCart(cart, {
    name: "Headphones",
    price: 2000
});

cart = addToCart(cart, {
    name: "Keyboard",
    price: 1500
});

console.log("Cart after adding items:", cart);

console.log("Total:", calculateTotal(cart));

cart = removeFromCart(cart, "Headphones");

console.log("Cart after removing Headphones:", cart);
console.log("Updated Total:", calculateTotal(cart));