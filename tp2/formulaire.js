function validation() {
    // The function returns the product of p1 and p2
    var nom = document.getElementById('nom').value;
    var prenom = document.getElementById('prenom').value;
    var naissance = document.getElementById('naissance').value;
    var adresse = document.getElementById('adresse').value;
    var email = document.getElementById('email').value;

    if (nom.length < 5) {
        resultat.style.display = 'none';
        error.style.display = 'block';


        var d = document.querySelector("#error");
        d.style.backgroundColor = 'rgb(182, 82, 137)';
        d.style.padding = '5px';
        d.style.border = '1px black';
        error.innerHTML = "la saisie du nom est obligatoire ! "

    } else if (prenom.length < 5) {
        resultat.style.display = 'none';
        error.style.display = 'block';
        var d = document.querySelector("#error");
        d.style.backgroundColor = 'rgb(182, 82, 137)';
        d.style.padding = '5px';
        d.style.border = '1px black';
        error.innerHTML = "la saisie du prenom est obligatoire ! ";

    } else if (adresse.length < 5) {
        resultat.style.display = 'none';
        error.style.display = 'block';
        var d = document.querySelector("#error");
        d.style.backgroundColor = 'rgb(182, 82, 137)';
        d.style.padding = '5px';
        d.style.border = '1px black';
        error.innerHTML = "la saisie  d'adresse est obligatoire ! "
    } else if (email.length < 5) {
        resultat.style.display = 'none';
        error.style.display = 'block';
        var d = document.querySelector("#error");
        d.style.backgroundColor = 'rgb(182, 82, 137)';
        d.style.padding = '5px';
        d.style.border = '1px black';
        error.innerHTML = "la saisie de mail est obligatoire ! "

    } else if (naissance.length < 5) {
        resultat.style.display = 'none';
        error.style.display = 'block';
        var d = document.querySelector("#error");
        d.style.backgroundColor = 'rgb(182, 82, 137)';
        d.style.padding = '5px';
        d.style.border = '1px black';
        error.innerHTML = "la saisie de la date de naissancee est obligatoire ! ";
    } else {
        error.style.display = 'none';
        resultat.style.display = 'block';

        var d = document.querySelector("#resultat");
        d.style.backgroundColor = 'rgb(0, 128, 0)';
        d.style.padding = '5px';
        var t = document.getElementById("resultat");
        t.style.color = "rgb(255, 255, 255)";
        t.innerHTML = "Bienvenue" + " " + document.querySelector("#Prenom").value;
    }



}