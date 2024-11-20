// js for how it work section

// const btnItems = document.querySelectorAll(".how_it-item");
// const imgItems = document.querySelectorAll(".how-img-li");
// const btnItemCount = btnItems.length;
// const imgItemCount = imgItems.length;

// let currentIndex = 0;
// let intervalId;

// function switchActiveClass() {
//   btnItems.forEach((btn) => {
//     btn.classList.remove("active");
//   });

//   imgItems.forEach((img) => {
//     img.classList.remove("active");
//   });

//   btnItems[currentIndex].classList.add("active");
//   imgItems[currentIndex].classList.add("active");

//   currentIndex = (currentIndex + 1) % btnItemCount;
// }

// function startInterval() {
//   intervalId = setInterval(switchActiveClass, 3000);
// }

// function stopInterval() {
//   clearInterval(intervalId);
// }

// btnItems.forEach((btn, index) => {
//   btn.addEventListener("mouseenter", () => {
//     stopInterval();

//     btnItems.forEach((btn) => {
//       btn.classList.remove("active");
//     });

//     btn.classList.add("active");

//     imgItems.forEach((img) => {
//       img.classList.remove("active");
//     });

//     imgItems[index].classList.add("active");
//   });

//   btn.addEventListener("mouseleave", () => {
//     currentIndex = index;
//     startInterval();
//   });
// });

// window.addEventListener("load", () => {
//   switchActiveClass();
//   startInterval();
// });

const btnItems = document.querySelectorAll(".how_it-item");
const imgItems = document.querySelectorAll(".how-img-li");
const btnItemCount = btnItems.length + 1;
const imgItemCount = imgItems.length;

const translationValues = Array.from(
  { length: btnItemCount },
  (_, i) => -(i * (100 / (btnItemCount - 1)))
);
console.log(translationValues);

function simulateHoverOnFirstButton() {
  const event = new Event("mouseenter");
  btnItems[0].dispatchEvent(event);
}

window.addEventListener("load", simulateHoverOnFirstButton);

btnItems.forEach((btn, index) => {
  btn.addEventListener("mouseenter", () => {
    btnItems.forEach((btn) => {
      btn.classList.remove("active");
    });

    btn.classList.add("active");

    imgItems.forEach((img) => {
      img.classList.remove("active");
    });

    imgItems[index].classList.add("active");
  });
});
