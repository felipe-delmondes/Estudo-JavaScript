

document.getElementsByName('adicionar')[0].addEventListener("click", adicionaItem); 
document.getElementsByName('adicionar')[0].addEventListener("click", adicionaItem); 


function adicionaItem(){

    var currentItem = document.getElementsByName("novaTarefa")[0].value;


    var checkbox = document.createElement('input');
    
    checkbox.type = "checkbox";
    checkbox.value = "false";


    var newP = document.createElement("p");
    
    newP.innerHTML = currentItem;

    var DivLista = document.getElementById("tasks");

    var DivItem = document.createElement("div");

    DivItem.className = "SelectItem"

    DivLista.appendChild(DivItem);

    DivItem.appendChild(checkbox);
    DivItem.appendChild(newP);


    

}

