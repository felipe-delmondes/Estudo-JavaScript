//Tipagem dinâmica e fraca.

let nome = "Felipe";
let sobrenome = "Delmondes";

let nomeCompleto = nome + " " + sobrenome;
//Vai retornar String
typeof(nomeCompleto);

console.log(nomeCompleto);

//Também há diversas propriedades e métodos associados a uma string, mesmo que ela seja primitiva...

nomeCompleto.length;
console.log(nomeCompleto.length);

//Além disso é possível acessar as posições em uma String usando os colchetes

console.log(nomeCompleto[0]);

//Usando a crase???
let nomeCompleto2 = `${nome} ${sobrenome}`

console.log(nomeCompleto2);

//Arrays

let array = [];

//Adiciona elemento no final do array
array.push(3);
//Retira elemento do final do array
array.pop();

//Retira elemento do início do array
array.shift();
//Adiciona elemento no início do array
array.unshift();

for(let i=0; i<array.length; i++){

    array[i];
}

//Checa se o 3 pertence ao array.
array.includes(3);

//Inverte o array.
array.reverse();

//Declaração de objetos
//Contem as Keys e os valores

let person = {
    name: 'John',
    age: 20
};

console.log(person.name);

//Novas keys podem ser adicionadas posteriormente.
person.address = "Rua Salvador";

person["newKey"] = "Nova chave";

console.log(person);




