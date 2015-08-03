$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['white', 'white0', 'white', 'white'],
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage'],
		menu: '#menu',
		scrollingSpeed: 1000,
		slidesNavigation: true,
		autoScrolling: false
	});

});