console.log("Hello World!");

var currentNummerWrapper = document.getElementById("currentNummer")
var currentNummer = 0;

document.getElementsByName('subtrair')[0].addEventListener("click", decrement); 
document.getElementsByName('adicionar')[0].addEventListener("click", increment); 


function increment(){
    currentNummer = currentNummer + 1;
    currentNummerWrapper.innerText =  currentNummer;
    checkNegativeValues();
}

function decrement(){
    currentNummer = currentNummer - 1;
    currentNummerWrapper.innerText = currentNummer;
    checkNegativeValues();
}

function checkNegativeValues(){
    if (currentNummer <= 0){
        currentNummerWrapper.style.color = 'red'
        document.getElementsByName('subtrair')[0].disabled = true;
    }else{
        currentNummerWrapper.style.color = 'black'
        document.getElementsByName('subtrair')[0].disabled = false;
    }
    
}