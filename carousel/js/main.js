(function($){
	$(document).ready(function(){
		$('#slide-show-1').carousel({
			slides:['images/image_1.png',
					'images/image_2.png',
					'images/image_3.png'],
			slideWidth: 450,
			interval: 5000,
		});
		
		$('#slide-show-2').carousel({
			slides:['images/image_3.png',
					'images/image_2.png',
					'images/image_1.png'],
			slideWidth: 450,
			interval: 2500,
		});
		$('#slide-show-3').carousel({
			slides:['images/image_2.png',
					'images/image_3.png',
					'images/image_1.png'],
			slideWidth: 450,
			interval: 1000,
		});
	});
})(jQuery)
