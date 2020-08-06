//SELECTORS
// let zero = document.getElementById('zero');
// let one = document.getElementById('one');
// let two = document.getElementById('two');
// let three = document.getElementById('three');
// let four = document.getElementById('four');
// let five = document.getElementById('five');
// let six = document.getElementById('six');
// let seven = document.getElementById('seven');
// let eight = document.getElementById('eight');
// let nine = document.getElementById('nine');
// let display = document.querySelector('#display');
// let clear = document.querySelector('#clear');

// let numZero = zero.value;
// let numOne = one.value;
// let numTwo = two.value;
// let numThree = three.value;
// let numFour = four.value;
// let numFive = five.value;
// let numSix = six.value;
// let numSeven = seven.value;
// let numEight = eight.value;
// let numNine = nine.value;



// //EVENT LISTENERS
// zero.addEventListener('click', () => {
//     console.log(numZero);
//     display.textContent = numZero;
// });

// one.addEventListener('click', () => {
//     //console.log(numOne);
//     display.textContent = numOne;
// });

// two.addEventListener('click', () => {
//     console.log(numTwo);
//     display.textContent = numTwo;
// });

// three.addEventListener('click', () => {
//     console.log(numThree);
//     display.textContent = numThree;
// });

// four.addEventListener('click', () => {
//     console.log(numFour);
//     display.textContent = numFour;
// });

// five.addEventListener('click', () => {
//     console.log(numFive);
//     display.textContent = numFive;
// });

// six.addEventListener('click', () => {
//     console.log(numSix);
//     display.textContent = numSix;
// });

// seven.addEventListener('click', () => {
//     console.log(numSeven);
//     display.textContent = numSeven;
// });

// eight.addEventListener('click', () => {
//     console.log(numEight);
//     display.textContent = numEight;
// });

// nine.addEventListener('click', () => {
//     console.log(numNine);
//     display.textContent = numNine;
// });

// clear.addEventListener('click', () => {
//     display.textContent = numZero;
// });

function getHistory(){
    return document.getElementById('history-value').innerText;
};

function printHistory(num){
    document.getElementById('history-value').innerText = num;

};
function getOutput(){
    return document.getElementById('output-value').innerText;
};
function printOutput(num){
    if(num ==""){
        document.getElementById('output-value').innerText = num;

    }else{
        document.getElementById('output-value').innerText = getFormattedNumber(num);
    }
    

};

function getFormattedNumber(num){
    let n = Number(num);
    let val = n.toLocaleString('en');
    return val;
}


function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

let operator = document.getElementsByClassName('operators'); 
for(let i=0; i< operator.length; i++){
    operator[i].addEventListener('click', function(){
       if(this.id === "clear"){
           printHistory('');
           printOutput('');

       }
    });

}

let numberz = document.getElementsByClassName('numbers'); 
for(let i=0; i< numberz.length; i++){
    numberz[i].addEventListener('click', function(){
        let output = reverseNumberFormat(getOutput());
        if(output!=NaN){
            output = output+this.id;
            printOutput(output);
        }
    });

}