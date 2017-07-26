$(document).ready(function () {

    // FULLPAGE
    $('#fullpage').fullpage({
		anchors:['_intro', '_info', '_portfolio', '_contact'],
    navigation: false,
    controlArrows: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
    autoScrolling: false,
    fitToSection: false,
    fitToSectionDelay: 100,
	});
    // SCROLLA
    // $('.animate').scrolla();
    // PARALLAX
    $('.parallax').parallaxBackground();

    // FLOAT
    $('span.underline').jqFloat({
		width: 0,
		height: 0,
		speed: 1000
	});

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

    // SUMMER POP-UP CLOSE
    $('#summer_popup i').click(function(){
      $('#summer_popup').fadeOut();
    })

    // ACTIVATE POINTER EVENTS ON CLICK ON MAP
      $('#map').css('pointer-events', 'none');

      $('.map-wrapper').click(function() {
        $('#map').css('pointer-events', 'auto');
      });

});
