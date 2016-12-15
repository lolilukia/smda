lastClick = 'tag1';
currentClick = 'tag1';
$(document).ready(function() {
  var width = document.body.clientWidth;
  var height = document.body.clientHeight;
  $('#myBarChart').css('width', width/2.335 + 'px');
  $('#myBarChart').css('height', width/4.67 + 'px');
  $('svg').css('width', width/2.335 + 'px');
  $('svg').css('height', width/4.67 + 'px');
  if(width > 1600){
    $('.contain').css('width', '6%');
  }
  else{
    $('.contain').css('width', '8%');
    $('.contain').css('font-size', '12px');
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
      lastClick = currentClick;
    }
  });
});
