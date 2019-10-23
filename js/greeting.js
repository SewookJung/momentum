const greetingForm = document.querySelector(".js-greetings"),
  comment = document.querySelector(".greeting_comment"),
  clockDiv = document.querySelector(".js-clock"),
  h1 = clockDiv.querySelector("h1"),
  toDoListDiv = document.querySelector(".js-toDoLists");

const nameComment = "Hello, what's your name?",
  emailComment = "What's your email, ",
  pwComment = "What's your password?",
  toDoComment = "What is your main focus for today?",
  todayCommnet = "Today";

const USER_LS = "currentUser",
  EMAIL_LS = "email",
  PW_LS = "password",
  toDoList_LS = "toDoList";

const NAME_CN = "greetings_name",
  EMAIL_CN = "greetings_email",
  PW_CN = "greetings_pw",
  toDo_CN = "greeting_toDoList";

/* save for name to localstorage */

function saveForName(getName) {
  localStorage.setItem(USER_LS, getName);
}

function handleOfNameSubmit(event) {
  if (window.event.keyCode == 13) {
    event.preventDefault();
    const greetingInput = document.querySelector(`.${NAME_CN}`);
    const currentValue = greetingInput.value;
    if (
      currentValue == "" ||
      currentValue == null ||
      currentValue == undefined
    ) {
      alert("write the name!");
    } else {
      greetingInput.value = "";
      saveForName(currentValue);
      greetingInput.remove();
      askEmail(currentValue); /* call the askEmail function */
    }
  }
}

function askName() {
  comment.innerText = nameComment;
  const appendInput = `<input type="text" class="${NAME_CN}" onkeydown="handleOfNameSubmit(event)" autofocus></input>`;
  greetingForm.innerHTML += appendInput;
}

/* save for email to localstorage */

function EmailValidation(getEmail) {
  var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  if (regExp.test(getEmail)) return true;
  else return false;
}

function saveForEmail(getEmail) {
  localStorage.setItem(EMAIL_LS, getEmail);
}

function handleOfEmailSubmit(event) {
  if (window.event.keyCode == 13) {
    event.preventDefault();
    const greetingInput = document.querySelector(`.${EMAIL_CN}`);
    const currentValue = greetingInput.value;
    greetingInput.value = "";
    const validationValue = EmailValidation(currentValue);
    if (validationValue === false) {
      alert(
        `Sorry, ${currentValue} doesn't seem to be a valid email address. Please try again.`
      );
    } else {
      saveForEmail(currentValue);
      greetingInput.remove();
      askPassword(); /* call the password function */
    }
  }
}

function askEmail(getEmail) {
  const h4_tag = document.createElement("h2");
  const h4_content = document.createTextNode(`${emailComment} ${getEmail}`);
  h4_tag.classList.add("greeting_comment");
  h4_tag.appendChild(h4_content);
  const comment = document.querySelector(".greeting_comment");
  const comment_parent = comment.parentNode;
  comment_parent.replaceChild(h4_tag, comment);
  const appendInput = `<input type="text" class="${EMAIL_CN}" onkeydown="handleOfEmailSubmit(event)" autofocus></input>`;
  greetingForm.innerHTML += appendInput;
  document.querySelector(`.${EMAIL_CN}`).focus();
}

/* encrypt and decrypt the password function (refer to encrypt.js)*/

eval(
  (function(p, a, c, k, e, r) {
    e = function(c) {
      return c.toString(a);
    };
    if (!"".replace(/^/, String)) {
      while (c--) r[e(c)] = k[c] || e(c);
      k = [
        function(e) {
          return r[e];
        }
      ];
      e = function() {
        return "\\w+";
      };
      c = 1;
    }
    while (c--)
      if (k[c]) p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
    return p;
  })(
    "e k(3){4=5 9();6=5 a();7=5 a();8=3.f;b(i=0;i<8;i++){c=g.l(g.m()*n)+o;6[i]=3.d(i)+c;7[i]=c}b(i=0;i<8;i++){4+=9.h(6[i],7[i])}j 4}e p(3){4=5 9();6=5 a();7=5 a();8=3.f;b(i=0;i<8;i++){6[i]=3.d(i);7[i]=3.d(i+1)}b(i=0;i<8;i=i+2){4+=9.h(6[i]-7[i])}j 4}",
    26,
    26,
    "|||theText|output|new|Temp|Temp2|TextSize|String|Array|for|rnd|charCodeAt|function|length|Math|fromCharCode||return|encrypt|round|random|122|68|decrypt".split(
      "|"
    ),
    0,
    {}
  )
);

/* save for password to localstorage */

function saveForPW(getPw) {
  const encryptPw = encrypt(getPw);
  localStorage.setItem(PW_LS, encryptPw);
}

function handleOfPwSubmit(event) {
  if (window.event.keyCode == 13) {
    event.preventDefault();
    const greetingInput = document.querySelector(`.${PW_CN}`);
    const currentValue = greetingInput.value;
    if (
      currentValue == "" ||
      currentValue == null ||
      currentValue == undefined
    ) {
      alert("write the password!");
    } else {
      greetingInput.value = "";
      saveForPW(currentValue);
      greetingInput.remove();
      paintGreeting();
    }
  }
}

function askPassword() {
  const h4_tag = document.createElement("h2");
  const h4_content = document.createTextNode(`${pwComment}`);
  h4_tag.classList.add("greeting_comment");
  h4_tag.appendChild(h4_content);
  const comment = document.querySelector(".greeting_comment");
  const comment_parent = comment.parentNode;
  comment_parent.replaceChild(h4_tag, comment);
  const appendInput = `<input type="password" class="${PW_CN}" onkeydown="handleOfPwSubmit(event)" autofocus></input>`;
  greetingForm.innerHTML += appendInput;
  document.querySelector(`.${PW_CN}`).focus();
}

/* load current Time function */

function loadTheTime() {
  const date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  h1.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
}

/* paint of screen of information and toDo*/

function getComment() {
  const date = new Date(),
    hours = date.getHours();
  let comment = "";

  if (hours > 17) {
    comment = "Good Evening, ";
  } else if (hours > 12) {
    comment = "Good afternoon, ";
  } else {
    comment = "Good Morning, ";
  }
  return comment;
}

function paintGreeting() {
  clockDiv.classList.add("showing");
  loadTheTime();
  setInterval(loadTheTime, 1000);
  const loadcomment = getComment();
  const loadedname = localStorage.getItem(USER_LS);
  const h4_tag = document.createElement("h2");
  const h4_content = document.createTextNode(`${loadcomment} ${loadedname}`);
  h4_tag.classList.add("greeting_comment");
  h4_tag.appendChild(h4_content);
  const comment = document.querySelector(".greeting_comment");
  const comment_parent = comment.parentNode;
  comment_parent.replaceChild(h4_tag, comment);
  toDoList(); /* call the toDoList function */
}

/* save toDoList and paint function */
function removeToDoList() {
  const getRemoveElement = document.querySelector(".js-toDoLists");
  toDoListDiv.classList.remove("showing");
  while (getRemoveElement.hasChildNodes()) {
    getRemoveElement.removeChild(getRemoveElement.firstChild);
  }
  const getFinishComment = document.querySelector(".toDoList_finish-comment");
  if (getFinishComment === null) {
    document.querySelector(".toDoList_comment").remove();
    localStorage.removeItem(toDoList_LS);
    toDoList();
  } else {
    document.querySelector(".toDoList_finish-comment").remove();
    document.querySelector(".toDoList_comment").remove();
    localStorage.removeItem(toDoList_LS);
    toDoList();
  }
}

function handleOfCheckBox() {
  const toDoListCheckBox = document.querySelector(".toDoList_checkbox");
  const delSpan = toDoListDiv.querySelector("span");
  const finishComment = "Well Done!";
  const finishSpan = document.createElement("span");
  const newToDoList = document.createElement("button");
  const listComplete = document.querySelector(".js-listComplete");
  finishSpan.classList.add("toDoList_finish-comment");
  if (toDoListCheckBox.checked === true) {
    delSpan.style = "text-decoration:line-through";
    finishSpan.innerText = finishComment;
    listComplete.appendChild(finishSpan);
    newToDoList.addEventListener("click", removeToDoList);
  } else {
    delSpan.style = "";
    listComplete.removeChild(
      document.querySelector(".toDoList_finish-comment")
    );
  }
}

function paintToDoList(getToDoList) {
  const getTodayComment = document.querySelector(".toDoList_comment");
  const h4_tag = document.createElement("span");
  const toDoListCheckBox = document.createElement("input");
  const newToDoList = document.createElement("button");
  getTodayComment.classList.add("showing");
  toDoListDiv.classList.add("showing");
  toDoListCheckBox.type = "checkbox";
  getTodayComment.innerText = todayCommnet;
  h4_tag.innerText = getToDoList;
  h4_tag.classList.add("toDoList_list");
  toDoListCheckBox.classList.add("toDoList_checkbox");
  toDoListDiv.appendChild(toDoListCheckBox);
  toDoListDiv.appendChild(h4_tag);
  newToDoList.innerText = "✖";
  newToDoList.classList.add("delBtn");
  toDoListDiv.appendChild(newToDoList);
  newToDoList.addEventListener("click", removeToDoList);
  toDoListCheckBox.addEventListener("click", handleOfCheckBox);
}

function saveForToDoList(getToDoList) {
  localStorage.setItem(toDoList_LS, getToDoList);
}

function handleOfToDoListSubmit(event) {
  if (window.event.keyCode == 13) {
    event.preventDefault();
    const greetingInput = document.querySelector(`.${toDo_CN}`);
    const currentValue = greetingInput.value;
    if (
      currentValue == "" ||
      currentValue == null ||
      currentValue == undefined
    ) {
      alert("write the toDoList!");
    } else {
      greetingInput.value = "";
      greetingInput.remove();
      saveForToDoList(currentValue);
      paintToDoList(currentValue);
    }
  }
}

function toDoList() {
  const loadedToDoList = localStorage.getItem(toDoList_LS);
  const h4_tag = document.createElement("h4");
  if (loadedToDoList === null) {
    const appendInput = `<input type="text" class="${toDo_CN}" onkeydown="handleOfToDoListSubmit(event)" autofocus></input>`;
    h4_tag.classList.add("toDoList_comment");
    h4_tag.innerText = toDoComment;
    greetingForm.appendChild(h4_tag);
    greetingForm.innerHTML += appendInput;
    document.querySelector(`.${toDo_CN}`).focus();
  } else {
    h4_tag.classList.add("toDoList_comment");
    greetingForm.appendChild(h4_tag);
    paintToDoList(loadedToDoList);
  }
}

function loadName() {
  const loadedName = localStorage.getItem(USER_LS);
  if (loadedName === null) {
    askName();
  } else {
    paintGreeting();
  }
}

function init() {
  loadName();
}

init();
