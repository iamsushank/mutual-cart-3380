function datechecker() {
  // event.preventDefault();
  // console.log(typeof parseInt(jsdate.value));
  // console.log(parseInt(jsdate.value));
  // document.getElementById("1").innerHTML = jsdate.value;
  
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let todaydate = String(date.getDate()).padStart(2, "0");
  let datepattern = todaydate + "," + month + "," + year;
  output.innerText = datepattern;
}
function myFunction() {
  document.getElementById("jsdate").stepUp(1);
  datechecker();
}
function myFunction2() {
  document.getElementById("jsdate").stepDown(1);
  datechecker();
}
function today() {
  var date = new Date();
  var n = date.getDate();
  document.getElementById("1").innerHTML = n;
}

let btnshow = document.getElementById("button-day");
let output = document.getElementById("1");
btnshow.addEventListener("click", () => {
  let today = new Date();
  let day = today.getDay();
  var days = new Array(7);
  days[0] = "Sunday";
  days[1] = "Monday";
  days[2] = "Tuesday";
  days[3] = "Wednesday";
  days[4] = "Thursday";
  days[5] = "Friday";
  days[6] = "Saturday";
  var r = days[today.getDay()];
  let date = today.getDate();
  let current_date = `${r},${date}`;
  output.innerText = current_date;
});
// StopWatch

const lapBtn = document.getElementById("lapBtn");
const timerSec = document.getElementById("timerSec");
const timerMins = document.getElementById("timerMins");
const timerHrs = document.getElementById("timerHrs");
const startBtn = document.getElementById("button-start");
const resetBtn = document.getElementById("resetBtn");
const lapRecord = document.getElementById("lapRecord");

let hours = 0;
let minutes = 0;
let seconds = 0;

let displaySec = seconds;
let displayMins = minutes;
let displayHours = hours;

let interval = null;
let status = "stopped";
let lapNow = null;

function start() {
  seconds++;
  if (seconds < 10) displaySec = "0" + seconds.toString();
  else displaySec = seconds;

  if (minutes < 10) displayMins = "0" + minutes.toString();
  else displayMins = minutes;

  if (hours < 10) displayHours = "0" + hours.toString();
  else displayHours = hours;

  if (seconds / 60 === 1) {
    minutes++;
    seconds = 0;

    if (minutes / 60 === 1) {
      hours++;
      minutes = 0;
    }
  }

  timerSec.innerHTML = displaySec;
  timerMins.innerHTML = displayMins;
  timerHrs.innerHTML = displayHours;
}

function startStop() {
  if (status === "stopped") {
    interval = setInterval(start, 10);
    startBtn.innerHTML = "Stop";
    status = "started";
  } else {
    clearInterval(interval);
    startBtn.innerHTML = "Start";
    status = "stopped";
  }
}

function reset() {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  timerSec.innerHTML = "00";
  timerMins.innerHTML = "00";
  timerHrs.innerHTML = "00";
  startBtn.innerHTML = "Start";
  lapRecord.innerHTML = "";
  status = "stopped";
}

function lap() {
  lapNow = `<div class="lap">Total: ${hours} : ${minutes} : ${seconds}</div>`;
  lapRecord.innerHTML += lapNow; //+=
}

lapBtn.addEventListener("click", lap);
startBtn.addEventListener("click", startStop);
resetBtn.addEventListener("click", reset);
