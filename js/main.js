$(document).ready(function () {

  // ANIMATIONS ON SCROLL START
      var scroll_start = 0;
      var startchange = $('body');
      var offset = startchange.offset();
      $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
            $('h1').css('margin-top', '2px');
            $('.toggle-button').css('top', '10px');
            $('#contact-link').css('top', '20px')

          } else {
            $('h1').css('margin-top', '');
            $('.toggle-button').css('top', '');
            $('#contact-link').css('top', '')
      }
    });

    // UI ANIMATION
    $('body').addClass('animated fadeIn');

    // ACTIVATE POINTER EVENTS ON CLICK ON MAP
      $('#map').css('pointer-events', 'none');

      $('.map-wrapper').click(function() {
        $('#map').css('pointer-events', 'auto');
      });

});
