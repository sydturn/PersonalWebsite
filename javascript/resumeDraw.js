var canvas = document.getElementById('canvasDraw');
var ctx = canvas.getContext('2d');
var painting = document.getElementById('paint');
var paint_style = getComputedStyle(painting);

var mouse = {x: 0, y: 0};
var imageData; 


var imageObj = new Image();

imageObj.onload = function() {
    ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
};
imageObj.crossOrigin="images/resume/Anonymous";
imageObj.src = 'images/resume/resume.png';


canvas.addEventListener('mousemove', function(e) {
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

ctx.lineWidth = 2;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#29a329';
 
canvas.addEventListener('mousedown', function(e) {
    imageData = ctx.getImageData(0,0,canvas.width,canvas.height);
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);

canvas.addEventListener('mouseleave', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
 
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};

function green() {
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#29a329';
    canvas.setAttribute("style", "cursor: url(images/resume/pen.png), auto");
}

function red() {
    ctx.lineWidth = 2;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#e60000';
    canvas.setAttribute("style", "cursor: url(images/resume/pen.png), auto");
}

function highlight() {
    ctx.strokeStyle = "rgba(217, 217, 2, 0.005)";
    ctx.lineJoin = 'round';
    ctx.lineCap = 'square';
    ctx.lineWidth = 15;
    canvas.setAttribute("style", "cursor: url(images/resume/highlighter.png), auto");
}

function erase() {
    ctx.putImageData(imageData, 0, 0);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imageObj, 0, 0, canvas.width, canvas.height);
}

function printImg() {
    var image = canvas.toDataURL("image/png");
    var anchor = document.createElement('a');
    anchor.setAttribute('download', 'images/resume/TurnbullResume.png');
    anchor.setAttribute('href', image);
    anchor.click();
}
