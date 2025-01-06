const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function firstpageAnim(){
  var t1 = gsap.timeline();

  t1.from("#nav",{
    y: '-10',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut
  })
    .to(".boundingelem",{
        y: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        delay: -1,
        stagger: .2
      })
      .from("#headerfooter",{
          y: -10,
          opacity: 0,
          duration: 1.5,
          delay: -1,
          ease: Expo.easeInOut
      })

}

function circleMouseFollower(xscale, yscale) {
    window.addEventListener("mousemove", function (dets) {
      document.querySelector(
        "#minicircle"
      ).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
  }

circleMouseFollower();
firstpageAnim()
