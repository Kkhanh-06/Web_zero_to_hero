var startTime = localStorage.getItem("startTime");

if (!startTime) {
    startTime = Date.now();
    localStorage.setItem("startTime", startTime);
}

function updateCounter() {
    var now = Date.now();
    var elapsed = Math.floor((now - startTime) / 1000);

    var day = Math.floor(elapsed / (60 * 60 * 24));
    var hour = Math.floor((elapsed % (60 * 60 * 24)) / (60 * 60));
    var minute = Math.floor((elapsed % (60 * 60)) / 60);
    var second = elapsed % 60;

    document.getElementById("sec").innerText = `${second}`;
    document.getElementById("min").innerText = `${minute}`;
    document.getElementById("hour").innerText = `${hour}`;
    document.getElementById("day").innerText = `${day}`;
}

setInterval(updateCounter, 1000);

var logoReturn = document.getElementById('logo');
logoReturn.style.cursor = 'pointer';
logoReturn.addEventListener('click', function () {
    window.location.href = 'index.html';
})


// Check input
const yourEmail = document.querySelector('.email .email-input input')

yourEmail.onblur = function() {
    if (yourEmail.value === "") {
        document.querySelector('.noti').innerText = 'Please enter your email.';
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(yourEmail.value) == false) {
            document.querySelector('.noti').innerText = 'Please enter correct form of email.'
        } else {
            document.querySelector('.noti').innerText = '';
        }
    }
}

const subscribe = document.querySelector('.email button');
subscribe.onclick = function () {
    if (yourEmail.value === "") {
        document.querySelector('.noti').innerText = 'Please enter your email.';
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(yourEmail.value) == false) {
            document.querySelector('.noti').innerText = 'Please enter correct form of email.'
        } else {
            document.querySelector('.noti').innerText = '';
            alert('Subscribe success!');
        }
    }
}