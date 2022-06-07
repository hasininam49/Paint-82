var mouseEvent = ""
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");

var color = ""
var width = ""
var radius = ""
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width of line").value;
   radius = document.getElementById("radius").value;
   mouseEvent = "mousedown";
}
canvas.addEventListener("mouseUp", my_mouseup);
function my_mouseup(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width of line").value;
   radius = document.getElementById("radius").value;
   mouseEvent = "mouseUp";
}
canvas.addEventListener("mouseleave", my_mouseup);
function my_mouseup(e){
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width of line").value;
   radius = document.getElementById("radius").value;
   mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemmove(e){
    current_position_of_mouse_x= e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y= e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown"){
            console.log("Current position of x and y coordinates = ")
            console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
            ctx.beginPath();
            ctx.strokStlye = color;
            ctx.lineWidth = width_of_line;
            ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0 , 2* Math.Pi);
            ctx.stroke();
    }

}








