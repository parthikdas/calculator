
var nosDisplay = document.querySelector('#nosDisplay');
var opDisplay = document.querySelector('#operatorDisplay');
var first_number,second_number,result='= ';
var first_number_found = false, calc_done = false, cancel_pressed=false;
// For the numbers
function check_default_display() { // This function checks whether default value is displayed 
    if(nosDisplay.innerHTML=='0') {
        return 1;
    } else {
        return 0;
    }
}
function first() { // This function checks whether the first number is found if yes then second number will start from empty screen
    if(first_number_found) {
        nosDisplay.innerHTML = '';
    }
    first_number_found = false; // this have to be done as again when a number is clicked the screen becomes blank
}
function calculation_done(){
    if(calc_done && !(cancel_pressed)) { // if calculation is done and cancel it not pressed maybe user wants the result as first number for further calculations
        getFirstNumber(); // so take it as first number 
    } else {
        cancel_clicked(); // else clear all things
    }
    calc_done=false;
    cancel_pressed = false;
}
function one_clicked() {
    first();
    if(check_default_display()) { //if defualt display is there then make this as new
        nosDisplay.innerHTML = '1';
    } else { //else append it
        nosDisplay.innerHTML += '1';
    }
}
function two_clicked() {
    first();
    if(check_default_display()) { //if defualt display is there then make this as new
        nosDisplay.innerHTML = '2';
    } else { //else append it
        nosDisplay.innerHTML += '2';
    }
}
function three_clicked() {
    first();
    if(check_default_display()) { //if defualt display is there then make this as new
        nosDisplay.innerHTML = '3';
    } else { //else append it
        nosDisplay.innerHTML += '3';
    }
}
function four_clicked() {
    first();
    if(check_default_display()) { //if defualt display is there then make this as new
        nosDisplay.innerHTML = '4';
    } else { //else append it
        nosDisplay.innerHTML += '4';
    }
}
function five_clicked() {
    first();
    if(check_default_display()) { //if defualt display is there then make this as new
        nosDisplay.innerHTML = '5';
    } else { //else append it
        nosDisplay.innerHTML += '5';
    }
}
function six_clicked() {
    first();
    if(check_default_display()) { //if defualt display is there then make this as new
        nosDisplay.innerHTML = '6';
    } else { //else append it
        nosDisplay.innerHTML += '6';
    }
}
function seven_clicked() {
    first();
    if(check_default_display()) { //if defualt display is there then make this as new
        nosDisplay.innerHTML = '7';
    } else { //else append it
        nosDisplay.innerHTML += '7';
    }
}
function eight_clicked() {
    first();
    if(check_default_display()) { //if defualt display is there then make this as new
        nosDisplay.innerHTML = '8';
    } else { //else append it
        nosDisplay.innerHTML += '8';
    }
}
function nine_clicked() {
    first();
    if(check_default_display()) { //if defualt display is there then make this as new
        nosDisplay.innerHTML = '9';
    } else { //else append it
        nosDisplay.innerHTML += '9';
    }
}
function zero_clicked() {
    first();
    if(!(check_default_display())) { //if already zero is present as defualt then don't add else add
        nosDisplay.innerHTML += '0';
    }
}

// For the opearators
function divide_clicked() {
    if(nosDisplay.innerHTML!='') { // so that input won't be done until some number input
        opDisplay.innerHTML = '/';
    }
    getFirstNumber();
}
function multi_clicked() {
    if(nosDisplay.innerHTML!='') {
        opDisplay.innerHTML = 'X';
    }
    getFirstNumber();
}
function add_clicked() {
    if(nosDisplay.innerHTML!='') {
        opDisplay.innerHTML = '+';
    }
    getFirstNumber();
}
function subs_clicked() {
    if(nosDisplay.innerHTML!='') {
        opDisplay.innerHTML = '-';
    }
    getFirstNumber();
}
function getFirstNumber() {
    if(calc_done) {
        var string = nosDisplay.innerHTML;
        var updated_string = string.slice(2,string.length); // as i have '= ' in result need to take care of it so string will have the whole and updated string will have '= ' after this
        first_number = parseInt(updated_string);
        first_number_found=true;
        return;
    }
    first_number = parseInt(nosDisplay.innerHTML);
    first_number_found=true;
    return;
}
// For the cancel
function cancel_clicked() {
    nosDisplay.innerHTML='0';
    opDisplay.innerHTML='';
    first_number=null;
    second_number=null;
    result='= ';
    cancel_pressed = true;
}
//For the equal
function equal_clicked() {
    second_number = parseInt(nosDisplay.innerHTML);
    calculation();
    opDisplay.innerHTML='';
    nosDisplay.innerHTML=result;
}
//For the calculation
function calculation() {
    if(calc_done) { //this is for the second time if we want to repeat with current ans again
        result='= '; //if previous calculation is done and cancel not pressed then make it null to store next ans
    }
    if(opDisplay.innerHTML=='/'){
        if(second_number == '0') {
            result += 'undefined';
        } else {
            result += first_number / second_number;
        }
        calc_done=true;
        return;
    } else if(opDisplay.innerHTML=='X'){
        result += first_number * second_number;
        calc_done=true;
        return;
    } else if(opDisplay.innerHTML=='+'){
        result += first_number + second_number;
        calc_done=true;
        return;
    } else if(opDisplay.innerHTML=='-'){
        result += first_number - second_number;
        calc_done=true;
        return;
    }
}

