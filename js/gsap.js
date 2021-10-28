/*===========================SCROLL TRIGGER============================ */
gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
  value: 100,
  ease: 'none',
  scrollTrigger: { scrub: 0.3 },
});

const evenSections = gsap.utils.toArray('.even-section');
const oddSections = gsap.utils.toArray('.odd-section');

function timeline(array) {
  array.forEach((section) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: '+=133 80%',
        end: '+=200 40%',
        scrub: true,
        toggleActions: 'play reverse play reverse',
        duration: 5,
      },
    });

    section.classList.contains('even-section')
      ? tl.from(section, { opacity: 0, x: 50 })
      : tl.from(section, { opacity: 0, x: -50 });
  });
}

timeline(evenSections);
timeline(oddSections);

/*===========================IMG ANIMATION============================ */

gsap.registerPlugin(CSSRulePlugin);
const imgAfter = CSSRulePlugin.getRule('.about-img-container::after');

gsap.to(imgAfter, {
  duration: 3,
  cssRule: {
    x: -10,
    y: 10,
    opacity: 0.5,
  },
  yoyo: true,
  repeat: -1,
});
