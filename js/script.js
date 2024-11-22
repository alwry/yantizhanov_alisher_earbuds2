(() => {
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
  const annotations = document.querySelectorAll('.HotspotAnnotation');
  const hotspotDescriptions = [
    {
     text: "Experience uninterrupted sound with an astounding 120 hours of playback on a single charge."},
    {
     text: "Immerse yourself in pure audio with advanced Active Noise Cancelling technology."},
    {
     text: "Stay seamlessly connected with next-gen Bluetooth technology."},
    {
     text: "Enjoy faster charging times and spend more time enjoying your music and less time plugged in."}
  ];
  
  annotations.forEach((annotation, index) => {
    const p = document.createElement('p');
    p.textContent = hotspotDescriptions[index].text;
    annotation.appendChild(p);
  })

  document.querySelector('model-viewer').addEventListener('progress', onProgress);

})();