const ad = document.getElementById('ad');
setInterval(() => {
    ad.classList.toggle('scale');
}, 1000);

const buildList = document.querySelector('.list-build');
const build = document.getElementsByClassName('item-build');
let now = 0;

let slideBuild = setInterval(slideFunction, 5000);

function slideFunction() {
    const width = build[0].offsetWidth;
    if (now === build.length - 1) {
        now = 0;
        buildList.style.transform = `translateX(0px)`;
    } else {
        now += 1;
        buildList.style.transform = `translateX(${-1 * width * now}px)`;
    }
}

const pause = document.querySelector('.pause');
const img = document.getElementById('pause');

pause.addEventListener('click', () => {
    const isPaused = img.src.includes('ico-pause.png');

    if (isPaused) {
        img.src = '../image/ico-play.png';
        clearInterval(slideBuild);
    } else {
        img.src = '../image/ico-pause.png';
        slideBuild = setInterval(slideFunction, 5000);
    }
});