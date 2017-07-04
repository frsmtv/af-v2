$('#toggle').click(function() {
    $(this).toggleClass('toggle-active');
    $('#overlay').toggleClass('nav-active');
    $('#overlay li').toggleClass('slit-in-horizontal');
    $('main').toggleClass('text-blur-out');
});

// $('.toggle-active').click(function(){
//   $('#overlay li').addClass('slit-out-horizontal');
// })

// HIDE MENU ON CLICK ON A LINK
$('#overlay li').click(function(){
  $('#overlay').toggleClass('nav-active');
  $('#toggle').toggleClass('toggle-active');
});
