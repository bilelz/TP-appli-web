
$(document).ready(function () {
    $("#gps").on("click", function (e) {
        e.preventDefault();
    
    });



    $("#Valider").on("click", function (e) {
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
             
           // $('#myModal2').modal("show");
           // document.getElementById('welcome').innerHTML = "Bienvenue  " + document.querySelector("#prenom").value;
           // document.getElementById('message').innerHTML = "Vous etes nés le  " + document.querySelector("#date").value + " et vous habitez ";
            //document.getElementById('message2').innerHTML = document.querySelector("#adresse").value;
            $("#valider").on("click",function store(event) { 
                event.preventDefault();
                
                    var inputNom= document.getElementById("nom");
                    var inputPrenom= document.getElementById("prenom");
                    var inputDn= document.getElementById("date");
                    var inputAdresse= document.getElementById("adresse");
                    var inputEmail= document.getElementById("mail");
                    
                    
                    //stocker les valeurs saisie dans le navigateur
                    localStorage.setItem("nom", inputNom.value);
                    localStorage.setItem("prenom", inputPrenom.value);
                    localStorage.setItem("date", inputDn.value);
                    localStorage.setItem("adresse", inputAdresse.value);
                    localStorage.setItem("mail", inputEmail.value);
    
                   $('#success').addClass("alert alert-success").text("Bravo! le formulaire est sauvegardé.");
    
                  // $("#tablee").show();
                   
                   // ajout des valeurs saisie dans le tableau
                   document.querySelector("table tbody").innerHTML = document.querySelector("table tbody")
                   .innerHTML +'<tr><td>'+localStorage.getItem("nom")+'</td><td>'+localStorage.getItem("prenom") +'</td><td>'+localStorage.getItem("date")+'</td><td><a href="https://maps.google.com/maps?q=' +localStorage.getItem("adresse")+'">'+localStorage.getItem("adresse") +'</a></td><td><a href=mailto:>'+localStorage.getItem("mail")+'</a></td>';
                   
                  
            });
            


             }

            var urls = document.querySelectorAll('.mapUrl');

            [].forEach.call(urls, function (item) {
                // do whatever
                item.setAttribute("href", "http://maps.google.com/maps?q=" + document.querySelector("#adresse").value);
            });
