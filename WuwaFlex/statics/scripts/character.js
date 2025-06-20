const slider = document.getElementById("level");
const valueDisplay = document.getElementById("value");
const hp = document.getElementById('right-hp');
const atk = document.getElementById('right-atk');
const def = document.getElementById('right-def');

slider.addEventListener("input", function () {
    valueDisplay.textContent = this.value;
    hp.textContent = this.value * 151 + 1210;
    atk.textContent = this.value * 3 + 42;
    def.textContent = this.value * 6 + 71;
});