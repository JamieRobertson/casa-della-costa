'use strict';

var e = 'enquiry@italianencounters.com';

jQuery(function($) {
	
    var $lazyImages = $('img.lazy'), 
    	$jsExpand = $('.jsExpand');

    // Init lazyload
    $lazyImages.lazyload();

    // Reveal content on 'Read more' click
    $jsExpand.on('click', '.jsExpandTrigger', function(e) {
    	var $container = $(e.delegateTarget);
    	console.log($container);
    	if ($container.hasClass('is-truncated')) {
    		$container.removeClass('is-truncated');	
    	} else {
    		$container.addClass('is-truncated');
    	}
    	return false;
    });

    // Insert email address
    $('.jsAddContact').append('<a href="mailto:'+ e +'">' + e + '</a>');

});