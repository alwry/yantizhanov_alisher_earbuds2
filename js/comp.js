const divisor = document.querySelector('#divisor');
const slider = document.querySelector('#slider');

function moveDivisor() {
    console.log(slider.value);
    divisor.style.width = slider.value+"%";
}

slider.addEventListener('input', moveDivisor)