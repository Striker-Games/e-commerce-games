$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 5,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    dots: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      950: {
        items: 4,
      },
      1200: {
        items: 5,
      },
    },
  }),
    $('.owl-carousel2').owlCarousel({
      loop: true,
      margin: 5,
      dots: false,
      items: 1,
    });
});

const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 3500,
  },
});

const responsivo = document.querySelector('.responsivo');
if (window.innerWidth <= 755) {
  responsivo.classList.toggle('responsivo');
}
