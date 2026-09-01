    export function generateOrderId() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let orderId = "";

        for (let i = 0; i < 8; i++) {
            orderId += characters.charAt(
                Math.floor(Math.random() * characters.length)
            );
        }

        return orderId;
    }

    export function formatPrice(price) {
        return `₹${price.toFixed(2)}`;
    }

    export default function getDiscountedPrice(price, discount) {
        return price - (price * discount / 100);
    }