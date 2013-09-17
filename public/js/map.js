var map;
var i=0;
var markersArray = [];

function initialize() {
    var myLatlng = new google.maps.LatLng(19.350449,-99.144291);
    var mapOptions = {
        zoom: 10,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    google.maps.event.addListener(map, 'click', function(event) {
        if (i > 1) return false;
        console.log('inicial i ---> ' + i);
        console.log('---> ' + i);
        placeMarker(event.latLng);
        console.log(event.latLng.ob);
        i++;
    });
}

function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
    markersArray.push(marker);
}

function deleteOverlays() {
    console.log('click ' + i);
    if (markersArray) {
        i = 0;
        for (j in markersArray) {
            markersArray[j].setMap(null);
        }
        markersArray.length = 0;
    }
}

google.maps.event.addDomListener(window, 'load', initialize);