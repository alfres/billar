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
		
		var bolmater = {esbola: true,
			slop: 0.05,
			restitution : 0.5,
			friction: 0.03,
			frictionAir: 0.01,
			frictionStatic: 0.021,
			shape : 'circle',
		density: 0.7,
			collisionFilter: {group: 1}
		}



Crafty.defineScene("portada", function() {
	// document.getElementById('starting').style.display = 'none'
	// document.getElementById('botones').style.display = 'inline-block'
	// gatillo.style.visibility =  'visible'
	// gob.style.visibility =  'hidden'
	 // st.style.visibility =  'hidden'
 power()
Crafty.e("2D, DOM,  Color, puntero")
 .attr({x: 950.00, y: 240, z: 100, w: 1, h: 1})
 .attr({origen: {origenx: 950.00, origeny: 240} })
 .color("white").origin("center")	
 
 //bolas 


var arrayx = [
170.111111111111111,
615.611111111111111,
642.611111111111111,
726.111111111111111,
698.111111111111111,
670.111111111111111,
725.111111111111111,
697.111111111111111,
670.111111111111111,
696.511111111111111,
697.111111111111111,
642.611111111111111,
725.111111111111111,
726.111111111111111,
670.111111111111111,
724.711111111111111
]

var arrayy = [
300.111111111111111,
269.111111111111111,
284.111111111111111,
300.111111111111111,
316.911111111111111,
238.111111111111111,
205.111111111111111,
254.111111111111111,
269.111111111111111,
222.111111111111111,
285.111111111111111,
253.111111111111111,
237.111111111111111,
331.111111111111111,
301.111111111111111,
268.511111111111111
]

var vola
 var myx = arrayx[0],  myy = arrayy[0]
 var n = 16
vola =  Crafty.e("bol, bo" + n + ", bola" + n)
 .attr({origen: {origenx: myx, origeny: myy} })
 .attr({x : myx, y: myy, w: 35, h: 35,  matter : bolmater})
.attr({old: {oldx:myx.toFixed(), oldy:myy.toFixed()} })

.attach(Crafty.e("2D, DOM,  Color")
 .attr({x : myx + 5, y: myy + 5, w: 25, h: 25})
 .attr({numero: n})
 .origin("center")
 .bind("EnterFrame",function() {if(arranque == false) return;
 if(Crafty("bola"+ this.numero).fuera == true) return 
 checkbola2(this)  })
 )


.bind("EnterFrame",function() {if(arranque == false) return;
if(Crafty("bola"+ this.numero).fuera == true) return 
 checkbola(this) ; 
 if(duermen()) { arranque = false; } })
.num = n;


for(n = 1; n < 16;n++){
myx = arrayx[n],  myy = arrayy[n]	
Crafty.e("bol, bo" + n + ", bola" + n)
 .attr({origen: {origenx: myx, origeny: myy} })
 .attr({x : myx, y: myy, w: 31, h: 31,  matter : bolmater})
.attr({old: {oldx:myx.toFixed(), oldy:myy.toFixed()} })

.attach(Crafty.e("2D, DOM,  Color")
 .attr({x : myx + 5, y: myy + 5, w: 21, h: 21})
 .attr({numero: n})
 .origin("center")
 .bind("EnterFrame",function() {if(arranque == false) return; 
 if(Crafty("bola"+ this.numero).fuera == true) return 
 checkbola2(this)  })
 )


.bind("EnterFrame",function() {if(arranque == false) return; if(this.fuera == true) return;
 checkbola(this) ; 
  })
.num = n;

// Matter.Body.setPosition(vola._body, {x : myx, y: myy  })	
}

	Crafty("bol").each(function(i) { 
	Matter.Body.setVelocity(this._body, {x: 0, y: 0})
				Body.setAngularVelocity( this._body ,0)
	Matter.Body.setPosition(this._body, {x : this.origen['origenx'], y: this.origen['origeny']})	
	
	this.visible = true			
			
	
	})
nueva = true


//bandas

 Crafty.e("ban2").attr({x: 90, y: 0, w: 373, h: 62, matter : banmater})
Crafty.e("ban2").attr({x: 525, y: 0, w: 376, h: 62, matter : banmater})
 Crafty.e("ban2").attr({x: 90, y: 478, w: 373, h: 62, matter : banmater})
Crafty.e("ban2").attr({x: 525, y: 478, w: 376, h: 62, matter : banmater})

 Crafty.e("ban2").attr({x: 0, y: 92, w: 65, h: 355, matter : banmater})
Crafty.e("ban2").attr({x: 935, y: 92, w: 65, h: 355, matter : banmater})


Crafty.e("ban2").attr({x: 88, y: -2, w: 24, h: 62, matter : banmater}).rotation = 37
Crafty.e("ban2").attr({x: 23, y: 76, w: 24, h: 62, matter : banmater}).rotation = 41
Crafty.e("ban2").attr({x: 879, y: 479, w: 24, h: 62, matter : banmater}).rotation = 37
Crafty.e("ban2").attr({x: 956, y: 405, w: 24, h: 62, matter : banmater}).rotation = 49


Crafty.e("ban2").attr({x: 75, y: 496, w: 62, h: 24, matter : banmater}).rotation = 45
Crafty.e("ban2").attr({x: 1, y: 423, w: 62, h: 24, matter : banmater}).rotation = 41
Crafty.e("ban2").attr({x: 858, y: 19, w: 62, h: 24, matter : banmater}).rotation = 48
Crafty.e("ban2").attr({x: 935, y: 94, w: 62, h: 24, matter : banmater}).rotation = 46

Crafty.e("ban2").attr({x: 539, y: 9, w: 21, h: 62, matter : banmater}).rotation = 64
Crafty.e("ban2").attr({x: 410, y: 28, w: 62, h: 21, matter : banmater}).rotation = 28
Crafty.e("ban2").attr({x: 429, y: 470, w: 21, h: 62, matter : banmater}).rotation = 64
Crafty.e("ban2").attr({x: 518, y: 491, w: 62, h: 21, matter : banmater}).rotation = 27


// fondos
Crafty.e("ban2").attr({x:0, y: 0, w: 475, h: 25, matter : fondomater})
Crafty.e("ban2").attr({x:512, y: 0, w: 475, h: 25, matter : fondomater})
Crafty.e("ban2").attr({x:0, y: 515, w: 475, h: 25, matter : fondomater})
Crafty.e("ban2").attr({x:512, y: 515, w: 475, h: 25, matter : fondomater})

Crafty.e("ban2").attr({x:0, y: 0, w: 23, h: 540, matter : fondomater})
Crafty.e("ban2").attr({x:974, y: 0, w: 26, h: 540, matter : fondomater})

Crafty.e("ban2").attr({x:450, y: 0, w: 100, h: 17, matter : fondomater})
Crafty.e("ban2").attr({x:450, y: 523, w: 100, h: 17, matter : fondomater})




// texto


  
// Events.on(Crafty.Matter.engine, "afterUpdate", function(event) {if(arranque2 == true){alert('up'); arranque = true}})
  
 Events.on(Crafty.Matter.engine, 'collisionStart', function(event) {
    if(arranque == false) {return}
     var pairs = event.pairs;
   console.log("colision between " + pairs[0].bodyA.id + " - " + pairs[0].bodyB.id);
   
   // if(nueva == false && pairs[0].bodyB.id < 16){
		// nueva = true; 
		// return Crafty.audio.play("breack",1,pairs[0].bodyA.speed / 200)
		// }
	
	if(pairs[0].bodyB.id < 17){
		console.log("play volume " + (pairs[0].bodyA.speed / 60));
	var vol = (pairs[0].bodyA.speed / 60)
	if(vol < 0.05)return
	if(vol > 1)vol = 1
	if(vol < 0.21)return Crafty.audio.play("golpe2",1,(vol * 2.5))
		return Crafty.audio.play("golpe",1,vol)
		}
	
	// alert(pairs[0].bodyB.esbola)
    
	 // if(pairs[0].bodyA.id ==1 && pairs[0].bodyB.id ==3) {
		 // if(Crafty('bola3').touche == true ) {return}
		 // pintar('img/Billiard_Balls_01_Yellow_64x64.png')
		 // Crafty('bola3').touche = true
		 // } else if(pairs[0].bodyA.id ==1 && pairs[0].bodyB.id ==2){
			// if(Crafty('bola2').touche == true ) {return}
			// pintar('img/Billiard_Balls_01_Red_64x64.png')
			 // Crafty('bola2').touche = true
		 // } else if(pairs[0].bodyA.id ==1 && pairs[0].bodyB.id > 3){
			 // if(modo == 0) {return}
			 // if(Crafty('bola3').touche == true && Crafty('bola2').touche == true) {return}
			 // if(cuentabandas > 2) {return}
			 // pintar('img/3bandas.png')
			 // cuentabandas += 1}
});

Matter.Resolver._restingThresh = 0.1;
// troneras

// Crafty.e("ban2").attr({x:25, y: 27, w: 46, h: 46})
// Crafty.e("ban2").attr({x:471, y: 18, w: 45, h: 45})
// Crafty.e("ban2").attr({x:920, y: 27, w: 46, h: 46})

// Crafty.e("ban2").attr({x:25, y: 467, w: 46, h: 46})
// Crafty.e("ban2").attr({x:472, y: 477, w: 45, h: 45})
// Crafty.e("ban2").attr({x:920, y: 467, w: 46, h: 46})
})


function checkbola2(thi){ 
var b = Crafty('bola' + thi.numero)
if(thi.within(25,25, 47, 52)) {dentro(b)}
if(thi.within(471,20, 45, 50)) { dentro(b)}
if(thi.within(920,25, 47, 52)) { dentro(b)}

if(thi.within(25,462, 47, 52)) { dentro(b)}
if(thi.within(472,472, 45, 50)) { dentro(b)}
if(thi.within(920,462, 47, 52)) { dentro(b)}

}

function dentro(thi){
	Crafty.audio.play("pocket");
	if(thi.num < 16)pintar('img/ball_' + thi.num + '.png')
		Matter.Body.setPosition(thi._body, {x : thi.origen['origenx'] + 1000, y: thi.origen['origeny'] + 1000 })	
Matter.Body.setVelocity(thi._body, {x: 0, y: 0})
Body.setAngularVelocity( thi._body ,0)
	// si es negra
	if(thi.num == 8 ) {
		// Matter.Body.setPosition(thi._body, {x : thi.origen['origenx'] + 1000, y: thi.origen['origeny'] + 1000 })
		
		return gameover()
		}
	
	entrantes.push(thi.num)


if(thi.num == 16)return
thi.fuera = true
thi.quieto = true;	
}

function checkbola(thi){ 
// if((thi._body.speed.toFixed(1) * 100) < 10){alert(thi._body.speed.toFixed(1) * 100)
if(thi.old['oldx'] == (thi._body.position.x.toFixed()) && thi.old['oldy'] == (thi._body.position.y.toFixed(1))){
thi.quieto = true
} else{
	thi.old['oldx'] = thi._body.position.x.toFixed()
	thi.old['oldy'] = thi._body.position.y.toFixed(1)
	thi.quieto = false
	
}


}



function lastball(){var lisas = 0
	if(players[activeplayer].target == 'LISAS'){
for(var n = 1; n < 8; n++){if(Crafty("bola" + n).fuera == true)lisas += 1}			
} else {for(var n = 9; n < 16; n++){if(Crafty("bola" + n).fuera == true)lisas += 1}}
if(lisas > 6)return true
}
 function gameover(){
if(lastball()){ser.textContent = players[activeplayer].nombre + " GANA"
	} else {ser.textContent = players[activeplayer].nombre + " PIERDE"
}
arranque = false; 
	st.style.backgroundColor = '#ff0066'
	st.style.visibility = 'visible'
	fin = true
	// arranque = false
 }
 
  function gameover2(){
ser.textContent = players[activeplayer].nombre + " PIERDE"
arranque = false; 
	st.style.backgroundColor = '#ff0066'
	st.style.visibility = 'visible'
	fin = true
 }
