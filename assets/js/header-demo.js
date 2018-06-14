/*!
 * Stream v1.0 (https://htmlstream.com)
 * Copyright Htmlstream
 * Licensed under MIT
 */

(function($) {
  'use strict';

  // Sticky Header
  $(function() {
    // Check to see if there is a bakcground class on loading
    if ($('#js-header-sticky').offset().top > 15) {
      $('#js-header-sticky').addClass('header__sticky');
    }

    // Check to add a background class on scrolling
    $(window).on('scroll', function() {
      if ($('#js-header-sticky').offset().top > 15) {
        $('#js-header-sticky').addClass('header__sticky');
      } else {
        $('#js-header-sticky').removeClass('header__sticky');
      }
    });
  });

  // Header Scroll
  $(function() {
    var $offset = 0;
        $offset = $(".fixed-top").height()-0;

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('.js-nav-item').on('click', function(event) {
      var $position = $($(this).attr('href')).offset().top;
      $('html, body').stop().animate({
        scrollTop: $position - $offset
      }, 1000);
      event.preventDefault();
    });

    var $scrollspy = $('body').scrollspy({target: '.fixed-top', offset: $offset+2});

    // Overlay
    var overlay = $('.js-overlay-nav'),
        trigger = $('.js-trigger'),
        navItem = $('.js-nav-item'),
        sticky = $('.header__overlay-sticky');

    trigger.on('click', function() {
      trigger.toggleClass('-is-active');
      overlay.toggleClass('-is-open');
      sticky.toggleClass('-is-open');
    });

    // Collapse Navbar When It's Clickicked
    navItem.on('click', function() {
      $('.js-trigger').removeClass('-is-active');
      $('.js-overlay-nav').removeClass('-is-open');
      $('.header__overlay-sticky').removeClass('-is-open');
    });
  });
}(jQuery));