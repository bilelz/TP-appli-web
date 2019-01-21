$(document).ready(function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");

    // Y mettre le code jQuery pour valider tous les champs du formulaire

    $("#submit").on("click", function (event) {
        event.preventDefault();
        console.log("click");

        if ($('#nom').val().length < 5 || $('#nom').val() == "") {
            $(".modal-body").text("Erreur sur le nom");
            $('#myModal').modal("show");
        }
            /* else if ($('#prenom').val() < 5 || $('#prenom').val() == "") {
                $(".modal-body").text("Erreur sur le prenom");
                $('#myModal').modal("show");
            }
            else if ($('#datedenaissance').val() < 5 || $('#datedenaissance').val() == "") {
                $(".modal-body").text("Erreur sur la date de naissance");
                $('#myModal').modal("show");
            }
            else if ($('#email').val() < 5 || $('#email').val() == "") {
                $(".modal-body").text("Erreur sur l'Email");
                $('#myModal').modal("show");
            }
            else if ($('#adresse').val() < 5 || $('#adresse').val() == "") {
                $(".modal-body").text("Erreur sur l'adresse");
                $('#myModal').modal("show");

            }*/
             
        else {

            /*document.getElementById('msg1').innerHTML= document.querySelector("#datedenaissance").value;*/
            $(".modal-body2 .maps img").attr("src", "https://maps.googleapis.com/maps/api/staticmap?markers=" + $("#adresse").val() + "&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg");
            document.getElementById('msg2').innerHTML=  document.querySelector("#adresse").value ;
            $('#myModal2').modal("show");
        }
    
    });
});