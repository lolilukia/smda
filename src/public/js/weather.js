/**
 * Created by dell on 2016/12/21.
 */
$(document).ready(function(){

  var skycons = new Skycons({"color": "#FFFFFF"});
  skycons.add("widget1_1", Skycons.WIND);//风
  skycons.add("widget1_2", Skycons.PARTLY_CLOUDY_DAY);//多云
  skycons.add("widget1_3", Skycons.SLEET);//大雨
  skycons.add("widget1_4", Skycons.CLEAR_DAY);//晴天
  skycons.add("widget2_1", Skycons.SNOW);//下雪
  skycons.add("widget2_2", Skycons.CLOUDY);//阴天
  skycons.add("widget2_3", Skycons.RAIN);//小雨
  skycons.add("widget2_4", Skycons.FOG);//大雾


  skycons.play();


  $('.image-zoom').magnificPopup({
    type: 'image',
    mainClass: 'mfp-with-zoom', // this class is for CSS animation below
    zoom: {
      enabled: true, // By default it's false, so don't forget to enable it
      duration: 300, // duration of the effect, in milliseconds
      easing: 'ease-in-out', // CSS transition easing function
      opener: function(openerElement) {
        var parent = $(openerElement);
        return parent;
      }
    }
  });

  //Nifty Modals Init
  $('.md-trigger').modalEffects();

  //Summernote Editor
  $('#summernote').summernote({
    height: 100,
    toolbar: [
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      ['para', ['ul', 'ol', 'paragraph']],
      ['height', ['height']]
    ]});
});


var theCanvas = document.getElementById("skychoose");
//根据获取天气情况，设置不同的天气skyid
//此处需要增加条件判断
theCanvas.id="widget1_4";
