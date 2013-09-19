function pie(obj1) {
    var x = {
        chart: {
            renderTo: obj1.renderTo,
            defaultSeriesType: 'pie',
            borderWidth:1
        },
        title: {
            text: obj1.title
        },
       tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
            position: {
                align: 'left',
                x: 20
            },
            text: 'CoArSO'
        },
        plotOptions: {
            pie:{
                slicedOffset: 20,
                allowPointSelect: true,
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    connectorColor: '#000000',
                    format: '<b>{point.name}</b>: {point.y}'
                }
            }
        },
        series: [{
            data: obj1.data
    }]
    }
    return x;
}