(function($) {
	$.fn.carousel = function (options) {
		var defaults = {
		};

		var settings = $.extend({}, defaults, options);
		/**
		 *
		 */		
		function showNextFrame() {
			
		}

		/**
		 *
		 */		
		function showPreviosFrame(container) {
			
		}

		/**
		 *
		 */
		function buildSlidesFromList() {
			var viewport = this;
			var slides = $('<div>'), slide, index;

			//setting wrapper to a slideshow
			this.addClass('slides-viewport');
			slides.addClass('slides-wrapper');

			//builind and appending slides read from options to slideshow
			viewport.append(slides);
			for (index = 0; index < settings.slides.length; index++) {
				slide = $('<img>');
				slide.attr('src', settings.slides[index]);
				slides.append(slide);
			}

			//getting image height from the last read slide and assigning it to viewport
			slide.on('load', function(e){
				viewport.height($(this).height());
			});
		}

		function assignControls() {
		}

		return this.each(function() {
			var self = $(this);

			//building gallery based on slides information recieved with options
			if (settings.slides.length) {
				buildSlidesFromList.call(self);
				assignControls.call(self);
			}
		});
	}
})(jQuery);
