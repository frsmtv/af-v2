$(document).ready(function () {

  // ANIMATIONS ON SCROLL START
      var scroll_start = 0;
      var startchange = $('body');
      var offset = startchange.offset();
      $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
            $('h1').css('margin-top', '0');
            $('.toggle-button').css('top', '0');

          } else {
            $('h1').css('margin-top', '');
            $('.toggle-button').css('top', '');
      }
    });

});
