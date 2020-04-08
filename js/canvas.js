// Variables!
var color ="red";
var radius = 15;
//You will want to add more
var x = 100;
var y = 100;
var stopKey = false;

var canvas = document.querySelector("#canvas")
var ctx = canvas.getContext("2d")

ctx.fillStyle = "FF0000"; //use fillStyle to change color

//Listeners!!
//Add a listener for loading the window
window.addEventListener('load', function(e) {
    console.log("Loaded the window");
    canvas.width = e.currentTarget.innerWidth * 0.75;
    canvas.height = e.currentTarget.innerHeight * 0.75;
})
//Add a listener for the mouse movement
canvas.addEventListener('mousemove', function(e) {
    // console.log(e);
    x = e.x;
    y = e.y;
    draw();
})
//Add a listener for the touch move
canvas.addEventListener('touchmove', function(e) {
    // console.log(e.touches)
    x = e.touches[0].clientX;
    y = e.touches[0].clientY;
    draw();
})
//Add a listener for the keydown
document.addEventListener('keydown', function(e) {
    console.log("In Keydown");
    console.log(e.keyCode);

    if(e.keyCode == 66){
        console.log("B");
        ctx.fillStyle = "#0000FF";
    }
    else if(e.keyCode == 82){
        console.log("R");
        ctx.fillStyle = "#FF0000";
    }
    else if(e.keyCode == 71){
        console.log("G");
        ctx.fillStyle = "#00FF00";
    }
    else if(e.keyCode == 89){
        console.log("Y");
        ctx.fillStyle = "#FFFF00";
    }
    else if(e.keyCode == 38){
        console.log("Stop drawing");
        stopKey = true;
    }
    else if(e.keyCode == 40){
        console.log("Back to draw");
        stopKey = false;
    }
    else if(e.keyCode == 32){
        console.log("Clear canvas");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

})
//Add a listener for the color picker
clr.addEventListener("input", function(e) {
    console.log("Color Picker");
    console.log(this);
    var color = document.querySelector("input").value;
    ctx.fillStyle = color;
    draw();
})

// Functions!
// I would add a function for draw
function draw(){
    if (stopKey == false){
    console.log("I am drawing!!");
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2*Math.PI)
    ctx.fill()
    }
}