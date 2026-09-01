import getDiscountedPrice, { formatPrice } from "./JS/utils.js"

const  formatedPrice = formatPrice(480)

console.log("Formated Price : ", formatedPrice)

const discountedPrice = getDiscountedPrice(850,25)

console.log("Discounted Price : " ,discountedPrice)