var list = document.querySelector('#home .home-container');
var homeList = document.querySelectorAll('#home .home-container .home-item');
var itemList = document.querySelectorAll('.head-scroll .list-scroll li');
var active = 0;

var refeshSlider = setInterval(() => {
    if (active + 1 > 3) {
        active = 0;
    } else {
        active += 1;
    }
    reloadSlider();
}, 5000);

function reloadSlider() {
    if (itemList.length === 0) return;
    var checkLeft = homeList[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    var itemClick = document.querySelector('.head-scroll .list-scroll li.highlight');
    itemClick.classList.remove('highlight');
    itemList[active].classList.add('highlight');

    clearInterval(refeshSlider);                                                            
    refeshSlider = setInterval(() => {
        if (active + 1 > 3) {
            active = 0;
        } else {
            active += 1;
        }
        reloadSlider();
    }, 4000);
}

itemList.forEach((li, key) => {
    li.addEventListener('click', function () {
        active = key;
        reloadSlider();
    });
});

