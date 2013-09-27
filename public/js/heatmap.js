// Adding 500 Data Points
var map, pointarray, heatmap;

var twitData = [];

function loadCoords() {
    $.ajax({
        url: 'http://187.162.45.69:8000/services/sentimentServices/coord.xsodata/COORD/?$format=json',
        type: "GET",
        username: 'carlos',
        password: 'QAZwsx123',
        success: function (data, status, req) {
            for (i in data.d.results) {
                twitData.push(new google.maps.LatLng(data.d.results[i].LATITUD, data.d.results[i].LONGITUD))
            }
        initialize();
        },
        error: function (data, status, req) {
            alert("error");
        },
    });
}

function initialize() {

    var mapOptions = {
        zoom: 4,
        center: new google.maps.LatLng(19.350449,-99.144291),
        mapTypeId: google.maps.MapTypeId.SATELLITE
    };

    map = new google.maps.Map(document.getElementById('heatMap'),
        mapOptions);

    console.log(twitData);
    var pointArray = new google.maps.MVCArray(twitData);

    heatmap = new google.maps.visualization.HeatmapLayer({
        data: pointArray
    });

    heatmap.setMap(map);

}

google.maps.event.addDomListener(window, 'load', loadCoords);
