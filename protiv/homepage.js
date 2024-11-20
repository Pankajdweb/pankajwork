const buildsswiper = new Swiper(".ms_swiper-mob", {
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

// Js For Process section
const btnItems = document.querySelectorAll("[processbtn]");
const imgItems = document.querySelectorAll("[processcontent]");
const btnItemCount = btnItems.length + 1;
const imgItemCount = imgItems.length;

// Function to simulate a click event on the first button
function simulateClickOnFirstButton() {
  btnItems[0].click();
}

// Simulate click on the first button when the page loads
window.addEventListener("load", simulateClickOnFirstButton);

btnItems.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    // Remove active class from all buttons
    btnItems.forEach((btn) => {
      btn.classList.remove("active");
    });

    // Add active class to the clicked button
    btn.classList.add("active");

    // Remove active class from all images
    imgItems.forEach((img) => {
      img.classList.remove("active");
    });

    // Add active class to the corresponding image
    imgItems[index].classList.add("active");
  });
});

const testimonialswiper = new Swiper(".testimonial-swiper", {
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

  autoplay: {
    delay: 2500,
  },
});

// Js For Blog Swiper

const blogswiper = new Swiper(".blog_swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: ".blog_next",
    prevEl: ".blog_prev",
  },
});
