//Creer une fonction qui receptionne le nom/prenom/age et l'utilise dans une alert.

function abracadabra(){
    let name = prompt('Quel est votre nom?');
    let surname = prompt('Quel est votre prenom?');
    let age = prompt("Quel est votre age?");
    alert(`Sapristi ! On ne m'avait pas prévenu que c'était vous, ${surname} ! Euh... Je veux dire... Monsieur le grand magicien ${name} ! Cela fait déjà ${age} ans que vous faites rayonner notre contrée !`);
}

abracadabra();