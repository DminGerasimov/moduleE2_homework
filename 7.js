let arr = [0,1,2,3,null];
let counter = arr.length;
if (counter) {
  if (counter == 1) {
    console.log(`Only zero item in array`)}
  else {
    let even = Math.floor((counter - 1) / 2);
    console.log(`Количество четных элементов: ${even}`);
    console.log(`Количество нечетных элементов: ${counter - even - 1}`);
  }
}
else {
   console.log(`Empty array`)
}