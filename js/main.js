$(document).ready(function() {
	// ANIMATIONS ON SCROLL START
	// UI ANIMATION
	$('main').addClass('animated fadeIn');
	
	// PORTFOLIO > SINGLE
	// WOCO
	$('#single-woco .single-next a').mouseover(function() {
		$('#single-woco .single-next').css("background-image", "url(img/mock2.png)");
	});
	$('#single-woco .single-next a').mouseleave(function() {
		$('#single-woco .single-next').css("background-image", "");
	});
	// PRINCESS
	$('#single-princess .single-next a').mouseover(function() {
		$('#single-princess .single-next').css("background-image", "url(img/mock3.png)");
	});
	$('#single-princess .single-next a').mouseleave(function() {
		$('#single-princess .single-next').css("background-image", "");
	});
	// F SIMITCHIEV
	$('#single-fsimitchiev .single-next a').mouseover(function() {
		$('#single-fsimitchiev .single-next').css("background-image", "url(img/mock4.png)");
	});
	$('#single-fsimitchiev .single-next a').mouseleave(function() {
		$('#single-fsimitchiev .single-next').css("background-image", "");
	});
	// IRAY
	$('#single-iray .single-next a').mouseover(function() {
		$('#single-iray .single-next').css("background-image", "url(img/mock5.png)");
	});
	$('#single-iray .single-next a').mouseleave(function() {
		$('#single-iray .single-next').css("background-image", "");
	});
	// SIX-RING CIRCUS
	// $('#single-sixringcircus .single-next a').mouseover(function(){
	//   $('#single-sixringcircus .single-next').css("background-image", "url(img/mock4.png)");
	// });
	// $('#single-sixringcircus .single-next a').mouseleave(function(){
	//   $('#single-sixringcircus .single-next').css("background-image", "");
	// });
	// ACTIVATE POINTER EVENTS ON CLICK ON MAP
	$('#map').css('pointer-events', 'none');
	$('.map-wrapper').click(function() {
		$('#map').css('pointer-events', 'auto');
	});

	// SCROLLA
	// $('.animate').scrolla();
	// PARALLAX
	$('.parallax').parallaxBackground();

	// FLOAT
	$('span.underline').jqFloat({
		width: 1,
		height: 1,
		speed: 1000
	});


	$(document).scroll(function() {
		var scroll_start = 0;
		var startchange = $('body');
		var offset = startchange.offset();

		scroll_start = $(this).scrollTop();

		if (scroll_start > offset.top) {
			$('h1').css('margin-top', '2px');
			$('.toggle-button').css('top', '10px');
			$('#contact-link').css('top', '20px')
		} else {
			$('h1').css('margin-top', '');
			$('.toggle-button').css('top', '');
			$('#contact-link').css('top', '')
		}
	});
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

});
