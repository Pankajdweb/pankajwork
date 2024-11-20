let tl = gsap.timeline();

tl.from("[navbar]", {
  y: "-5rem",
  duration: 0.4,
  opacity: 0,
  stagger: 0.2,
})
  .from("[herotitle-mob]", {
    y: "105%",
    opacity: 0,
    duration: 0.5,
  })
  .from(
    "#rightflower",
    {
      x: "110%",
      opacity: 0,
      duration: 0.4,
    },
    "-=0.4"
  )

  .from(
    "#leftflower",
    {
      x: "-10%",
      opacity: 0,
      duration: 0.4,
    },
    "-=0.4"
  )

  .from(
    "#centername",
    {
      y: "110%",
      opacity: 0,
      duration: 0.4,
    },
    "-=0.2"
  )
  .from("[hhero_desc]", {
    y: "110%",
    opacity: 0,
    duration: 0.4,
  });
