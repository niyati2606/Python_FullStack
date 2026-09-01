const cart = [
  {
    productName: "Smartphone",
    price: 15000,
    quantity: 2
  },
  {
    productName: "Wireless Headphones",
    price: 2000,
    quantity: 1
  },
  {
    productName: "Laptop",
    price: 55000,
    quantity: 1
  },
  {
    productName: "Smart Watch",
    price: 3000,
    quantity: 3
  }
];

for (let i = 0; i < cart.length; i++) {
  const totalPrice = cart[i].price * cart[i].quantity;

  console.log(
    cart[i].productName + " - Total Price: ₹" + totalPrice
  );
}