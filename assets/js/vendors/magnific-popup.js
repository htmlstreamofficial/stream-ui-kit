(function($) {
  'use strict';

  $(document).ready(function() {
    // Image popup - vertical fit
    $('.js-popup-image').magnificPopup({
      type: 'image',
      closeOnContentClick: true,
      mainClass: 'mfp-img-mobile',
      image: {
        verticalFit: true,
      }
    });

    // Popup gallery
    $('.js-popup-gallery').magnificPopup({
      type: 'image',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
      }
    });

    // Multiple Galleries with a single popup
    $('.js-popup-multiple-image').magnificPopup({
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      fixedContentPos: true,
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0,1], // Will preload 0 - before current, and 1 after the current image
      }
    });

    // Video iframes
    $('.js-popup-youtube, .js-popup-vimeo').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: true
    });
  });
}(jQuery));