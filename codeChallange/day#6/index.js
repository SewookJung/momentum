const toDoForm = document.querySelector(".toDo-task"),
  toDoInput = document.querySelector(".toDo-task__input"),
  pendingList = document.querySelector(".pending-list"),
  finishedList = document.querySelector(".finished-list");

const PENDING_LS = "PENDING",
  FINISHED_LS = "FINISHED";

let pendingArray = [];
let finishedArray = [];

function deletePending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const cleanPending = pendingArray.filter(function(ele) {
    return ele.id !== parseInt(li.id);
  });
  pendingArray = cleanPending;
  savePending();
}

function deleteFinished(event) {
  const btn = event.target;
  const li = btn.parentNode;
  finishedList.removeChild(li);
  const cleanFinished = finishedArray.filter(function(ele) {
    return ele.id !== parseInt(li.id);
  });
  finishedArray = cleanFinished;
  saveFinished();
}

function savePending() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingArray));
}

function saveFinished() {
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedArray));
}

function paintFinished(text, id) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const reverseBtn = document.createElement("button");
  li.innerText = text;
  delBtn.innerText = "❌";
  reverseBtn.innerText = "⏪";
  delBtn.addEventListener("click", deleteFinished);
  reverseBtn.addEventListener("click", movePending);
  li.id = id;
  finishedList.appendChild(li);
  li.appendChild(delBtn);
  li.appendChild(reverseBtn);
}

function movePending(event) {
  deleteFinished(event);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const fsBtn = document.createElement("button");
  const newId = pendingArray.length + 1;
  const data = event.target.parentNode.firstChild.data;
  li.innerText = data;
  delBtn.innerText = "❌";
  fsBtn.innerText = "✅";
  li.id = newId;
  delBtn.addEventListener("click", deletePending);
  fsBtn.addEventListener("click", moveFinished);
  pendingList.appendChild(li);
  li.appendChild(delBtn);
  li.appendChild(fsBtn);
  const pendingObj = {
    id: newId,
    text: data
  };
  pendingArray.push(pendingObj);
  savePending();
}

function moveFinished(event) {
  deletePending(event);
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const reverseBtn = document.createElement("button");
  const newId = finishedArray.length + 1;
  const data = event.target.parentNode.firstChild.data;
  li.innerText = data;
  delBtn.innerText = "❌";
  reverseBtn.innerText = "⏪";
  delBtn.addEventListener("click", deleteFinished);
  reverseBtn.addEventListener("click", movePending);
  li.id = newId;
  finishedList.appendChild(li);
  li.appendChild(delBtn);
  li.appendChild(reverseBtn);
  const finishedObj = {
    id: newId,
    text: data
  };
  finishedArray.push(finishedObj);
  saveFinished();
}

function paintPending(toDo) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const fsBtn = document.createElement("button");
  const newId = pendingArray.length + 1;
  li.innerText = toDo;
  delBtn.innerText = "❌";
  fsBtn.innerText = "✅";
  delBtn.addEventListener("click", deletePending);
  fsBtn.addEventListener("click", moveFinished);
  pendingList.appendChild(li);
  li.appendChild(delBtn);
  li.appendChild(fsBtn);
  li.id = newId;
  const pendingObj = {
    id: newId,
    text: toDo
  };
  pendingArray.push(pendingObj);
  savePending();
}

function handleSubmit(event) {
  event.preventDefault();
  const toDoValue = toDoInput.value;
  toDoInput.value = "";
  paintPending(toDoValue);
}

function loadToPending() {
  const loadedPending = JSON.parse(localStorage.getItem(PENDING_LS));
  if (loadedPending !== null) {
    loadedPending.forEach(function(ele) {
      paintPending(ele.text);
    });
  }
}

function loadToFinished() {
  const loadedFinished = JSON.parse(localStorage.getItem(FINISHED_LS));
  if (loadedFinished !== null) {
    finishedArray = loadedFinished;
    loadedFinished.forEach(function(ele) {
      paintFinished(ele.text, ele.id);
    });
  }
}

function init() {
  loadToPending();
  loadToFinished();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
