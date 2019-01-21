
$(document).ready(function () {
    $("#gps").on("click", function (e) {
        e.preventDefault();

    });



    $("#valider").on("click", function (e) {
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


        else if ($('#date').val().length < 5 || $('#date').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }


        else if ($('#adresse').val().length < 5 || $('#adresse').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }
        else if ($('#mail').val().length < 5 || $('#mail').val() == "") { // si la chaîne de caractères est inférieure à 5
            $('#myModal').modal("show");
        }
        else {


            $("#valider").on("click", function (event) {
                event.preventDefault();

                var innom = document.getElementById("nom");
                var inprenom = document.getElementById("prenom");
                var inbirth = document.getElementById("date");
                var inadresse = document.getElementById("adresse");
                var inmail = document.getElementById("mail");


                //stocker les valeurs saisie dans le navigateur
                localStorage.setItem("nom", innom.value);
                localStorage.setItem("prenom", inprenom.value);
                localStorage.setItem("date", inbirth.value);
                localStorage.setItem("adresse", inadresse.value);
                localStorage.setItem("mail", inmail.value);

                $('#success').addClass("alert alert-success").text("Sauvegarde réussie.");

                $("#tablee").show();

                // ajout des valeurs saisies dans le tableau
                document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
                    .innerHTML + '<tr><td>' + localStorage.getItem("nom") +
                    '</td><td>' + localStorage.getItem("prenom") +
                    '</td><td>' + localStorage.getItem("date") +
                    '</td><td><a href="https://maps.google.com/maps?q=' + localStorage.getItem("adresse") + '">' + localStorage.getItem("adresse") + '</a></td><td><a href=mailto:>'
                    + localStorage.getItem("mail") + '</a></td>';

             
            });



        }

        var urls = document.querySelectorAll('.mapUrl');

        [].forEach.call(urls, function (item) {
            // do whatever
            item.setAttribute("href", "http://maps.google.com/maps?q=" + document.querySelector("#adresse").value);

        });
    });







});