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

document.querySelectorAll(".swiper-background img").forEach(image => {
  image.onclick = () => {
    document.querySelector(".popup-image").style.display = 'block';
    document.querySelector('.popup-image img').src = image.getAttribute('src');
  }
});

document.querySelector('.popup-image span').onclick = () => {
  document.querySelector(".popup-image").style.display = 'none';
}
