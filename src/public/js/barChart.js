function drawBarChart() {
  Highcharts.chart('myBarChart', {
    chart: {
      zoomType: 'xy'
    },
    title: {
      text: ''
    },
    subtitle: {
      text: ''
    },
    xAxis: [{
      categories: categories,
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
        text: '销售额',
        style: {
          color: Highcharts.getOptions().colors[0]
        }
      },
      labels: {
        format: '{value}元',
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
      y: 50,
      floating: true,
      backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
    },
    series: [{
      name: '销售额',
      type: 'column',
      yAxis: 1,
      data: sale_amount,
      tooltip: {
        valueSuffix: ' 元'
      }

    }, {
      name: '气温',
      type: 'spline',
      data: temperature,
      tooltip: {
        valueSuffix: '°C'
      }
    }]
  });
};
