$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
		menu: '#menu',
		scrollingSpeed: 1000,
		slidesNavigation: true,
		autoScrolling: false,
		scrollOverflow: true,

	    // Hide the slides container before the next slide loads
	    onSlideLeave: function(anchorLink, index, slideIndex, direction) {
	        $.fn.fullpage.setScrollingSpeed(0);
	        $('.fp-section').find('.fp-slidesContainer').hide();
	    },
	  
	    // Display the slides container by fading it in after the next slide has been loaded.
	    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
	        $('.fp-section').find('.fp-slidesContainer').fadeIn(400);
	        $.fn.fullpage.setScrollingSpeed(1000);
	    }
	});
});