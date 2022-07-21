function datechecker() {
  event.preventDefault();
  console.log(typeof parseInt(jsdate.value));
  document.getElementById("1").innerHTML = jsdate.value;
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

// function datechecker() {
//   event.preventDefault();
//   console.log(typeof parseInt(jsdate.value));
//   let bag = new Intl.DateTimeFormat('en-GB', { dateStyle: 'medium'}).format(parseInt(jsdate.value));
//   document.getElementById("1").innerHTML = bag;
//   console.log(bag)
// }

// StopWatch

window.onload = function () {
  var seconds = 00;
  var tens = 00;
  var appendTens = document.getElementById("tens");
  var appendSeconds = document.getElementById("seconds");
  var buttonStart = document.getElementById("button-start");
  var buttonStop = document.getElementById("button-stop");
  var buttonReset = document.getElementById("button-reset");
  var Interval;

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    appendTens.innerHTML = tens;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    tens++;

    if (tens <= 9) {
      appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
      appendTens.innerHTML = tens;
    }

    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }
};
