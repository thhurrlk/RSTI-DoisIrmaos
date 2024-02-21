/* Todas as letras maiusculas
* Substituir "O" por "I"
* Falar o tamanho da frase 

var frase = prompt("Escreva uma frase!");
var fraseMaiuscula = frase.toUpperCase();
console.log(fraseMaiuscula);
var fraseTroca = frase.replaceAll("o","i");
console.log(fraseTroca);
console.log(frase.length); 

const listaDeCompras = ["Abacate", "Banana", "Tomate"];
const segundoIntem = listaDeCompras[2];

console.log(segundoIntem); 

const racasDeCachorro = ["ShihTzu", "Pug", "York", "Golden", "PastorAlemao"];
var racaSelecionada  = prompt("Digite um numero de 0 a 4");
const racaDeCachorro2 = racasDeCachorro[racaSelecionada];
console.log(racaDeCachorro2)


Splice 

*

var array = ["a", "b", "c", "d", "e", "f", "g", "h"];
//          [ 0,   1,   2,   3,   4,   5,   6,   7 ];

array.splice(3,3);
console.log(array);

//DETERMINE UMA ARRAY
//ADICIONE O NUMERO 7
//REMOVA O NUMERO 4 E 5 
//DETERMINE O NOVO TAMANHO DO ARRAY

*

var array = ["1", "2", "3", "4", "5", "6"];

array.push(7);
console.log(array) // [5, 6, 7]
array.splice(3,2);
console.log(array); // [3, 6, 7]
console.log(array.length);

*

function  calculaArea(altura, largura) {
    const area = altura * largura
    console.log(area) 
}
*

funcition imprimirOlaMundo(){
    console.log("Olá Mundo!");
}

*

function nomechamar(nome){
console.log(`Olá ${nome}`)
}

nomechamar("Arthur") 

*

const a = 1;

function imprimeVariavel(){
    const b = 2;
    console.log('Variavel a', a);
    console.log('Variavel b', b);
}

 imprimeVariavel();

 console.log('Variavel a', a);
 console.log('Variavel b', b);

 RETORNO --------------------------------------------------------------------------------------------
 *
 
 function calculaArea(altura, largura){
    const area = altura * largura;
    return area;
 }

 //Atribui retorno à uma variável
 const areaCalculada = calculaArea(2,3);

 //imprimir o retorno ao console
 console.log(calculaArea(2,3));

 ATIVIDADE ( SOMAR AO INVES DE MULTIPLICAR) --------------------------------------------------------------

function numerosRecebidos(numeroUm, numeroDois){
    const resultado = numeroUm + numeroDois
    return resultado;   

}

const resultadoCalculado = numerosRecebidos(8, 8);
    console.log(numerosRecebidos(8,8));

ARRAY E RETORNE ----------------------------------------------------------------------
*

function recebeArray(arrayDeNumeros = []){
    return [(arrayDeNumeros.length)/2, (arrayDeNumeros[0])/2];
}

console.log(recebeArray([1, 2, 3, 4, 5, 6, 7, 8, 9]));

-------------------------------- JAVA MAIS PROFUNDO ----------------------------------------------

EXERCICIO 2
function pessoa(nome) {
    console.log("Olá ", nome);
}
pessoa("Lucas")
pessoa("Pedro")
pessoa("Ramon")

*/

    let pessoas = function(nomedapessoa){
        console.log(nomedapessoa);  
}

pessoas(prompt("Qual o seu nome?"));














