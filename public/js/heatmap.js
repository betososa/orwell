var map;
var i=0;
var markersArray = [];

function initialize() {
    var myLatlng = new google.maps.LatLng(19.350449,-99.144291);
    var mapOptions = {
        zoom: 2,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(document.getElementById("heatMap"), mapOptions);

}

    // $.ajax({
    //     url: 'http://187.162.45.69:8000/services/sentimentServices/coord.xsodata/COORD/?$format=json',
    //     type: "GET",
    //     username: 'carlos',
    //     password: 'QAZwsx123',
    //     success: function (data, status, req) {
    //         for (i in data.d.results) {
    //             var marker = new google.maps.Marker({
    //                 position: new google.maps.LatLng(data.d.results[i].LATITUD, data.d.results[i].LONGITUD),
    //                 map: map
    //             });
    //         }
    //     },
    //     error: function (data, status, req) {
    //         alert("error");
    //     },
    // });



google.maps.event.addDomListener(window, 'load', initialize);
