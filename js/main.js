$(document).ready(function () {

  // ANIMATIONS ON SCROLL START
      var scroll_start = 0;
      var startchange = $('body');
      var offset = startchange.offset();
      $(document).scroll(function() {
          scroll_start = $(this).scrollTop();
          if(scroll_start > offset.top) {
            // $('h1').css('opacity', '1');
            $('h1').css('margin-top', '6px');
            // $('span.title').css('opacity', '0');
            $('.toggle-button').css('top', '10px');
            $('i').fadeOut();

          } else {
            // $('h1').css('opacity', '');
            $('h1').css('margin-top', '');
            // $('span.title').css('opacity', '');
            $('.toggle-button').css('top', '');
            $('i').fadeIn();
      }
    });

    // UI ANIMATION
    $('#home-btn').click(function(){
      $('h1').css('opacity', '');
      $('#intro').show();
      $('#info').hide();
      $('#savoir-faire').hide();
      $('#portfolio').hide();
      $('#contact').hide();
      $('footer').hide();
    })

    $('#qui-btn').click(function(){
      $('h1').css('opacity', '1');
      $('#intro').hide();
      $('#info').show();
      $('html, body').animate({
        scrollTop: $('#info').offset().top - 20
    }, 'slow');
      $('#savoir-faire').hide();
      $('#portfolio').hide();
      $('#contact').hide();
      $('footer').hide();
    })

    $('#quoi-btn').click(function(){
      $('h1').css('opacity', '1');
      $('#intro').hide();
      $('#info').hide();
      $('#savoir-faire').show();
      $('html, body').animate({
        scrollTop: $('#savoir-faire').offset().top - 20
    }, 'slow');
      $('#portfolio').hide();
      $('#contact').hide();
      $('footer').hide();
    })

    $('#portfolio-btn').click(function(){
      $('h1').css('opacity', '1');
      $('#intro').hide();
      $('#info').hide();
      $('#savoir-faire').hide();
      $('#portfolio').show();
      $('html, body').animate({
        scrollTop: $('#portfolio').offset().top - 20
    }, 'slow');
      $('#contact').hide();
      $('footer').hide();
    })

    $('#contact-btn').click(function(){
      $('h1').css('opacity', '1');
      $('#intro').hide();
      $('#info').hide();
      $('#savoir-faire').hide();
      $('#portfolio').hide();
      $('#contact').show();
      $('html, body').animate({
        scrollTop: $('#contact').offset().top - 20
    }, 'slow');
      $('footer').show();
    })

    $('#portfolio-link').click(function(){
      $('h1').css('opacity', '1');
      $('#intro').hide();
      $('#info').hide();
      $('#savoir-faire').hide();
      $('#portfolio').show();
      $('html, body').animate({
        scrollTop: $('#portfolio').offset().top - 20
    }, 'slow');
      $('#contact').hide();
      $('footer').hide();
    })

    $('#contact-link').click(function(){
      $('h1').css('opacity', '1');
      $('#intro').hide();
      $('#info').hide();
      $('#savoir-faire').hide();
      $('#portfolio').hide();
      $('#contact').show();
      $('html, body').animate({
        scrollTop: $('#contact').offset().top - 20
    }, 'slow');
      $('footer').show();
    })

    // PORTFOLIO IMG HOVER ZOOM
    // $('#portfolio img').mouseover(function(){
    //   $(this).css('height', '50vh');
    // })
    // $('#portfolio img').mouseleave(function(){
    //   $(this).css('height', '');
    // })



});
