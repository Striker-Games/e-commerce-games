$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:5,
      autoplay: true,
      autoplayTimeout: 4000,
      autoplayHoverPause: true,
      dots: false,
      responsive:{
          0:{
              items:2
          },
          600:{
              items:3
          },
          950: {
            items:4
          },
          1200:{
              items:5
          }
      }
  })
});