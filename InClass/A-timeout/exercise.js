/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval. (https://www.w3schools.com/jsref/met_win_setinterval.asp)
================
*/

function changeBackground(){
    document.body.style.backgroundColor = "violet";
}

setTimeout(changeBackground, 5000);

function switchBetweenBackgrounds(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = "#"+randomColor;

    console.log("Switching");
}

setInterval(switchBetweenBackgrounds, 5000);
