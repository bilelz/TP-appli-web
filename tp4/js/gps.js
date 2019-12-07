// demande de la localisation à l'utilisateur

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        $("#map").html("Geolocation is not supported by this browser.");
    }
}

// Si l"utilisateur l'autorise, on récupère les coordonnées dans l'objet "position"
function showPosition(position) {
    var latlon = position.coords.latitude + "," + position.coords.longitude;
    var img_url = "https://maps.googleapis.com/maps/api/staticmap?markers=" + latlon + "&zoom=14&size=400x300&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg";
    //$("#adresse").val(latlon);
    $("#map").html("<img src='" + img_url + "'>");

    var geocoder = new google.maps.Geocoder();
    var latlng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    };

    geocoder.geocode({
        'location': latlng
    }, function (results, status) {
        if (status === 'OK') {
            if (results[0]) {

                $("#adresse").val(results[0].formatted_address);
            } else {
                window.alert('No results found');
            }
        } else {
            window.alert('Geocoder failed due to: ' + status);
        }
    });
}

// Au cas ou l'utilisateur refuse
// Ou si une erreur arrive
function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            $("#map").html("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            $("#map").html("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            $("#map").html("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            $("#map").html("An unknown error occurred.");
            break;
    }
}
