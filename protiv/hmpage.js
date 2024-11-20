function animateCounter(element, target) {
  let current = 0;
  const step = target / 200; // Smaller steps for slower animation
  const interval = setInterval(() => {
    current += step;
    if (current >= target) {
      current = target;
      clearInterval(interval);
    }
    element.innerText = current.toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  }, 15); // Longer interval for slower animation
}

function animateAllCounters() {
  const elements = document.querySelectorAll(".avhive_count-no");

  elements.forEach((element) => {
    const target = parseFloat(element.innerText.replace(/,/g, ""));
    animateCounter(element, target);
  });
}

// Call the function to animate counters on page load
window.onload = animateAllCounters;

// // Function to set the height of home_hero-grid based on hero_img height
// function adjustHomeHeroGridHeight() {
//   // Get the hero image element by data attribute
//   var heroImg = document.querySelector("[hhero_img]");

//   // Check if the element exists
//   if (heroImg) {
//     // Get the height of the hero image
//     var heroImgHeight = heroImg.offsetHeight;
//     console.log(heroImgHeight);

//     // Calculate 90% of the hero image height
//     var newHeight = heroImgHeight * 0.9;

//     // Get the home hero grid element
//     var homeHeroGrid = document.querySelector(".home_hero-grid");

//     // Check if the element exists
//     if (homeHeroGrid) {
//       // Apply the new height to the home hero grid element
//       homeHeroGrid.style.height = newHeight + "px";
//     }
//   }
// }

// // Wait until the DOM is fully loaded
// document.addEventListener("DOMContentLoaded", function () {
//   adjustHomeHeroGridHeight();

//   // Add an event listener for window resize
//   window.addEventListener("resize", function () {
//     adjustHomeHeroGridHeight();
//   });
// });
