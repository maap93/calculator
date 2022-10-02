// Global variables
var operation = '';
var number = '';

// Operation Functions
function sum(a, b) {
    return a + b;
}

function rest(a, b) {
    return a - b;
}

function multi(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

//Button Logic
function getNumber(id) {
    var id_number = ''; 

    switch (id) {
        case 1:
            id_number = '1';
        break;

        case 2:
            id_number = '2';
        break;

        case 3:
            id_number = '3';
        break;

        case 4:
            id_number = '4';
        break;

        case 5:
            id_number = '5';
        break;

        case 6:
            id_number = '6';
        break;

        case 7:
            id_number = '7';
        break;

        case 8:
            id_number = '8';
        break;

        case 9:
            id_number = '9';
        break;

        case 0:
            id_number = '0';
        break;

        default:
            id_number = '0';
    };

    number += id;
    document.querySelector('#result').textContent = number;
}

function capture_char(char) {
    operation = char;
    number += char;
    document.querySelector('#result').textContent = number;
}

function result_operation() {
    var actual_result = 0;
    var first_number = +number.split(operation)[0];
    var second_number = +number.split(operation)[1];


    switch(operation) {
        case '+':
            actual_result = first_number + second_number;
        break;
        case '-':
            actual_result = first_number - second_number;
        break;
        case '/':
            actual_result = first_number / second_number;
        break;   
        case '*':
            actual_result = first_number * second_number;
        break;    
    }

    document.querySelector('#result').textContent = actual_result;

    operation = '';
    number = '';
}