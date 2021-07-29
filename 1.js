let a = + prompt("Input number");
if (typeof(a) == 'number'){
  if (isNaN(a)){
    console.log("Упс, кажется, вы ошиблись")
  }
  else{
    a % 2 == 0 ? console.log("Четное") : console.log("Не четное")
  }
}