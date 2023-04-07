console.log("c'est moi le js");
// Exercice 1
var myName = "Bob";
var age  = 42;
myName = myName + "by";
age = age - 1;
var pseudo = myName + "-" + age;

console.log(pseudo);
console.log(typeof pseudo);


// Exercice 2
var foo = 42; // foo =42
var bar = foo; //  bar =42 foo = 42 on copie la valeur pas la référence (pour les types primitifs)
foo = foo - 41; //  bar = 42 foo = 1
bar = foo + bar; // bar = 43 foo = 1
foo = bar - 1; //  foo =42  bar = 43

console.log("foo vaut: " + foo); // 42
console.log("bar vaut: " + bar); // 43

// Exercice 3
/*
Créer une variable avec pour valeur une string représentant votre nom et prénom.
comment allez-vous l'appeler.

Créer une variable contenant un entier représentant votre age.

Afficher dans la console la chaine de caractère suivante.
Bonjour NOM PRENOM. Votre age est: XX. A bientôt !
*/

var fullName = "Valette jérémie";
var age = 52;
console.log("Bonjour " + fullName + "." + " Votre age est: " + age + "." + " A bientôt !");
var sentence = "Bonjour " + fullName + "." + " Votre age est: " + age + "." + " A bientôt !";
console.log(sentence);

// CREATION BRANCHE (branche1) avec git checkout -b branche1 puis vérification avec git branche

