$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
     $("#valider").on("click",function(event){ 
        event.preventDefault(); 
        $('#myModal').modal("show");
        
        console.log( "click" ); 
        var nom = $ ("name").val();
        var prenom = $ ("firstname").val();
        var date_naissance =$ ("birth").val();
        var adresse = $ ("Adresse").val();
        var mail = $ ("mail").val();
        
    
        if (nom < 5) {
            $(".modal-title").text("Erreur");
            $(".modal-body").html("la saisie du nom est obligatoire ! ");
            $('#myModal').modal("show");
    
    
        } else if (prenom < 5) {
         
            
            $(".modal-title").text("Erreur");
            $(".modal-body").html("la saisie du prenom est obligatoire ! ");
            $('#myModal').modal("show");
    
        } else if (date_naissance < 5) {
            $(".modal-title").text("Erreur");
            $(".modal-body").html("la saisie du la date de naissance est obligatoire ! ");
            $('#myModal').modal("show");
           
            
            
        } else if (adresse < 5) {
            $(".modal-title").text("Erreur");
            $(".modal-body").html("la saisie du l'adresse est  obligatoire ! ");
            $('#myModal').modal("show");
           
           
            
    
        } else if (mail < 5) {
            $(".modal-title").text("Erreur");
            $(".modal-body").html("la saisie du mail  est obligatoire ! ");
            $('#myModal').modal("show");
            
            
            
        } else {
    
            $(".modal-title").text("Bienvenue " + $("#nom").val()+ " "+$("#prenom").val());
            $(".modal-body").html("vous etes née le " + $("#date").val());
            $(".image").html("<img src='https://maps.googleapis.com/maps/api/staticmap?markers=paris&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg'>");
            $('#myModal').modal("show");
        }
    
    
    
    

     // Y mettre le code jQuery pour valider tous les champs du formulaire

 });
 $("#gps").on("click",function(event){
     var position = getLocation();
     if(position) {
        showPosition(position);
     }
 });
 });

