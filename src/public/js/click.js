lastClick = 'tag4';
currentClick = 'tag4';
lastClick2 = '1';
currentClick2 = '1';
lastnum=0;
chartnum=3;
chartname = ['barCanvas', 'Dchart', 'brand_table'];
svgChart = [
  {symbol:"清风",date:"Jan 2013",price:"3192217"},
  {symbol:"清风",date:"Feb 2013",price:"2061263"},
  {symbol:"清风",date:"Mar 2013",price:"3670782"},
  {symbol:"海飞丝",date:"Jan 2013",price:"2504635"},
  {symbol:"海飞丝",date:"Feb 2013",price:"1631022"},
  {symbol:"海飞丝",date:"Mar 2013",price:"3029763"},
  {symbol:"威露士",date:"Jan 2013",price:"1104268"},
  {symbol:"威露士",date:"Feb 2013",price:"801501"},
  {symbol:"威露士",date:"Mar 2013",price:"1233892"},
  {symbol:"心相印",date:"Jan 2013",price:"1739776"},
  {symbol:"心相印",date:"Feb 2013",price:"1310315"},
  {symbol:"心相印",date:"Mar 2013",price:"1989185"}
];
categories = ['安利','清风','足季','海飞丝','沙宣','草木香','潘婷','心相印','abc','云南白药','兽皮大王','shiseido/资生堂'];
sale_amount = [3458099,3192217,2596668,2504635,2121799,1966937,1780941,1739776,1680288,1639935,1555026,1526548];
temperature = [-5.2, -5.2, -5.2, -5.2, -5.2, -5.2, -5.2, -5.2, -5.2, -5.2, -5.2, -5.2];
percentage = [3.58, 3.31, 2.69, 2.6, 2.2, 2.04, 1.85, 1.8, 1.74, 1.7, 1.61, 1.58];

catetend=['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
month_sales=[49.9, 71.5, 106.4, 129.2, 176.0, 226.0, 285.6, 248.5, 266.4, 194.1, 95.6, 54.4];
temperaturetend=[7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6];


multiname = ['洗发沐浴/个人清洁','纸品/湿巾','衣物清洁剂/护理剂','卫生巾/护垫/成人尿裤','家庭环境清洁剂', '室内除臭/芳香用品','家私/皮具护理品','香熏用品','驱虫用品','其他'];
multiBar = [
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
];
multiLabels = ["洗护沐浴/个人清洁", "纸品/湿巾", "衣物清洁剂/护理剂", "卫生巾/护垫/成人尿裤", "家庭环境清洁剂", "室内除臭/芳香用品", "家私/皮具护理品", "香熏用品", "驱虫用品"];
totalamount = [1048133865, 823322155,347486495,251350870,192573590,147918395,102281750,78294110,0];
trendData = [{
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
}];

$(document).ready(function() {

  drawBarChart();

  drawDynamic();

  drawMutiChart();

  drawPieChart();

  drawPercentagePile();
  drawfullchart();
  var width = document.body.clientWidth;
  var height = document.body.clientHeight;
  $('#myBarChart').css('width', width/1.65 + 'px');
  $('#myBarChart').css('height', width/4 + 'px');
  $('#container111').css('width', width/1.65 + 'px');
  $('#container').css('width', width/1.65+ 'px');
  $('#container').css('height', width/3 + 'px');
  $('#svg_contain').children('svg').css('width', width/2.335 + 'px');
  $('#svg_contain').children('svg').css('height', width/4.67 + 'px');
  if(width > 1600){
    $('.contain').css('width', '6%');
    $('.container1').css('width',65+'%');
  }
  else{
    $('.contain').css('width', '8%');
    $('.contain').css('font-size', '12px');
    $('.container1').css('width', 85+'%');
  }
  $(".nav_tabs").children('li').click(function(){
    console.log(this.id);
    var string = this.id;
    if(string == lastClick)
      return;
    else{
      currentClick = string;
      $('#'+lastClick).toggleClass('active normal');
      $('#'+currentClick).toggleClass('normal active');
      $('.contain_group'+lastClick.substring(3,4)).css('display','none');
      $('.contain_group'+currentClick.substring(3,4)).css('display','inline-block');
      lastClick = currentClick;
      console.log(currentClick.substring(3,4));
      if(currentClick.substring(3,4)=='1') {
        lastnum=0;
        chartnum = 2;
        chartname = ['fristCanvas', 'sales_table'];
      }

      if(currentClick.substring(3,4)=='2') {
        lastnum=0;
        chartnum = 2;
        chartname = ['categoryTendency', 'cbrand_table'];
      }

      if(currentClick.substring(3,4)=='3') {
        lastnum=0;
        chartnum = 2;
        chartname = ['svgChart', 'PieCanvas'];
      }

      if(currentClick.substring(3,4)=='4') {
        lastnum=0;
        chartnum = 3;
        chartname = ['barCanvas', 'Dchart', 'brand_table'];
        console.log(currentClick.substring(3, 4));
      }

    }
  });
  $('#submit').click(function(){
    var year = $('#yearSelect').children('select').val();
    var month = $('#monthSelect').children('select').val();
    month = month.substring(0, month.length -1);
    function showData(o){
      console.log(o);
    };
    $.ajax({
      type: "GET",
      url: "http://10.60.36.3/smda/?r=brand-dist/do",
      dataType: 'jsonp',
      async: true,
      jsonp: "callback",
      jsonpCallback: "showData",
      data: {
        type: 'sale_amount',
        year: year,
        month: month
      },
      success: function(data){
        categories = [];
        sale_amount = [];
        temperature = [];
        percentage = [];
        d3.select('#tbody4').selectAll('*').remove();
        for(var i = 0; i<12; i++){
           categories.push(data[i].brand);
           sale_amount.push(data[i].sale_amount);
           temperature.push(data[i].temperature);
           percentage.push(data[i].percentage);
           $("#datatable4").children('tbody').append(" <tr class='odd, gradeX'><td>"+data[i].brand+"</td><td>"+data[i].sale_amount+"</td><td>"+(data[i].percentage*100+'').substring(0,4)+"%</td></tr>");
        }
        d3.select('#myBarChart').selectAll('*').remove();
        drawBarChart();
      },
      error: function(e){
        console.log(e);
      }
    });

    $.ajax({
      type: "GET",
      url: "http://10.60.36.3/smda/?r=brand-dist/do",
      dataType: 'jsonp',
      async: true,
      jsonp: "callback",
      jsonpCallback: "showResult",
      data: {
        type: 'market_shares',
        year: year,
      },
      success: function(result){
        svgChart = [];
        for(var item = 0;item < result.length;item++){
          svgChart.push(result[item]);
        }
        console.log(svgChart);
        d3.select('#svg_contain').selectAll('*').remove();
        drawDynamic();
      },
      error: function(e){
        console.log(e);
      }
    });
  });
  $(".toplist").children('li').click(function(){
    console.log(this.id);
    var string = this.id;
    if(string == lastClick2)
      return;
    else{
      currentClick2 = string;

      $('#container'+lastClick2).css('display','none');
      $('#container'+currentClick2).css('display','inline-block');
      if(lastClick2=="1")
        $('#ul1').css('display','none');
      else
        $('#ul1').css('display','inline-block');
      lastClick2 = currentClick2;
      console.log(currentClick2);
    }
  });
  $("#last").click(function(){
    var lastname=chartname[lastnum];
    console.log(lastnum);
    console.log(lastname);
    lastnum--;
    if(lastnum<0)
      lastnum=chartnum-1;
    var currentname=chartname[lastnum];
    console.log(lastnum);
    console.log(currentname);
    document.getElementById(lastname).style.display='none';
    document.getElementById(currentname).className='canvas_contain col-lg-10';
    document.getElementById(currentname).style.display='inline-block';

  });
  $("#next").click(function() {
    var lastname = chartname[lastnum];
    console.log(lastnum);
    console.log(lastname);
    lastnum++;
    if (lastnum == chartnum)
      lastnum = 0;
    var currentname = chartname[lastnum];
    console.log(lastnum);
    console.log(currentname);
    document.getElementById(lastname).style.display = 'none';
    document.getElementById(currentname).className = 'canvas_contain col-lg-10';
    document.getElementById(currentname).style.display = 'inline-block';
  });
  $('#submit2').click(function(){
    console.log('select year');
    var year = $('#yearSelect2').children('select').val();
    var month = $('#monthSelect2').children('select').val();
    month = month.substring(0, month.length -1);
    $.ajax({
      type: "GET",
      url: "http://10.60.36.3/smda/?r=cate-dist/do",
      dataType: 'jsonp',
      async: true,
      jsonp: "callback",
      jsonpCallback: "showData",
      data: {
        type: 'cate_sales',
        year: year
      },
      success: function(data){
        multiname = [];
        multiBar = [];
        d3.select('#main').selectAll('*').remove();
        for(var i = 0; i<data.length-1; i++){
          multiname.push(data[i].name);
          multiBar.push((data[i]));
        }
        multiBar.push(data[data.length-1]);
        drawMutiChart();
      },
      error: function(e){
        console.log(e);
      }
    });
    $.ajax({
      type: "GET",
      url: "http://10.60.36.3/smda/?r=cate-dist/do",
      dataType: 'jsonp',
      async: true,
      jsonp: "callback",
      jsonpCallback: "showData",
      data: {
        type: 'ranking',
        year: year,
        month: month
      },
      success: function(data){
        multiLabels = [];
        totalamount = [];
        d3.select('#tbody3').selectAll('*').remove();
        d3.select('#myPieChart').selectAll('*').remove();
        for(var i = 0; i<data.length-1; i++){
          multiLabels.push(data[i].category);
          totalamount.push(data[i].sale_amount);
          $("#datatable3").children('tbody').append(" <tr class='odd, gradeX'><td>"+data[i].category+"</td><td>"+data[i].sale_amount+"</td><td>"+(data[i].percentage*100+'').substring(0,4)+"%</td></tr>");
        }
        drawPieChart();
      },
      error: function(e){
        console.log(e);
      }
    });
  });
  $('#submit3').click(function(){
    console.log('select year');
    var year = $('#yearSelect3').children('select').val();

    $.ajax({
      type: "GET",
      url: "http://10.60.36.3/smda/?r=cate-trend/do",
      dataType: 'jsonp',
      async: true,
      jsonp: "callback",
      jsonpCallback: "showData",
      data: {
        type: 'category_proportion',
        year: year
      },
      success: function(data){
        trendData = [];
        d3.select('#tbody2').selectAll('*').remove();
        d3.select('#container').selectAll('*').remove();
        for(var i = 0; i<data.length-1; i++){
          trendData.push(data[i]);
          $("#datatable2").children('tbody').append(" <tr class='odd, gradeX'><td>"+data[i].name+"</td><td>"
            +(data[i].data[0]*100+'').substring(0,4)+"%</td><td>"+(data[i].data[1]*100+'').substring(0,4)+"%</td><td>" +
            +(data[i].data[2]*100+'').substring(0,4)+"%</td><td>"+(data[i].data[3]*100+'').substring(0,4)+"%</td><td>" +
            +(data[i].data[4]*100+'').substring(0,4)+"%</td><td>"+(data[i].data[5]*100+'').substring(0,4)+"%</td><td>" +
            +(data[i].data[6]*100+'').substring(0,4)+"%</td><td>"+(data[i].data[7]*100+'').substring(0,4)+"%</td><td>" +
            +(data[i].data[8]*100+'').substring(0,4)+"%</td><td>"+(data[i].data[9]*100+'').substring(0,4)+"%</td><td>" +
            +(data[i].data[10]*100+'').substring(0,4)+"%</td><td>"+(data[i].data[11]*100+'').substring(0,4)+"%</td></tr>");
        }
        drawPercentagePile();
      },
      error: function(e){
        console.log(e);
      }
    });
  });
  $('#submit4').click(function(){
    var year = $('#yearSelect4').children('select').val();
    var month = $('#monthSelect4').children('select').val();
    month = month.substring(0, month.length -1);
    function showData(o){
      console.log(o);
    };
    $.ajax({
      type: "GET",
      url: "http://10.60.36.3/smda/?r=sale-trend/do",
      dataType: 'jsonp',
      async: true,
      jsonp: "callback",
      jsonpCallback: "showData",
      data: {
        type: 'month_sales',
        year: year,
        month: month
      },
      success: function(data){
        catetend = [];
        month_sales = [];
        temperaturetend = [];
        month_percentage = [];
        d3.select('#tbody1').selectAll('*').remove();
        for(var i = 0; i<12; i++){
          catetend.push(data[i].month);
          month_sales.push(data[i].month_sales);
          temperaturetend.push(data[i].temperature);
          month_percentage.push(data[i].month_percentage);
          $("#datatable1").children('tbody').append(" <tr class='odd, gradeX'><td>"+data[i].month+"</td><td>"+data[i].month_sales+"</td><td>"+(data[i].month_percentage*100+'').substring(0,4)+"%</td></tr>");
        }
        d3.select('#container111').selectAll('*').remove();
        drawfullchart();
      },
      error: function(e){
        console.log(e);
      }
    });

  });
});
