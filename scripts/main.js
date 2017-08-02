$(document).ready(function () {
    $('.gallery').photoswipe({
        bgOpacity: 0.9,
        loop: true
    });

    $('.gallery-pack').photoswipe({
        bgOpacity: 0.9,
        loop: true
    });

    $('.gallery-pack').packery({
      // options
      itemSelector: '.image',
      columnWidth: '.grid-size',
      percentWidth: true,
      gutter: '.gutter-size'
    });
});
