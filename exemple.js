// Creer une alerte et valider la requete customer.
/*

console.log("test");
if(confirm('Hello Friend')){
    alert('Thank you my friend');
}else{
    alert('You are a 404?');
}
*/

// Recuperer une infomation de la fenetre. 

//let age = prompt('Quel age as tu ?');
//alert(`Bonjour vous avez ${age}`);

//function alertName(name){
//    alert(`Bonjour ${name}`);
//}

//var nom = 'Mike';
//alertName(nom);

function prevoirAge(){
    let age = prompt("Quel est votre age?");
    age = Number(age);
    alert("vous avez " + (age + 1) + " ans");
}

prevoirAge();