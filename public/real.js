$(document).ready(function() {
	var $container = $('ul.tweets'),
	socket = io.connect('http://192.241.238.64:3000/'),
	template = $('#tweetTemplate');          
	socket.on('twitter', function(data) {
	console.debug(data);
		$('.tweets').prepend('<li>' + data.text + '</li>');
		//$container.append(template.render(data));
	});
});