
function validation() {
    var nomValue = document.querySelector("#nom").value;
    var prenomValue = document.querySelector("#prenom").value;
    var dateValue = document.querySelector("#datenaissance").value;
    var adresseValue = document.querySelector("#adresse").value;
    var emailValue = document.querySelector("#email").value;

    if (nomValue.length==0) {
        document.querySelector("#erreur").textContent="le champ nom est vide  ";
	document.querySelector("#resultat").textContent="";
    }	
    else
    if (nomValue.length<5) {
        document.querySelector("#erreur").textContent="le nom doit contenir au moins 5 caractères ";
	document.querySelector("#resultat").textContent="";
    }
    else
    if (prenomValue.length==0) {
        document.querySelector("#erreur").textContent="le champ prénom est vide ";
	document.querySelector("#resultat").textContent="";
    }
    else
    if (prenomValue.length<5) {
        document.querySelector("#erreur").textContent="le prénom doit contenir au moins 5 caractères ";
	document.querySelector("#resultat").textContent="";
    }
    else
    if (dateValue.length==0) {
        document.querySelector("#erreur").textContent="le champ date est vide  ";
	document.querySelector("#resultat").textContent="";
    }
    else
    if (dateValue.length<5) {
        document.querySelector("#erreur").textContent="la date doit contenir au moins 5 caractères ";
	document.querySelector("#resultat").textContent="";
    }
    else
    if (adresseValue.length==0) {
        document.querySelector("#erreur").textContent="le champ d'adresse est vide";
	document.querySelector("#resultat").textContent="";
    }
    else
    if (adresseValue.length<5) {
        document.querySelector("#erreur").textContent="l'adresse doit contenir au moins 5 caractères ";
	document.querySelector("#resultat").textContent="";
    }
    else
    if (emailValue.length==0) {
        document.querySelector("#erreur").textContent="le champ email est vide";
	document.querySelector("#resultat").textContent="";
    }
    else
    if (emailValue.length<5) {
        document.querySelector("#erreur").textContent="l'email doit contenir au moins 5 caractères ";
	document.querySelector("#resultat").textContent="";
    }
    else
    if (nomValue.length>=5 && prenomValue.length>=5 && dateValue.length>=5 && emailValue.length>=5 &&adresseValue.length>=5)
    {


        document.getElementById("resultat").innerHTML = "WELCOM " + document.querySelector("#nom  ").value + "   "+ document.querySelector("#prenom").value 
        
        document.querySelector("#erreur").textContent=""; }
        

}
