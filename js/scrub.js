gsap.registerPlugin(ScrollTrigger);
const welcomeVid = document.querySelector('#welcome-video');



let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: welcomeVid,
      start: "top top",
      end: "bottom+=150% bottom",
      scrub: true,
      markers: true
    }
  });

  welcomeVid.onloadedmetadata = function (scrubbing) {
    timeline.to(welcomeVid, { currentTime: welcomeVid.duration });
  };

