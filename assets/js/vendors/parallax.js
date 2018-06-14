(function($) {
  'use strict';

  $(document).ready(function(){
    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
      $('.js-parallax').parallax("50%", .3);
    }
  })

}(jQuery));