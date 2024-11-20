document.addEventListener("DOMContentLoaded", () => {
  // Select all buttons and content items
  const buttons = document.querySelectorAll("[processbtn]");
  const contents = document.querySelectorAll("[processcontent]");

  // Add click event listener to each button
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons and contents
      buttons.forEach((btn) => btn.classList.remove("active"));
      contents.forEach((content) => content.classList.remove("active"));

      // Add active class to the clicked button and corresponding content
      button.classList.add("active");
      if (contents[index]) {
        contents[index].classList.add("active");
      }
    });
  });

  // Automatically click the first button on load
  if (buttons[0]) {
    buttons[0].click();
  }
});

const swiper = new Swiper(".testimonial-swiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});

const blogswiper = new Swiper(".blog_swiper", {
  slidesPerView: 2,
  spaceBetween: 20,
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".blog_next",
    prevEl: ".blog_prev",
  },
});

window.addEventListener("load", function () {
  var tipsCards = document.querySelectorAll("[testimonial-card]");
  for (var i = 0; i < tipsCards.length; i++) {
    var tipsBg = tipsCards[i].querySelector("[testimonial-bg]");
    if (window.getComputedStyle(tipsBg).display === "none") {
      tipsCards[i].classList.add("no-image");
    }
  }
});

// Updated code
