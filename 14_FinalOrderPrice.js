function finalOrderPrice(items) {
    return items.reduce(((acc, item) => acc + (item.price * item.quantity)), 0);
}

let items = [
    {
        price: 400,
        quantity: 10,
    },
    {
        price: 700,
        quantity: 20,
    },
]

console.log(finalOrderPrice(items));