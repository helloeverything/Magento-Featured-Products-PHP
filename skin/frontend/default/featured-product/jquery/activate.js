/**
 * We use the initCallback callback
 * to assign functionality to the controls
 */

function mycarousel_initCallback(carousel) {
    jQuery('.jcarousel-control a').bind('click', function() {
        carousel.scroll(jQuery.jcarousel.intval(jQuery(this).text()));
        return false;
    });

    jQuery('.jcarousel-scroll select').bind('change', function() {
        carousel.options.scroll = jQuery.jcarousel.intval(this.options[this.selectedIndex].value);
        return false;
    });

    jQuery('#mycarousel-next').bind('click', function() {
        carousel.next();
        return false;
    });

    jQuery('#mycarousel-prev').bind('click', function() {
        carousel.prev();
        return false;
    });
};


// Ride the carousel...
 	;(function($) {
jQuery(document).ready(function() {
    jQuery(".first-and-second-carousel").jcarousel({
        scroll: 1,
        auto: 4,
         wrap: 'circular',
                 animation: 'slow',
        initCallback: mycarousel_initCallback
    });
});

			})(jQuery);