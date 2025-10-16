// Customer data
const customers = [
    { id: 1, name: "Ahmet", age: 32, city: "Ankara", orders: [100, 200, 150] },
    { id: 2, name: "Ayse", age: 27, city: "Istanbul", orders: [300, 50] },
    { id: 3, name: "Mehmet", age: 40, city: "Izmir", orders: [500, 100, 200] },
    { id: 4, name: "Fatma", age: 35, city: "Ankara", orders: [300] },
    { id: 5, name: "Zeynep", age: 28, city: "Bursa", orders: [] }
];

// Easy Question: Return an array of names of customers living in Istanbul.
const istanbulCustomers = customers
    .filter(customer => customer.city === "Istanbul")
    .map(customer => customer.name);

// Output: ["Ayse"]
console.log(istanbulCustomers);

// Medium Question: Return the name of the first customer whose total orders exceed 300 TL.
const first300Spender = customers.find(customer => {
    const totalPayment = customer.orders.reduce((sum, order) => sum + order, 0);
    return totalPayment > 300;
}).name;

// Output: "Ahmet"
console.log(first300Spender);

// Hard Question: Return the total order amount per city.
const cityOrderTotals = customers.reduce((acc, customer) => {
    const total = customer.orders.reduce((sum, order) => sum + order, 0);
    acc[customer.city] = (acc[customer.city] || 0) + total;
    return acc;
}, {});

// Output: { Ankara: 450, Istanbul: 350, Izmir: 800, Bursa: 0 }
console.log(cityOrderTotals);

// Very Hard Question: Return a string for each customer in the format: Ahmet (32): 450 TL
const customerSummaries = customers.map(customer => {
    const totalOrders = customer.orders.reduce((sum, order) => sum + order, 0);
    return `${customer.name} (${customer.age}): ${totalOrders} TL`;
});

/*
Output:
[
  "Ahmet (32): 450 TL",
  "Ayse (27): 350 TL",
  "Mehmet (40): 800 TL",
  "Fatma (35): 300 TL",
  "Zeynep (28): 0 TL"
]
*/
console.log(customerSummaries);

// Extremely Hard Question: Return all orders of all customers sorted from highest to lowest in a single array.
const allOrdersSorted = customers
    .flatMap(customer => customer.orders)
    .sort((a, b) => b - a);

// Output: [500, 300, 300, 200, 200, 150, 100, 100, 50]
console.log(allOrdersSorted);
