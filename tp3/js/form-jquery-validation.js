$(document).ready(function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");
    $("#bouton").on("click",function(event){
        event.preventDefault();
        let Nom = $("#Nom").val();
        let Prénom = $("#Prénom").val();
        let Date_de_naissance = $("#Date_de_naissance").val();
        let Adresse = $("#Adress").val();
        let email = $("#eMail").val();

        if (Nom=="") {

            let messageErreur = "La saisie du nom est obligatoire ";
            
            $(".modal-title").text("Erreur");
            $(".modal-body").html('<p>'+ messageErreur+'</p>');
            $('#myModal').modal("show");


        }
         else if (Prénom=="") {

            let messageErreur = "La saisie du prenom est obligatoire ";
           
            $(".modal-title").text("Erreur");
            $(".modal-body").html('<p>'+ messageErreur+'</p>');
            $('#myModal').modal("show");

        }
        else if (Date_de_naissance=="") {

            let messageErreur = "La date de naissance  est obligatoire ";
            
            document.getElementById("invalide").innerHTML = messageErreur;
            $(".modal-title").text("Erreur");
            $(".modal-body").html('<p>'+ messageErreur+'</p>');
            $('#myModal').modal("show");

        }
        else if (Adresse=="") {

            let messageErreur = "La saisie de l'adresse est obligatoire ";
            document.getElementById("invalide").innerHTML = messageErreur;
            $(".modal-title").text("Erreur");
            $(".modal-body").html('<p>'+ messageErreur+'</p>');
            $('#myModal').modal("show");

        }
      else if (email=="") {

            let messageErreur = "L'email est obligatoire ";
            document.getElementById("invalide").innerHTML = messageErreur;
            $(".modal-title").text("Erreur");
            $(".modal-body").html('<p>'+ messageErreur+'</p>');
            $('#myModal').modal("show");
      
        }
      else {
        var address = $("#Adresse").val();
        var lien = "http://maps.google.com/maps?q="+address;
            $(".modal-title").text("bienvenue, " + Prénom + Nom).val();
            $(".modal-body").html('Vous êtes née le:'+$("#Date_de_naissance").val() + "et vous habitez a");
            $(".image").html('<a href="'+lien+'"><img src="https://maps.googleapis.com/maps/api/staticmap?markers='+address+'&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/><a>');
            $('#myModal').modal("show");
            //document.getElementById("invalide").innerHTML = messageErreur-->
        }
    });

        
    

    function afficherErreur(document) {
        document.getElementById("valide").innerHTML = "";
        document.getElementById('valide').classList.remove('valide');
        document.getElementById('invalide').classList.add('invalide');
    }
    
    // Y mettre le code jQuery pour valider tous les champs du formulaire
});
