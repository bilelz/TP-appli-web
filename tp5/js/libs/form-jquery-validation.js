$(document).ready(function () {
    $("#submit").on("click", function (event) {
        event.preventDefault();

    

        if ($("#name").val().length < 5) {
            $(".modal-body").text("Nom requis");

            console.log("Je suis une chaîne".length);
            $("#myModal").modal("show");
           
        

        }

        else if ($("#firstname").val().length < 5) {
            $(".modal-body").text("Prenom requis");


            $("#myModal").modal("show");
        }

        else if ($("#birth").val().length < 5) {
            $(".modal-body").text("Date requis");

            $("#myModal").modal("show");

        


        }

        else if ($("#adresse").val().length < 5) {
            $(".modal-body").text("Adresse requis");

            $("#myModal").modal("show");
           
        }

        else if ($("#mail").val().length < 5) {
            $(".modal-body").text("Email requis");
            $("#myModal").modal("show");
        }


        else {


            $(".modal-title").html("Bienvenue " + $("#name").val());

            $(".modal-body").html(" vous etes né le  : " + $("#birth").val());
            $(".modal-body").append("<img src = 'https://maps.googleapis.com/maps/api/staticmap?markers=" + $("#adresse").val() +
                "&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' >");
            $('#myModal').modal("show");

        }

        // Y mettre le code jQuery pour valider tous les champs du formulaire
    });

 /*$("#gps").on("click", function (event) {
      event.preventDefault();
          });*/
          


          
        
        $(document).ready(function(){
            $("#name").keypress(function(){

              $("#s1").text($("#name").val().length);
              });
              $("#name").keydown(function(){
                
               $("#s1").text($("#name").val().length);

               });
               $("#name").keyup(function(){
                
                    $("#s1").text($("#name").val().length);
                    });
      

               });
            
               $(document).ready(function(){
                $("#firstname").keypress(function(){
    
                  $("#s2").text($("#firstname").val().length);
                  });
                  $("#firstname").keydown(function(){
                    
                    $("#s2").text($("#firstname").val().length);
    
                    });
                    $("#firstname").keyup(function(){
                    
                        $("#s2").text($("#firstname").val().length);
                        });
          
    
                   });



          $(document).ready(function(){
            $("#mail").keypress(function(){

              $("#s4").text($("#mail").val().length);
              });
              $("#mail").keydown(function(){
                
                $("#s4").text($("#mail").val().length);

                });
                $("#mail").keyup(function(){
                
                    $("#s4").text($("#mail").val().length);
                    });
      

               });
            
        
            });
         
        

  
       
       $("#gps").on("click",function() { 
           getLocation();
           
       });

       $("#valider").on("click",function() { 
           contactStore.add()

           var contactList = contactStore.getList();
           console.log(contactList)
           
           for(var index in contactList){
               console.log(contactList[index].name);
               document.querySelector("table tbody").innerHTML = 
               document.querySelector("table tbody").innerHTML +
               '<tr>'+
                   '<td>'+contactList[index].name+'</td>'+
                   '<td>'+contactList[index].firstname+'</td>'+
                   '<td>'+contactList[index].date+'</td>'+
              /*     '<td>'+contactList[index].adress+'</td>'+   */
                   '<td><a href="https://maps.google.com/maps?q=' +contactList[index].adress+'">' + contactList[index].adress +'</a></td>'+
                   '<td>'+contactList[index].mail+'</td>'+
               '<tr>';
             }
       });




            