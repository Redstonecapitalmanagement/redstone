(function($, undefined) {
  $(document).ready(function() {

    $('.hero').slick({
      dots: true
    })

    $('.panel.services .service').on('click', function() {
      $('.hero').slick('slickGoTo', $(this).index())
    })

  })
})(jQuery)