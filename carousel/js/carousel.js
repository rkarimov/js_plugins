(function($) {
	$.fn.carousel = function (options) {
		var defaults = {};
		var settings = $.extend({}, defaults, options);

		/**
		 * Animates slides change
		 */		
		function changeSlide() {
			var viewport = this;
			var slides = $('.slides-wrapper', viewport);
			var state = viewport.settings.state;
			
			var left = state.slideWidth * (state.currentSlide - 1);
			slides.animate({left: -left}, 500, function(){slideAnimationCb.call(this)}.bind(viewport));
		}
		
		/**
		 * Slide animation callback
		 */
		function slideAnimationCb() {
			var viewport = this;
			var slides = $('.slides-wrapper', viewport);
			var state = viewport.settings.state;

			//resetting position of the slides
			if (state.currentSlide >= state.slidesCount) {
				state.currentSlide = 1;
				slides.css({left: 0});
			}
		}

		/*
		 * Timer handled slideshow event
		 */
		function inervalActionHandler(){
			var viewport = this;
			var state = viewport.settings.state;

			//next slide setting up and animation
			state.currentSlide++;
			changeSlide.call(viewport);
		}

		/**
		 * Builds slides collection recieved in options
		 * @TODO viewport setting up
		 */
		function buildSlidesFromList() {
			var viewport = this;
			var settings = viewport.settings;
			var slides = $('<ul>'), slide, index;

			//setting wrapper to a slideshow
			this.addClass('slides-viewport');
			slides.addClass('slides-wrapper');

			//builind and appending slides read from options to slideshow
			viewport.append(slides);
			var _slide;
			for (index = 0; index < settings.slides.length; index++) {
				slide = $('<img>');
				slide.attr('src', settings.slides[index]);
				slides.append($('<li class="slide">').append(slide));

				//keeping first slide to append it to the end of the slide query for circle animation
				if (!index) {
					_slide = $('<img>');
					_slide.attr('src', settings.slides[index]);
				}
			}
			//appending duplicate of the first slide to the end of the query
			slides.append($('<li class="slide">').append(_slide));

			//fullfilling initial slideshow state
			settings.state.currentSlide = 1;
			settings.state.slidesCount = settings.slides.length + 1;
			settings.state.slideWidth = settings.slideWidth;

			//getting image height from the last read slide and assigning it to viewport
			//@TODO remove this logic and replace it with setup one
			_slide.on('load', function(e){viewport.height($(this).height());});
		}

		/**
		 * Sets 'prev', 'next' and pointer elements for slideshow
		 * @TODO Missing functionality
		 */
		function assignControls() {
			
		}
		
		/**
		 * Inializes slide-shows
		 */
		return this.each(function() {
			var self = $(this);

			//moving settings to slideshow environment
			self.settings = $.extend({state:{}}, settings);
			//building gallery based on slides information recieved with options
			if (settings.slides.length) {
				buildSlidesFromList.call(self);
				assignControls.call(self);
			}

			//initializing looped routine
			self.settings.routineId = setInterval(function(){inervalActionHandler.call(this);}.bind(self), settings.interval);
		});
	}
})(jQuery);
