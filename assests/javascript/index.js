let display = document.getElementById('display');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let clear = document.getElementById('clear');
let zero = document.getElementById('zero');
let dot = document.getElementById('dot');


one.addEventListener ('click', function(e){
    console.log(e);
    if (display.value !=='') {
        display.value = display.value + one.value
    }
    else {
        display.value = one.value;
        console.log(display.value)
    } 
})

two.addEventListener ('click', function(e){
    console.log(e);
    if (display.value !=='') {
        display.value = display.value + two.value
    }
    else {
        display.value = two.value;
        console.log(display.value)
    } 
})

three.addEventListener ('click', function(e){
    console.log(e);
    if (display.value !=='') {
        display.value = display.value + three.value
    }
    else {
        display.value = three.value;
        console.log(display.value)
    } 
})

four.addEventListener ('click', function(e){
    console.log(e);
    if (display.value !=='') {
        display.value = display.value + four.value
    }
    else {
        display.value = four.value;
        console.log(display.value)
    } 
})

five.addEventListener ('click', function(e){
    console.log(e);
    if (display.value !=='') {
        display.value = display.value + five.value
    }
    else {
        display.value = five.value;
        console.log(display.value)
    } 
})

six.addEventListener ('click', function(e){
    console.log(e);
    if (display.value !=='') {
        display.value = display.value + six.value
    }
    else {
        display.value = six.value;
        console.log(display.value)
    } 
})

seven.addEventListener ('click', function(e){
    console.log(e);
    if (display.value !=='') {
        display.value = display.value + seven.value
    }
    else {
        display.value = seven.value;
        console.log(display.value)
    } 
})

eight.addEventListener ('click', function(e){
    console.log(e);
    if (display.value !=='') {
        display.value = display.value + eight.value
    }
    else {
        display.value = eight.value;
        console.log(display.value)
    } 
})

nine.addEventListener ('click', function(e){
    console.log(e);
    if (display.value !=='') {
        display.value = display.value + nine.value
    }
    else {
        display.value = nine.value;
        console.log(display.value)
    } 
})

clear.addEventListener ('click', function(e){
    console.log(e);
    if (display.value !=='') {
        display.value = ''
    }
    else {
        display.value = display.value; 
    } 
})

zero.addEventListener ('click', function(e){
    console.log(e);
    if (display.value !=='') {
        display.value = display.value + zero.value
    }
    else {
        display.value = zero.value;
        console.log(display.value)
    } 
})

dot.addEventListener ('click', function(e){
    console.log(e);
    if (display.value !=='') {
        display.value = display.value + dot.value
    }
    else {
        display.value = dot.value;
        console.log(display.value)
    } 
})