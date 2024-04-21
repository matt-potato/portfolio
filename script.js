var swiper = new Swiper(".work-wrap", {
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        clickable: 'true',
        el: ".swiper-pagination"
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 60,
          },
        768: {
          slidesPerView: 1,
          spaceBetween: 60,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 60,
        },
      }
});