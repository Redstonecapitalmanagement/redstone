;(function($, undefined) {
  $(document).ready(function() {

    $('.hero').slick({
      dots: true
    })

    $('.quotes').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 10000,
      fade: true,
      speed: 2000,
      arrows: false
    })

    $('.panel.services .service').on('click', function() {
      $('.hero').slick('slickGoTo', $(this).index())
    })

  })
})(jQuery)