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
    $('main').addClass('animated fadeIn');

    // SUMMER POP-UP CLOSE
    $('#summer_popup i').click(function(){
      $('#summer_popup').fadeOut();
    })

    // PORTFOLIO > SINGLE

    // WOCO
    $('#single-woco .single-next a').mouseover(function(){
      $('#single-woco .single-next').css("background-image", "url(img/mock2.png)");
    });
    $('#single-woco .single-next a').mouseleave(function(){
      $('#single-woco .single-next').css("background-image", "");
    });

    // PRINCESS
    $('#single-princess .single-next a').mouseover(function(){
      $('#single-princess .single-next').css("background-image", "url(img/mock3.png)");
    });
    $('#single-princess .single-next a').mouseleave(function(){
      $('#single-princess .single-next').css("background-image", "");
    });

    // F SIMITCHIEV
    $('#single-fsimitchiev .single-next a').mouseover(function(){
      $('#single-fsimitchiev .single-next').css("background-image", "url(img/mock4.png)");
    });
    $('#single-fsimitchiev .single-next a').mouseleave(function(){
      $('#single-fsimitchiev .single-next').css("background-image", "");
    });

    // IRAY
    $('#single-iray .single-next a').mouseover(function(){
      $('#single-iray .single-next').css("background-image", "url(img/mock5.png)");
    });
    $('#single-iray .single-next a').mouseleave(function(){
      $('#single-iray .single-next').css("background-image", "");
    });

    // SIX-RING CIRCUS
    // $('#single-sixringcircus .single-next a').mouseover(function(){
    //   $('#single-sixringcircus .single-next').css("background-image", "url(img/mock4.png)");
    // });
    // $('#single-sixringcircus .single-next a').mouseleave(function(){
    //   $('#single-sixringcircus .single-next').css("background-image", "");
    // });

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

function pinSymbol(color) {
    return {
        path: 'M 0,0 C -2,-20 -10,-22 -10,-30 A 10,10 0 1,1 10,-30 C 10,-22 2,-20 0,0 z M -2,-30 a 2,2 0 1,1 4,0 2,2 0 1,1 -4,0',
        fillColor: color,
        fillOpacity: 1,
        strokeColor: '#fff',
        strokeWeight: 2,
        scale: 1,
   };
}

var marker = new google.maps.Marker({
   map: map,
   position: new google.maps.LatLng(45.745877, 4.842133),
   icon: pinSymbol("#00FFD2")
});

    // ACTIVATE POINTER EVENTS ON CLICK ON MAP
      $('#map').css('pointer-events', 'none');

      $('.map-wrapper').click(function() {
        $('#map').css('pointer-events', 'auto');
      });

});
