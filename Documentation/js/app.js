/* Template Name: Cotido - Tailwind CSS Landing Page Template
   Author: Zoyothemes
   Email: zoyothemes@gmail.com
   Website: https://zoyothemes.com/
   File Description: Main JS file of the template
*/

(function ($) {

    'use strict';
    // Smooth scroll
    $('.sidebar-nav a').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

	//Scrollspy
    $(".sidebar-nav").scrollspy({
        offset: 20
    });
})(jQuery)