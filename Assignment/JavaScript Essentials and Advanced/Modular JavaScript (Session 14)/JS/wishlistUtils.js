export function addToWishlist(wishlist, item) {
    wishlist.push(item);
    return wishlist;
}

export function removeFromWishlist(wishlist, itemName) {
    return wishlist.filter((item) => item.name !== itemName);
}

export function listWishlist(wishlist) {
    if (wishlist.length === 0) {
        console.log("Wishlist is empty");
        return;
    }

    console.log("Wishlist Items:");

    wishlist.forEach((item) => {
        console.log(`${item.name} - ₹${item.price}`);
    });
}