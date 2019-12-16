const clock = document.querySelector(".clock");
// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;

const days = 1000 * 60 * 60 * 24;
const hours = 1000 * 60 * 60;
const minutes = 1000 * 60;
const seconds = 1000;

function getTime() {
  const xmasDay = new Date("2019-12-24:00:00:00+0900");
  const date = new Date();

  // hours, minutes, seconds, used remainders values
  const remainDays = Math.floor((xmasDay - date) / days);
  const remainHours = Math.floor((xmasDay - date) / hours - remainDays * 24);
  /* 
    (xmasDay - date)/hours -> 404(total)
    (xmasDay - date)/days -> 16(days)
    Result -> 404(total) - (16(Days) * 24(one Day)) = 20H(left)
  */
  const remainMinutes = Math.floor(
    (xmasDay - date) / minutes - Math.floor((xmasDay - date) / hours) * 60
  );
  /*
    (xmasDay - date)/minutes -> 24284(total)
    (xmasDay - date)/hours -> 404(hours)
    Result -> 24284(total) - (404(hours) * 60(one hour)) = 44M(Left)
   */
  const remainSeconds = Math.floor(
    (xmasDay - date) / seconds - Math.floor((xmasDay - date) / minutes) * 60
  );

  clock.innerHTML = `<h1>Time Until 2019 ChristMas</h1> </br>
  <h2>
  ${remainDays < 10 ? "0" + remainDays : remainDays}d
  ${remainHours < 10 ? "0" + remainHours : remainHours}h
  ${remainMinutes < 10 ? "0" + remainMinutes : remainMinutes}m 
  ${remainSeconds < 10 ? "0" + remainSeconds : remainSeconds}s
  </h2>
  `;
}

function init() {
  setInterval(getTime, 1000);
}

init();
