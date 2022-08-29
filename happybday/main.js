const canvas = document.getElementById('custom_canvas')
const button = document.getElementById('button')

const jsConfetti = new JSConfetti({canvas})
const moreeConfetti = new JSConfetti({canvas})

moreeConfetti.addConfetti({
    emojis: ['🌈', '⚡️', '💥', '✨', '💫', '🌸'],
  })



 setTimeout(() => {
  jsConfetti.addConfetti()
}, 200)

 setTimeout(() => {
  moreeConfetti.addConfetti()
  }, 1000);
   setTimeout(() => {
  moreeConfetti.addConfetti()
  }, 1700);

  jsConfetti.addConfetti({
    emojis: ['🦄'],
    emojiSize: 100,
    confettiNumber: 60,
  })

  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({
    ease: "none",
    duration: 1
  });


  const tl = gsap.timeline();
  tl.fromTo(".red", {autoAlpha: 2}, {autoAlpha: 0, duration: 1})
    .fromTo(".orange", {autoAlpha: 0}, {autoAlpha: 2, duration: 1})
    .fromTo(".orange", {autoAlpha: 2}, {autoAlpha: 0, duration: 1})
    .fromTo(".purple", {autoAlpha: 0}, {autoAlpha: 2, duration: 1})
    .fromTo(".purple", {autoAlpha: 2}, {autoAlpha: 0, duration: 1})
    .fromTo(".green", {autoAlpha: 0}, {autoAlpha: 2, duration: 1})

   const bfa = ScrollTrigger.create({
    animation: tl,
    trigger: ".main_story",
    start: "top top",
    end: "+=7800",
    scrub: 1,
    pin: true,
    anticipatePin: 1
    },
  )