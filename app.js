var express = require('express');
var twitter = require('ntwitter');
var fs = require('fs');
var util = require('util');
var app = express();
var http =  require('http');
var port = 3000
//var server = http.createServer(app);
var io = require('socket.io').listen(app.listen(port));

app.set('views', __dirname + '/templates');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var twit = new twitter({
  consumer_key: 'GPzRqYxNpHqa0tI2zv4KoQ',
  consumer_secret: 'yw4bTfDpt2mJCpvWbMxFeMfqqVA7WpAepqcmGejxwo',
  access_token_key: '111464277-g5m5Xv8jZH2dqfUoDBkfv2RYF4fs3901Xy5MwO9R',
  access_token_secret:'t9RwAh2DcYkMA0lLNACu8U0V7hOIkURMnlYosHVow'
});

app.get("/", function(req, res){
    res.render("real");
});


app.get('/graphs', function(req, res) {
    res.render("graphs");
})

app.get('/history', function( req, res ) {
    res.render("history");
})

app.get('/admin', function( req, res ) {
    res.render("admin");
})

app.get('/hello', function(req, res){
  var body = 'Hello World';
  console.log('entering hello World');
  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', body.length);
  res.end(body);
});

//server.listen(port);
console.log('Listening on port ' + port);


// io.sockets.on('connection', function(socket) {
//   twit.stream('statuses/filter', {'track':'perro'},
//     function(stream) {
//       stream.on('data',function(data){
//         socket.emit('twitter',data);
//       });
//     });
// });

var TwitWords = [];


function track(array) {
  io.sockets.on('connection', function(socket) {
    twit.stream('statuses/filter', {'track':array},
      function(stream) {
        stream.on('data',function(data){
          socket.emit('twitter',data);
        });
      });
  });
}

function AddTwitWord(word){
  if(TwitWords.indexOf(word)==-1){
    TwitWords = [];
    TwitWords.push(word);
    track(TwitWords);
  }
}

function RemoveTwitWord(word){
  if(TwitWords.indexOf(word)!=-1){
    TwitWords.splice(TwitWords.indexOf(word),1);
    TrackWords(TwitWords);
  }
}

//track(['lluvia']);

//track(['gato','perro'], 'twitter');

app.post('/track', function(req, res) {
    console.log(req.body.keyword);
    AddTwitWord(req.body.keyword.split(','));
    res.send('OK');
});





