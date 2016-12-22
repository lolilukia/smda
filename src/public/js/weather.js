/**
 * Created by dell on 2016/12/21.
 */
$(document).ready(function(){



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


var skycons = new Skycons({"color": "#FFFFFF"});
skycons.add("skychoose", Skycons.CLEAR_DAY);

skycons.play();
