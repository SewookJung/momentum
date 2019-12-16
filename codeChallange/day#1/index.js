// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const h2 = document.querySelector("h2");

const superEventHandler = {
  mouseEnterHandler: function mouseEnter() {
    h2.innerText = "Mouse is here!";
    h2.style.color = colors[0];
  },
  mouseLeaveHandler: function mouseLeave() {
    h2.innerText = "Mouse is Leave!";
    h2.style.color = colors[1];
  },
  rigthClickHandler: function rightClick() {
    h2.innerText = "Mouse right click!";
    h2.style.color = colors[2];
  },
  resize: function resize() {
    h2.innerText = "resized!";
    h2.style.color = colors[3];
  }
};

h2.addEventListener("mouseenter", superEventHandler.mouseEnterHandler);
h2.addEventListener("mouseleave", superEventHandler.mouseLeaveHandler);
document.addEventListener("contextmenu", superEventHandler.rigthClickHandler);
window.addEventListener("resize", superEventHandler.resize);
