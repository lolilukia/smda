/**
 * Created by Lele on 2016/12/14.
 */
$(function () {
  $('#container').highcharts({
    chart: {
      type: 'area'
    },
    credits: {enabled: false},
    title: {
      text: '各月份各类目销售占比及变化趋势'
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
    series: [{
      name: '洗发沐浴/个人清洁',
      data: [0.4374,0.44,0.4473,0.4697,0.4693,0.4393,0.439,0.4479,0.4411,0.4552,0.4541,0.4348]
    }, {
      name: '卫生巾/护垫/成人尿裤',
      data: [0.1035,0.1043,0.1026,0.079,0.074,0.0818,0.0892,0.0968,0.0858,0.0776,0.0868,0.0893]
    }, {
      name: '衣物清洁剂/护理剂',
      data: [0.0352,0.0379,0.0313,0.0326,0.0332,0.0313,0.0302,0.0309,0.0329,0.0322,0.0362,0.0397]
    }, {
      name: '驱虫用品',
      data: [0.0398,0.0439,0.0344,0.0503,0.0841,0.1079,0.1073,0.0987,0.095,0.0721,0.0449,0.0317]
    },{
      name: '香薰用品',
      data: [0.0885,0.1066,0.0905,0.0911,0.0862,0.0851,0.0725,0.076,0.0827,0.0803,0.0742,0.0678]
    },{
      name: '家私/皮具护理品',
      data: [0.0964,0.0795,0.0632,0.0535,0.0337,0.0248,0.0234,0.0248,0.0345,0.0576,0.083,0.0943]
    },{
      name: '纸品/湿巾',
      data: [0.0851,0.0882,0.0849,0.086,0.0793,0.0851,0.0895,0.0887,0.0938,0.0987,0.1024,0.1246]
    },{
      name: '家庭环境清洁剂',
      data: [0.0886,0.0746,0.1162,0.1069,0.1062,0.1056,0.1106,0.1015,0.0987,0.0973,0.0913,0.0908]
    },{
      name: '室内除臭/芳香用品',
      data: [0.0256,0.025,0.0296,0.0309,0.034,0.0392,0.0384,0.0347,0.0355,0.029,0.0272,0.027]
    }]
  });
});
