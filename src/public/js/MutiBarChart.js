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
      max: 17,
      interval: 2.5,
      axisLabel: {
        formatter: '{value} 亿元'
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
      data:[2.0, 4.9, 7.0, 2.2, 5.6, 7.7, 5.6, 12.2, 2.6, 0.0, 6.4, 3.3]
    },
    {
      name:'纸品/湿巾',
      type:'bar',
      data:[2.6, 5.9, 9.0, 2.4, 2.7, 7.7, 15.6, 12.2, 4.7, 8.8, 6.0, 2.3]
    },
    {
      name:'衣物清洁剂/护理剂',
      type:'bar',

      data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 2.3, 2.4, 2.0, 16.5, 12.0, 6.2]
    },
    {
      name:'卫生巾/护垫/成人尿裤',
        type:'bar',
      data:[2.0, 4.9, 7.0, 2.2, 2.6, 6.7, 15.6, 12.2, 2.6, 2.0, 6.4, 3.3]
    },
    {
      name:'家庭环境清洁剂',
        type:'bar',
      data:[2.6, 5.9, 9.0, 6.4, 8.7, 7.7, 15.6, 1.2, 4.7, 1.8, 6.0, 2.3]
    },
    {
      name:'室内除臭/芳香用品',
        type:'bar',

      data:[2.0, 2.2, 3.3, 4.5, 6.3, 1.2, 2.3, 3.4, 3.0, 1.5, 12.0, 6.2]
    },
    {
      name:'家私/皮具护理品',
        type:'bar',
      data:[2.0, 4.9, 7.0, 2.2, 5.6, 6.7, 15.6, 1.2, 3.6, 2.0, 6.4, 3.3]
    },
    {
      name:'香熏用品',
        type:'bar',
      data:[2.6, 5.9, 9.0, 2.4, 2.7, 0.7, 15.6, 12.2, 4.7, 1.8, 6.0, 2.3]
    },
    {
      name:'驱虫用品',
        type:'bar',

      data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 2.3, 3.4, 3.0, 16.5, 2.0, 6.2]
    },
    {
      name:'其他',
        type:'bar',

      data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 2.4, 2.0, 6.5, 12.0, 6.2]
    },
    {
      name:'平均气温',
      type:'line',
      yAxisIndex: 1,
      data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 2.3, 3.4, 3.0, 1.5, 12.0, 6.2]
    }
  ]
};

myChart.setOption(option);
