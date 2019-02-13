var result;
var num = document.getElementById('number');
var counter = document.getElementById('counter');
var buttons = document.getElementById('control-btns');

function init() {
    result = 0;
    display();
}

init();

function display() {
    counter.textContent = result;
}

function total(e) {
    if (e.target.id === 'plus-btn') {
        result += parseInt(number.value);
    } else if (e.target.id === 'minus-btn') {
        result -= parseInt(number.value);
    }

    display();
    
}

buttons.addEventListener('click', total);
