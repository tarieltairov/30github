const products = [
  { id: 1, name: "Ноутбук", price: 1000, quantity: 3 },
  { id: 3, name: "Планшет", price: 700, quantity: 2 },
  { id: 2, name: "Смартфон", price: 500, quantity: 5 },
  { id: 4, name: "Монитор", price: 300, quantity: 4 },
];

const expensiveAndSum = (arr) => {
  const expensive = [...arr].sort((a, b) => b.price - a.price)[0];
  console.log("Самый дорогой товар:", expensive);

  const totalSum = arr.reduce(
    (acc, curr) => acc + curr.price * curr.quantity,
    0
  );
  console.log("Общая стоимость всех товаров:", totalSum);
};

expensiveAndSum(products);
