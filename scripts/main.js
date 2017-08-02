$(document).ready(function () {
  $('.gallery').photoswipe({
      bgOpacity: 0.9,
      loop: true
  });

  $('.gallery-pack')
  .packery({
      itemSelector: '.image',
      columnWidth: '.grid-size',
      percentWidth: true,
      gutter: '.gutter-size'
  })
  .imagesLoaded(function () {
    $('.gallery-pack').packery();
  })
  .photoswipe({
      bgOpacity: 0.9,
      loop: true
  });
});


// $('.gallery-pack').packery({
//   // options
//   itemSelector: '.image',
//   columnWidth: '.grid-size',
//   percentWidth: true,
//   gutter: '.gutter-size'
// });
