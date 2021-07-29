let arr = [1,1,1,1,1,1,1,1,"1",1,1,1,1,1,1,1,1,1,1,1,1];
let counter = arr.length;
let result = true;
do {
  equality = (arr[0] === arr[counter - 1]) ? true:false;
  result = result && equality;
  counter -= 1;
}
while (counter - 1);
console.log(result);