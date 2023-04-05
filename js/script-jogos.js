var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: 'true',
    },
  });

const responsivo = document.querySelector(".responsivo");
if (window.innerWidth <= 755) {
    responsivo.classList.toggle("responsivo");
}