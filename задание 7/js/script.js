var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");
var mouseX = 0;
var mouseY = 0;
var md=false;
var reload = 0;
var zomcount = 0;
var score = 0;
var speed = [];
var lives=5;
var zomcounte = 0;
var speede=[];
var rand = 1; 
var randsound = 1;
var start=true;
var name;
var pause=false;


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
var zombie = new Image();       // зомби
var zomdead = new Image();       //красный зомби
var zelite = new Image();        // элитный
var zelitered = new Image();    // красный элитный
var hastf = new Image();       // стреляющий гаст
var hasthurt = new Image();
var bgdead = new Image();
var button = new Image();
var start = new Image();
var button1 = new Image();
var pause = new Image();
var pauseon = new Image();
var charge = new Audio();
var fireball4 = new Audio();
var zombiehurt1 = new Audio();
var zombiehurt2 = new Audio();
var zombiedeath = new Audio();
var explode1 = new Audio();
var explode2 = new Audio();
var explode3 = new Audio();
var explode4 = new Audio();
var scream1 = new Audio();
var scream2 = new Audio();
var scream3 = new Audio();
var scream4 = new Audio();
var death = new Audio();
var moan6 = new Audio();



var ball=[];           // массив координат шаров
var fantom=[];            // массив координат фантомных шаров
fantom [0]=
{
x:50,
y: yh+50
}                  // координаты шаров
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
fantom.push(
{
x:1280,
y:0
});
var zom=[];         // массив координат зомби
zom[0] = 
{
x:1500,
y:300
}
speed[0] = 1;
speede[0]=1;
var zome=[];          // массив координат езомби
zome[0] = 
{
x:1500,
y:300
}

// подгрузка аудио

explode1.src = "assets/explode1.ogg";
explode2.src = "assets/explode2.ogg";
explode3.src = "assets/explode3.ogg";
explode4.src = "assets/explode4.ogg";
charge.src = "assets/charge.ogg";
fireball4.src = "assets/fireball4.ogg";
zombiehurt1.src = "assets/zombiehurt1.ogg";
zombiehurt2.src = "assets/zombiehurt2.ogg";
zombiedeath.src = "assets/zombiedeath.ogg";
scream1.src = "assets/scream1.ogg";
scream2.src = "assets/scream2.ogg";
scream3.src = "assets/scream3.ogg";
scream4.src = "assets/scream4.ogg";
death.src = "assets/death.ogg";
moan6.src = "assets/moan6.ogg";

// подгрузка картинок

pause.src="assets/pause.png";
pauseon.src="assets/pauseon.png";
button1.src = "assets/button1.png";
start.src = "assets/start.png";
bgdead.src = "assets/bgdead.png";
button.src = "assets/button.png";
hasthurt.src = "assets/hasthurt.png";    // красный гаст
hastf.src= "assets/hastf.png";       // стреляющий гаст
zelitered.src="assets/zelitered.png";        // красный езомби
zelite.src = "assets/zelite.png";        // езомби
zomdead.src = "assets/zomdead.png";        // красный зомби
zombie.src = "assets/zombie.png"; // зомби
fireball.src = "assets/fireball.png"; // фаербол
hast.src="assets/hast.png";            // гаст
bg.src="assets/ground.png";             // фон


name = prompt("What is your name?");


bg.onload = function() 
{
function draw()
{                                                  // begin
if(start)
{
ctx.drawImage(start,0,0);
if((mouseX>730)&&(mouseX<1170)&&(mouseY>495)&&(mouseY<623))
{
ctx.drawImage(button1,0,0);
}
if((mouseX>730)&&(mouseX<1170)&&(mouseY>495)&&(mouseY<623)&&md)
{
start=false;
md=false;
}
requestAnimationFrame(draw);
}
else
{

if(lives>0)
{
ctx.drawImage(bg,0,0); // отрисовка фона
ctx.drawImage(pause,0,0);
if((mouseX>1490)&&(mouseX<1595)&&(mouseY>0)&&(mouseY<100))
{
ctx.drawImage(pauseon,0,0);
}
if((mouseX>1490)&&(mouseX<1595)&&(mouseY>0)&&(mouseY<100)&&md)
{
alert("PAUSE");
md=false;
}

ctx.drawImage(hast,0,yh);   // отрисовка гаста
for(var i = 1; i<ball.length;i++)
{
if(fantom[i].x<400)
{
ctx.drawImage(hastf,0,yh);
}
ctx.font = "30px Arial";
ctx.fillStyle = "#FF8C00";                  // таймер перезарядки
ctx.fillText(reload+"%", 27, yh+45);
ctx.drawImage(fireball,ball[i].x,ball[i].y, 100 ,100);  // отрисовка фаербола
ball[i].x+=15;
fantom[i].x+=15;
ball[i].y=ball[i].y+ball[i].x*ball[i].x*0.000002;
if(fantom[fantom.length-1].x>1200) reload=100; else reload = Math.floor(fantom[fantom.length-1].x/12);
}
if((md)&&(fantom[i-1].x>1000))
{
charge.play();
fireball4.play();
fantom.push
(
{
x:50,
y:yh+50
}
);
ball.push(
{
x:50,                     // добавление нового фаербола
y:yh+50
});
}
if(mouseY<50) {yh=0;} else
if(mouseY>590) {yh=540;} else       // это чтобы гаст за пределы не вылазил
yh=mouseY-50;

for(var j = 1; j<zom.length;j++)
{
ctx.drawImage(zombie,zom[j].x,zom[j].y,81,136);
if(zom[j].x<1500)
{
zom[j].x-=speed[j];
}
}
speed.push(Math.random()*3+1);
if((zomcount<4)&&((zom[j-1].x==1500)||(zom[j-1].x<1000)))
{
zom.push(
{
x:1280,                            //спаун обычных зомби
y:Math.random()*570+30
});
zomcount++;
} 

for(var r = 1; r<zome.length;r++)
{
ctx.drawImage(zelite,zome[r].x,zome[r].y,81,136);
if(zome[r].x<1500)
{
zome[r].x-=speede[r];
}
}
speede.push(Math.random()*4+1);
if((Math.floor(Math.random()*200)==4)&&(score>10)&&(zomcounte<2)&&((zome[r-1].x==1500)||(zome[r-1].x<1000)))
{
zome.push(
{
x:1280,                            //спаун элитных зомби
y:Math.random()*570+30
});
zomcounte++;

} 

for(var s=0;s<zome.length;s++)
{
if(zome[s].x<100)
{
zome[s].x=1500;
zome[s].y=0;
zomcounte--;              // жизни
ctx.drawImage(hasthurt,0,yh);
switch(lives)
{
case (5) : scream1.play();
case (4) : scream2.play();
case (3) : scream3.play();
case (2) : scream4.play();
}
lives--;
if(lives==0) death.play();
}
}

for(var f=1;f<ball.length;f++)
{                                                   // проверка столкновений с элитными зомби


for(var t=1;t<zome.length;t++)
{
if((Math.abs((ball[f].x)-(zome[t].x))<50)&&(Math.abs((ball[f].y)-(zome[t].y))<100))
{
if(randsound>4) zombiehurt1.play(); else zombiehurt2.play();
randsound=Math.random()*10;
switch (Math.floor(Math.random()*4)+1)
{
case (1) : explode1.play();
case (2) : explode2.play();
case (3) : explode3.play();
case (4) : explode4.play(); 
}
ctx.drawImage(zelitered,zome[t].x,zome[t].y,81,136);
zom.push(
{
x:zome[t].x,                            //спаун обычных  зомби после элитных
y:zome[t].y
});
zome[t].x=1500;
zome[t].y=0;
ball[f].x=2000;                                          
zomcounte--; 
zomcount++;
}
}

}

for(var m=1;m<ball.length;m++)
{                                                   // проверка столкновений с обычными зомби
for(var l=1;l<zom.length;l++)
{
if((Math.abs((ball[m].x)-(zom[l].x))<50)&&(Math.abs((ball[m].y)-(zom[l].y))<100))
{
switch (Math.floor(Math.random()*4)+1)
{
case (1) : explode1.play();
case (2) : explode2.play();
case (3) : explode3.play();
case (4) : explode4.play(); 
}
zombiedeath.play();
ctx.drawImage(zomdead,zom[l].x,zom[l].y,81,136);
zom[l].x=1500;
zom[l].y=0;
ball[m].x=2000;                                          
zomcount--;                                       //счёт
score++;
}
}

}


{
ctx.font = "30px Arial";
ctx.fillStyle = "white";                  // счёт
ctx.fillText("SCORE: "+score, 1100, 700);
}
for(var p=0;p<zom.length;p++)
{
if(zom[p].x<100)
{
zom[p].x=1500;
zom[p].y=0;
zomcount--;              // жизни
ctx.drawImage(hasthurt,0,yh);
switch(lives)
{
case (5) : scream1.play();
case (4) : scream2.play();
case (3) : scream3.play();
case (2) : scream4.play();
}
lives--;
if(lives==0) death.play();
}
}

{
ctx.font = "30px Arial";
ctx.fillStyle = "white";                  // таймер перезарядки
ctx.fillText("Lives: "+lives, 900, 700);
}
requestAnimationFrame(draw);
}
else
{
ctx.drawImage(bgdead,0,0);
if((mouseX>730)&&(mouseX<1170)&&(mouseY>495)&&(mouseY<623))
{
ctx.drawImage(button,0,0);
}
ctx.font = "30px Arial";
ctx.fillStyle = "white";                  // таймер перезарядки
ctx.fillText("SCORE: "+score, 540, 360);
requestAnimationFrame(draw);
if((mouseX>730)&&(mouseX<1170)&&(mouseY>495)&&(mouseY<623)&&md)
{
ball=[];
zom=[];
zome=[];
speed=[];
speede=[];
fantom=[];
fantom [0]=
{
x:50,
y: yh+50
}                  // координаты шаров
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
fantom.push(
{
x:1280,
y:0
});
zom[0] = 
{
x:1500,
y:300
}
speed[0] = 1;
speede[0]=1;          // массив координат езомби
zome[0] = 
{
x:1500,
y:300
}
lives=5;
md=false;
moan6.play();
score=0;
}
}
}
}                                                                  // end
requestAnimationFrame(draw);          // повтор фукнции
}







