console.log("c'est moi le js");

var myName = "Bob";
var age  = 42;
myName = myName + "by";
age = age - 1;
var pseudo = myName + "-" + age;

console.log(pseudo);
console.log(typeof pseudo);



var foo = 42; // foo =42
var bar = foo; //  bar =42 foo = 42 on copie la valeur pas la référence (pour les types primitifs)
foo = foo - 41; //  bar = 42 foo = 1
bar = foo + bar; // bar = 43 foo = 1
foo = bar - 1; //  foo =42  bar = 43

console.log("foo vaut: " + foo); // 42
console.log("bar vaut: " + bar); // 43


