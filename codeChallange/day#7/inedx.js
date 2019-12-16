const items = document.querySelectorAll("div"),
  calculatorResult = document.querySelector(".calculator__result");

const clearBtn = document.querySelector(".calculator__clear"),
  plusBtn = document.querySelector(".calculator__plus"),
  minusBtn = document.querySelector(".calculator__minus"),
  multiplyBtn = document.querySelector(".calculator__multiply"),
  equalBtn = document.querySelector(".calculator__equal"),
  divisionBtn = document.querySelector(".calculator__division");

let emptyVariable = "",
  emptyVariable_2 = "";

let plusCheck, minusCheck, multiplyCheck, equalCheck, divisionCheck;

function operatorNumber(number) {
  const clickTarget = event.target;
  const operatorCheck = event.target.classList.value;
  if (operatorCheck === "" && emptyVariable !== "") {
    emptyVariable_2 += number;
    calculatorResult.innerText = parseInt(emptyVariable_2);
  } else if (clickTarget === equalBtn && plusCheck === true) {
    const sum = parseInt(emptyVariable) + parseInt(emptyVariable_2);
    calculatorResult.innerText = sum;
    emptyVariable = sum;
    emptyVariable_2 = "";
    plusCheck = false;
  } else if (clickTarget === equalBtn && minusCheck === true) {
    const minus = parseInt(emptyVariable) - parseInt(emptyVariable_2);
    calculatorResult.innerText = minus;
    emptyVariable = minus;
    emptyVariable_2 = "";
    minusCheck = false;
  } else if (clickTarget === equalBtn && multiplyCheck === true) {
    const multiply = parseInt(emptyVariable) * parseInt(emptyVariable_2);
    calculatorResult.innerText = multiply;
    emptyVariable = multiply;
    emptyVariable_2 = "";
    multiplyCheck = false;
  } else if (
    clickTarget === multiplyBtn &&
    multiplyCheck === true &&
    emptyVariable_2 !== ""
  ) {
    const multiply = parseInt(emptyVariable) * parseInt(emptyVariable_2);
    calculatorResult.innerText = multiply;
    emptyVariable = multiply;
    emptyVariable_2 = "";
  } else if (clickTarget === equalBtn && divisionCheck === true) {
    const division = parseInt(emptyVariable) / parseInt(emptyVariable_2);
    calculatorResult.innerText = division;
    emptyVariable = division;
    emptyVariable_2 = "";
    divisionCheck = false;
  } else if (operatorCheck === "") {
    let transInt = (calculatorResult.innerText += number);
    calculatorResult.innerText = parseInt(transInt);
  } else if (clickTarget === clearBtn) {
    calculatorResult.innerText = 0;
    emptyVariable = "";
    emptyVariable_2 = "";
  } else if (clickTarget === plusBtn) {
    plusCheck = true;
    emptyVariable = parseInt(calculatorResult.innerText);
  } else if (clickTarget === minusBtn) {
    minusCheck = true;
    emptyVariable = parseInt(calculatorResult.innerText);
  } else if (clickTarget === multiplyBtn) {
    multiplyCheck = true;
    emptyVariable = parseInt(calculatorResult.innerText);
  } else if (clickTarget === divisionBtn) {
    divisionCheck = true;
    emptyVariable = parseInt(calculatorResult.innerText);
  } else if (clickTarget === equalBtn) {
    return;
  }
}

function clickHandler(event) {
  operatorNumber(parseInt(event.target.innerText));
}

items.forEach(ele => ele.addEventListener("click", clickHandler));
