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



        // var chartTwitsPHour = new Highcharts.Chart({
        //     chart: {
        //         renderTo: 'twiters',
        //         type: 'column',
        //         margin: [ 50, 50, 100, 80]
        //     },
        //     title: {
        //         text: 'Twitter Users'
        //     },
        //     xAxis: {
        //         categories: categories,
        //         labels: {
        //             rotation: -45,
        //             align: 'right',
        //             style: {
        //                 fontSize: '13px',
        //                 fontFamily: 'Verdana, sans-serif'
        //             }
        //         }
        //     },
        //     yAxis: {
        //         min: 0,
        //         title: {
        //             text: 'Twits'
        //         }
        //     },
        //     legend: {
        //         enabled: false
        //     },
        //     series: [{
        //         name: 'Twits',
        //         data: data,
        //         dataLabels: {
        //             enabled: true,
        //             rotation: -90,
        //             color: '#FFFFFF',
        //             align: 'right',
        //             x: 4,
        //             y: 10,
        //             style: {
        //                 fontSize: '13px',
        //                 fontFamily: 'Verdana, sans-serif',
        //                 textShadow: '0 0 3px black'
        //             }
        //         }
        //     }]
        // });



// categories = chart.xAxis[0].categories;
// categories.push(data.x);
// chart.xAxis[0].setCategories(categories, false); //redraw is false, again, so that everything will get redrawn together
// chart.redraw(); //redraw, showing all the changes



    

});