new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 10,

    // Pagination Bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        1: {
            slidesPerView: 2,
        },
        2: {
            slidesPerView: 3,
        },
        3: {
            slidesPerView: 4,
        }
    }

});