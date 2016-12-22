/**
 * Created by Lele on 2016/12/20.
 */
var dom = document.getElementById("scattermap");
var myChart = echarts.init(dom);
var app = {};
option = null;
var geoCoordMap = {
  "拉萨":[91.11,29.97],
  "上海":[121.48,31.22],
  "福州":[119.3,26.08],
  "南宁":[108.33,22.84],
  "广州":[113.23,23.16],
  "太原":[112.53,37.87],
  "昆明":[102.73,25.04],
  "海口":[110.35,20.02],
  "沈阳":[123.38,41.8],
  "长春":[125.35,43.88],
  "南昌":[115.89,28.68],
  "吉林":[126.57,43.87],
  "西宁":[101.74,36.56],
  "呼和浩特":[111.65,40.82],
  "成都":[104.06,30.67],
  "西安":[108.95,34.27],
  "重庆":[106.54,29.59],
  "南京":[118.78,32.04],
  "贵阳":[106.71,26.57],
  "北京":[116.46,39.92],
  "乌鲁木齐":[87.68,43.77],
  "杭州":[120.19,30.26],
  "济南":[117,36.65],
  "兰州":[103.73,36.03],
  "天津":[117.2,39.13],
  "郑州":[113.65,34.76],
  "哈尔滨":[126.63,45.75],
  "石家庄":[114.48,38.03],
  "长沙":[113,28.21],
  "合肥":[117.27,31.86],
  "武汉":[114.31,30.52],
};

var convertData = function (data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

option = {
  backgroundColor: '#404a59',
  title: {
    text: '全国主要城市气温',
    subtext: 'data from 中国天气网',
    sublink: 'http://www.weather.com.cn/forecast/',
    x:'center',
    textStyle: {
      color: '#fff'
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: function (params) {

      return params.name + ' : ' + params.value[2];
    }
  },
  legend: {
    orient: 'vertical',
    y: 'bottom',
    x:'right',
    data:['pm2.5'],
    textStyle: {
      color: '#fff'
    }
  },
  visualMap: {
    min: -18,
    max: 25,
    calculable: true,
    inRange: {
      color: ['#50a3ba', '#eac736', '#d94e5d']
    },
    textStyle: {
      color: '#fff'
    }
  },
  geo: {
    map: 'china',
    label: {
      emphasis: {
        show: false
      }
    },
    itemStyle: {
      normal: {
        areaColor: '#323c48',
        borderColor: '#111'
      },
      emphasis: {
        areaColor: '#2a333d'
      }
    }
  },
  series: [
    {
      name: '气温',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData([
        {name: "拉萨", value: 6.5},
        {name: "上海", value: 9.5},
        {name: "福州", value: 14.5},
        {name: "南宁", value: 19},
        {name: "广州", value: 18.5},
        {name: "太原", value: 0.5},
        {name: "昆明", value: 11.5},
        {name: "海口", value: 17.5},
        {name: "沈阳", value: -9.5},
        {name: "长春", value: -14},
        {name: "南昌", value: 10},
        {name: "西宁", value: -1},
        {name: "呼和浩特", value: -4},
        {name: "成都", value: 9},
        {name: "西安", value: 1},
        {name: "重庆", value: 9.5},
        {name: "南京", value: 7.5},
        {name: "贵阳", value: 9.5},
        {name: "北京", value: -1},
        {name: "乌鲁木齐", value: -10},
        {name: "杭州", value: 9},
        {name: "济南", value: 3},
        {name: "兰州", value: 0.5},
        {name: "天津", value: 1.5},
        {name: "郑州", value: 2},
        {name: "哈尔滨", value: -18},
        {name: "石家庄", value: -0.5},
        {name: "长沙", value: 9.5},
        {name: "合肥", value: 7},
        {name: "武汉", value: 7.5},
      ]),
      symbolSize: 12,
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        emphasis: {
          borderColor: '#fff',
          borderWidth: 1
        }
      }
    }
  ]
};
if (option && typeof option === "object") {
  myChart.setOption(option, true);

  myChart.on('click', function (params) {
    // 控制台打印数据的名称
    console.log(params.name);
    document.getElementById("wcity").innerHTML=params.name;
    document.getElementById("wvalue").innerHTML=params.value[2]+"℃";
    $.ajax({
      type: "GET",
      url: "http://10.60.36.13:8009/smda/?r=cate-rank/do",
      dataType: 'jsonp',
      async: true,
      contentType: "application/x-www-form-urlencoded; charset=utf-8",
      jsonp: "callback",
      jsonpCallback: "showdata",
      data: {
        type:'cate_rank',
        city:params.name,
        callback:'showdata'
      },
      success: function(data){

       //d3.select('#skills').selectAll('*').remove();
        for(var i = 0; i<9; i++){
          console.log("rank_value"+i);
          document.getElementById("rank_value"+(i+1)).value=data[i].sale_amount;
          document.getElementById("rank_name"+(i+1)).innerHTML=data[i].category;
        //  $("#skills").append(" <progress value='"+data[i].sale_amount+"' max='100'><span>"+data[i].category+"</span></progress>");
        }

      },
      error: function(e){
        console.log(e);
      }
    });
  });

}
