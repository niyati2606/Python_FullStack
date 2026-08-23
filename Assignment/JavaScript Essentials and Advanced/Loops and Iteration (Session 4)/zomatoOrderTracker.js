let statuses = [
    "Preparing",
    "Out for delivery",
    "Delivered"
];

let index = 0;

do {
    console.log("Order status: " + statuses[index]);
    index++;
} while (index < statuses.length);