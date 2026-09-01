const orders = [
  {
    orderId: 101,
    items: [
      { itemName: "Laptop", price: 50000 },
      { itemName: "Mouse", price: 1000 }
    ],
    delivery: {
      address: "Ahmedabad",
      status: "Delivered"
    }
  },
  {
    orderId: 102,
    items: [
      { itemName: "Headphones", price: 2000 },
      { itemName: "Keyboard", price: 1500 }
    ],
    delivery: {
      address: "Surat",
      status: "Out for Delivery"
    }
  }
];

for (let order of orders) {
  let totalPrice = 0;

  for (let item of order.items) {
    totalPrice += item.price;
  }

  console.log("Order ID:", order.orderId);
  console.log("Total Price: ₹" + totalPrice);
}