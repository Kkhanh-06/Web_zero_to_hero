var clickChange = document.querySelector('.often-item .button-change');
var anu = document.querySelector('.often-item.annual');
var mon = document.querySelector('.often-item.monthly');

clickChange.addEventListener('click', function () {
    clickChange.classList.toggle('change');
    if (anu.classList.contains('unlight')) {
        anu.classList.remove('unlight');
        mon.classList.add('unlight');
        document.getElementById('basic').innerText = '$14';
        document.getElementById('standard').innerText = '$30';
        document.getElementById('premium').innerText = '$50';
        document.querySelectorAll('.year').forEach(element => {
            element.textContent = 'Month';
        })
    } else {
        mon.classList.remove('unlight');
        anu.classList.add('unlight');
        document.getElementById('basic').innerText = '$135';
        document.getElementById('standard').innerText = '$350';
        document.getElementById('premium').innerText = '$550';
        document.querySelectorAll('.year').forEach(element => {
            element.textContent = 'Year';
        })
    }
})


var clickAnu = document.getElementById('anu');
var clickMon = document.getElementById('mon');

clickMon.onclick = function () {
    clickChange.classList.add('change');
    mon.classList.remove('unlight');
    anu.classList.add('unlight');
    document.getElementById('basic').innerText = '$135';
    document.getElementById('standard').innerText = '$350';
    document.getElementById('premium').innerText = '$550';
    document.querySelectorAll('.year').forEach(element => {
        element.textContent = 'Year';
    })
}

clickAnu.onclick = function () {
    clickChange.classList.remove('change');
    anu.classList.remove('unlight');
    mon.classList.add('unlight');
    document.getElementById('basic').innerText = '$14';
    document.getElementById('standard').innerText = '$30';
    document.getElementById('premium').innerText = '$50';
    document.querySelectorAll('.year').forEach(element => {
        element.textContent = 'Month';
    })
}

