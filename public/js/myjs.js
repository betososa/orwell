$(document).ready(function(){

    var testChart = new Highcharts.Chart(pie({renderTo:'container',title:'Sentiment', data:[[ '', 0 ]]}));

    setInterval(function() {
        $.ajax({
            url: '/api/sentiment/1',
            type: "GET",
            success: function (data, status, req) {
                var series1 = [];
                for (i in data.d.results) {
                    var inner = [];
                    inner.push(data.d.results[i].CLASS);
                    inner.push(parseInt(data.d.results[i].CLASS_COUNT));
                    series1.push(inner);
                }
                testChart.series[0].setData(series1);
            },
            error: function (data, status, req) {
                alert("error");
            },
        });
    }, 2000);

});
