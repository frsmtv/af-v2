$('#toggle').click(function() {
    $(this).toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');
});

// HIDE MENU ON CLICK ON A LINK
$('#overlay a').click(function(){
  $('#overlay').toggleClass('nav-active');
  $('#toggle').toggleClass('toggle-active');
});
