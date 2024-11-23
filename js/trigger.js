const visionBoxes = document.querySelectorAll('.vision-box');
const ancText = document.querySelector('.opacity');
const ancDiv = document.querySelector('.anc');


// visionBoxes.forEach((visionBox) => {
//     gsap.to(visionBox, {
//         width: "40%", 
//         scrollTrigger: {
//             trigger: visionBox,
//             pin: true,
//             start: "top 50%",
//             end: "bottom 20%",
//             toggleActions: "restart none none reverse",
//             scrub: true,
//             markers: true, 
//         },
//     });
// });



gsap.to(ancText, {
    color: "#000",
    scrollTrigger: {
        trigger: ancDiv,
        start: "top 50%",
        end: "bottom 20%",
        toggleActions: "restart none none reverse",
        scrub: true,
        markers: true,
    },
});