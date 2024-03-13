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

       /*  const pessoa = {

            nome: 'Arthur',
            idade: '15',
            genero: 'mulher',
            musica: 'funk',
            comidas: ['Churrasco', 'Strogonoff', 'Açaí', 'Frango Frito'],
            melhorAmiga: {
                nomeDaAmiga: "Maria",               
                idade: 17,
        
            }
        }

        console.log(`O nome da pessoa é ${pessoa.nome} e suas comidas preferidas são ${pessoa.comidas} e seu melhor amigo se chama ${pessoa.melhorAmiga.nomeDaAmiga} e tem ${pessoa.melhorAmiga.idade} de idade.`)

*/
        //CORREÇÃO
        
        /* const pessoa = {
            nome: 'Arthur',
            idade: '15',
            genero: 'mulher',
            musica: 'funk',
        };
       
        function exercicio4(objetoPessoa, arrayComidas, objetoMelhorAmigo){
            var novoObjeto = {...objetoPessoa, comidasPreferidas: arrayComidas, melhorAmigo: objetoMelhorAmigo};

            console.log(`O nome da pessoa é ${novoObjeto.nome} e suas comidas preferidas são ${novoObjeto.comidasPreferidas[0]}, ${novoObjeto.comidasPreferidas[1]}, ${novoObjeto.comidasPreferidas[2]}, seu melhor amigo se chama ${novoObjeto.melhorAmigo.nome} e tem ${novoObjeto.melhorAmigo.idade} anos.`);

        }

        exercicio4(pessoa, ["Arroz", "Feijão", "Carne"], {nome: "João", idade:10}); */


        //CONDICIONAIS ---------------------------------------------------------------------------------------

        //EXEMPLO

        /* let condicao1 = true;
            if (condicao1){
            // Como o valor da condição é true, o código desse bloco é executado     
                console.log('Entrei no if 1!');
        }

        let condicao2 = false;
         if(condicao2){
            // Como o valor da condição é false, o código desse bloco NÃO é executado
                console.log('Entrei no if 2!');
        } */

        //EXERCICIO CONDICIONAIS  -----------------------------------------------------------------------

       /*  function numeros(num1, num2){
                if(num1 === num2) 
                console.log('Iguais')
            else(console.log('Diferentes'))
        } 
    numeros(prompt("Digite um número para alocar o num1"),prompt("Digite outro número para entrar como num2")); */

        //EXERCICIO CONDICIONAIS 2 ---------------------------------------------------------------------------------
        
        /* function idade(nome, idadeAtual){
            var idadePermitida = 18
            if(idadeAtual <= 18){
                console.log(`${nome}, você pode dirigir!`);
            }
            else{
                console.log(`${nome}, você não pode dirigir!`);
            }
        }

        idade(prompt("Escreva seu nome:"), (prompt("Escreva sua idade:")));
 */

        //1ELSE EXEMPLO ---------------------------------

        /* let condicao = false
    
        if (condicao){
            console.log('Entre no if!')
       } else {
        console.log('Entrei no else!')
       } 

       EXERCICIO ELSE 2 ----------------------------*/

       /* function numeros(num1, num2){
        if(num1 === num2) 
            return `Iguais`;
        else
            return `Diferentes`;
} 
    console.log(numeros(prompt("Digite um número para alocar o num1"),prompt("Digite outro número para entrar como num2")));
 */

/* 
    let condicao1 = false
    let condicao2 = true

    if (condicao1){
        console.log('Entrei no if1 !')
    }
    else {
        if (condicao2) {
            console.log('Entrei no if2!')
        }
    }

 */

    //EXERCICIO ELSE E IF 3 -------------------------------------------------------

    /* function conferirNumeros(num1, num2){

        if (num1 === num2)  {
            console.log("O número ", num1, "é maior que ",num2,".");
        }
        else{
            if (num1 > num2) {
                console.log("O número", num1, "é maior que ", num2,".");
            }
        }
        else{
            if (num1 < num2) {
                console.log("O número ", num1, "é menor que o ",num2,".");
            }
        }
            else {
                console.log("O número ", num1, "é menor que ",num2,".");
            }
         } */

        
       /*  function numeros(num1, num2){
            
            if(num1 > num2){
                return`O ${num1} é maior que o ${num2}`;
            }else if(num1 < num2){
                    return`O ${num1} é menor que o ${num2}`;
                }else {
                    return`Os dois números são iguais: ${num1}.`;
                }
            }
            console.log */


// ----------------------------------------------------------------- SWITCH CASE --------------------------
// SEM SWITCH CASE =
            /* let paisDeOrigem
            if (paisDeOrigem === 'Brasil'){
                console.log('Brasileiro')
            } else if (paisDeOrigem === 'EUA'){
                console.log('Norte Americano')
            }else if (paisDeOrigem === 'Inglaterra'){
                console.log('Inglês')
            }else if (paisDeOrigem === 'França'){
                console.log('Frânces')
            }else if (paisDeOrigem === 'Itália'){
                console.log('Italiano')
            }else if (paisDeOrigem === 'Canadá'){
                console.log('Canadense')
            }else {
                console.log('Nacionalidade não encontrada')
            } */

// COM SWITCH CASE = 

           /*  let paisDeOrigem
                switch (paisDeOrigem){
                case 'Brasil':
                    console.log('Brasileiro')
                    break  
                case 'EUA':
                    console.log('Norte Americano')
                    break
                case 'Inglaterra':
                    console.log('Inglês')
                    break
                default:
                    console.log('Nacionalidade não encontrada')
                    break
                
                } */

// EXERCICIO SWITCH CASE

              /*   function pokemonSelecionado(pokemon){
                    switch (pokemon){
                    case 'bulbasauro':
                            console.log('Planta Veneno')
                        break
                    case 'pikachu':
                            console.log('Relampago')
                        break
                    case 'charmander':
                            console.log('Fogo')
                        break
                    case 'squirtle':
                            console.log('Água')
                        break
                    default:
                        console.log('Nenhum Pokémon foi escolhido para a sua jornada!')
                    }
                }
            console.log(pokemonSelecionado(prompt("Selecione um dos quatros pokémon para iniciar sua jornada: \n 1- Bulbasauro \n 2- Pikachu \n 3- Charmander \n 4- Squirtle"))); 
   ----------------------------------------------------------------------------------------------------     */
// OPERADORES LOGICOS APLICANDO DE UM JEITO UTIL ( && = AND , ||= OR , != NOT);

// EXEMPLO:

               /*  let condicao1 = true
                let condicao2 = false
                
                if ( condicao1 && condicao2) {
                    // Entre aqui se ambas forem true
                }

                if (!condicao1){
                    // Entra aqui se condicao1 for false
                } */

// EXERCICIO 1:
                /* var podeEntrar = false
                var pessoa = {
                    
                    idade:prompt("Qual sua idade?"),
                    ensinoMedio:prompt("Você concluiu o ensino medio?"),
                    estaCursando:prompt("Você está cursando outra faculdade?")

                }

            if(pessoa.ensinoMedio === "sim"){
                    pessoa.ensinoMedio = true;}
            else{pessoa.ensinoMedio = false;}
            
            if(pessoa.estaCursando === "sim"){
                    pessoa.estaCursando = false;}
            else{pessoa.estaCursando = true;}

            if(pessoa.idade >= 18 ){
                    podeEntrar = true;}
            else if(pessoa.idade < 18){
                    podeEntrar = false;}
            
            if(pessoa.ensinoMedio){
                podeEntrar = true;}
            else{podeEntrar = false;}
            
            if(pessoa.estaCursando){
                podeEntrar = true;}
            else{podeEntrar = false;}

            if (podeEntrar) {
                console.log('Você pode entrar na nossa faculdade!')
            } else {console.log('Você não tem permissao para entrar na nossa faculdade')} */

// EXERCICIO 2.1: 
 //SIMPLES


            
       /*      function 
       Numeros(num1, operacao, num2){
            
                if(operacao === "soma"){
                    return num1+num2
                }
                else if(operacao === "subtracao"){
                    return num1-num2
                }
                else if(operacao === "multiplicacao"){
                    return num1*num2
                }
                else if(operacao === "divisao"){
                    return num1/num2
                }
                else{return`invalido, digite novamente!`} 
            }
                    console.log(
                        
                        Numeros(
                            Number(prompt("Digite o numero desejado: ")),
                            prompt("Digite a operação desejada: \n soma \n subtracao \n multiplicacao \n divisao"),
                            Number(prompt("Digite o segundo numero desejado: ")))); */

//EXERCICIO 2.2 =
/* 
                    
                    function calcularmedia (array = [prompt("notaum"),prompt("notadois"),prompt("notatres")]){
                        

                    }
 */
//EXERCICIO 2.3 = 

//TERMINAR MAIS TARDE!!

//AULA DIA 06/03/24 ---------------------------------------------------------------------------------

             /*    function podeEntrarNaFaculdade(ensinoMedio, idade, faculdade){
                    if(idade >= 18){
                        if(ensinoMedio === "sim"){
                            if(faculdade === "sim"){
                                return "Você pode entrar na faculdade";
                            }
                        }
                    }
                    else{return " voce nao pode entrar na faculdade";}
                }

                console.log(
                    podeEntrarNaFaculdade(
                        prompt("Voce concluiu o ensino medio?"),
                        Number(prompt("qual sua idade?")),
                        prompt("Voce ja estuda em uma faculdade?")
                    )
                ); */

// CODIGO PROFESSOR 

/* function podeEntrarNaFaculdade(ensinoMedio, idade, faculdade){
    if(ensinoMedio === "sim" || ensinoMedio === "Sim")
    {ensinoMedio =  true;}else{faculdade = false;}

    if(faculdade === "sim" || faculdade === "Sim")
       {faculdade = true;}else{faculdade = false;}

       if(idade >= 18 && ensinoMedio && faculdade){
        return "Voce pode entrar na faculdade";
       }
       else{return "voce nao pode entrar na faculdade";}
}
    console.log(
    podeEntrarNaFaculdade(
        prompt("Voce concluiu o ensino medio?"),
        Number(prompt("qual sua idade?")),
        prompt("Voce ja estuda em uma faculdade?")
        )
    );

      */

     /*    let i = 0      

        while ( i < 10){
            console.log(i)

            i++
        }
 */

      /*   let estomago = 0;

        while (estomago < 100) {
            console.log("Quero comer mais coxinhas");
            estomago = estomago + 10;
        }
 */

        // EXERCICIO ------------------------------------------------------------

        //NESSE SISTEMA O USUARIO VAI TER QUE INSERIR VARIOS NUMEROS
        //QUANDO DIGITAR O NUMERO 0 DEVEMOS PARAR DE SOLICITAR NOVOS NUMEROS ]
        // EXEMPLO 10, 3 , 50, 7, 0 O RESULTADO TEM QUE SER 70

        //ERRADO ------------------------------- :(

    /* let i = 0;
    
    let numero = Number(prompt("Digite um número (ou 0 para encerrar):"));

    while(numero !== 0){
        i += numero;

        Number(prompt("Digite 0 se quiser encerrar ou outros numeros se quiser continuar"));

    }

    console.log("A soma dos numeros é ",i); */

    //------------------------------- CORRIGIDO

   /*  function somarNumeros() {
        let soma = 0;
        let numero = 1;
        while (numero !== 0){
            numero = Number(prompt("Digite um número ( ou 0 para sair): "))
            soma += numero;
        }
        console.log(`A soma dos números digitados é: ${soma}`);
    }
    somarNumeros();
 */

    // FOR
/* 
    for(let i = 0; i<10; i++){
        
        console.log(i)
    } */
/* 
    const numeros = [14, 67, 89, 15, 23]

    for(let i = 0; i < 5; i++){
        const elemento = numeros[i]
        console.log(elemento) */
   // }

   //EXERCICIO CONST E ETC...

 /*   const numeros = [11,15,18,14,12,13]
   var maior=numeros[0];

   for(let i = 1; i< numeros.length; i++){
    if(numeros[i] > maior){ 
    maior = numeros[i];}
}
    console.log("Maior número é ",maior); */
    


    function somarNumerosComArray(){
        var numeros = [];
        var numero = 1;

    while (numero !== 0) {
        numero = Number(prompt("Digite um numero ou 0 para sair"));
        numeros.push(numero);       
    }

    var soma = numeros.reduce((acumulador,numero)=> acumulador+numero,0);
    return(soma); 

 } 

    console.log("A soma dos números digitados é: ",somarNumerosComArray());
        
    

























































   

        
    
        
    
    
        

        


       
 

    


                    

          





                

                


                    
                



            
        

            

        
    
        
    



    








