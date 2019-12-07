$(document).ready(function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    console.log("DOM ready!");

    // Ccalcuke de nbr de cractaire 
    $(document).keyup(function () {

        var nombreCaractere = $("#name").val().length;

        var msg = nombreCaractere + ' car';
        $('#compteur1').text(msg);

        var nombreCaractere2 = $("#firstname").val().length;
        var msg2 = nombreCaractere2 + ' car';
        $('#compteur2').text(msg2);

    });


    $("#valider").on("click", function store(event) {
        event.preventDefault();

        var inputNom = document.getElementById("name");
        var inputPrenom = document.getElementById("firstname");
        var inputDn = document.getElementById("birth");
        var inputAdresse = document.getElementById("adresse");
        var inputEmail = document.getElementById("mail");

        if ($("#name").val() !== "" && $("#firstname").val() !== "" && $("#birth").val() !== "" && $("#adresse").val() !== "" && $("#mail").val() !== "") {

            //stocker les valeurs saisie dans le navigateur
            localStorage.setItem("name", inputNom.value);
            localStorage.setItem("firstname", inputPrenom.value);
            localStorage.setItem("birth", inputDn.value);
            localStorage.setItem("adresse", inputAdresse.value);
            localStorage.setItem("mail", inputEmail.value);

            $('#success').addClass("alert alert-success").text(" Votre formulaire est sauvegardé.");

            $("#table").show();
            $("#liste_des_contacts").show();


            // ajout des valeurs saisie dans le tableau

        }


    });

    $("#gps").on("click", function () {
        getLocation();

    });

    $("#valider").on("click", function () {
        contactStore.add()

        var contactList = contactStore.getList();
        console.log(contactList)

        for (var index in contactList) {
            console.log(contactList[index].name);
            document.querySelector("table tbody").innerHTML =
                document.querySelector("table tbody").innerHTML +
                '<tr>' +
                '<td>' + contactList[index].name + '</td>' +
                '<td>' + contactList[index].firstname + '</td>' +
                '<td>' + contactList[index].date + '</td>' +

                '<td><a href="https://maps.google.com/maps?q=' + contactList[index].adress + '">' + contactList[index].adress + '</a></td>' +
                '<td>' + contactList[index].mail + '</td>' +
                '<tr>';
        }
    });



});