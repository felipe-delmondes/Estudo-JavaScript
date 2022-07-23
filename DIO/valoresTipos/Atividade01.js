var texto = "arara"

//Método 1 - Separa em array, reverte e depois transforma em String novamente.
let reverso = texto.split("").reverse().join("");

if (texto === reverso){
    console.log("É palíndromo!");
}else{
    console.log("Não é palíndromo!");
}

//Método 2 - Itera na String comparando letra a letra.

let palindromo = true
for(let letter=0; letter < texto.length; letter++){
    if (texto[letter] == texto[texto.length-1-letter]){
        console.log("Letra " + texto[letter] + " bate.");
    }else{
        palindromo = false
    }
}

console.log(palindromo?"É palíndromo":"Não é palíndromo");

