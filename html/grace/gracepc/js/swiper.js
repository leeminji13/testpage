var swiper = new Swiper("#sec4_slide", {
    slidesPerView: "auto",
    loop : true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });