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
			slop: 0.1,
			restitution : 0.5,
			friction: 0.001,
			frictionAir: 0.01,
			frictionStatic: 0.021,
			shape : 'circle',
		density: 0.7,
			collisionFilter: {group: 1}
		}


Crafty.defineScene("portada", function() {
	document.getElementById('starting').style.display = 'none'
	document.getElementById('botones').style.display = 'inline-block'
	gatillo.style.visibility =  'visible'
	gob.style.visibility =  'hidden'
	st.style.backgroundColor = '#993300'
power()
Crafty.e("2D, DOM,  Color, puntero")
 .attr({x: 503.00, y: 20, z: 100, w: 1, h: 1})
 .color("white").origin("center")	
 
 //bolas 
 Crafty.e("bol, bo,  bola1").attr({x: 1485.00, y: 1345.00, w: 35, h: 35,  matter : bolmater})
.attr({old: {oldx:this.x, oldy:this.y} })
.bind("EnterFrame", function() { if(arranque == false) return
if(this.old['oldx'] == (this.x.toFixed(1)) && this.old['oldy'] == (this.y.toFixed(1))){
this.quieto = true
} else{
	this.old['oldx'] = this.x.toFixed(1)
	this.old['oldy'] = this.y.toFixed(1)
	this.quieto = false
	
}

if(duermen()) { arranque = false}
})
 
 
 Crafty.e("bol,bo2,bola2").attr({x: 295, y: 250, w: 35, h: 35,  matter : bolmater})  
 
 .attr({old: {oldx:this.x, oldy:this.y} })
.bind("EnterFrame", function() { 
if(this.old['oldx'] == (this.x.toFixed(1)) && this.old['oldy'] == (this.y.toFixed(1))){
this.quieto = true
} else{
	this.old['oldx'] = this.x.toFixed(1)
	this.old['oldy'] = this.y.toFixed(1)
	this.quieto = false
	
}
})
 
 Crafty.e("bol,bo3,bola3")
 .attr({x: 555, y: 150, w: 35, h: 35,  matter : bolmater})

.attr({old: {oldx:this.x, oldy:this.y} })
.bind("EnterFrame", function() { 
if(this.old['oldx'] == (this.x.toFixed(1)) && this.old['oldy'] == (this.y.toFixed(1))){
this.quieto = true
} else{
	this.old['oldx'] = this.x.toFixed(1)
	this.old['oldy'] = this.y.toFixed(1)
	this.quieto = false
	
}
})
	
 
 //bandas
Crafty.e("ban2").attr({x: 50, y: 490, w: 900, h: 220,  matter : banmater})
Crafty.e("ban").attr({x: 0, y: 510, w: 1000, h: 140})
 
Crafty.e("ban2").attr({x: 50, y: -370, w: 900, h: 420, matter : banmater})
Crafty.e("ban").attr({x: 0, y: -110, w: 1000, h: 140 })

Crafty.e("ban2").attr({x: 950, y: 30, w: 420, h: 480,matter : banmater}) 
Crafty.e("ban").attr({x: 970, y: 0, w: 140, h: 540})
  
Crafty.e("ban2").attr({x: -370, y: 30, w: 420, h: 480, matter : banmater})
Crafty.e("ban").attr({x: -110, y: 0, w: 140, h: 540 })
  
  
 Events.on(Crafty.Matter.engine, 'collisionStart', function(event) {
    if(arranque == false) {return}
     var pairs = event.pairs;
    
     // console.log("colision between " + pairs[0].bodyA.id + " - " + pairs[0].bodyB.id);
	 if(pairs[0].bodyA.id ==1 && pairs[0].bodyB.id ==3) {
		 if(Crafty('bola3').touche == true ) {return}
		 pintar('img/Billiard_Balls_01_Yellow_64x64.png')
		 Crafty('bola3').touche = true
		 } else if(pairs[0].bodyA.id ==1 && pairs[0].bodyB.id ==2){
			if(Crafty('bola2').touche == true ) {return}
			pintar('img/Billiard_Balls_01_Red_64x64.png')
			 Crafty('bola2').touche = true
		 } else if(pairs[0].bodyA.id ==1 && pairs[0].bodyB.id > 3){
			 if(modo == 0) {return}
			 if(Crafty('bola3').touche == true && Crafty('bola2').touche == true) {return}
			 if(cuentabandas > 2) {return}
			 pintar('img/3bandas.png')
			 cuentabandas += 1}
});

Matter.Resolver._restingThresh = 0.1;
 
})


