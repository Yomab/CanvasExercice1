var c = document.getElementById("mon_canvas");
 var ctx = c.getContext("2d");




ctx.beginPath();//rectangle bas//
ctx.fillStyle="#00aa4b";
ctx.fillRect(120,210,180,50);
ctx.fill();
ctx.closePath();

ctx.beginPath();//rectangle haut//
ctx.fillRect(80,260,260,60);
ctx.fillStyle="#00aa4b";
ctx.fill();
ctx.closePath();

ctx.beginPath();//roue droite//
ctx.arc(100,350,30,0,Math.PI*2,false);
ctx.strokeStyle ="#818181";
ctx.fillStyle="#cdcdcd";
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();//roue gauche//
ctx.arc(320,350,30,0,Math.PI*2,false);
ctx.strokeStyle ="#818181";
ctx.fillStyle="#cdcdcd";
ctx.fill();
ctx.stroke();
ctx.closePath();
