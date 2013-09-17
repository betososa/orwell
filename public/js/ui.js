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
                allowPointSelect: true
            }
        },
        series: [{
            data: obj1.data
    }]
    }
    return x;
}