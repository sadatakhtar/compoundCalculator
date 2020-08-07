


//SELECTORS
let zero = document.getElementById('zero');
let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');
let four = document.getElementById('four');
let five = document.getElementById('five');
let six = document.getElementById('six');
let seven = document.getElementById('seven');
let eight = document.getElementById('eight');
let nine = document.getElementById('nine');
let displayBox = document.querySelector('.output');
let clear = document.querySelector('#clear');
let backspaceBtn = document.getElementById('backspace');
let decimalBtn = document.getElementById('decimal');

let displayVal = '0';
let pendingVal;
let evalStringArray = []; 


let numBtns = document.getElementsByClassName('numbers');
let operatorBtn = document.getElementsByClassName('operators');

let updateDisplayVal = (clickObj) => {
    let btnText = clickObj.target.innerText;

    if(displayVal == '0'){
        displayVal= '';
    }else{
        displayVal += btnText;
        displayBox.innerText = displayVal;

    }
    
}
let perfornOps = (clickObj) => {
    let operator = clickObj.target.innerText;

    switch(operator){
        case '+':
            pendingVal = displayVal;
            displayVal ='0';
            displayBox.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');

            break;

        case '-':

            pendingVal = displayVal;
            displayVal ='0';
            displayBox.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;

        case '×':
            pendingVal = displayVal;
            displayVal ='0';
            displayBox.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');

            break;
        
        case '÷':
            pendingVal = displayVal;
            displayVal ='0';
            displayBox.innerText = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;

        case '=':
            evalStringArray.push(displayVal);
            let evaluation = eval(evalStringArray.join(' '));
            displayVal = evaluation + '';
            displayBox.innerText = displayVal;
               
             break;

        default:
            break;

    }
}

for(let i=0; i< numBtns.length; i++){
    numBtns[i].addEventListener('click', updateDisplayVal, false );

}

for(let i=0; i< operatorBtn.length; i++){
    operatorBtn[i].addEventListener('click', perfornOps, false);

}

clear.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayBox.innerHTML = displayVal;
}

backspaceBtn.onclick = () => {
    let lengthOfDisplayVal = displayVal.length;
    displayVal = displayVal.slice(0, lengthOfDisplayVal-1);

    if(displayVal == ""){
        displayVal = '0';

    }
    displayBox.innerText = displayVal;

}

decimalBtn.onclick = () => {
    if(!displayVal.includes('.')){
        displayVal += '.';
    }else{
        displayBox.innerText = displayVal;
    }
}

