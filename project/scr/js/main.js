
$(function() {
    $('.name_1').marquee({
      duration: 50000,
      startVisible: true,
      duplicated: true
    });
  });
  
  $(function() {
    $('.name_2').marquee({
      duration: 50000,
      startVisible: true,
      duplicated: true
    });
  });


gsap.to(".percent20",{yPercent: 133, duration: 3})
gsap.to(".percent40",{yPercent: 50, duration: 3})
gsap.to(".percent60",{yPercent: -33, duration: 3})
gsap.to(".percent801",{yPercent: -116, duration: 3})
gsap.to(".percent100",{yPercent: -196, duration: 3})

