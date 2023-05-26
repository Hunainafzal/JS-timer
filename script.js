
var interval;
var totalSeconds = 180; 

function startTimer() {
  interval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function updateTimer() {
  if (totalSeconds <= 0) {
    stopTimer();
    alert("Timer finished!");
    return;
  }

  var hours = Math.floor(totalSeconds / 3600);
  var minutes = Math.floor((totalSeconds % 3600) / 60);
  var seconds = totalSeconds % 60;

  document.getElementById("hours").innerText = padTime(hours);
  document.getElementById("minutes").innerText = padTime(minutes);
  document.getElementById("seconds").innerText = padTime(seconds);

  totalSeconds--;
}

function padTime(time) {
  return time.toString().padStart(2, "0");
}
