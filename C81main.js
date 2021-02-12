var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")

ctx.beginPath ()
ctx.strokeStyle = "red"
ctx.lineWidth = 4;
ctx.arc(300,200,40,0,2*Math.PI)
ctx.stroke ()

ctx.beginPath ()
ctx.strokeStyle = "blue"
ctx.lineWidth = 4;
ctx.arc(350,250,40,0,2*Math.PI)
ctx.stroke ()

ctx.beginPath ()
ctx.strokeStyle = "green"
ctx.lineWidth = 4;
ctx.arc(400,200,40,0,2*Math.PI)
ctx.stroke ()

ctx.beginPath ()
ctx.strokeStyle = "yellow"
ctx.lineWidth = 4;
ctx.arc(450,250,40,0,2*Math.PI)
ctx.stroke ()

ctx.beginPath ()
ctx.strokeStyle = "black"
ctx.lineWidth = 4;
ctx.arc(500,200,40,0,2*Math.PI)
ctx.stroke ()

canvas.addEventListener("mousedown",my_mousedown)

function my_mousedown(e){
    var mouse_x = e.clientX - canvas.offsetLeft;
    var mouse_y = e.clientY - canvas.offsetTop;
    circle (mouse_x,mouse_y)
}
function circle(mouse_x,mouse_y){
    ctx.beginPath ()
    ctx.strokeStyle = "red"
    ctx.lineWidth = 4;
    ctx.arc(mouse_x,mouse_y,40,0,2*Math.PI)
    ctx.stroke ()
}