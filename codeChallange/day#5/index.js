const setting = document.querySelector(".main__setting"),
  mainComment = document.querySelector(".main__comment"),
  playBtn = document.querySelector(".choose-number__play-btn"),
  numberInput = document.querySelector(".choose-number__input"),
  footerComment = document.querySelector(".footer__comment"),
  compareResult = document.querySelector(".footer__result");

let MAX = 0;

function settingNumber() {
  MAX = setting.value;
  mainComment.innerText = `Generate a number between 0 and ${MAX}`;
}

function compareNumber() {
  const inputValue = numberInput.value;
  const randomValue = Math.floor(Math.random() * parseInt(MAX));
  footerComment.innerText = `You chose: ${inputValue}, Machine chose: ${randomValue} `;
  inputValue < randomValue
    ? (compareResult.innerText = "You Lose.. T.T")
    : inputValue > randomValue
    ? (compareResult.innerText = "You Won..!!")
    : (compareResult.innerText = "Draw!");
}

function checkInputNumber() {
  const inputValue = numberInput.value;
  MAX = parseInt(MAX);
  inputValue === ""
    ? ((footerComment.innerText = "Insert Number!!"),
      (compareResult.innerText = ""))
    : MAX === 0
    ? ((footerComment.innerText = "range setting!!"),
      (compareResult.innerText = ""))
    : inputValue > MAX
    ? ((footerComment.innerText = "You can not setting of max value"),
      (compareResult.innerText = ""))
    : inputValue < 0
    ? ((footerComment.innerText = "You can not setting negative"),
      (compareResult.innerText = ""))
    : (inputValue === "" || MAX === 0 || inputValue > MAX || inputValue < 0) !==
      true
    ? compareNumber()
    : true;
}

function init() {
  settingNumber();
  setting.addEventListener("input", settingNumber);
  playBtn.addEventListener("click", checkInputNumber);
}

init();
