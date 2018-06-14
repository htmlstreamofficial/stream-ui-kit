var shuffleMe = (function( $ ) {
  'use strict';
  var $grid = $('.js-shuffle'),
      $filterOptions = $('.js-shuffle-controls li'),
      $sizer = $grid.find('.shuffle_sizer'),

  init = function() {
    setTimeout(function() {
      listen();
      setupFilters();
    }, 100);

    $grid.shuffle({
      itemSelector: '[class*="col-"]',
      sizer: $sizer
    });
  },

  setupFilters = function() {
    var $btns = $filterOptions.children();
    $btns.on('click', function(e) {
      e.preventDefault();
      var $this = $(this),
          isActive = $this.hasClass( 'active' ),
          group = isActive ? 'all' : $this.data('group');

      if ( !isActive ) {
        $('.js-shuffle-controls li a').removeClass('active');
      }

      $this.toggleClass('active');

      $grid.shuffle('shuffle', group );
    });

    $btns = null;
  },

  listen = function() {
    var debouncedLayout = $.throttle( 300, function() {
      $grid.shuffle('update');
    });

    $grid.find('img').each(function() {
      var proxyImage;

      if ( this.complete && this.naturalWidth !== undefined ) {
        return;
      }

      proxyImage = new Image();
      $( proxyImage ).on('load', function() {
        $(this).off('load');
        debouncedLayout();
      });

      proxyImage.src = this.src;
    });

    setTimeout(function() {
      debouncedLayout();
    }, 500);
  };

  return {
    init: init
  };
}( jQuery ));

$(document).ready(function() {
  shuffleMe.init();
});