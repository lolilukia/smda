/**
 * Created by Lele on 2016/12/14.
 */
function drawPercentagePile() {
  var chart=new Highcharts.Chart({
    chart: {
      renderTo: 'container',
      type: 'area'
    },
    credits: {enabled: false},
    title: {
      text: ''
    },
    /* subtitle: {
     text: 'Source: Wikipedia.org'
     },*/
    xAxis: {
      categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      tickmarkPlacement: 'on',
      title: {
        enabled: false
      }
    },
    yAxis: {
      title: {
        text: '市场份额比'
      }
    },
    tooltip: {
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b><br/>',
      shared: true
    },
    plotOptions: {
      area: {
        stacking: 'percent',
        lineColor: '#cdff4a',
        lineWidth: 1,
        marker: {
          lineWidth: 1,
          lineColor: '#ffffff'
        }
      }
    },
    series: trendData

  });
};
