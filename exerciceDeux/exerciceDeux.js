//Creer une fonction IMC

function imc(taille, poid){
    let imc = poid / (taille * taille);
    return imc;
}

let taille = prompt('Quel est votre taille en cm?');
let poid = prompt('Quel est votre poid?');

taille = taille / 100;

let imc2 = imc(taille, poid).toFixed(1);
alert(`Votre IMC : ${imc2}`);


//.tofixed marche avec une fonction. Permet 