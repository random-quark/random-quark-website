$(document).ready(function(){
	if (window.screen.width < 843) {
		return;
	};

	$('.grid').imagesLoaded( function(){
		$('.grid').masonry({
			itemSelector: '.grid-item',
			columnWidth: 300,
			gutter: 3,
			isFitWidth: true
		});
	});
});
