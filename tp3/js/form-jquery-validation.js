$(document).ready(function () {
    $("#submit").on("click", function (e) {
        e.preventDefault();

        // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
        // voir plus : https://www.w3schools.com/js/js_htmldom.asp
        console.log("DOM ready!");

        // Y mettre le code jQuery pour valider tous les champs du formulaire




        if ($('#nom').val().length < 5 || $('#nom').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }


        else if ($('#prenom').val().length < 5 || $('#prenom').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }


        else if ($('#datedenaissance').val().length < 5 || $('#datedenaissance').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }


        else if ($('#adresse').val().length < 5 || $('#adresse').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }
        else if ($('#email').val().length < 5 || $('#email').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }
        else {
            //$('#myModal2').modal("show");
            
            $(".modal-body2 .maps img").attr("src", "https://maps.googleapis.com/maps/api/staticmap?markers=" + $("#adresse").val() + "&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg");
            document.getElementById('msg').innerHTML=  "Vous etes nés le: "+document.querySelector("#datedenaissance").value ;
            document.getElementById('msg2').innerHTML= "Vous habitez au: "+ document.querySelector("#adresse").value ;
            $('#myModal2').modal("show");

        }
    });
});