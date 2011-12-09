(function($) {
	/*
	 * thresh is the vertical threshold before "scrolling" happens
	 * fixedTop is what the top value should be while scrolling
	 * initTop is the pre-scrolling Y value
	 */
	$.fn.fst = function(thresh, fixedTop, initTop) {
		if (!this) return;
		if (isNaN(thresh)) thresh = 0;
		if (isNaN(fixedTop)) fixedTop = 10;
		if (isNaN(initTop)) initTop = 10;
		var $t = this;
		var scrolling = function () {
			if ($(document).scrollTop() < thresh) {
				$t.css("position","absolute").css("top",initTop);
			} else {
				$t.css("position","fixed").css("top",fixedTop);
			}
		}
		$(window).scroll(scrolling);
		return this;
	}
})(jQuery);
