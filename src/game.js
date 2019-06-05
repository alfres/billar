 var cuentabandas = 0, modo = 0 ,   arranque = false, serie = 0
 var old1, old2,old3, oldforce

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
 lb2.textContent = 'force ' + b.value
 lc2.textContent = 'torque ' + c.value
}
 
 function reseting(){
	 Crafty("bol").each(function(i) { this.old = {oldx: this._body.position.x, oldy: this._body.position.y}})

b.value = 80
c.value = 0

power()
	 
 }
 
function sendip(){
var dato = new FormData();
dato.append("modo" , modo);
dato.append("serie" , serie);

var xhr = (window.XMLHttpRequest) ? new XMLHttpRequest() : new activeXObject("Microsoft.XMLHTTP");
 xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      //console.log(xhr.response);
	  //alert(xhr.response)
    }
  }
xhr.open( 'post', 'https://tekintools.com/lingo/action_page2.php', true );
xhr.send(dato);	
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
 Crafty.audio.add("mal", "sounds/mal.mp3");
   Crafty.audio.add("golpe", "sounds/golpe.mp3");
   Crafty.audio.add("golpe2", "sounds/golpe2.mp3");

Crafty.scene("portada")
prev()
}
}

function prev(){
document.getElementById('starting').style.display = 'inline-block'
	document.getElementById('botones').style.display = 'none'
	Crafty("bol").each(function(i) { this.visible = false})
	Matter.Body.setPosition(Crafty('bola1')._body, {x : 70.111111111111111, y: 1345.111111111111111})
	Matter.Body.setPosition(Crafty('bola2')._body, {x : 295.111111111111111, y: 1250.111111111111111})
	Matter.Body.setPosition(Crafty('bola3')._body, {x : 555.111111111111111, y: 1150.111111111111111})
}

function por(){if(mode.value == 2){return window.location = "pool/index.html"}
	document.getElementById('starting').style.display = 'none'
	document.getElementById('botones').style.display = 'inline-block'
	gatillo.style.visibility =  'visible'
	gob.style.visibility =  'hidden'
	st.style.backgroundColor = '#993300'	
	Matter.Body.setPosition(Crafty('bola1')._body, {x : 70.111111111111111, y: 345.111111111111111})
	Matter.Body.setPosition(Crafty('bola2')._body, {x : 295.111111111111111, y: 250.111111111111111})
	Matter.Body.setPosition(Crafty('bola3')._body, {x : 555.111111111111111, y: 150.111111111111111})

	Crafty("bol").each(function(i) { this.visible = true})
	Crafty('puntero').x = 533.00; Crafty('puntero').y = 20;
	rayo()
	serie = 0
	ser.textContent = 'serie ' + serie;
	reseting()
}

function setold(){
	old1 = {x: Crafty('bola1')._body.position.x, y: Crafty('bola1')._body.position.y}; 
	old2 = {x: Crafty('bola2')._body.position.x, y: Crafty('bola2')._body.position.y}; 
	old3 = {x: Crafty('bola3')._body.position.x, y: Crafty('bola3')._body.position.y}; 
	oldforce = {force: b.value, efectx: c.value};
}

function goback(){
	Matter.Body.setPosition(Crafty('bola1')._body, {x : old1.x, y: old1.y})
	Matter.Body.setPosition(Crafty('bola2')._body, {x : old2.x, y: old2.y})
	Matter.Body.setPosition(Crafty('bola3')._body, {x : old3.x, y: old3.y})
	b.value = oldforce.force
	c.value = oldforce.efectx
	
	rayo()
	power()
	gob.style.visibility = 'hidden';
	st.style.backgroundColor = '#993300';
	gatillo.style.visibility = 'visible';
	serie = 0
	ser.textContent = 'serie ' + serie;
}

function getfactor(dx,dy){
	var	factor =  0.0012
	var	factor2 =  97
	var hipo = (Math.hypot(dx,dy) / factor2)
	// alert(hipo)
		var facto =  factor / hipo 	
	return facto
}

	

function disparo(){   sendip(); setold(); hideballs(); gatillo.blur();
var bod = Crafty('bola1')._body ,  p = Crafty('puntero') 
var  rayx = 0, rayy = 0, rayx2, rayy2, multiplicador = 5, fa
Crafty("bola2").touche = false;  Crafty("bola3").touche = false
cuentabandas = 0	
	       if (p.x <  bod.position.x && p.y <   bod.position.y){ rayx = -1;  rayy = -1 
	} else if (p.x >= bod.position.x && p.y <   bod.position.y){ rayx = 1;  rayy = -1 
	} else if (p.x >= bod.position.x && p.y >=  bod.position.y){ rayx = 1;  rayy = 1 
    } else if (p.x <  bod.position.x && p.y >=  bod.position.y){ rayx = -1; rayy = 1 
    }
	
fa = getfactor(dif(bod.position.x, p.x ),dif(bod.position.y, p.y ))

 rayx2 = b.value * fa   * (rayx) * dif(bod.position.x, p.x ) * multiplicador
 rayy2 = b.value * fa   * (rayy) * dif(bod.position.y, p.y ) * multiplicador

	console.log('posx____' + bod.position.x +'_____posy   ' + bod.position.y );
	console.log('punterox____' + p.x +'_____punteroy   ' + p.y );
    console.log('rayx____' + rayx2 +'_____nrayy   ' + rayy2 + '______factor ' + '______' + fa);

		    Body.applyForce( bod,
    { x: bod.position.x , y: bod.position.y},
    { x:rayx2, y: rayy2}
  )
  
  Body.setAngularVelocity( bod, parseInt(c.value)  * parseInt(b.value) / 2000)
  gatillo.style.visibility =  'hidden'
  arranque = true
 Crafty('can').destroy()
}

function  dif(bo, pu){
return (Math.max(bo, pu) - Math.min(bo, pu))
	}


function  pintar(cosa){
	var newNode 

newNode = document.createElement("img");
newNode.id = 'toque' 
newNode.src = cosa 
newNode.classList.add("fila")
newNode.style.width = '15px'
document.getElementById('botones').appendChild(newNode);
	
}

function  hideballs(){
	elementList = document.getElementById('botones').querySelectorAll(".fila");
	if(elementList.length < 1) return
	elementList.forEach(function(element) {
  document.getElementById('botones').removeChild(element);
});

}

function  bajar1b(){ b.value = b.value - 1; power() ;  rayo()}
function  subir1b(){ b.value = parseInt(b.value) + 1; power() ;  rayo()}
	
	
	function  rayo(){
	Crafty('can').destroy()
	Crafty.e('can')
}

function duermen(){
	var contador = true
	Crafty("bol").each(function(i) { if(this.quieto == false){ contador = false; }})
		if(contador == true){
			Crafty("bol").each(function(i) {
				Matter.Body.setVelocity(this._body, {x: 0, y: 0})
				Body.setAngularVelocity( this._body ,0)
				})
	
	timer5 = setTimeout(function(){
		clearTimeout(timer5);
		hideballs()
		if(chekcar()== true){gatillo.style.visibility = 'visible'; rayo();reseting()
			}else{gob.style.visibility = 'visible';st.style.backgroundColor = '#ff0066';}
		
		}, 300);
		}
		
		
		return contador
}

function beep() {
    Crafty.audio.play("mal",1,0.3);
}

function chekcar(){if(modo == 0){
	if(Crafty("bola3").touche == true && Crafty("bola2").touche == true){
		beep();serie += 1; ser.textContent = 'serie ' + serie; return true}
	
} else{
if(Crafty("bola3").touche == true && Crafty("bola2").touche == true && cuentabandas > 2){
	beep();serie += 1;ser.textContent = 'serie ' + serie;return true}
}
return false
}