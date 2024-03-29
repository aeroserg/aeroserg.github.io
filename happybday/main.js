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

  window.onload = function() {
    var body = document.querySelector('body');
    var links = document.querySelectorAll('a');  
    
    links.forEach(function (link) {
      link.addEventListener('click', onLinkClicked);
      
      function onLinkClicked(event) {
        event.preventDefault();
        setTimeout(onAnimationComplete, 3500);
      }
  
      function onAnimationComplete() {
        window.location = link.href;  
      }
    });
  }


  const tl = gsap.timeline();
  tl.fromTo(".red", {autoAlpha: 2}, {autoAlpha: 0, duration: 0.5})
    .fromTo(".orange", {autoAlpha: 0}, {autoAlpha: 2, duration: 0.5})
    .fromTo(".orange", {autoAlpha: 2}, {autoAlpha: 0, duration: 0.5})
    .fromTo(".purple", {autoAlpha: 0}, {autoAlpha: 2, duration: 0.5})
    .fromTo(".purple", {autoAlpha: 2}, {autoAlpha: 0, duration: 0.5})
    .fromTo(".green", {autoAlpha: 0}, {autoAlpha: 2, duration: 2})
    .fromTo(".cert", {autoAlpha: 0}, {autoAlpha: 10, duration: 4})

   const bfa = ScrollTrigger.create({
    animation: tl,
    trigger: ".main_story",
    start: "top top",
    end: "+=3000",
    scrub: 1,
    pin: true,
    anticipatePin: 1
    },
  )
   // Store the window width
var windowWidth = window.innerWidth
window.addEventListener("resize", function(e) {
	// Check window width has actually changed and it's not just iOS triggering a resize event on scroll
	if (window.innerWidth != windowWidth) {
		windowWidth = window.innerWidth
		bfa.refresh();
	} else {
		// prevent default in case resizing was only height
		e.preventDefault();
	}
});
