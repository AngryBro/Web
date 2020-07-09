var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");
var mouseX = 0;
var mouseY = 0;
var md=false;
var reload = 0;
var lastball=0;

// Функция которая считает координаты курсора
canvas.addEventListener("mousemove", setMousePosition, false);
function setMousePosition(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}

// определение зажатости ЛКМ

canvas.addEventListener('mousedown', function()
{
  md = true;
 } 
);

// определение отжатости ЛКМ

canvas.addEventListener('mouseup', function()
{
  md = false;
 } 
);

// объекты

var yh=360;          // ордината гаста
var bg=new Image;           // создание фона
var hast=new Image();          // создание гаста
var fireball = new Image();   // создание фаербола
var ball=[];
ball[0]=
{
x:50,
y: yh+50
}
ball.push(
{
x:1280,
y:0
});


// подгрузка картинок

fireball.src = "assets/fireball.png"; // фаербол
hast.src="assets/hast.png";            // гаст
bg.src="assets/ground.png";             // фон


bg.onload = function() 
{
function draw()
{
ctx.drawImage(bg,0,0); // отрисовка фона
ctx.drawImage(hast,0,yh);   // отрисовка гаста
for(var i = 1; i<ball.length;i++)
{
ctx.font = "30px Arial";
ctx.fillStyle = "#FF8C00";                  // таймер перезарядки
ctx.fillText(reload+"%", 27, yh+45);
{
ctx.drawImage(fireball,ball[i].x,ball[i].y, 100 ,100);  // отрисовка фаербола
}
ball[i].x+=10;
ball[i].y=ball[i].y+ball[i].x*ball[i].x*0.000005;
if(ball[ball.length-1].x>1000) reload=100; else reload = ball[ball.length-1].x/10;
}
if((md)&&(ball[i-1].x>1000))
{
ball.push(
{
x:50,                     // добавление нового фаербола
y:yh+50
});
}
if(mouseY<50) {yh=0;} else
if(mouseY>590) {yh=540;} else       // это чтобы гаст за пределы не вылазил
yh=mouseY-50;
requestAnimationFrame(draw);
}
requestAnimationFrame(draw);          // повтор фукнции
}








