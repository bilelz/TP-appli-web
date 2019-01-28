function valide()
 {
    var nomValue = document.querySelector("#Nom").value;
    var prenomValue = document.querySelector("#Prénom").value;
    var dateValue = document.querySelector("#datedenaissance").value;
    var adresseValue = document.querySelector("#Adresse").value;
    var emailValue = document.querySelector("#Mail").value;

    if (nomValue.length==0) {
        document.querySelector("#erreur").textContent="le champ nom est vide  ";
    }
    else
    if (nomValue.length<5) {
        document.querySelector("#erreur").textContent="le nom doit contenir au moins 5 caractères ";
    }
    else
    if (prenomValue.length==0) {
        document.querySelector("#erreur").textContent="le champ prénom est vide ";
    }
    else
    if (prenomValue.length<5) {
        document.querySelector("#erreur").textContent="le prénom doit contenir au moins 5 caractères ";
    }
    else
    if (dateValue.length==0) {
        document.querySelector("#erreur").textContent="le champ date est vide  ";
    }
    else
    if (dateValue.length<5) {
        document.querySelector("#erreur").textContent="la date doit contenir au moins 5 caractères ";
    }
    else
    if (adresseValue.length==0) {
        document.querySelector("#erreur").textContent="le champ d'adresse est vide";
    }
    else
    if (adresseValue.length<5) {
        document.querySelector("#erreur").textContent="l'adresse doit contenir au moins 5 caractères ";
    }
    else
    if (emailValue.length==0) {
        document.querySelector("#erreur").textContent="le champ email est vide";
    }
    else
    if (emailValue.length<5) {
        document.querySelector("#erreur").textContent="l'email doit contenir au moins 5 caractères ";
    }
    
    else
    
    if (nomValue.length>=5 && prenomValue.length>=5 && dateValue.length>=5 && emailValue.length>=5 &&adresseValue.length>=5)
    {
    	document.querySelector("#resultat").removeAttribute("hidden");
        document.querySelector("#resultat").textContent="Bienvenue  " + document.querySelector("#Nom").value + " " + document.querySelector("#Prénom").value;
        document.querySelector("#erreur").textContent=""; 
    }
 }