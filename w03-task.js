/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return (number1 + number2);
}
function addNumbers(){
   let add1 = Number(document.querySelector('#add1').value);
   let add2 = Number(document.querySelector('#add2').value);
   let sum = document.querySelector('#sum');   
   sum.value = add(add1, add2);
}
let addNumbersBtn = document.querySelector('#addNumbers');
addNumbersBtn.addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */
let subtract = function (number1, number2){
    return (number1 - number2);
}
let subtractNumbers = function(){
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    let rest = document.querySelector('#difference');
    rest.value = subtract(subtract1, subtract2);
}
let subtractNumbersBtn = document.querySelector('#subtractNumbers');
subtractNumbersBtn.addEventListener('click', subtractNumbers); 

/* Arrow Function - Multiply Numbers */
let multiply = (num1, num2) => num1 * num2;
let multiplyNumbers = () => {
         let factor1 = Number(document.querySelector('#factor1').value);
         let factor2 = Number(document.querySelector('#factor2').value);
         let productField = document.querySelector('#product');
         productField.value = multiply(factor1, factor2); 
};
let multiplyNumbersBtn = document.querySelector('#multiplyNumbers')
multiplyNumbersBtn.addEventListener('click', multiplyNumbers)
/* Open Function Use - Divide Numbers */
let divide = (numb1, numb2) => numb1 / numb2;

let divideNumbers = () => {
         let dividend = Number(document.querySelector('#dividend').value); 
         let divisor = Number(document.querySelector('#divisor').value);
         let quotientField = document.querySelector('#quotient');
         quotientField.value = divide(dividend, divisor);
};
let divideNumbersBtn = document.querySelector('#divideNumbers');
divideNumbersBtn.addEventListener('click', divideNumbers);

/* Decision Structure */
let fecha = new Date();
let anio = fecha.getFullYear();
let footerYear = document.querySelector('#year');
footerYear.textContent = anio;

/* ARRAY METHODS - Functional Programming */
let array1 = [1,2,3,4,5,6,7,8,9,10,11,12,13];
/* Output Source Array */
let ar = document.querySelector('#array');
let resultArray = array1.map((item)=>{
    ar.textContent += ` ${item}`;
});

/* Output Odds Only Array */
let od = document.querySelector('#odds');
let resultOdds = array1.filter((ele)=> ele %2 ===1);
  od.textContent = `${resultOdds}`;  
/* Output Evens Only Array */
let ev = document.querySelector('#evens');
let resultsEvens = array1.filter((ele) => ele %2 !== 1);
ev.textContent += ` ${resultsEvens}`;
/* Output Sum of Org. Array */
let suma = document.querySelector('#sumOfArray');
let resultSuma = array1.reduce((acc, ele) => acc + ele,0);    
suma.textContent = ` ${resultSuma}`;

/* Output Multiplied by 2 Array */
let multiplied = document.querySelector('#multiplied');
let resultMultiplied = array1.map((ele)=> ele * 2);
multiplied.textContent = `${resultMultiplied}`;
/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = document.querySelector('#sumOfMultiplied');
let resultMultipliedByTwo = array1.map((ele)=> ele * 2);
let sumAfterMul = resultMultipliedByTwo.reduce((acc, ele)=> acc + ele,0);
sumOfMultiplied.textContent = `${sumAfterMul}`;



