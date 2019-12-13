// maak een variabele voor de canvas
const canvas = document.getElementById('canvas');

// leg een 2d-context over de canvas
const context = canvas.getContext('2d');

//maak de canvas schermvullend
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// -------------------------------------------------------

// context.beginPath()
// context.fillstyle = "black";
// context.arc(400,300,20,0,Math.PI*2);
// context.stroke();
// context.fill();
// context.closePath();

let circleObject = {}
circleObject.x = 200;
circleObject.y = 300;
circleObject.radius = 20;
circleObject.sAngle = 0;
circleObject.eAngle = Math.PI *2;
circleObject.color = "black";
circleObject.velocity_x = 100;
circleObject.velocity_y = 100;


circleObject.draw = function() {
  context.beginPath()
  context.arc(this.x,this.y,this.radius,this.sAngle,this.eAngle);
  context.closePath();
  context.stroke();
  context.fillstyle = this.color;
  context.fill()
}


function animate(){
  context.clearRect(0,0,width,height)
  circleObject.x += 2;
  circleObject.draw()
}

setInterval(animate,10);
