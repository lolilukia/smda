var myChart = echarts.init(document.getElementById('main'));

// 指定图表的配置项和数据
var option = {

  tooltip: {

    trigger: 'axis'

  },
  toolbox: {
    feature: {
      dataView: {show: true, readOnly: false},
      magicType: {show: true, type: ['line', 'bar']},
      restore: {show: true},
      saveAsImage: {show: true}
    }
  },
  legend: {
    data:['洗发沐浴/个人清洁','纸品/湿巾','衣物清洁剂/护理剂','卫生巾/护垫/成人尿裤','家庭环境清洁剂',
      '室内除臭/芳香用品','家私/皮具护理品','香熏用品','驱虫用品','其他']
  },
  xAxis: [
    {
      type: 'category',
      data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '销售额',
      min: 0,
      max: 170000000,
      interval: 250000000,
      axisLabel: {
        formatter: '{value} 元'
      }
    },
    {
      type: 'value',
      name: '气温',
      min: -10,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value} °C'
      }
    }
  ],
  series: [
    {
      name:'洗发沐浴/个人清洁',
      type:'bar',
      data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    },
    {
      name:'纸品/湿巾',
      type:'bar',
      data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    },
    {
      name:'衣物清洁剂/护理剂',
      type:'bar',

      data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    },
    {
      name:'卫生巾/护垫/成人尿裤',
        type:'bar',
      data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    },
    {
      name:'家庭环境清洁剂',
        type:'bar',
      data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    },
    {
      name:'室内除臭/芳香用品',
        type:'bar',

      data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    },
    {
      name:'家私/皮具护理品',
        type:'bar',
      data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
    },
    {
      name:'香熏用品',
        type:'bar',
      data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
    },
    {
      name:'驱虫用品',
        type:'bar',

      data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    },
    {
      name:'其他',
        type:'bar',

      data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    },
    {
      name:'平均气温',
      type:'line',
      yAxisIndex: 1,
      data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
};

myChart.setOption(option);
