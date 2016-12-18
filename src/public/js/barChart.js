$(function () {
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
      categories: ['vinda','walch','clear','space7','may flower','拉芳','沙宣','立白','蓝月亮','清风','心相印','海飞丝'],
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
        format: '{value}千万元',
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
      name: '销售额',
      type: 'column',
      yAxis: 1,
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
      tooltip: {
        valueSuffix: ' 千万元'
      }

    }, {
      name: '气温',
      type: 'spline',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
      tooltip: {
        valueSuffix: '°C'
      }
    }]
  });
});
