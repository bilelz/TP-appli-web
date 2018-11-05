function validation() {
    var name = document.getElementById("name").value.length;
    var Prenom = document.getElementById("Prénom").value.length;
    var Date_de_naissance = document.getElementById("Date_de_naissance").value.length;
    var Adresse = document.getElementById("Adresse").value.length;
    var mail = document.getElementById("mail").value.length;
    var er = document.querySelector("#error")
    var res = document.querySelector("#resultat");

    if (name < 5) {
        er.innerHTML = "le nom doit contenir 5 element";
        res.style.display = "none";
        er.style.display = "block";

    }
    else if (Prenom < 5) {
        er.innerHTML = "le Prénom doit contenir 5 element";
        res.style.display = "none";
        er.style.display = "block";

    }
    else if (Date_de_naissance < 5) {
        er.innerHTML = "le Date_de_naissance doit contenir 5 element";
        res.style.display = "none";
        er.style.display = "block";

    }
    else if (Adresse < 5) {
        er.innerHTML = "le addresse doit contenir 5 element";
        res.style.display = "none";
        er.style.display = "block";

    }
    else if (mail < 5) {
        er.innerHTML = "le mail doit contenir 5 element";
        res.style.display = "none";
        er.style.display = "block";

    }
    else {
        er.style.display = "none";
        res.style.display = "block";

        res.innerHTML = "Bienvenue " + document.querySelector("#Prénom").value;
    }

}