function askCalc(){
    let ask;
    do {
       ask = prompt("Quel calcul voulez-vous faire? \n\n 1 - addition\n 2 - multiplication \n 3 - soustraction \n 4 - division");
       ask = Number(ask);
    } while (isNaN(ask) == true || ask > 4 || ask < 1);
    return ask;
}

function askNumberOne(){
    let numberOne;
    do {
        numberOne = prompt("Ecrivez le premier chiffre");
        numberOne = Number(numberOne);
    } while (isNaN(numberOne));
    return numberOne;
}

function askNumberTwo(){
    let numberTwo;
    do {
        numberTwo = prompt("Ecrivez le deuxieme chiffre");
        numberTwo = Number(numberTwo);
    } while (isNaN(numberTwo));
    return numberTwo;
}

function operation(askCalc, numberOne, numberTwo){
    let result = 0;
    if(askCalc == 1){
        result = numberOne + numberTwo;
    }else if(askCalc == 2){
        result = numberOne * numberTwo;
    }else if(askCalc == 3){
        result = numberOne - numberTwo;
    }else if(askCalc == 4){
        result = numberOne/numberTwo;
    }
    alert('Le resultat de l\'operation est ' + result);
}

let askOperation = askCalc();
let numberOne = askNumberOne();
let numberTwo = askNumberTwo();
operation(askOperation,numberOne,numberTwo)

console.log("ask calc" + askOperation);
console.log("Numero 1" + numberOne);
console.log("Numero deux" + numberTwo);
console.log("Hello");
