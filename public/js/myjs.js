$(document).ready(function(){

    $( '#updateGraph' ).click(function() {
        //chart.series[0].setData(series1)
        var series1 = [[ 'blah', Math.floor((Math.random()*100)+1) ],
            [ 'jgjgj', Math.floor((Math.random()*100)+1) ], [ 'gjgjhj', Math.floor((Math.random()*100)+1)],
            [ 'Negkjbkgative', Math.floor((Math.random()*100)+1) ], [ 'kjhkjkj nbnnb', Math.floor((Math.random()*100)+1) ]];
        testChart.series[0].setData(series1);
    });

    setInterval(function() {
        console.log('1,2,3');
        var series1 = [[ 'blah', Math.floor((Math.random()*100)+1) ],
            [ 'jgjgj', Math.floor((Math.random()*100)+1) ], [ 'gjgjhj', Math.floor((Math.random()*100)+1)],
            [ 'Negkjbkgative', Math.floor((Math.random()*100)+1) ], [ 'kjhkjkj nbnnb', Math.floor((Math.random()*100)+1) ]];
        testChart.series[0].setData(series1);
    }, 1000);



     var testChart = new Highcharts.Chart(pie({renderTo:'container',title:'testing', data:[[ 'blah', Math.floor((Math.random()*100)+1) ],
             [ 'jgjgj', Math.floor((Math.random()*100)+1) ], [ 'gjgjhj', Math.floor((Math.random()*100)+1)],
             [ 'Negkjbkgative', Math.floor((Math.random()*100)+1) ], [ 'kjhkjkj nbnnb', Math.floor((Math.random()*100)+1) ]]}));

    $.ajax({
        url: 'http://187.162.45.69:8000/services/sentimentServices/sentiment.xsodata/ORWELL?$top=2&$format=json',
        type: "GET",
        username: 'carlos',
        password: 'QAZwsx123',
        success: function (data, status, req) {
            console.log('joojojojoj');
            console.log('data ->' + data);
            console.log('status ->' + status);
            console.log('req ->' + req);
            for (d in data) {
                console.log(d + ' = ' + data[d]);
            }
            for (r in req) {
                console.log(r + ' = ' + req[r]);
            }
        },
        error: function (data, status, req) {
            alert("error");
            console.log('data ->' + data);
            console.log('status ->' + status);
            console.log('req ->' + req);
        },
    });

});
