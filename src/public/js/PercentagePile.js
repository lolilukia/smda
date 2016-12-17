/**
 * Created by Lele on 2016/12/14.
 */
$(function () {
  $('#container').highcharts({
    chart: {
      type: 'area'
    },
    /* title: {
      text: 'Historic and Estimated Worldwide Population Distribution by Region'
    },
    subtitle: {
      text: 'Source: Wikipedia.org'
    },*/
    xAxis: {
        categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            //categories: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
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
      pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.percentage:.1f}%</b> ({point.y:,.0f} millions)<br/>',
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
    series: [{
      name: '洗发沐浴/个人清洁',
      data: [502, 635, 809, 947, 1402, 3634, 5268,6584,7125,8547,8965,9021]
    }, {
      name: '卫生巾/护垫/成人尿裤',
      data: [106, 107, 111, 133, 221, 767, 1766,2561,2965,3021,3564,4521]
    }, {
      name: '衣物清洁剂/护理剂',
      data: [163, 203, 276, 408, 547, 729, 628,754,856,912,1024,2547]
    }, {
      name: '驱虫用品',
      data: [18, 31, 54, 156, 339, 818, 1201,1356,1578,1965,2547,2987]
    }, {
      name: '香薰用品',
      data: [20, 20, 20, 60, 130, 300, 460,780,940,1020,1350,1540]
    }]
  });
});
