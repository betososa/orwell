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

for (var key in cities) {
    var data = cities[key];
    var marker = new google.maps.Marker({
        position: new google.maps.LatLng (data[0], data[1]),
        map: map,
        icon: image,
        title: 'test',
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





        var chartTwitsPHour = new Highcharts.Chart({
            chart: {
                renderTo: 'twiters',
                type: 'column',
                margin: [ 50, 50, 100, 80]
            },
            title: {
                text: 'Twitter Users'
            },
            xAxis: {
                categories: categories,
                labels: {
                    rotation: -45,
                    align: 'right',
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Twits'
                }
            },
            legend: {
                enabled: false
            },
            series: [{
                name: 'Twits',
                data: data,
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    x: 4,
                    y: 10,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif',
                        textShadow: '0 0 3px black'
                    }
                }
            }]
        });







function TrackWords(array){
  tw.stream('statuses/filter',{track:array},function(stream){
    stream.on('data',function(data){
      console.log(data.text);
    });
  });
}


<div class="six columns">
            <h4>Top of the Charts</h4>
            <div class="row">
                <div class="two phone-one columns">
                    <a href="#"><img src="http://placehold.it/80x100"></a>
                </div>
                <div class="ten phone-three columns">
                    <h5 class="right">$85k</h5>
                    <h4><a href="#">Tetris</a></h4>
                    <p>This newfangled game has you slotting together blocks in soviet Russia. Weird, but fun.</p>
                </div>
            </div>
            <div class="row">
                <div class="two phone-one columns">
                    <a href="#"><img src="http://placehold.it/80x100"></a>
                </div>
                <div class="ten phone-three columns">
                    <h5 class="right">$52k</h5>
                    <h4><a href="#">Pong</a></h4>
                    <p>The original and best game ever. Its like Tennis, and so realistic!</p>
                </div>
            </div>
            <div class="row">
                <div class="two phone-one columns">
                    <a href="#"><img src="http://placehold.it/80x100"></a>
                </div>
                <div class="ten phone-three columns">
                    <h5 class="right">$35k</h5>
                    <h4><a href="#">Centipede</a></h4>
                    <p>We're pretty sure this is a game about drugs, but it's on the charts, so here you go.</p>
                </div>
            </div>
        </div>




                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }



        tooltip: {
                    formatter: function() {
                        return '<b>'+ this.point.percentage +'</b>: '+ this.percentage +' %';
                },









.updateStatus('Test tweet from ntwitter/' + twitter.VERSION,
    function (err, data) {
      console.log(data);
    }







