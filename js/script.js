let keys = document.getElementsByClassName('touch');
let sigles = document.getElementsByClassName('sigle');
let current = document.getElementById('current');
let historic = document.getElementById('historic');
let clear = document.getElementById('clear');
let equal = document.getElementById('equal');
let currentValue = '';
let numberOne = '';
let numberTwo = '';
let firstOperator = '';
let result = '';


// basics mathematics functions
function add(a,b) {
    return a+b;
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;

    
}
// function for global operations
function operate(a,operator,b) {
    switch (operator) {
        case '+' :
            return add(a,b);
        case '-' :
            return subtract(a,b);
        case '*' :
            return multiply(a,b);
        case '/' :
            return divide(a,b);
        default:
            console.log('unknown operator');
    }
}  

// Events on the numbers of the calculator
Array.from(keys).forEach(function(element) {
    element.addEventListener('click', function() {
        current.textContent += element.textContent;
        currentValue = current.textContent;
    });
});

// Events on the operators of the calculator
Array.from(sigles).forEach(function(element) {
    element.addEventListener('click', function() {
        //stock the first number
        if(numberOne) {
            numberTwo = Number(current.textContent);
            result = operate(numberOne,firstOperator,numberTwo);
            firstOperator = element.textContent;
            numberOne = result;
            historic.textContent = result + firstOperator;
            current.textContent = '';
        } else { 
            numberOne = Number(currentValue);
        firstOperator = element.textContent;
        historic.textContent += numberOne + element.textContent;
        current.textContent = '';
        }    
    });
});  

// Event on the clear button
clear.addEventListener('click', function() { 
    historic.textContent = '';
    current.textContent = '';
    currentValue = "";
    numberOne = "";
    numberTwo = "";
    firstOperator = "";
});

// Event on the equal button
equal.addEventListener('click', function() { 
    numberTwo = Number(current.textContent);
    //if numbertwo egale À et operator = / , division impossible
    // current text clean
    if(numberOne == '' || current.textContent == '' || firstOperator == '') {
        alert('Please select all your numbers and operators');
    } else if (numberTwo == 0 && firstOperator == "/") {
        alert('You can\'t divide by 0');
        current.textContent = '';
    } 
    else {
    result=Math.round(operate(numberOne,firstOperator,numberTwo))    
    historic.textContent += numberTwo + equal.textContent+ result;
    numberOne = result;
    current.textContent = '';
    };  
});

