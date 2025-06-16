var buttonLogin = document.querySelectorAll('.heading-button');
buttonLogin.forEach(button => {
    button.addEventListener('click', function () {
        var logIn = document.getElementById('page-login');
        logIn.style.display = 'block';
        window.location.href = '#home';
        document.body.style.overflow = 'hidden';
    })
})

var close = document.querySelector('.close');
close.addEventListener('click', function () {
    var logIn = document.getElementById('page-login');
    logIn.style.display = 'none';
    document.body.style.overflow = 'scroll';
})
// Check input 
// Email
var emailLogin = document.getElementById('email');

emailLogin.onblur = function () {
    if (emailLogin.value === "") {
        document.querySelector('.noti-email').innerText = 'Please enter your email.';
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(emailLogin.value) == false) {
            document.querySelector('.noti-email').innerText = 'Please enter correct form of email.'
        } else {
            document.querySelector('.noti-email').innerText = '';
        }
    }
}

// Password
var passLogin = document.getElementById('password');

passLogin.onblur = function () {
    if (passLogin.value === "") {
        document.querySelector('.noti-email').innerText = 'Please enter your email.';
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(emailLogin.value) == false) {
            document.querySelector('.noti-email').innerText = 'Please enter correct form of email.'
        } else {
            document.querySelector('.noti-email').innerText = '';
        }
    }
}

var log = document.querySelector('form input[type = button]');
log.addEventListener('click', function () {
    if (emailLogin.value && passLogin.value) {
        var users = JSON.parse(localStorage.getItem('users')) || [];
        var exist = users.some(users => users.email === emailLogin.value);

        if (!exist) {
            users.push({
                email: emailLogin.value,
                password: passLogin.value
            });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Your account is saved. Login successful!');
            var logIn = document.getElementById('page-login');
            logIn.style.display = 'none';
            document.body.style.overflow = 'scroll';
        } else {
            var checkAccount = users.find(users => users.email === emailLogin.value && users.password === passLogin.value);
            if (checkAccount) {
                alert('Login successful!');
                var logIn = document.getElementById('page-login');
                logIn.style.display = 'none';
                document.body.style.overflow = 'scroll';
            } else {
                alert("Incorrect your email or password. Please try again!");
            }
        }
    }
})
