var counting; 

function secondsToMinutes(sec){
  var minutes = Math.trunc(sec/60);
  var seconds = sec%60;

  if(minutes<10) minutes = "0"+minutes;
  if(seconds<10) seconds = "0"+seconds;

  return minutes+":"+seconds;
}

function writeTime(time){
  var h1El = document.querySelector("h1");
  h1El.innerText = "Time remaining: "+secondsToMinutes(time);
}

function setAlarm() {
  var numberOfSeconds = document.querySelector("#alarmSet").value;
  writeTime(numberOfSeconds);

  numberOfSeconds--;

  counting = setInterval(function (){
    writeTime(numberOfSeconds);
    if(numberOfSeconds === 0) {clearInterval(counting), document.body.style.backgroundColor = "darkblue";};
    numberOfSeconds--;
  }, 1000);
}

function pauseCountdown(){

}

// DO NOT EDIT BELOW HERE

var audio = new Audio("alarmsound.mp3");

function setup() {
  document.getElementById("set").addEventListener("click", () => {
    setAlarm();
  });

  document.getElementById("stop").addEventListener("click", () => {
    pauseAlarm();
  });
}

function playAlarm() {
  audio.play();
}

function pauseAlarm() {
  audio.pause();
}

window.onload = setup;
