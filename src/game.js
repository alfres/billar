 var cuentabandas = 0, polv = 100 , muni = 20, arr, fi = 0,  rayx = 0, rayy = 0, arranque = false
 var old1, old2,old3
  //bolas 
 var restit = 0.5
 var frict = 0.001
 var frictAir = 0.01
 var frictStatic = 0.011
 var densi = 0.7
 
 
  //bandas
 var restit2 = 0.9
 var frict2 = 0.5
 var frictAir2 = 1
 var frictStatic2 = 1
 var densi2 = 0.1
 
 var dirx, diry
 var  Engine = Matter.Engine,
       Events = Matter.Events,
        Constraint = Matter.Constraint,
        MouseConstraint = Matter.MouseConstraint,
Mouse = Matter.Mouse,
   Render = Matter.Render,
Runner = Matter.Runner,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Body = Matter.Body;


 
  function power(){
polv = b.value 
 lb.textContent = polv
 lc.textContent = c.value
 ld.textContent = d.value
 var fx = Crafty("centro").x + parseInt(document.getElementById('c').value) -1
 var fy = Crafty("centro").y + parseInt(document.getElementById('d').value) -1
 //alert(fx)
 Crafty("efectpoint").attr({x: fx, y: fy, w: 3, h: 3})
 }
 function reseting(){
	fi = 0
	f.textContent ='puntos ' + fi
	ang = 0
	a.value = 0
	walk()
	polv = 100
	 b.value = polv
	 lb.textContent = polv
fillarsenal()
	 
 }
 
 

 function fillarsenal(){
	 Crafty("arsenal").each(function(i) { this.destroy() });
	 Crafty("bol").each(function(i) { this.destroy() });
	 muni = 20
	  for (var i = 0; i < muni; i++){
  Crafty.e("2D, DOM, bo,arsenal").attr({x:(10 + (13 * i)), y:490, z:10000000, w: 11, h: 11 })
  }	
  
	arr = Crafty("arsenal").get()
	
 }
   
   function plaipause(){
if(muni > 0){ Crafty.e("bol"); muni -= 1}else {}
   }

Game = {
	
 load:function(){
 
  Crafty.init(1000,540, document.getElementById('marco'));
  //Crafty.canvas.init()
  Crafty.background('green') 
Crafty.Matter.init({
	debug : false,
	gravity : {
		x : 0,
		y : 0
	}
});
  Crafty.sprite("img/Billiard_Balls_01_White_64x64.png", {bo:[0,0,64,64]});
 Crafty.sprite("img/Billiard_Balls_01_Red_64x64.png", {bo2:[0,0,64,64]});
 Crafty.sprite("img/Billiard_Balls_01_Yellow_64x64.png", {bo3:[0,0,64,64]});

Crafty.scene("prev")
}
}

function setold(){
	old1 = {x: Crafty('bola1').x, y: Crafty('bola1').y}; 
	old2 = {x: Crafty('bola2').x, y: Crafty('bola2').y}; 
	old3 = {x: Crafty('bola3').x, y: Crafty('bola3').y}; 
}

function goback(){
    Crafty('bola1').x = old1.x; Crafty('bola1').y = old1.y ;
	Crafty('bola2').x = old2.x; Crafty('bola2').y = old2.y ;
	Crafty('bola3').x = old3.x; Crafty('bola3').y = old3.y ;
	rayo()
	power()
	gob.style.visibility = 'hidden';
	st.style.visibility = 'hidden';
	gatillo.style.visibility = 'visible';
}

function getfactor(dx,dy){
	var hipo = (Math.hypot(dx,dy) / factor2)
		facto =  factor - hipo 	
	return facto
}
var	factor =  0.0012
	var	factor2 =  970000
	var multiplicador = 2

function disparo(){
	setold()
var b = Crafty('bola1')._body
Crafty("bola2").touche = false
Crafty("bola3").touche = false
cuentabandas = 0	
	if (Crafty('puntero').x < b.position.x +18 && Crafty('puntero').y < b.position.y +18){
		var difx = b.position.x +7 - Crafty('puntero').x
		var dify = b.position.y +7 - Crafty('puntero').y
		
	rayx = ((document.getElementById('b').value *(getfactor(difx,dify) ) )  * -1 * difx) * multiplicador
    rayy = ((document.getElementById('b').value *(getfactor(difx,dify) ) )  * -1 * dify) * multiplicador
	} else if (Crafty('puntero').x >= b.position.x +18 && Crafty('puntero').y < b.position.y +18){
		var difx = Crafty('puntero').x - b.position.x +7
		var dify = b.position.y +7 - Crafty('puntero').y
		rayx = ((document.getElementById('b').value * (getfactor(difx,dify) ) )  * 1 * difx) * multiplicador
        rayy = ((document.getElementById('b').value * (getfactor(difx,dify) ))  * -1 * dify) * multiplicador
	} else if (Crafty('puntero').x >= b.position.x +18 && Crafty('puntero').y >= b.position.y +18){
		var difx = Crafty('puntero').x - b.position.x +7
		var dify = Crafty('puntero').y - b.position.y +7  
		rayx = ((document.getElementById('b').value * (getfactor(difx,dify) ) )  * 1 * difx) * multiplicador
        rayy = ((document.getElementById('b').value * (getfactor(difx,dify) ))  * 1 * dify) * multiplicador
   
	} else if (Crafty('puntero').x < b.position.x +18 && Crafty('puntero').y >= b.position.y +18){
		var difx = b.position.x +7 - Crafty('puntero').x
		var dify = Crafty('puntero').y - b.position.y +7  
		rayx = ((document.getElementById('b').value * (getfactor(difx,dify) ) )  * -1 * difx) * multiplicador
        rayy = ((document.getElementById('b').value * (getfactor(difx,dify) ))  * 1 * dify) * multiplicador
	}
	
	//info.innerText = 'rayx____' + rayx +'_____nrayy   ' + rayy + '______factor ' + '______' + getfactor(difx,dify)
	
	
	
	var px =( 0 + (parseInt(document.getElementById('c').value)*100))
	var py =( 0 + (parseInt(document.getElementById('d').value)*100))
	


		    Body.applyForce(
    b,
    { x: px , y: py},
    { x:rayx, y: rayy}
  )
  
  gatillo.style.visibility =  'hidden'
  arranque = true
//Crafty('can').destroy()
}

function  hideballs(){
	 bolaamarilla.style.display = 'none'
	bolaroja.style.display = 'none'
}

	

function  bajar1b(){ b.value = b.value - 1;lb.textContent = b.value ;  rayo()}
function  subir1b(){ b.value = parseInt(b.value) + 1;lb.textContent = b.value ;  rayo()}
	
	
	function  rayo(){
	Crafty('can').destroy()
	 
	document.getElementById('c').value = 0
	document.getElementById('d').value = 0
	power()

	var myEntity = Crafty.e('can')
}

function duermen(){
	var contador = true
	Crafty("bol").each(function(i) { if(this.quieto == false){ contador = false; }})
		if(contador == true){
			Crafty("bol").each(function(i) { this._body.isStatic = true})
	
	timer5 = setTimeout(function(){
		clearTimeout(timer5);
		hideballs()
		if(chekcar()== true){gatillo.style.visibility = 'visible'; rayo()
			}else{gob.style.visibility = 'visible';st.style.visibility = 'visible';}
		
		Crafty("bol").each(function(i) { this._body.isStatic = false})
		
		}, 1000);
		}
		
		
		return contador
}
function chekcar(){if(mode.value ==0){
	if(Crafty("bola3").touche == true && Crafty("bola2").touche == true){return true}
	
} else{
if(Crafty("bola3").touche == true && Crafty("bola2").touche == true && cuentabandas > 2){return true}
}
return false
}