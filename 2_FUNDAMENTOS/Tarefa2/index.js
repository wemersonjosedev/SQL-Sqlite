// 1 - numbers
var x = 10;
console.log(x);
x = 15;
console.log(typeof x);
var y = 15.55646;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - Strings
var firstName = "Wemerson";
console.log(firstName.toUpperCase());
var fullName;
var lastName = "José";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - Boolean
var a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 3 - inference e annotation
var ann = "TESTE";
var inf = "teste";
// ann = 1
// inf = 1 ERRO
console.log("Testando 3");
// 5 - desafio 2
var n1 = 10;
var numberToString = n1.toString();
var printMyNumber = "Eu vou imprimir o n\u00FAmero ".concat(numberToString);
console.log(printMyNumber);
