jQuery(document).ready(function($){

    "use strict";
        
        
        
        $('.main-menu').slicknav({
            prependTo: '#mobile-menu',
            label: '',
        });
        
        
        
        $(".video-play-button").magnificPopup({
            type: 'video'
        });
    });
 

     
        
        

         $(window).on ('scroll', function () {
	        if ($(this).scrollTop() > 300) {
	            $('.scrollup').fadeIn();
	        } else {
	            $('.scrollup').fadeOut();
	        }
	    });

	    $('.scrollup').on ('click', function () {
	        $("html, body").animate({
	            scrollTop: 0
	        }, 1500);
	        return false;
	    });
 
