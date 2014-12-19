/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var monCanvas = document.getElementById('jeu');
if (monCanvas.getContext) {
    var ctx = monCanvas.getContext('2d');

    var cercles = [];
    cercles[0] = [350, 400, 20];
    cercles[1] = [100, 100, 50];
    cercles[2] = [150, 200, 20];

    ctx.beginPath();
    ctx.arc(cercles[0][0],cercles[0][1],cercles[0][2], 0, 2 * Math.PI, false);
    ctx.closePath();
    
    ctx.fillStyle = "blue";
    ctx.fill();

    document.getElementById('jeu').addEventListener('mousedown', newBubble, false);
    document.getElementById('jeu').addEventListener('mouseup', blue, false);

} else {
    alert('');
}
function newBubble() {
    /*for(var i=0;i<3;i++){
     ctx.beginPath();
     ctx.arc(cercles[i][0],cercles[i][1],cercles[i][2],0,2*Math.PI,false);
     ctx.strokeStyle="BLACK";
     ctx.fillStyle="red";
     ctx.fill();
     ctx.closePath();
     }*/
    ctx.strokeStyle = "BLACK";
    ctx.fillStyle = "red";
    var j = 0;
    ctx.save();
    var interval = setInterval(translation, 140);
    ctx.beginPath();
    ctx.arc(cercles[0][0],cercles[0][1],cercles[0][2], 0, 2 * Math.PI, false);
    ctx.closePath();

    ctx.fill();
    ctx.restore();


}

function blue() {
    ctx.strokeStyle = "BLACK";
    ctx.fillStyle = "blue";
    ctx.fill();
}

function translation() {
    ctx.clearRect(cercles[0][0]-cercles[0][2],cercles[0][1]-cercles[0][2],2*cercles[0][2],2*cercles[0][2]);
    cercles[0][1]+=-5;
    ctx.beginPath();
    ctx.arc(cercles[0][0],cercles[0][1],cercles[0][2], 0, 2 * Math.PI, false);
    ctx.closePath();
    ctx.fill();
    
}


/*var monCanvas=document.getElementById('dessin2');
 if(monCanvas.getContext){
 var ctx=monCanvas.getContext('2d');
 var cercles =[];
 var cercles[0]=[350,50,20];
 var cercles[1]=[100,100,50];
 var cercles[2]=[150,200,20];
 
 
 ctx.strokeStyle="BLACK";
 ctx.fillStyle="blue";
 
 ctx.stroke();
 ctx.fill();
 creercercle(cercles);
 
 //document.getElementById('dessin2').addEventListener('onclick',white,false);
 
 }
 else{
 alert('')
 }	
 
 function creercercle(cercles){
 for(var i=0;i<3;i++){
 ctx.beginPath();
 ctx.arc(cercles[i][0],cercles[i][2],cercles[i][3],0,2*Math.PI,false);
 ctx.fill();
 ctx.closePath();
 }
 
 }*/
