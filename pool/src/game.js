 var cuentabandas = 0, modo = 2 ,   arranque = false, arranque2 = false, serie = 0, activeplayer = 0, pasiveplayer = 1

var  nueva = false , fin = false
var players= [{nombre:'PEPE', target: 0 }, {nombre:'PACO', target: 0}]
 var old1, old2,old3, oldforce
 var entrantes = []

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
	 

b.value = 50
c.value = 0

power()
	 
 }
 function reseting2(){
	 fin = false
	nueva = false
	
	activeplayer = 0
	pasiveplayer = 1
	players= [{nombre:'PEPE', target: 0 }, {nombre:'ANTONIO', target: 0}]
	ser.textContent = 'JUEGA ' + players[activeplayer].nombre;
	ser.style.backgroundColor = '#ff8080'
	reseting()
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
  Crafty.sprite("img/table.png", {table:[0,0,4551,2570]});
  
  Crafty.sprite("img/ball_1.png", {bo1:[0,0,141,141]});
  Crafty.sprite("img/ball_2.png", {bo2:[0,0,141,141]});
  Crafty.sprite("img/ball_3.png", {bo3:[0,0,141,141]});
  Crafty.sprite("img/ball_4.png", {bo4:[0,0,141,141]});
  Crafty.sprite("img/ball_5.png", {bo5:[0,0,141,141]});
  Crafty.sprite("img/ball_6.png", {bo6:[0,0,141,141]});
  Crafty.sprite("img/ball_7.png", {bo7:[0,0,141,141]});
  Crafty.sprite("img/ball_8.png", {bo8:[0,0,141,141]});
  Crafty.sprite("img/ball_9.png", {bo9:[0,0,141,141]});
  Crafty.sprite("img/ball_10.png", {bo10:[0,0,141,141]});
  Crafty.sprite("img/ball_11.png", {bo11:[0,0,141,141]});
  Crafty.sprite("img/ball_12.png", {bo12:[0,0,141,141]});
  Crafty.sprite("img/ball_13.png", {bo13:[0,0,141,141]});
  Crafty.sprite("img/ball_14.png", {bo14:[0,0,141,141]});
  Crafty.sprite("img/ball_15.png", {bo15:[0,0,141,141]});
  Crafty.sprite("img/ball_16.png", {bo16:[0,0,64,64]});
  
   Crafty.audio.add("breack", "sounds/Break+2.mp3");
   Crafty.audio.add("pocket", "sounds/pocket.mp3");
   Crafty.audio.add("mal", "sounds/mal.mp3");
   Crafty.audio.add("golpe", "sounds/golpe.mp3");
   Crafty.audio.add("golpe2", "sounds/golpe2.mp3");
 
 Crafty.e("2D, DOM, table, Persist, Mouse").attr({x: 0, y: 0, w: 1000, h: 540})
.bind("MouseDown", function(event) {
		Crafty("puntero").attr({x: event.clientX -6, y: event.clientY -6, z: 100, w: 1, h: 1})
		Crafty('can').destroy()	
        Crafty.e('can')
		//alert("clientX: " + event.clientX + " - clientY: " + event.clientY)
		})
		
		 
  Crafty.scene("portada")

prev()
}
}

function prev(){Crafty('can').destroy()
document.getElementById('starting').style.display = 'inline-block'
	document.getElementById('botones').style.display = 'none'
	Crafty("bol").each(function(i) { this.visible = false
	// Matter.Body.setPosition(this._body, {x : this.origen['origenx'], y: this.origen['origeny']})	
	
	
	})
	arranque = false; 
}

function por(){if(mode.value == 0){return window.location = "../index.html"}

	document.getElementById('starting').style.display = 'none'
	document.getElementById('botones').style.display = 'inline-block'
	gatillo.style.visibility =  'visible'
	// gob.style.visibility =  'hidden'
	st.style.backgroundColor = '#993300'
     hideballs()
	 // Crafty.scene("portada")
	Crafty("bol").each(function(i) { this.fuera = false; this.quieto = true;
	Matter.Body.setVelocity(this._body, {x: 0, y: 0})
				Body.setAngularVelocity( this._body ,0)
	Matter.Body.setPosition(this._body, {x : this.origen['origenx'], y: this.origen['origeny']})	
	
	this.visible = true			
	this.old = {oldx: this._body.position.x, oldy: this._body.position.y}		
	
	})
	
// Crafty("bol").each(function(i) { this.old = {oldx: this._body.position.x, oldy: this._body.position.y}})


	Crafty('puntero').x = Crafty('puntero').origen['origenx']; 
	Crafty('puntero').y = Crafty('puntero').origen['origeny'];
	
	rayo()
	nueva = false
	reseting2()
}

function changeplayer(){ 
var tar = []
if(activeplayer == 0){activeplayer = 1; pasiveplayer = 0; ser.style.backgroundColor = '#ffff4d'
} else{activeplayer = 0; pasiveplayer = 1; ser.style.backgroundColor = '#ff8080'}
ser.textContent = 'JUEGA ' + players[activeplayer].nombre + ' ' + players[activeplayer].target;
 Crafty.audio.play("mal",1,0.3);
}


function setold(){
	
	
	old1 = {x: Crafty('bola16')._body.position.x, y: Crafty('bola16')._body.position.y}; 
	 old2 = {x: Crafty('bola8')._body.position.x, y: Crafty('bola8')._body.position.y}; 
	// old3 = {x: Crafty('bola3')._body.position.x, y: Crafty('bola3')._body.position.y}; 
	oldforce = {force: b.value, efectx: c.value};
}

function goback(){
	Matter.Body.setPosition(Crafty('bola16')._body, {x : old1.x, y: old1.y})
	 Matter.Body.setPosition(Crafty('bola8')._body, {x : old2.x, y: old2.y})
	// Matter.Body.setPosition(Crafty('bola3')._body, {x : old3.x, y: old3.y})
	b.value = oldforce.force
	c.value = oldforce.efectx
	
	rayo()
	power()
	gob.style.visibility = 'hidden';
	st.style.visibility = 'hidden';
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

	

function disparo(){  
 sendip(); gatillo.blur();
var bod = Crafty('bola16')._body ,  p = Crafty('puntero') 
var  rayx = 0, rayy = 0, rayx2, rayy2, multiplicador = 5, fa

entrantes = []	
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

  Body.applyForce( bod, { x: bod.position.x , y: bod.position.y}, { x: rayx2, y: rayy2} )
  
  Body.setAngularVelocity( bod, parseInt(c.value)  * parseInt(b.value) / 2000)
  gatillo.style.visibility =  'hidden'
  st.style.visibility =  'hidden'
  arranque = true;
 Crafty('can').destroy()
 
}

function  dif(bo, pu){ return (Math.max(bo, pu) - Math.min(bo, pu)) }


function  pintar(cosa){
	var newNode 

newNode = document.createElement("img");
newNode.id = 'toque' 
newNode.src = cosa 
newNode.classList.add("fila")
newNode.style.width = '20px'
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

function duermen(){
	var contador = true
	Crafty("bol").each(function(i) { if(this.quieto == false && this.fuera == false){ contador = false; }})
	Crafty("bol").each(function(i) {this.quieto = false})	
		
		if(contador == true){
			Crafty("bol").each(function(i) {
				Matter.Body.setVelocity(this._body, {x: 0, y: 0})
				Body.setAngularVelocity( this._body ,0)
				})
	
	timer5 = setTimeout(function(){ st.style.visibility = 'visible'
		clearTimeout(timer5);
		// hideballs()
		if(fin == true){return}
		if(chekcar()== true){gatillo.style.visibility = 'visible';rayo();reseting()
			ser.textContent = 'JUEGA ' + players[activeplayer].nombre + ' ' + players[activeplayer].target;
			}else{
				if(entrantes.some(elem => elem > 15) ){ 
if(lastball()){gameover2()
	arranque = false; 
	return 

			}


		var blanca = Crafty("bola16")			
		 Matter.Body.setPosition(blanca._body, {x : 500, y: 270 })
		 Matter.Body.setVelocity(blanca._body, {x: 0, y: 0})
         Body.setAngularVelocity( blanca._body ,0)
	
	blanca.quieto = false
		 }
				gatillo.style.visibility = 'visible';
		changeplayer()
		}
		
		 rayo();
		 reseting()
		arranque = false; 
		}, 300);
		}
		
		
		return contador
}



function chekcar(){

	if(entrantes.length  == 0){return false}
	
	
if(players[activeplayer].target  == 0){
	
if(entrantes[0] < 8){
	players[activeplayer].target  = 'LISAS';
	players[pasiveplayer].target  = 'RAYADAS';
} else if(entrantes[0] > 8 && entrantes[0] < 16){
	players[activeplayer].target  = 'RAYADAS'; 
	players[pasiveplayer].target  = 'LISAS';
}

	}
// if(entrantes.some(elem => elem > 15) ){if(lastball()){  return gameover()} else{return false}}	
if(entrantes.some(elem => elem > 15) ){return false}	
if(entrantes.length  > 1){return soniguales()}

if(entrantes[0] < 8 && players[activeplayer].target  == 'LISAS'){ return true}
if(entrantes[0] > 8 && players[activeplayer].target  == 'RAYADAS'){return true}
}

function soniguales(){
	var lisas = 0
entrantes.forEach(function(element) {
	
 if(element < 8){lisas += 1}
});	
if(lisas == 0 && players[activeplayer].target  == 'RAYADAS'){return true}
if(lisas == entrantes.length && players[activeplayer].target  == 'LISAS'){return true}
return false
}

