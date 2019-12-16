const select = document.querySelector("select");
const LS_NAME = "country";

const selectHandler = event => {
  const selectValue = event.target.value;
  localStorage.setItem(LS_NAME, selectValue);
};

const paintLocalStorage = () => {
  select.value = localStorage.getItem(LS_NAME);
};

const init = () => {
  if (localStorage.getItem(LS_NAME) !== null) {
    paintLocalStorage();
  }
  select.addEventListener("change", selectHandler);
};
init();
