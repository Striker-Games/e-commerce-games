$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:false,
    margin:5,
    nav:false,
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