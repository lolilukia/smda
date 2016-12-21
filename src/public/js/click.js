lastClick = 'tag4';
currentClick = 'tag4';
lastClick2 = '1';
currentClick2 = '1';
lastnum=0;
chartnum=3;
chartname = ['barCanvas', 'Dchart', 'brand_table'];
$(document).ready(function() {
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
  $("#next").click(function(){
    var lastname=chartname[lastnum];
    console.log(lastnum);
    console.log(lastname);
    lastnum++;
    if(lastnum==chartnum)
      lastnum=0;
    var currentname=chartname[lastnum];
    console.log(lastnum);
    console.log(currentname);
    document.getElementById(lastname).style.display='none';
    document.getElementById(currentname).className='canvas_contain col-lg-10';
    document.getElementById(currentname).style.display='inline-block';

  });
});
