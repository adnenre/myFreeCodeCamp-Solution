// Background Youtube Video

jQuery(function($){

    $(window).on('load', function () {
        $('#page-preloader').delay(1000).fadeOut('slow');
    
        
      });

  initVideoBg();
});
function initVideoBg() {
    if (!device.tablet() && !device.mobile()) {
      $('#video').YTPlayer({
          fitToBackground: true,
          videoId: 'c-oS9DOwGzg',
          playerVars: {
            autoplay: 1,
            showinfo: 0,
            branding: 0
          }
      });
    } else {
        $('#video').addClass('video-mobile-screen');
    }
  }
  