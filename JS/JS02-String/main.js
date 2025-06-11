// "A" // Caracter
// "Olá" // Texto - String

var texto1 = "Olá IOS"
//0 1 2 3 4 5 6 7

var resultado1 = texto1.charAt(6)
console.log(resultado1)
var resultado2 = texto1[1]
console.log(resultado2);

var lorem = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

console.log(lorem.length)
//console.log(lorem.length >= 500)


var texto2 = "OLÁ MUNDOOOOOOOOO1"
var texto3 = "olá mundooooooooo"

var resultado3 = texto2.toLowerCase()
var resultado4 = texto3.toUpperCase()

console.log(resultado3)
console.log(resultado4);

var texto4 = "Mozilla"
//oz
console.log(texto4.substring(1, 3));
//illa
console.log(texto4.substring(3,7));
console.log(texto4.substring(2));


//Substituir uma String dentro de outra
var texto5 = "Bem vinda a Microsoft"
let novaMensagem = texto5.replace("Microsoft" , "IOS")
console.log(novaMensagem);


//Remover espaços
let textarea = "     Olá mundo, aprendendo JavaScript"
console.log(textarea.trim( ));