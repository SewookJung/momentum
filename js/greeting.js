const greetingForm = document.querySelector(".js-greetings"),
  comment = document.querySelector(".greeting_comment"),
  clockDiv = document.querySelector(".js-clock"),
  h1 = clockDiv.querySelector("h1");

const nameComment = "Hello, what's your name?",
  emailComment = "What's your email, ",
  pwComment = "What's your password?",
  toDoComment = "What is your main focus for today?";

const USER_LS = "currentUser",
  EMAIL_LS = "email",
  PW_LS = "password";

const NAME_CN = "greetings_name",
  EMAIL_CN = "greetings_email",
  PW_CN = "greetings_pw";

/* save for name to localstorage */

function saveForName(getName) {
  localStorage.setItem(USER_LS, getName);
}

function handleOfNameSubmit(event) {
  if (window.event.keyCode == 13) {
    event.preventDefault();
    const greetingInput = document.querySelector(`.${NAME_CN}`);
    const currentValue = greetingInput.value;
    greetingInput.value = "";
    saveForName(currentValue);
    greetingInput.remove();
    askEmail(currentValue); /* call the askEmail function */
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
    greetingInput.value = "";
    saveForPW(currentValue);
    greetingInput.remove();
    paintGreeting();
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

function toDoList() {
  const h4_tag = document.createElement("h4");
  const toDoInput = document.createElement("input");
  h4_tag.classList.add("toDoList_comment");
  h4_tag.innerText = toDoComment;
  greetingForm.appendChild(h4_tag);
  greetingForm.appendChild(toDoInput);
}

function loadName() {
  const loadedName = localStorage.getItem(USER_LS);
  if (loadedName === null) {
    askName();
  } else {
    paintGreeting();
  }
}

function deleteAll() {
  localStorage.clear();
}

function init() {
  loadName();
  const delBtn = document.querySelector("button");
  delBtn.addEventListener("click", deleteAll);
}

init();
