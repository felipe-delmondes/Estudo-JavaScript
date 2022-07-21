//Comentário de linha
//var y = 0;

/*
    Comentário de bloco
*/

console.log("Hello World!!");


//var preco = 2;
var desconto = 0.2;
//Constantes não podem ser manipuladas. As boas práticas pedem elas em Maísculas.
const PRECO = 2; 
var valorTotal = PRECO - desconto;


//Declaração de funções
function soma(a, b){
    return a+b;
}

//Chamar função
var soma = soma(1,2);
//console.log(soma);

function returnEvenNumbers(listOfNummers){
    //What is the difference between let and var??
    let evenNums = [];
    for(let i=0; i< listOfNummers.length; i++){
        if (listOfNummers[i]%2 == 0){
            evenNums.push(listOfNummers[i]);
            
        }
    }
    console.log("Os números pares são: ",evenNums);
}


returnEvenNumbers([2,5,7,9,10,12]);

