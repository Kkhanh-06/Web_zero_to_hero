var buttonLogin = document.querySelectorAll('.heading-button');
buttonLogin.forEach(button => {
    button.addEventListener('click', function () {
        var logIn = document.getElementById('page-login');
        logIn.style.display = 'block';
        document.body.style.overflow = 'hidden';
    })
})

var close = document.querySelector('.close');
close.addEventListener('click', function() {
    var logIn = document.getElementById('page-login');
    logIn.style.display = 'none';
    document.body.style.overflow = 'scroll';
})

var log = document.querySelector('form input[type = button]');
log.addEventListener('click', function() {
    var logIn = document.getElementById('page-login');
    logIn.style.display = 'none';
    document.body.style.overflow = 'scroll';
})