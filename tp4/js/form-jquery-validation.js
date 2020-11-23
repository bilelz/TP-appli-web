$(document).ready(function () {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    // console.log( "DOM ready!" );
    // Y mettre le code jQuery pour valider tous les champs du formulaire
    
    var xTriggered = 0;
    $( '#name' ).keyup(function( event ) {
     xTriggered++;
     $("span").html($( '#name' ).val().length +  " caract");
     //$.print( msg, "html" );
     
    }).keydown(function( event ) {
     if ( event.which == 0) {
       event.preventDefault();
     }
    });

    var yTriggered = 0;
$( '#firstname' ).keyup(function( event ) {
 yTriggered++;
 $("#pré").html($( '#firstname' ).val().length +  " caract");
 //$.print( msg, "html" );
 
}).keydown(function( event ) {
 if ( event.which == 0) {
   event.preventDefault();
 }

});
    

    $("#valider").on("click", function (event) {
        event.preventDefault();
        //console.log( "click" ); 
        
        {
             //contactStore.add("qsdqsd","qsdqsd","dsqfsdf","dsfsdfsdf","dsfsdfsdf");
            contactStore.add($("#name").val(),$("#firstname").val(),$("#adresse").val(),$("#birth").val(),$("#mail").val());
            contactList = contactStore.getList();
            $("tbody").html('');
            for(var index in contactList){
                $("tbody").append('<tr><td>'+contactList[index].name+'</td><td>'+contactList[index].firstname+'</td><td>'+contactList[index].date+'</td><td>'+contactList[index].adress+'</td><td>'+contactList[index].mail+'</td></tr>');
             }
        }
    });


$("#GPS").click(function (event) {
    event.preventDefault();
    console.log("click");
    getLocation()
   
});



});