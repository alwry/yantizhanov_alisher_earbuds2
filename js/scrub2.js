(() => {

    const canvas = document.querySelector("#explode-view");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;

    const frameCount = 421; //how many frames do we have

    const images = []; //array to hold all of our images

    //create an object called buds to hold the current frame
    const buds = {
        frame: 0
    }

    //run a for loop to populate image array
    for(let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = `img/vid1_${(i+1).toString().padStart(4, '0')}.png`;
        images.push(img)

    }

    //console.table(images);

    gsap.to(buds, {
        frame: 421,
        snap: "frame",
        scrollTrigger: {
            trigger: "#explode-view",
            pin: true,
            scrub: 2,
            markers: true,
            start: "top top",
            end: "bottom top"
        },
        onUpdate: render

    })

    images[0].addEventListener("load", render);

    function render() {
        context.clearRect(0,0, canvas.width, canvas.height)
        console.log(images[buds.frame]);
        context.drawImage(images[buds.frame], 0, 0);
    }

})();