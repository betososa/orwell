$(document).ready(function(){

    var testChart = new Highcharts.Chart(pie({renderTo:'container',title:'Sentiment', data:[[ 'NN', 0 ]]}));

    console.dir(testChart);

    setInterval(function() {
        $.ajax({
            url: 'http://187.162.45.69:8000/services/sentimentServices/sentiment.xsodata/SENTIMENT/?$format=json',
            type: "GET",
            username: 'carlos',
            password: 'QAZwsx123',
            success: function (data, status, req) {
                var series1 = [];
                console.log('success');
                for (i in data.d.results) {
                    var inner = [];
                    inner.push(data.d.results[i].CLASS);
                    inner.push(parseInt(data.d.results[i].TOTAL));
                    console.log(inner);
                    series1.push(inner);
                }
                console.log(series1);
                testChart.series[0].setData(series1);
            },
            error: function (data, status, req) {
                alert("error");
            },
        });
    }, 2000);

});
