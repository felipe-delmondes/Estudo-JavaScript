//var e let permitem criar variáveis dinâmicas

//var - O escopo da variável é global.
//let - O escopo da variável é local! Isto é, só existe dentro do bloco.

//Abaixo, a atribuição feita em b dentro do if não tem impacto fora.
var a = 1;
var b = 2;

if (a === 1){
    var a = 11;
    let b = 22;
}

console.log(a);
console.log(b);

//Hoisting tem a missão de subir a declaração de uma variável antes de sua utilização.

variavelTeste = 5;

//Imprimindo antes mesmo da variável ter sido declarada.
console.log(variavelTeste);

var variavelTeste;

