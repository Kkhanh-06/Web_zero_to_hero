var ldList = document.querySelectorAll('.loading .ld-ctn .ld-up');
var maxLength = 5;
var up = 0;

setInterval(() => {
    if (up + 1 > maxLength) {
        up = 0;
    } else {
        var lastUp = document.querySelector('.loading .ld-ctn .ld-up.up');
        if (lastUp) {
            lastUp.classList.remove('up');
        }

        up += 1;
        ldList[up].classList.add('up');
    }
}, 100);

setTimeout(() => {
    var loading = document.querySelector('.loading');
    loading.classList.remove('loading');
}, 2000);
