$(document).ready(function() {

    var pieChart = new Highcharts.Chart(pie({renderTo:'history',title:'Sentiment', data:[[ 'NN', 0 ]]}));

    $.ajax({
        url: 'http://187.162.45.69:8000/services/sentimentServices/sentiment.xsodata/SENTIMENT/?$format=json',
        type: "GET",
        username: 'carlos',
        password: 'QAZwsx123',
        success: function (data, status, req) {
            var series1 = [];
            for (i in data.d.results) {
                var inner = [];
                inner.push(data.d.results[i].CLASS);
                inner.push(parseInt(data.d.results[i].TOTAL));
                series1.push(inner);
            }
            pieChart.series[0].setData(series1);
        },
        error: function (data, status, req) {
            alert("error");
        },
    });


    $.ajax({
        url: 'http://187.162.45.69:8000/services/sentimentServices/users.xsodata/USERS/?$format=json&$orderby=TOTAL%20desc&$top=10',
        type: "GET",
        username: 'carlos',
        password: 'QAZwsx123',
        success: function (data, status, req) {
            var noTwits = [];
            var categories = [];
            for (i in data.d.results) {
                noTwits.push(parseInt(data.d.results[i].TOTAL));
                categories.push('@'+data.d.results[i].USERNAME);
            }
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
                    data: noTwits,
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
        },
        error: function (data, status, req) {
            alert("error");
        },
    });


    $.ajax({
        url: 'http://187.162.45.69:8000/services/sentimentServices/fechas.xsodata/FECHAS/?$format=json',
        type: "GET",
        username: 'carlos',
        password: 'QAZwsx123',
        success: function (data, status, req) {
            timeSeries=[];
            for (i in data.d.results) {
                var inner = [];
                fecha = new Date(data.d.results[i].FECHA);
                // fecha = data.d.results[i].FECHA.match(/\d+\.?\d*/g)[0]
                //  var datee = new Date(0);
                //inner.push(datee.setUTCSeconds(fecha));
                inner.push(fecha);
                inner.push(parseInt(data.d.results[i].TOTAL));
                timeSeries.push(inner);
            }
            console.log(timeSeries);
            var chartTwitsPHour = new Highcharts.Chart({
                chart: {
                    renderTo: 'hours',
                    height: 250,
                    spacingRight: 30
                },
                title: {
                    text: 'Twits per Hour'
                },
                subtitle: {
                    text: 'Twits'
                },
                xAxis: {
                    type: 'datetime',
                    labels: {
                        formatter: function() {
                            return Highcharts.dateFormat('%I:%M %P', this.value);
                        },
                        y: 17 
                    },
                    gridLineDashStyle: 'dot',
                    gridLineWidth: 1,
                    tickInterval: 60 * 60 * 1000,
                    lineWidth: 2,
                    lineColor: '#92A8CD',
                    tickWidth: 3,
                    tickLength: 6,
                    tickColor: '#92A8CD',
                    minPadding: 0.02,
                    offset: 1
                },
                yAxis: {
                    title: {
                        text: null
                    },
                    tickInterval: 10,
                    minorTickInterval: 5,
                    minorGridLineColor: '#D8D8D8',
                    minorGridLineDashStyle: 'dashdot',
                    gridLineColor: '#8AB8E6',
                    alternateGridColor: {
                        linearGradient: [0, 250, 500, 250],
                        stops: [ [0, '#FAFCFF' ],
                         [0.2, 'F7FBFF' ],
                         [0.5, '#F5FAFF'] ,
                         [0.8, '#E0F0FF'] ,
                         [1, '#D6EBFF'] ]
                    },
                    lineWidth: 2,
                    lineColor: '#92A8CD',
                    tickWidth: 3,
                    tickLength: 6,
                    tickColor: '#92A8CD',
                    minorTickLength: 3,
                    minorTickWidth: 1,
                    minorTickColor: '#D8D8D8',
                    plotLines: [{
                        value: 2606.01,
                        label: {
                                text: 'Lowest: 2606.01',
                            style: {
                                color: '#898989'
                            }
                        },
                        width: 2,
                        color: '#821740'
                        }, {
                        value: 2639.15,
                        label: {
                            text: 'Highest: 2639.15',
                            style: {
                            color: '#898989'
                            }
                            },
                            width: 2,
                            color: '#4A9338'
                    }]
                },
                legend: {
                    enabled: false
                },
                credits: {
                    enabled: false
                },
                series: [{
                    name: 'Twits',
                    data: timeSeries
                }]
            });
        },
        error: function (data, status, req) {
            alert("error");
        },
    });
});