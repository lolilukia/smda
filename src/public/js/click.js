lastClick = 'tag4';
currentClick = 'tag4';
svgChart = [
  {symbol:"MSFT",date:"Jan 2000",price:"39.81"},
  {symbol:"MSFT",date:"Feb 2000",price:"36.35"},
  {symbol:"MSFT",date:"Mar 2000",price:"43.22"},
  {symbol:"AMZN",date:"Jan 2000",price:"64.56"},
  {symbol:"AMZN",date:"Feb 2000",price:"68.87"},
  {symbol:"AMZN",date:"Mar 2000",price:"67"},
  {symbol:"IBM",date:"Jan 2000",price:"100.52"},
  {symbol:"IBM",date:"Feb 2000",price:"92.11"},
  {symbol:"IBM",date:"Mar 2000",price:"106.11"},
  {symbol:"AAPL",date:"Jan 2000",price:"76.47"},
  {symbol:"AAPL",date:"Feb 2000",price:"25.94"},
  {symbol:"AAPL",date:"Mar 2000",price:"28.66"}
];
categories = ['vinda','walch','clear','space7','may flower','拉芳','沙宣','立白','蓝月亮','清风','心相印','海飞丝'];
sale_amount = [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4];
temperature = [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6];
percentage = [22.0, 18.0, 17.0, 8.0, 3.5, 3.0, 3.0, 2.0, 2.0,2.0, 1.5, 0.5];
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
lastClick2 = '1';
currentClick2 = '1';
$(document).ready(function() {
  drawBarChart();
  drawDynamic();
  drawMutiChart();
  drawPieChart();
  var width = document.body.clientWidth;
  var height = document.body.clientHeight;
  $('#myBarChart').css('width', width/2.335 + 'px');
  $('#myBarChart').css('height', width/4.67 + 'px');
  $('#container').css('width', width/1.8+ 'px');
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
  $('#submit2').click(function(){
    console.log('select year');
    var year = $('#yearSelect2').children('select').val();
    var month = $('#monthSelect2').children('select').val();
    month = month.substring(0, month.length -1);
    $.ajax({
      type: "GET",
      url: "http://10.60.36.3/smda/?r=brand-dist/do",
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
          multiBar.push(data[i]);
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
      url: "http://10.60.36.3/smda/?r=brand-dist/do",
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
        d3.select('#PieCanvas').selectAll('*').remove();
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
});
