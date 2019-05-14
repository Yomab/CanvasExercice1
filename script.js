var c = document.getElementById("mon_canvas");
 var ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(200,100); //toit//
ctx.lineTo(100,200);
ctx.lineTo(300,200);
ctx.lineTo(300,200);
ctx.closePath();
ctx.fillStyle = "#d88437";
ctx.fill();

ctx.beginPath();
ctx.moveTo(100,200);//corp maison//
ctx.lineTo(100,350);
ctx.lineTo(300,350);
ctx.lineTo(300,200);
ctx.lineTo(100,200);
ctx.closePath();
ctx.fillStyle = "#a0d7e6";
ctx.fill();

ctx.beginPath();//fenetre1//
ctx.moveTo(120,220);
ctx.lineTo(120,250);
ctx.lineTo(150,250);
ctx.lineTo(150,220);
ctx.lineTo(120,220);
ctx.closePath();
ctx.fillStyle = "#c9c9c9";
ctx.fill();

ctx.beginPath();//fenetre2//
ctx.moveTo(280,250);
ctx.lineTo(280,220);
ctx.lineTo(250,220);
ctx.lineTo(250,250);
ctx.lineTo(280,250);
ctx.closePath();
ctx.fillStyle = "#c9c9c9";
ctx.fill();

ctx.beginPath();//porte//
ctx.moveTo(180,280);
ctx.lineTo(180,350);
ctx.lineTo(220,350);
ctx.lineTo(220,280);
ctx.lineTo(180,280);
ctx.closePath();
ctx.fillStyle = "#c9c9c9";
ctx.fill();
