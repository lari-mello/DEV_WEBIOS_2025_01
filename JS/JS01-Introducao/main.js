var idade
var ano = 2010
//Java Script
console.log("Hello World") //Apresentar uma mensagem
console.clear() //Serve para limpar uma tela de saida


//Variáveis
var numero1 = 192
console.log(numero1)

var num1 = 4
var num2 = 6
var resultado = num1 + num2
console.log(resultado)

idade = 48 //Iniciar a variavel em outra parte do codigo
console.log(idade)

ano = 2036

//Textos - String
var nome = 'Matheus Araujo'
var nome2 = "Matheus Vinicius"
var nome3 = '123456' //Entra como texto pois está entre ''
console.log(nome)
console.log(nome2)
console.log(nome3)
// posso fazer tanto individualmente sendo um em cada linha quanto separando por virgula, por exemplo console.log(nome, nome2, nome3) a diferença é que dessa forma as informações ficarão lado a lado

//Var // Flexivel e com menos regras (Posso alterar o valor icicial de uma var e recriar a mesma em outras partes do código)
//Let // Você não pode recriar a mesma em outras partes do codigo com o mesmo nome, mas pode chamar e alterar o valor inicial)
//Const //Você não pode recriar a mesma em outras partes do codigo e não pode alterar o valor inicial dela garantindo a confiança do dado que está sendo utilizado no decorrer do seu codigo

console.log("Olá " + "Papai") //Concatenar
console.log("Aluno " + nome + " e Aluno " + nome2 + " Tem um total de " + nome3 + " dinheiros ") //Concatenar

//Template String
console.log(`Aluno ${nome} e aluno ${nome2} tem um total de ${nome3} dinheiros`)

//Operadores
var valor1 = 5
var valor2 = 5
console.log( valor1 +  valor2)
console.log( valor1 -  valor2)
console.log( valor1 *  valor2)
console.log( valor1 /  valor2)
console.log( valor1 **  valor2)

//Operadores relacionais
console.log(5 == 5)
console.log(valor1 == valor2)
console.log(5 > 5)
console.log(22 < 8)
console.log(22 >= 22)
console.log(22 != 23)
console.log('A' == 'A');
console.log(true == true);  
console.log(true === true);
console.log(true === 'true'); //boolean e o outro txt > String
console.log(true != 'false');

//Operadores lógicos
let temCamisa = false
let temCracha = true
console.log(temCamisa);
console.log(temCracha);
console.log(temCamisa == true && temCracha == true); 
console.log(temCamisa == true || temCracha == true);


var x = 3
var y = 2
x = x + y
//x = y formato contraido
// x = 3 + 2
console.log(x);

x = 720
console.log(x);

//console.log: para mostrar resultados e mensagens do sistema
//console.clear: limpar o console e deixar o dispositivo disponivel para novas mensagens
//console.error: apresenta uma mensagem de erro que eu queira comunicar, em vermelho
//console.warn: apresenta uma mensagem de erro que eu queira comunicar, em amarelo
console.clear(
)

console.log("Está tudo limpo");
console.log("Olá mundo");
console.error("Não use essa tela")
console.warn("Não use essa tela (Em amarelo)")