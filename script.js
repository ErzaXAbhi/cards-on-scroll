const heading = document.querySelector("h1");
const hero = document.querySelector(".hero");

gsap.from(hero, { autoAlpha: 0, duration: 1, ease: "linear" });

gsap.from(heading, { autoAlpha: 0, y: -700, duration: 2, ease: "linear" });

// card scrolling

const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");
const card3 = document.querySelector(".card-3");
const card4 = document.querySelector(".card-4");

gsap.from(card1, {
  x: -100,
  ease: "linear",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".slot-1",
    start: "top 120%",
    end: "middle",
    scrub: true,
  },
});

gsap.from(card2, {
  x: 100,
  ease: "linear",
  duration: 0.5,
  scrollTrigger: {
    trigger: ".slot-1",
    start: "top 120%",
    end: "middle",
    scrub: true,
  },
});

gsap.from(card3, {
  x: -100,
  ease: "linear",
  scrollTrigger: {
    trigger: ".slot-2",
    start: "top 120%",
    end: "middle",
    scrub: true,
  },
});

gsap.from(card4, {
  x: 100,
  ease: "linear",
  scrollTrigger: {
    trigger: ".slot-2",
    start: "top 120%",
    end: "middle",
    scrub: true,
  },
});
