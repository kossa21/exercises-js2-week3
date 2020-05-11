// Write your code here
var imgEl = document.querySelector("img");
var AutobackBtnEl = document.querySelector("#Autoback");
var BackBtnEl = document.querySelector("#Back"); 
var StopBtnEl = document.querySelector("#Stop"); 
var ForwardBtnEl = document.querySelector("#Forward"); 
var AutoforwardBtnEl = document.querySelector("#Autoforward"); 

var imageIndex = 0;

var interval;


var pictureList = [
    "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1546527868-ccb7ee7dfa6a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1558236714-d1a6333fce68?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1544197807-bb503430e22d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
    "https://images.unsplash.com/photo-1562165742-5fb25d795480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
];


showPicture(imageIndex);

ForwardBtnEl.addEventListener("click", nextPicture);
BackBtnEl.addEventListener("click", previousPicture);
AutoforwardBtnEl.addEventListener("click", autoForwardImages);
AutobackBtnEl.addEventListener("click", autoBackImages);
StopBtnEl.addEventListener("click", stopAuto);


function showPicture(index){
    imgEl.src = pictureList[index];
    console.log("Showing current index: ", imageIndex);
}

function nextPicture(){
    if(imageIndex + 1 > pictureList.length - 1){
        imageIndex = 0;
    }else {
        imageIndex++;
    }

    showPicture(imageIndex);
}

function previousPicture(){
    if(imageIndex - 1 < 0){
        imageIndex = pictureList.length - 1;
    }else {
        imageIndex--;
    }
    
    showPicture(imageIndex);
}

function stopAuto(){
    clearInterval(interval);
}

function autoForwardImages(){
    interval = setInterval(nextPicture, 1000);
}

function autoBackImages(){
    interval = setInterval(previousPicture, 1000);
}

