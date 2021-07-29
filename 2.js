let x = true;
let result = typeof(x);
console.log(result);
switch (result) {
    case ("string"):
        console.log('Строка');
        break;
    case ("boolean"):
        console.log('Логическое значение');
        break;
    case ("number"):
        console.log('Число');
        break;
    default:
        console.log('Тип x не определён');    
}