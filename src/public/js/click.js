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
$(document).ready(function() {
  drawBarChart();
  drawDynamic();
  var width = document.body.clientWidth;
  var height = document.body.clientHeight;
  $('#myBarChart').css('width', width/2.335 + 'px');
  $('#myBarChart').css('height', width/4.67 + 'px');
  $('#container').css('width', width/2.335 + 'px');
  $('#container').css('height', width/4.67 + 'px');
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
  })
});
