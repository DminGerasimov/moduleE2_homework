let my_map = new Map([
  ["apple", "green"],
  ["strawberry", "red"],
  ["blueberry",    "blue"]
]);
//alert(my_map.size); 
my_map.set("key", 'value');

for (let key of my_map.keys()) {
  console.log(`Ключ - ${key}, значение - ${my_map.get(key)}`);
}