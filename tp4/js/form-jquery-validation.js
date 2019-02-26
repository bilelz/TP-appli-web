$( document ).ready(function(){
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    
     
     // Y mettre le code jQuery pour valider tous les champs du formulaire
     $("#submit").on("click",function(event){
       
        event.preventDefault();
       if($("#name").val().length < 5){
            $(".modal-body").text("nom requis");
            $("#myModal").modal("show");
        }else  if($("#firstname").val().length < 5){
            $(".modal-body").text("prenom requis");
            $("#myModal").modal("show");
        } 
        else if($("#mail").val().length < 5){
            $(".modal-body").text("email requis");
            $("#myModal").modal("show");
        }
        else  if($("#birth").val().length == ""){
            $(".modal-body").text("date requis");
            $("#myModal").modal("show");
        }

        else{
           
            contactStore.add($("#name").val(),$("#firstname").val(),$("#birth").val(),$("#adresse").val(),$("#mail").val());
            ajouterElement();

            }
        
     });

     function ajouterElement(){
        var lastElement = contactStore.getList()[contactStore.getList().length -1]; 
        var newElement = "<tr> <td> " + lastElement.name +"</td> <td>" +lastElement.firstname +"</td>"
        +"<td>"+ lastElement.date +"</td>"
        +"<td>"+ lastElement.adress
       +" </td>"
        +"<td>"
        +lastElement.mail
        +"</td>"
   +" </tr>";
   $( '#maTable' ).append( newElement );
     }

     $("#gps").on("click",function(event){

        event.preventDefault();
        getLocation();
     });
     
     $(document).ready(function(){
        $("#name").keypress(function(){
          $("#span1").text($("#name").val().length);
        });
        $("#name").keyup(function(){
            $("#span1").text($("#name").val().length);
          });
          $("#name").keydown(function(){
            $("#span1").text($("#name").val().length);
          });
      });
  
     

 });