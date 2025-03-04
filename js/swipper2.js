new Swiper('.card-wrapper1', {
    loop: true,
    spaceBetween : 30,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Responsive Breakpoints
    breakpoints: {
      0: {
        slidesPerView : 1
      },
      768: {
        slidesPerView : 2
      },
      1024: {
        slidesPerView : 3
      }
    }
});