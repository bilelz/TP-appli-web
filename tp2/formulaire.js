

function Validation() {
    var nomValue = document.querySelector("#nom").value;
    var prenomValue = document.querySelector("#prenom").value;
    var dtnValue = document.querySelector("#dtn").value;
    var adresseValue = document.querySelector("#adresse").value;
    var telValue = document.querySelector("#tel").value;


    if (nomValue == "" && document.querySelector("#nom").value.length <= 5) {
        document.querySelector("#error").textContent = "La saisi d'un nom correct est obligatoire"
        document.querySelector("#error").removeAttribute("Hidden");
        document.querySelector("#nom").textContent = "";   
    }

else if (prenomValue == "") {
            document.getElementById("error").innerHTML = "La saisie du prenom est obligatoire";
            document.querySelector("#error").removeAttribute("Hidden");
        }
    

        else if (dtnValue == "") {
            document.getElementById("error").innerHTML = "La saisie de la date de naissance est obligatoire";
            document.querySelector("#error").removeAttribute("Hidden");
        }

        else if (adresseValue == "") {
            document.getElementById("error").innerHTML = "La saisie de l'adresse est obligatoire";
            document.querySelector("#error").removeAttribute("Hidden");
        }

        else if (telValue == "") {
            document.getElementById("error").innerHTML = "La saisie du numéro de téléphone est obligatoire";
            document.querySelector("#error").removeAttribute("Hidden");
        }

    
    else {
        document.getElementById("valid").innerHTML = "Bienvenue à vous" + " " + document.querySelector("#prenom ").value + " " + document.querySelector("  #nom").value;
        document.querySelector("#valid").removeAttribute("Hidden");
        
    }
}
