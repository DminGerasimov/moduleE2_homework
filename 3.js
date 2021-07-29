let str = "Hello";
let back_str = "";
let counter = str.length;
do {
    back_str += str[counter - 1];
    counter -= 1;
}
while (counter);
console.log(back_str);