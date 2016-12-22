function drawfullchart() {
  Highcharts.chart('container111', {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: '产品销售趋势表'
    },
    xAxis: [{
      categories:catetend,
      crosshair: true
    }],
    yAxis: [{ // Primary yAxis
      labels: {
        format: '{value}°C',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      },
      title: {
        text: '气温',
        style: {
          color: Highcharts.getOptions().colors[1]
        }
      }
    }, { // Secondary yAxis
      title: {
        text: '销量',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        format: '{value}件',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      opposite: true
    }],
    tooltip: {
      shared: true
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      x: 120,
      verticalAlign: 'top',
      y: 100,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [{
      name: '销量',
      type: 'column',
      yAxis: 1,
      data: month_sales,
      tooltip: {
        valueSuffix: '元'
      }

    }, {
      name: '气温',
      type: 'spline',
      data: temperaturetend,
      tooltip: {
        valueSuffix: '°C'
      }
    }]
  });
};
