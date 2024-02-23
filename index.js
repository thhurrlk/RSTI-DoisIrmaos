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

*

    let pessoas = function(nomedapessoa){
        console.log(nomedapessoa);  
}

pessoas(prompt("Qual o seu nome?"));

OBJETOS - AULA 7 -----------------------------------------------------------------------------

1-->

const professor = {
    nome: 'Vitor',
    idade: 24,
    email: 'profvitor@gmail.com',
    tarefa:['Dar aula', 'Responder dúvidas'],
    contarPiada: function() {
        console.log('É pa vê ou pa comê?');
    
    }
}
    console.log(professor.nome);
    console.log(professor.idade);

    professor.nome = 'Arthur';
    professor['email'] = 'profarthur@gmail.com';
    professor.idade = '17';

    console.log(professor.nome);
    console.log(professor.idade);

    ----------------------------------------------------------------------------------------------------------

    const filme = {
        Filme: 'Need for Speed - O filme',
        Lançamento: '13 de Março de 2014',
        Diretor: 'Scott Waugh',
        Elenco: ['Aaron Paul', 'Imogen Poots', 'Dominic Cooper', 'Rami Malek', 'Kid Cudi', 'Dakota Johnson', 'Michael Keaton'],
        Assistido: true
        

    }

    console.log(filme.Filme);
    console.log(filme.Lançamento);
    console.log(filme.Diretor);
    console.log(filme.Elenco);
    console.log(filme.Assistido);

    -------------------------------------------------------------------------------------------


    const pessoa = {

        nome: 'Maria',
        idade: '15',
        genero: 'mulher',
        musica: 'funk'
    }
        console.log("O nome da pessoa é ", pessoa.nome,", ela tem ", pessoa.idade," anos e gosta muito de",pessoa.musica);

*/

/* const donoDoPet = {
    nome: "Vitor Hugo",
    pet: {
    nomeDoPet: "Wanda",
    raca: "Vira-lata",  
    idade: 1

    }
}

    console.log(donoDoPet.pet.nomeDoPet) //Wanda 

    ------------------------------------------------------------------
    
   /* const curso = {
    nome: "Noturno Frontend",
    linguagens: ["JS", "CSS", "HTML"]
   }

   console.log(curso.linguagens[0]) 
   -----------------------------------------------------------------
/* 
   const professores = [
    {nome: "Andrei", modulo: 1},
    {nome: "Vitor", modulo: 2},
    {nome: "Mina", modulo: 3}
   ]


   console.log(professores[0])
 -----------------------------------------------------------------

   /* const curso = {
    nome: "Frontend",
    linguagens: ["JS", "CSS", "HTML"]

   }

   curso.numeroEstudantes = 50

   console.log(curso.numeroEstudantes) 

   -----------------------------------------------------------------
  
  /* 
    const filmeelenco ={
        pessoas: ['Aaron Paul', 'Imogen Poots', 'Dominic Cooper', 'Rami Malek'],
        nome: ['Tobey Marshall', 'Julia Maddon', 'Dino Brewster', 'Finn'],

    }


    console.log(filmeelenco.pessoas[0] + " - " +filmeelenco.nome[0]);
    console.log(filmeelenco.pessoas[1] + " - " + filmeelenco.nome[1]);
    console.log(filmeelenco.pessoas[2] + " - " + filmeelenco.nome[2]);
    console.log(filmeelenco.pessoas[3] + " - " + filmeelenco.nome[3]);

    filmeelenco.pessoas[0] = 'xuxa';

    console.log(filmeelenco)

    console.log(`%cSEXO`, `color: blue;font-size: 35px` )  

    -----------------------------------------------------------------------------*/

    /* const usuario = {
        nome: 'Prof',
        idade: 25,
        email: 'prof@senacrs.gov.br',
        cidade: 'São Paula'
    }

    const novoUsuario = {
        ...usuario,
        nome: 'João',
        idade: 28
    }

    const listaDeNomes = ["Mika", "Paula", "Vitor"];
    const copiaListaDeNomes = [...listaDeNomes]

    console.log(copiaListaDeNomes) 

    --------------------------------------------------------------------------------*/
        //EXERCICIO

        const pessoa = {

            nome: 'Maria',
            idade: '15',
            genero: 'mulher',
            musica: 'funk',
            comidas: ['Churrasco', 'Strogonoff', 'Açaí', 'Frango Frito'],
            melhorAmiga: {
                nomeDaAmiga: "Arthur",               
                idade: 17,
        
        }

        console.log(`O nome da pessoa é ${pessoa.nome}`)




    








