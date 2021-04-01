
var nosDisplay = document.querySelector('#nosDisplay');
var opDisplay = document.querySelector('#operatorDisplay');
// For the numbers
function one_clicked() {
    nosDisplay.innerHTML += '1';
}
function two_clicked() {
    nosDisplay.innerHTML += '2';
}
function three_clicked() {
    nosDisplay.innerHTML += '3';
}
function four_clicked() {
    nosDisplay.innerHTML += '4';
}
function five_clicked() {
    nosDisplay.innerHTML += '5';
}
function six_clicked() {
    nosDisplay.innerHTML += '6';
}
function seven_clicked() {
    nosDisplay.innerHTML += '7';
}
function eight_clicked() {
    nosDisplay.innerHTML += '8';
}
function nine_clicked() {
    nosDisplay.innerHTML += '9';
}
function zero_clicked() {
    nosDisplay.innerHTML += '0';
}

// For the opearators
function divide_clicked() {
    opDisplay.innerHTML = '/';
}
function multi_clicked() {
    opDisplay.innerHTML = 'X';
}
function add_clicked() {
    opDisplay.innerHTML = '+';
}
function subs_clicked() {
    opDisplay.innerHTML = '-';
}
 
// For the cancel
function cancel_clicked() {
    nosDisplay.innerHTML="";
    opDisplay.innerHTML="";
}
//when user has entered operator clear only is the nosDisplay in transiition for second nos input 
//when user clickes = then check if nosDisplay is empty put up a div beside name written 
//enter nos , is opDisplay is empty put up a div beside name written enter opeartor if both are there clear then show result after clearing
//both divs