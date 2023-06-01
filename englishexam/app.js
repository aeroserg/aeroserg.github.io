gsap.fromTo("h1", {
    autoAlpha: 0
}, {
    autoAlpha: 1,
    duration: 1.5
});
const tm = gsap.timeline();
tm.fromTo("h1", {
        autoAlpha: 1
    }, {
        autoAlpha: 0,
        duration: 0.1
    });

ScrollTrigger.create({
    animation: tm,
    trigger: ".startingDiv",
    start: "center center",
    end: "center top",
    scrub: 1,
    pin: true
});

        let duration = 10,
		sections = gsap.utils.toArray(".panel"),
		
		tl = gsap.timeline({
			scrollTrigger: {
				trigger: ".container",
				pin: true,
				scrub: 0,
				start: "top top",
				end: "+=1000"
			}
		});
        tl.from(sections, {
            xPercent: 110,
            duration: duration,
            ease: "none"
          });
        tl.to(sections, {
        xPercent: 0,
        duration: duration,
        ease: "none"
        });
    

     
            
gsap.timeline({
    scrollTrigger: {
      trigger: ".startingSection",
      start: "center center",
      end: "bottom top",
      scrub: true,
      pin: true
    }
  })
    .from(".midsole",  { yPercent: 100 })
    .from(".outsole", { yPercent: 100 })

