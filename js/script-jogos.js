var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
    speed: 1000,
    autoplay: {
        delay: 3500
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    },
  });

const responsivo = document.querySelector(".responsivo");
if (window.innerWidth <= 755) {
    responsivo.classList.toggle("responsivo");
}

document.querySelectorAll(".swiper-background img").forEach(image => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-image span').onclick = () => {
  document.querySelector(".popup-image").style.display = 'none';
}