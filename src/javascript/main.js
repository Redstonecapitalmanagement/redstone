;(function($, undefined) {
  $(document).ready(function() {

    var quotes = $('.quotes .quote').length

    $('.hero').slick({
      dots: true,
      arrows: false
    });

    $('.quotes').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 10000,
      fade: true,
      speed: 2000,
      arrows: false,
      initialSlide: Math.floor(Math.random() * quotes)
    });

    $('.panel.services .service').on('click', function() {
      $('.hero').slick('slickGoTo', $(this).index());
    });

    $('.toggle-primary-nav').on('click', function(e) {
      e.stopPropagation();
      $(this).toggleClass('active');
    });

    $(window).on('click', function() {
      $('.toggle-primary-nav').removeClass('active');
    })

  });
})(jQuery)