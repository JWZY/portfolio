$(document).ready(function() {
	$('#fullpage').fullpage({
		anchors: ['home', 'about', 'portfolio', 'contact'],
		menu: '#menu',
		scrollingSpeed: 1000,
		slidesNavigation: true,
		autoScrolling: false,
		allowPageScroll: true,
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
	    },
	});
});

$(document).ready(function(){
	$('.jesus').slick({
		dots: true,
		arrows: false,
		autoplay: true,
		infinite: true,
		speed: 700,
		slidesToShow: 1,
		slidesToSlide: 1,
		centerMode: true,
		fade: true
	});
});