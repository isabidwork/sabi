const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 1000,
    direction: 'horizontal',
    

    //Slide per view
    //slidesPerView: 3,
    //spaceBetween: 10,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //auto play
    autoplay: {
      delay: 2000,
    },
    loop: true,
  
    // And if we need scrollbar
    //scrollbar: {
      //el: '.swiper-scrollbar',
    //},


  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    // when window width is >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
     },
       // when window width is >= 2560px
    2560: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
}

  });