var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

const responsivo = document.querySelector(".responsivo");
if (window.innerWidth <= 755) {
    responsivo.classList.toggle("responsivo");
}