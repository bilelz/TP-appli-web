$(document).ready(function () {




    $("#valid").on("click", function (event) {
        event.preventDefault()


        if ($("#Nom").val().length < 5) {

            $("#Nom").addClass('is-invalid');
            $(".help-block-nom").show();
        }
        if ($("#Prenom").val().length < 5) {
            $("#Prenom").addClass('is-invalid');
            $(".help-block-prenom").show();
        }

        if ($("#Adress").val().length < 5) {
            $("#Adress").addClass('is-invalid');
            $(".help-block-adress").show();
        }
        function isEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }
        if (!isEmail($("#Mail").val())) {

            $("#Mail").addClass('is-invalid');

            $(".help-block-email").show();
        }
        else {
            $('#myModal').modal("show");

            $(".modal-title").html(" Bienvenue " + $("#Nom").val());

            $(".modal-body").html(" vous etes né le  : " + $("#DateDeNaissance").val());
            $(".modal-body").append("<img src = 'https://maps.googleapis.com/maps/api/staticmap?markers=" + $("#Adress").val() +
                "&zoom=10&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' >");
            $('#myModal').modal("show");


        }
    }

    )
}

) 