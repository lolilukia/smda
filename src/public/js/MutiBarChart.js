function drawMutiChart() {
  var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
  var option = {

    tooltip: {

      trigger: 'axis'

    },
    toolbox: {
      feature: {
        dataView: {show: false, readOnly: false},
        magicType: {show: false, type: ['line', 'bar']},
        restore: {show: false},
        saveAsImage: {show: false}
      }
    },
    legend: {
      data: multiname
    },
    xAxis: [
      {
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '销售额',
        min: 0,
        max: 17,
        interval: 2.5,
        axisLabel: {
          formatter: '{value} 亿元'
        }
      },
      {
        type: 'value',
        name: '气温',
        min: -18,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: '{value} °C'
        }
      }
    ],
    series: multiBar
  };

  myChart.setOption(option);
};
