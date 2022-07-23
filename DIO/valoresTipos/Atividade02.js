//let valores = [1,3,4,6,80,33,23,90];
let valores = [];

if (valores.length > 0){
    for(let i=0; i<valores.length; i++){
        if (valores[i] != 0){
            if (valores[i] % 2 == 0){
                valores[i] = 0;
            }
        }
    }

    console.log(valores);
}else{
    console.log(-1);
}