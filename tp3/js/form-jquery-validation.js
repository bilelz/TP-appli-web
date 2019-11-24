
 $( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
     console.log( "DOM ready!" );
      




            $("#envoyer").on("click", function (event) {
            event.preventDefault();
 
                if($("#nom").val().length =="")
                {
                    $('#myModal').modal("show");
                    $(".modal-title").text(" Veuillez remplir tout les champs");
                    $('.modal-body').text(" le champs nom ne doit pas etre vide ");
                }
                    else
                    { 
                        if($("#Prenom").val().length=="")
                        {
                                $('#myModal').modal("show");
                                $(".modal-title").text(" Veuillez remplir tout les champs !");
                                $('.modal-body').text(" le champs Prenom ne doit pas etre vide ");
                        }

                        else 
                        {
                            if($("#Adresse").val().length =="")
                            {
                                $('#myModal').modal("show");
                                $(".modal-title").text(" Veuillez remplir tout les champs !");
                                $('.modal-body').text(" le champs Adresse  ne doit pas etre vide ");
                            }
                            else 
                            {
                                if($("#datedenaissance").val().length =="")
                                {
                                $('#myModal').modal("show");
                                $(".modal-title").text(" Veuillez remplir tout les champs !");
                                $('.modal-body').text(" le champs date de naissance ne doit pas etre vide ");
                                }
                                else
                                {
                                        if($("#email").val().length =="")
                                        {
                                        $('#myModal').modal("show");
                                        $(".modal-title").text(" Veuillez remplir tout les champs !");
                                        $('.modal-body').text(" le champs email  ne doit pas etre vide ");
                                        }
                                        else
                                        {
                                            if($("#nom").val() !== "" && $("#Prenom").val() !== "" && $("#datedenaissance").val() !== "" 
                                            && $("#Adresse").val() !== "" && $("#email").val() !== "" )
                                            {
                                                    $('#myModal').modal("show");
                                                    $(".modal-title").html("Welcom       "  + document.querySelector("#Prenom").value 
                                                    +"       "  + document.querySelector("#nom").value     );
                                                    

                                                    
                                                    $('.modal-body').html("Vous étes né le: "+ document.querySelector("#datedenaissance").value
                                                    +"</br>Vous Habitez à: "
                                                    + document.querySelector("#Adresse").value
                                                    
                                                    +'</br><a href="https://maps.google.com/maps?q='
                                                    +("#Adresse").value
                                                
                                                    +'"><img src="https://maps.googleapis.com/maps/api/staticmap?markers=' +document.querySelector("#Adresse").value+'&zoom=10&size=470x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"/></a>');

                                                     
                                            }
                                                        
                                        }
                                                    
                                }
                                                    
                            }
                            
                            
                        }
                        
                        
                    }
                
        
    });
  });

    
