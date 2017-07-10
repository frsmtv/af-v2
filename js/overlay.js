$('#toggle').click(function() {
    $(this).toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');
    $('#overlay li').toggleClass('slit-in-horizontal');
    $('#contact-link').toggleClass('hide');
});


// HIDE MENU ON CLICK ON A LINK
$('#overlay li').click(function(){
  $('#overlay').toggleClass('nav-active');
  $('#toggle').toggleClass('toggle-active');
  $('#contact-link').toggleClass('hide');
});
