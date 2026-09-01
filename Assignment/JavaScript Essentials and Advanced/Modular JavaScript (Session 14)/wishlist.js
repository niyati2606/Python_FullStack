import { addToWishlist, listWishlist, removeFromWishlist } from "./JS/wishlistUtils.js";

let wishlist = []

wishlist = addToWishlist(wishlist, {
    name: "iPhone 15",
    price: 60000
})

wishlist = addToWishlist(wishlist, {
    name: "Samsung Galaxy",
    price: 45000
})

wishlist = addToWishlist(wishlist, {
    name: "Boat Headphones",
    price: 2000
})

console.log("After adding items:");
listWishlist(wishlist)

wishlist = removeFromWishlist(wishlist, "Samsung Galaxy")

console.log("\nAfter removing Samsung Galaxy:")
listWishlist(wishlist)