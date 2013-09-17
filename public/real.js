$(document).ready(function() {
	var $container = $('ul.tweets'),
	socket = io.connect('http://localhost:3000'),
	template = $('#tweetTemplate');          
	socket.on('twitter', function(data) {
	console.debug(data);
		$('.tweets').prepend('<li>' + data.text + '</li>');
		//$container.append(template.render(data));
	});
});