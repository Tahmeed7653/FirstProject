
const body = document.querySelector('body');
const toggle = document.getElementById('t');
const bb = document.getElementById('bb');
const vhead = document.querySelector('#vhead');
const links = document.querySelector('#link');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

let position = 270;

let tstyle = toggle.style;

tstyle.background = "yellow";
tstyle.width = "40px";
tstyle.height = "40px";

function toggleStylesheet() {
    var stylesheet1 = document.getElementById('stylesheet1');
    var stylesheet2 = document.getElementById('stylesheet2');
    var myButton = document.getElementById('myButton')

    if (stylesheet1.disabled) {
        stylesheet1.disabled = false;
        stylesheet2.disabled = true;
        myButton.innerHTML = "lightmode"

    } else {
        stylesheet1.disabled = true;
        stylesheet2.disabled = false;
        myButton.innerHTML = "darkmode"
    }
}