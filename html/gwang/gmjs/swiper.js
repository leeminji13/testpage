var swiper = new Swiper(".mySwiper", {
    
});


var swiper2 = new Swiper("#clubXian", {
    slidesPerView: "auto",
    touchEventsTarget: 'wrapper',  
    pagination: true,  
    observer: true,
    observeParents: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar"
    },
  });