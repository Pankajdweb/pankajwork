const memberSpotlight = new Swiper(".ms_swiper-mob", {
  // Optional parameters
  slidesPerView: "auto",
  slidesPerGroup: 1,
  waitForTransition: true,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".build-next",
    prevEl: ".build-prev",
  },
});
