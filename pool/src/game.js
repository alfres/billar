 var cuentabandas = 0, modo = 2 ,   arranque = false, arranque2 = false, serie = 0, activeplayer = 0, pasiveplayer = 1

var  nueva = false , fin = false
var players= [{nombre:'PEPE', target: 0 }, {nombre:'PACO', target: 0}]
 var old1, old2,old3, oldforce
 var entrantes = []


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
 

 Game = {
	
 load:function(){ iniciarcrafty()
 

  Crafty.sprite("img/table.png", {table:[0,0,1000,565]});
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
  
   
   Crafty.audio.add("pocket", "sounds/pocket.mp3");
  
 
 Crafty.e("2D, DOM, table, Persist, Mouse").attr({x: 0, y: 0, w: 1000, h: 540})
.bind("MouseDown", function(event) { picar(event)})
		
		 
  Crafty.scene("portada")

prev()
}
}



function por(){if(mode.value == 0){return window.location = "../index.html"}

	porcomun()
	hideballs()

	Crafty("bol").each(function(i) { this.fuera = false; this.quieto = true;
	this.old = {oldx: this._body.position.x, oldy: this._body.position.y}		
	
	})

	
}

function changeplayer(){ 
var tar = []
if(activeplayer == 0){activeplayer = 1; pasiveplayer = 0; ser.style.backgroundColor = '#ffff4d'
} else{activeplayer = 0; pasiveplayer = 1; ser.style.backgroundColor = '#ff8080'}
ser.textContent = 'JUEGA ' + players[activeplayer].nombre + ' ' + players[activeplayer].target;
if(son.checked == true) Crafty.audio.play("mal",1,0.3);
}






function duermen(){
	var contador = true
	Crafty("bol").each(function(i) { if(this.quieto == false && this.fuera == false){ contador = false; }})
	Crafty("bol").each(function(i) {this.quieto = false})	
		
		if(contador == true){
			pararbolas()
			
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

