// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
    const progressBar = event.target.querySelector('.progress-bar');
    const updatingBar = event.target.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
      progressBar.classList.add('hide');
      event.target.removeEventListener('progress', onProgress);
    } else {
      progressBar.classList.remove('hide');
    }
  };
  const hotspots = document.querySelectorAll('.Hotspot');
  const hotspotText = [
    {name: "Crystal-clear sound",
     description: "These earbuds offer crystal-clear sound quality with enhanced bass for an immersive audio experience"},
    {name: "24 hours life",
     description: "Enjoy up to 24 hours of playtime with rapid wireless charging capabilities to keep the music going all day"},
    {name: "Play modes",
     description: "Stay aware of your surroundings with a transparency mode that lets in ambient sound when you need it"},
    {name: "3D Sound",
     description: "Immerse yourself in 3D surround sound, ideal for both music lovers and gamers alike"}
  ];
  
  
  
  
  
  
  
  
  document.querySelector('model-viewer').addEventListener('progress', onProgress);