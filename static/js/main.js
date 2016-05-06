'use strict';

jQuery(function($) {
	
    var $lazyImages = $('img.lazy'), 
    	e = 'foo@bar.com';

    $lazyImages.lazyload();

    $('.jsAddContact').append('<a href="mailto:'+ e +'">' + e + '</a>');
	
});