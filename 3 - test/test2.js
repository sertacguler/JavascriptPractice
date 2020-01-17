const orders = [
    { id: '1', total: 11.30 },
    { id: '2', total: 48.00 },
    { id: '3', total: 1.00 }
];

let total = orders.reduce(
    (acc, currentOrder) => {
        return acc + currentOrder.total;
    },
    10
);

console.log(total);