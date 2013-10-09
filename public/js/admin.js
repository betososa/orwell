var proceso;
pico.load("busqueda");

function busca(){
    busqueda.busca(function(response){
        proceso = response;
        if (proceso != 0 ) {
            $.ajax({
                url: 'http://187.162.45.69:8000/services/sentimentServices/track.xsodata/TRACK/?$format=json',
                type: "GET",
                username: 'carlos',
                password: 'QAZwsx123',
                success: function (data, status, req) {
                    document.getElementById('message').innerHTML = "Actualmente se esta buscando la palabra: " + data.d.results[0].TRACK_WORDS;
                    $.ajax({
                        url: '/track',
                        type: "POST",
                        data: {
                            keyword: data.d.results[0].TRACK_WORDS
                        }
                    });
                    socket = io.connect('http://localhost:3000/'),
                    socket.on('twitter', function(data) {
                    console.debug(data);
                        $('.tweets').prepend('<li>' + data.text + '</li>');
                        //$container.append(template.render(data));
                    });
                },
                error: function (data, status, req) {
                    alert("error");
                },
            });
        };

    });
};

$(document).ready(function(){


    busca();

    function lanza(){
        tr = document.getElementById("textTrack").value;
        busqueda.track(tr, function(response){
            document.getElementById('message').innerHTML = "Se inició una nueva búsqueda."
        });
    };

    function detener(){
        busqueda.killpid(function(response){
            document.getElementById('message').innerHTML = "Se detuvo la búsqueda."
            console.log(response);
        });
        socket.disconnect();
    };

    function test(){
        busqueda.prueba(function(response){
            alert(response);
        })
    }

    $( '#lanzar' ).click(function() {
        lanza();
    })

    $( '#detener' ).click(function() {
        detener();
    })


})