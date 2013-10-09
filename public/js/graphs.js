$(document).ready(function() {

            socket = io.connect('http://localhost:3000/'),
            socket.on('twitter', function(data) {
            console.debug(data);
            var html = '<div class="two phone-one columns">' +
                    '<a href="#"><img src="' + data.user.profile_image_url + '"></a>' +
                    '</div>' +
                    '<div class="ten phone-three columns">' +
                    '<h5 class="right"></h5>' +
                    '<h4><a href="#">' + data.user.screen_name + '</a></h4>' +
                    '<p>' + data.text + '</p>' +
                    '</div>' +
                    '</div>';

            $('#fila').prepend(html)
                //$('.tweets').prepend('<li>' + data.text + '</li>');
                //$container.append(template.render(data));
            });


	// $.ajax({
	// 	url: 'http://187.162.45.69:8000/services/sentimentServices/track.xsodata/TRACK/?$format=json',
	// 	type: "GET",
 //        username: 'carlos',
 //        password: 'QAZwsx123',
 //        success: function (data, status, req) {
 //            $.ajax({
 //                url: '/track',
 //                type: "POST",
 //                data: {
 //                    keyword: data.d.results[0].TRACK_WORDS
 //                }
 //            });
 //            socket = io.connect('http://localhost:3000/'),
 //            socket.on('twitter', function(data) {
 //            console.debug(data);
	// 		var html = '<div class="two phone-one columns">' +
	// 				'<a href="#"><img src="' + data.user.profile_image_url + '"></a>' +
	// 				'</div>' +
	// 				'<div class="ten phone-three columns">' +
	// 				'<h5 class="right"></h5>' +
	// 				'<h4><a href="#">' + data.user.screen_name + '</a></h4>' +
	// 				'<p>' + data.text + '</p>' +
	// 				'</div>' +
	// 				'</div>';

	// 		$('#fila').prepend(html)
 //                //$('.tweets').prepend('<li>' + data.text + '</li>');
 //                //$container.append(template.render(data));
 //            });
 //        },
 //        error: function(data, status, req) {
 //        	alert('error');
 //        }
	// })

	// var $container = $('ul.tweets'),
	// socket = io.connect('http://localhost:3000/'),
	// template = $('#tweetTemplate');          
	// socket.on('twitter', function(data) {
	// 	//console.debug(data);
	// 	var html = '<div class="two phone-one columns">' +
	// 			'<a href="#"><img src="' + data.user.profile_background_image_url + '"></a>' +
	// 			'</div>' +
	// 			'<div class="ten phone-three columns">' +
	// 			'<h5 class="right">$85k</h5>' +
	// 			'<h4><a href="#">' + data.user.screen_name + '</a></h4>' +
	// 			'<p>' + data.text + '</p>' +
	// 			'</div>' +
	// 			'</div>';

	// 	$('#fila').prepend(html)
	// });


});




            // $.ajax({
            //     url: 'http://187.162.45.69:8000/services/sentimentServices/track.xsodata/TRACK/?$format=json',
            //     type: "GET",
            //     username: 'carlos',
            //     password: 'QAZwsx123',
            //     success: function (data, status, req) {
            //         document.getElementById('message').innerHTML = "Actualmente se esta buscando la palabra: " + data.d.results[0].TRACK_WORDS;
            //         $.ajax({
            //             url: '/track',
            //             type: "POST",
            //             data: {
            //                 keyword: data.d.results[0].TRACK_WORDS
            //             }
            //         });
            //         socket = io.connect('http://localhost:3000/'),
            //         socket.on('twitter', function(data) {
            //         console.debug(data);
            //             $('.tweets').prepend('<li>' + data.text + '</li>');
            //             //$container.append(template.render(data));
            //         });
            //     },
            //     error: function (data, status, req) {
            //         alert("error");
            //     },
            // });
            //     <div class="two phone-one columns">
            //         <a href="#"><img src="http://placehold.it/80x100"></a>
            //     </div>
            //     <div class="ten phone-three columns">
            //         <h5 class="right">$85k</h5>
            //         <h4><a href="#">Tetris</a></h4>
            //         <p>This newfangled game has you slotting together blocks in soviet Russia. Weird, but fun.</p>
            //     </div>
            // </div>
		//$('.tweets').prepend('<li>' + data.text + '</li>');
		//$container.append(template.render(data));