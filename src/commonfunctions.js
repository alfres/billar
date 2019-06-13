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
  
  
  var fondomater = {
	  
	  isSleeping: true,
	  isSensor: true,
			restitution : 0.01,
			friction: 0.5,
			frictionAir: 1,
			frictionStatic: 1,
			density: 0.7,
			collisionFilter: {group: 0, category: 1}
		}





var banmater = {
	  
	  isSleeping: true,
	  isSensor: true,
			restitution : 0.9,
			friction: 0.5,
			frictionAir: 1,
			frictionStatic: 1,
			density: 0.7,
			collisionFilter: {group: 0, category: 1}
		}
		
		var bolmater = {
			slop: 0.05,
			restitution : 0.5,
			friction: 0.001,
			frictionAir: 0.01,
			frictionStatic: 0.021,
			shape : 'circle',
		density: 0.7,
			collisionFilter: {group: 1}
}

 function power(){
 lb2.textContent = 'force ' + b.value
 lc2.textContent = 'torque ' + c.value
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

function iniciarcrafty(){
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
 Crafty.audio.add("mal", "sounds/mal.mp3");
   Crafty.audio.add("golpe", "sounds/golpe.mp3");
   Crafty.audio.add("golpe2", "sounds/golpe2.mp3");
}

function prev(){Crafty('can').destroy()
document.getElementById('starting').style.display = 'inline-block'
	document.getElementById('botones').style.display = 'none'
	Crafty("bol").each(function(i) { this.visible = false
	Matter.Body.setPosition(this._body, {x : this.origen['origenx'], y: this.origen['origeny']})	
	
	
	})
	arranque = false; 
}

function porcomun(){
document.getElementById('starting').style.display = 'none'	
document.getElementById('botones').style.display = 'inline-block'
gatillo.style.visibility =  'visible'
st.style.backgroundColor = '#993300'

	Crafty("bol").each(function(i) { 
	Matter.Body.setVelocity(this._body, {x: 0, y: 0})
	Body.setAngularVelocity( this._body ,0)
	Matter.Body.setPosition(this._body, {x : this.origen['origenx'], y: this.origen['origeny']})
	
	this.visible = true})

Crafty('puntero').x = Crafty('puntero').origen['origenx']; 
Crafty('puntero').y = Crafty('puntero').origen['origeny'];

rayo()
reseting2()

}


function getfactor(dx,dy){
	var	factor =  0.0012
	var	factor2 =  97
	var hipo = (Math.hypot(dx,dy) / factor2)
	// alert(hipo)
		var facto =  factor / hipo 	
	return facto
}

function  dif(bo, pu){
return (Math.max(bo, pu) - Math.min(bo, pu))
	}
	
	function disparo(n){  
 // sendip();
   gatillo.blur();
var bod = Crafty('bola' + n)._body ,  p = Crafty('puntero') 
var  rayx = 0, rayy = 0, rayx2, rayy2, multiplicador = 5, fa
	
	       if (p.x <  bod.position.x && p.y <   bod.position.y){ rayx = -1;  rayy = -1 
	} else if (p.x >= bod.position.x && p.y <   bod.position.y){ rayx = 1;  rayy = -1 
	} else if (p.x >= bod.position.x && p.y >=  bod.position.y){ rayx = 1;  rayy = 1 
    } else if (p.x <  bod.position.x && p.y >=  bod.position.y){ rayx = -1; rayy = 1 
    }
	
fa = getfactor(dif(bod.position.x, p.x ),dif(bod.position.y, p.y ))

 rayx2 = b.value * fa   * (rayx) * dif(bod.position.x, p.x ) * multiplicador
 rayy2 = b.value * fa   * (rayy) * dif(bod.position.y, p.y ) * multiplicador

	// 
	

		    Body.applyForce( bod,
    { x: bod.position.x , y: bod.position.y},
    { x:rayx2, y: rayy2}
  )
  
  Body.setAngularVelocity( bod, parseInt(c.value)  * parseInt(b.value) / 2000)
  gatillo.style.visibility =  'hidden'
  arranque = true
 Crafty('can').destroy()
 Crafty("bola2").touche = false;  Crafty("bola3").touche = false
cuentabandas = 0
}

 function reseting(){
b.value = b.defaultValue;
c.value = c.defaultValue;
power()
	 }
	 
	 function pararbolas(){
	Crafty("bol").each(function(i) {
				Matter.Body.setVelocity(this._body, {x: 0, y: 0})
				Body.setAngularVelocity( this._body ,0)
				})	 
	 }

function  pintar(cosa, size){
	var newNode 

newNode = document.createElement("img");
newNode.id = 'toque' 
newNode.src = cosa 
newNode.classList.add("fila")
newNode.style.width = size
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
	
function  rayo(){ Crafty('can').destroy(); Crafty.e('can') }

function  picar(event){ 
Crafty("puntero").attr({x: event.clientX -6, y: event.clientY -6, z: 100, w: 1, h: 1})
		Crafty('can').destroy()	
        Crafty.e('can') 
}

function checkbola(thi){ 

if(thi.old['oldx'] == (thi._body.position.x.toFixed()) && thi.old['oldy'] == (thi._body.position.y.toFixed(1))){
thi.quieto = true
} else{
	thi.old['oldx'] = thi._body.position.x.toFixed()
	thi.old['oldy'] = thi._body.position.y.toFixed(1)
	thi.quieto = false
	
}


}