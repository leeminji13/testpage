
var swiper = new Swiper("#md_sw", {
  slidesPerView: "auto",
  spaceBetween: 40,
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

var swiper1 = new Swiper(".pop_swiper", {
  slidesPerView: "1",
  loop : true, 
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    observer: true,	
    observeParents: true,
  });

