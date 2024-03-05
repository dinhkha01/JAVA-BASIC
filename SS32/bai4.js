const product = {
  id: 1,
  name: "Kha",
  price: 5,
  quantity: 10,
};
for (key in product) {
  console.log(key + ": " + product[key]);
}
