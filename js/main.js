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
    // $('header h1').mouseover(function(){
    //   $('span.title').show();
    // })
    // ('header h1').mouseleave(function(){
    //   $('span.title').hide();
    // })

    // PORTFOLIO

    $('#portfolio li').mouseover(function(){
      $('#portfolio li').not(this).css('opacity', '.1');
    })

    $('#portfolio li').mouseleave(function(){
      $('#portfolio li').not(this).css('opacity', '');
    })

    // WOCO
    $('#woco-hover').mouseover(function(){
        $('.hover-img').css("background-image", "url(../img/mock1.png)");
        $('.hover-img').css('opacity', '1');
    })
    $('#woco-hover').mouseleave(function(){
        $('.hover-img').css("background-image", "");
        $('.hover-img').css('opacity', '');
    })

    // PRINCESS
    $('#princess-hover').mouseover(function(){
        $('.hover-img').css("background-image", "url(../img/mock2.png)");
        $('.hover-img').css('opacity', '1');
    })
    $('#princess-hover').mouseleave(function(){
        $('.hover-img').css("background-image", "");
        $('.hover-img').css('opacity', '');
    })

    // FSIMITCHIEV
    $('#fsimitchiev-hover').mouseover(function(){
        $('.hover-img').css("background-image", "url(../img/mock3.png)");
        $('.hover-img').css('opacity', '1');
    })
    $('#fsimitchiev-hover').mouseleave(function(){
        $('.hover-img').css("background-image", "");
        $('.hover-img').css('opacity', '');
    })

    // IRAY
    $('#iray-hover').mouseover(function(){
        $('.hover-img').css("background-image", "url(../img/mock4.png)");
        $('.hover-img').css('opacity', '1');
    })
    $('#iray-hover').mouseleave(function(){
        $('.hover-img').css("background-image", "");
        $('.hover-img').css('opacity', '');
    })

    // IRAY
    $('#sixring-hover').mouseover(function(){
        $('.hover-img').css("background-image", "url(../img/mock5.png)");
        $('.hover-img').css('opacity', '1');
    })
    $('#sixring-hover').mouseleave(function(){
        $('.hover-img').css("background-image", "");
        $('.hover-img').css('opacity', '');
    })

    // PORTFOLIO > SINGLE

    // WOCO
    $('#single-woco .single-next a').mouseover(function(){
      $('#single-woco .single-next').css("background-image", "url(../img/mock2.png)");
    })
    $('#single-woco .single-next a').mouseleave(function(){
      $('#single-woco .single-next').css("background-image", "");
    })

    // PRINCESS
    $('#single-princess .single-next a').mouseover(function(){
      $('#single-princess .single-next').css("background-image", "url(../img/mock3.png)");
    })
    $('#single-princess .single-next a').mouseleave(function(){
      $('#single-princess .single-next').css("background-image", "");
    })

});
