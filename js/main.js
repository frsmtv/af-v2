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
            $('#contact-link').css('top', '10px')

          } else {
            // $('h1').css('opacity', '');
            $('h1').css('margin-top', '');
            // $('span.title').css('opacity', '');
            $('.toggle-button').css('top', '');
            $('#contact-link').css('top', '')
      }
    });

    // UI ANIMATION
    $('body').addClass('animated fadeIn');


    // $('header h1').mouseover(function(){
    //   $(this).addClass('text-shadow-pop-right');
    // })
    // ('header h1').mouseleave(function(){
    //   $(this).removeClass('text-shadow-pop-right');
    // })


    // $('header h1').mouseover(function(){
    //     $('header h1 span').css('color', '#3FCE94');
    // })
    // $('header h1').mouseleave(function(){
    //     $('header h1 span').css('color', '');
    // })

    // $('header h1').mouseover(function(){
    //   $('header h1 span.sub').show();
    // })
    // $('header h1').mouseleave(function(){
    //   $('header h1 span.sub').hide();
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
        $('.hover-img').css("background-image", "url(img/mock1.png)");
        $('.hover-img').css('opacity', '1');
    })
    $('#woco-hover').mouseleave(function(){
        $('.hover-img').css("background-image", "");
        $('.hover-img').css('opacity', '');
    })

    // PRINCESS
    $('#princess-hover').mouseover(function(){
        $('.hover-img').css("background-image", "url(img/mock2.png)");
        $('.hover-img').css('opacity', '1');
    })
    $('#princess-hover').mouseleave(function(){
        $('.hover-img').css("background-image", "");
        $('.hover-img').css('opacity', '');
    })

    // FSIMITCHIEV
    $('#fsimitchiev-hover').mouseover(function(){
        $('.hover-img').css("background-image", "url(img/mock3.png)");
        $('.hover-img').css('opacity', '1');
    })
    $('#fsimitchiev-hover').mouseleave(function(){
        $('.hover-img').css("background-image", "");
        $('.hover-img').css('opacity', '');
    })

    // IRAY
    $('#iray-hover').mouseover(function(){
        $('.hover-img').css("background-image", "url(img/mock4.png)");
        $('.hover-img').css('opacity', '1');
    })
    $('#iray-hover').mouseleave(function(){
        $('.hover-img').css("background-image", "");
        $('.hover-img').css('opacity', '');
    })

    // IRAY
    $('#sixring-hover').mouseover(function(){
        $('.hover-img').css("background-image", "url(img/mock5.png)");
        $('.hover-img').css('opacity', '1');
    })
    $('#sixring-hover').mouseleave(function(){
        $('.hover-img').css("background-image", "");
        $('.hover-img').css('opacity', '');
    })

    // PORTFOLIO > SINGLE

    // WOCO
    $('#single-woco .single-next a').mouseover(function(){
      $('#single-woco .single-next').css("background-image", "url(img/mock2.png)");
    })
    $('#single-woco .single-next a').mouseleave(function(){
      $('#single-woco .single-next').css("background-image", "");
    })

    // PRINCESS
    $('#single-princess .single-next a').mouseover(function(){
      $('#single-princess .single-next').css("background-image", "url(img/mock3.png)");
    })
    $('#single-princess .single-next a').mouseleave(function(){
      $('#single-princess .single-next').css("background-image", "");
    })

    // GOOGLE MAPS
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 45.745877, lng: 4.842133},
        zoom: 15,
        styles: [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#4f595d"
            },
            {
                "visibility": "on"
            }
        ]
    }
]
});
var myLatLng = {lat: 45.745877, lng: 4.842133};
var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });

});
