var swiper = new Swiper('.testi-swiper', {
    // slidesPerView: 5,
    centeredSlides: true,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".testi-button-next",
        prevEl: ".testi-button-prev",
      },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });