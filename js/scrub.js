gsap.registerPlugin(ScrollTrigger);
const welcomeVid = document.querySelector('#welcome-video');



let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: welcomeVid,
      start: "top+=10% top+=30%",
      end: "bottom+=100% bottom-=10%",
      scrub: .3,
      markers: true
    }
  });

  welcomeVid.onloadedmetadata = function (scrubbing) {
    timeline.to(welcomeVid, {currentTime: welcomeVid.duration});
  };

