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
  consumer_key: 'nvEzbfqkIn3eP4HsOKlqA',
  consumer_secret: 'wXREklIO6Q4NQnn4ba7nEoMQ07bFnQ7MvFavU5OCk',
  access_token_key: '111464277-fqi8reyQJ1yfihm3xGhg6ZrzpjM2P3E78SBnt7JI',
  access_token_secret:'KPhXa9EfLJYZkgs2NnaZanXq4FRt6oXdvmMtagNX2U'
});

var cronJob = require('cron').CronJob;

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

app.get('/mkt', function( require, res ) {
  res.render("mkt");
})

app.get('/map', function( require, res ) {
  res.render("mapr");
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


io.sockets.on('connection', function(socket) {
  twit.stream('statuses/filter', {'track':'coarso'},
    function(stream) {
      stream.on('data',function(data){
        socket.emit('twitter',data);
      });
    });
});

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



app.post('/pauta', function(req, res) {
    console.log(' Entering POST /pauta' );
    console.log('REQ year ==> ' + req.body.yy);
    console.log('REQ month ==> ' + req.body.mm);
    console.log('REQ day ==> ' + req.body.dd);
    console.log('REQ hour ==> ' + req.body.hh);
    console.log('REQ min ==> ' + req.body.min);
    console.log('REQ sec ==> ' + req.body.ss);
    console.log('REQ twit ==> ' + req.body.twit);
    console.log(new Date(req.body.yy, req.body.mm, req.body.dd, req.body.hh, req.body.min, req.body.ss, req.body.mms));
    programTwit(req.body.twit, req.body.yy, req.body.mm, req.body.dd, req.body.hh, req.body.min, req.body.ss, req.body.mms)
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("OK");
    res.end();
})

function programTwit(twit, yy, mm, dd, hh, min, ss, mms) {
    console.log(' Entering programTwit' );
    console.log('--> Date: ' + new Date(yy, mm, dd, hh, min));
    console.log('--> Twit: ' + twit);
    console.log(yy + ' ' + mm + ' ' + dd);
    console.log(new Date(yy, mm, dd, hh, min, ss, mms));
    var job = new cronJob(new Date(yy, mm, dd, hh, min), function() {
        console.log('--> Twit: ' + twit);
        updateStatus(twit)
    }, function() {
        console.log('finish');
    }, true)
}


// function updateStatus(status) {
//         twit.verifyCredentials(function (err, data) {
//             if (err) {
//             console.log("Error verifying credentials: " + err);
//             process.exit(1);
//             }
//         })
//         .updateStatus(status,
//         function (err, data) {
//             if (err) console.log('Tweeting failed: ' + err);
//             else console.log('Success!')
//         }
//         )
//     })

function updateStatus(status) {
    console.log('updating status');
    twit.verifyCredentials(function (err, data) {
        if (err) {
            console.log("Error verifying credentials: " + err);
            process.exit(1);
        }
    })
    .updateStatus(status, function(err, data){
        if (err) console.log('Twit failed :( ' + err);
        else console.log('Success :)');
    })
}

app.get('/cronTest', function(req, res) {
    var cronJob = require('cron').CronJob;
    new cronJob('* * * * * *', function(){
        console.log('You will see this message every second');
    }, null, true);
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("OK");
    res.end();
})

app.get('/update', function(req, res) {
    updateStatus('test update');
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.write("OK");
    res.end();
});

