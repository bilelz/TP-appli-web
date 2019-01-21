$(document).ready(function () {
    
    $('#nom').keyup(function() {
     
        // Le script qui devra calculer et afficher le nombre de mots et de caractères
        var nombreCaractere = $(this).val().length;
        $('#test1').text(nombreCaractere);
       
    })

    $('#prenom').keyup(function() {
      var nombreCaractere = $(this).val().length;
        $('#test2').text(nombreCaractere);
       
       })

       $('#adresse').keyup(function() {
     
        var nombreCaractere = $(this).val().length;
        $('#test3').text(nombreCaractere);
        
       })

       $('#prenom').keyup(function() {
     
        // Le script qui devra calculer et afficher le nombre de mots et de caractères
        var nombreCaractere = $(this).val().length;
        $('#test4').text(nombreCaractere);
        //document.getElementById("test").innerHTML=nombreCaractere;
       })
    
})
