
function processa(a,b){
    var comparacao
    if(a == b){
         comparacao = " São iguais";
    }else{
        comparacao = " Não são iguais";
    }

    var soma = a+b;

    var comparaCom10;
    var comparaCom20;

    if(soma > 10){
        comparaCom10 = "que é maior que 10";
        if(soma > 20){
            comparaCom20 = " e maior que 20";
        }else{
            comparaCom20 = " e menor que 20";
        }
    }else{
        comparaCom10 = "que é menor que 10";
        comparaCom20 = " e menor que 20";
    }
        console.log("Os números " + a + " e " + b + comparacao + ". Sua soma é " + soma + ", " + comparaCom10 + comparaCom20);
}

processa(11,11);
