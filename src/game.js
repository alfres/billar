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
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
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