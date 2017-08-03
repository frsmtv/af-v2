$('#toggle').click(function() {
    $(this).toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');
    $('#overlay li').toggleClass('slit-in-horizontal');
    $('#contact-link').toggleClass('hide');
    $('main').toggleClass('slide-out-blurred-top');
    $('footer').toggleClass('slide-out-blurred-top');
    $('header h1').css('visibility', 'hidden');
});

$('#toggle').click(function(){
  if ( $('header h1').css('visibility') == 'hidden' )
    $('header h1').css('visibility','visible');
});

// HIDE MENU ON CLICK ON A LINK
$('#overlay li').click(function(){
  $('#overlay').toggleClass('nav-active');
  $('#toggle').toggleClass('toggle-active');
  $('#contact-link').toggleClass('hide');
  $('#overlay li').toggleClass('slit-in-horizontal');
  $('main').toggleClass('slide-out-blurred-top');
  $('footer').toggleClass('slide-out-blurred-top');
  $('header h1').css('visibility', 'visible');
});
