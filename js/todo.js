// const toDoForm = document.querySelector(".js-toDoForm"),
//   toDoInput = toDoForm.querySelector("input"),
//   toDoList = document.querySelector(".js-toDoList");

// const TODOS_LS = "toDos";

// let toDos = [];

// function saveToDo() {
//   localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   const deleteList = event.target.parentNode;
//   toDoList.removeChild(deleteList);
//   const lastToDo = toDos.filter(function(toDo) {
//     return toDo.id !== parseInt(deleteList.id);
//   });
//   toDos = lastToDo;
//   saveToDo();
// }

// function paintList(text) {
//   const li = document.createElement("li");
//   const span = document.createElement("span");
//   const delBtn = document.createElement("button");
//   const newId = toDos.length + 1;
//   delBtn.innerText = "❌";
//   delBtn.addEventListener("click", deleteToDo);
//   toDoList.appendChild(li);
//   li.appendChild(delBtn);
//   li.appendChild(span);
//   li.id = newId;
//   span.innerText = text;
//   const toDosObj = {
//     text: text,
//     id: newId
//   };
//   toDos.push(toDosObj);
//   saveToDo();
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   const currentValue = toDoInput.value;
//   toDoInput.value = "";
//   paintList(currentValue);
// }

// function loadToDo() {
//   const loadedToDos = localStorage.getItem(TODOS_LS);
//   if (loadedToDos !== null) {
//     const parsedToDos = JSON.parse(loadedToDos);
//     parsedToDos.forEach(function(toDo) {
//       paintList(toDo.text);
//     });
//   }
// }

// function init() {
//   loadToDo();
//   toDoForm.addEventListener("submit", handleSubmit);
// }

// init();
