$(document).ready(function() {

function initialize() {
    var myLatlng = new google.maps.LatLng(19.350449,-99.144291);
    var mapOptions = {
        zoom: 2,
        center: myLatlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    map = new google.maps.Map(document.getElementById("maps"), mapOptions);

}

//google.maps.event.addDomListener(window, 'load', initialize);

initialize();

function addMarker(latitude,longitude){
    var marker = new google.maps.Marker({
        map:map,
        draggable:false,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(latitude,longitude)
    });
}
    var $container = $('ul.tweets'),
    socket = io.connect('http://localhost:3000/'),
    // socket = io.connect('http://192.241.238.64:3000/'),
    template = $('#tweetTemplate');          
    socket.on('twitter', function(data) {
        if (data.geo) console.log(data.geo.coordinates[0] + ' ' + data.geo.coordinates[1]);
        if (data.geo) addMarker(data.geo.coordinates[0],data.geo.coordinates[1]);
        $('.tweets').prepend('<li>' + data.text + '</li>');
        //$container.append(template.render(data));
    });
});




