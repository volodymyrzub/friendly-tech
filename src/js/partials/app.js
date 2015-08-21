$(document).ready(function() {
 
 $('.owl-carousel').owlCarousel({
 		items: 4,
 		loop: false,
		autoPlay: true,
		autoplayTimeout: 2000,
		touchDrag: true,
		itemsDesktop: [1199,4],
		itemsDesktopSmall: [979,3],
		itemsTablet: [768,2],
		itemsMobile: [479,1],
		navigation: true,
		pagination: false,
		navigationText : ["<span class=\"glyphicon glyphicon-menu-left\" aria-hidden=\"true\"></span>", "<span class=\"glyphicon glyphicon-menu-right\" aria-hidden=\"true\"></span>"]
 	});
 
});