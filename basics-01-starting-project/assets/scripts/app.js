const defaultResult = 0;
let currentResult = defaultResult;
let calcDescription = 0;

function add(){
    calcDescription += ` + ${userInput.value}`
    currentResult += +userInput.value;
    outputResult(currentResult, calcDescription);
}

function substract() {
    calcDescription += ` - ${userInput.value}`
    currentResult -= +userInput.value;
    outputResult(currentResult, calcDescription);
}

function multiply() {
    calcDescription += ` * ${userInput.value}`
    currentResult *= +userInput.value;
    outputResult(currentResult, calcDescription);
}

function divide() {
    calcDescription += ` / ${userInput.value}`
    currentResult /= +userInput.value;
    outputResult(currentResult, calcDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', substract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

// document.addEventListener('keydown', (event) => {
//     var name = event.key;
//     var code = event.code;
//     // Alert the key name and key code on keydown
//     alert(`Key pressed name: ${name} \r\n Key pressed code: ${code}`);
//   }, false);

  document.addEventListener('keydown', (event) => {
    var name = event.key;
    // Alert the key name and key code on keydown
    if(name === '+') add();
    else if (name === '-') substract();
    else if (name === '*') multiply();
    else if (name === '/') divide();
  }, false);