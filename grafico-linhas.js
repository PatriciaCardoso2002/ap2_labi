function desenhaGrafico() { 
    $("#grafico-linhas").highcharts({
        title: {
            text: "Popularidade dos computadores ao ano",
            style:{
                color: '#fff'
            }
        }, 
        legend: {
            itemStyle: {
                color: '#fff',
                fontWeight: 'bold'
            }
        },
        xAxis: {
            categories: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
            labels: {
                style:{
                    color: '#fff'
                },
            },
        },
        
        yAxis: {
            labels: {
                style:{
                    color: '#fff'
                },
            },
        },
        
        chart: {
            renderTo: 'container',
            backgroundColor: 'rgba(0,0,0,0)',
            style:{
                color: '#fff'
            }  
        },
        series: [{
            name: "Computadores",
            data: [98, 95, 92, 81, 71, 62, 55, 45, 44, 52, 45] }],
        
    }); 
};

function desenhaGrafico2() { 
    $("#grafico-linhas").highcharts({
        title: {
            text: "Popularidade dos computadores VS. telemóveis",
            style:{
                color: '#fff'
            }
        }, 
        legend: {
            itemStyle: {
                color: '#fff',
                fontWeight: 'bold'
            }
        },
        xAxis: {
            categories: ["2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"],
            labels: {
                style:{
                    color: '#fff'
                },
            },
        },
        
        yAxis: {
            labels: {
                style:{
                    color: '#fff'
                },
            },
        },
        
        chart: {
            renderTo: 'container',
            backgroundColor: 'rgba(0,0,0,0)',
            style:{
                color: '#fff'
            }  
        },
        series: [{
            name: "Computadores",
            data: [98, 95, 92, 81, 71, 62, 55, 45, 44, 52, 45] },{
            name: "Telemóveis",
            data: [2, 5, 8, 9, 29, 38, 45, 55, 56, 48, 55], color: '#B296FF'  
            }],
        
    }); 
};