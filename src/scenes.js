
Crafty.defineScene("portada", function() {
	document.getElementById('starting').style.display = 'none'
	document.getElementById('botones').style.display = 'inline-block'
	gatillo.style.visibility =  'visible'
	gob.style.visibility =  'hidden'
	st.style.visibility =  'hidden'
power()
Crafty.e("2D, DOM,  Color, puntero")
 .attr({x: 503.00, y: 20, z: 100, w: 1, h: 1})
 .color("white").origin("center")	
 
 //bolas 
 Crafty.e("bol, bo,  bola1").attr({x: 1485.00, y: 1345.00, w: 35, h: 35,
  matter : {
			slop: slo,
			restitution : restit,
			friction: frict,
			frictionAir: frictAir,
			frictionStatic: frictStatic,
			shape : 'circle',
		density: densi,
			collisionFilter: {group: 1}
		}
		
	  
})
 .attach(Crafty.e("cen, centro").attr({x: 1503.00, y: 1363.00, w: 1, h: 1}))
 .attach(Crafty.e("cen,efectpoint").attr({x: 1503.00, y: 1363.00, w: 1, h: 1})
 .attach(Crafty.e("cen").attr({x: 1502.00, y: 1362.00, w: 3, h: 3})))
.attr({old: {oldx:this.x, oldy:this.y} })
.bind("EnterFrame", function() { if(arranque == false) return
if(this.old['oldx'] == (this.x.toFixed(1)) && this.old['oldy'] == (this.y.toFixed(1))){
this.quieto = true
} else{
	this.old['oldx'] = this.x.toFixed(1)
	this.old['oldy'] = this.y.toFixed(1)
	this.quieto = false
	
}
//lb.textContent = duermen()
if(duermen()) { arranque = false}
}).visible = false;
 
 
 
 
 
 
 
 Crafty.e("bol,bo2,bola2").attr({x: 295, y: 250, w: 36, h: 36,
    matter : {
		slop: slo,
			
			restitution : restit,
			friction: frict,
			frictionAir: frictAir,
			frictionStatic: frictStatic,
			shape : 'circle',
		density: densi,
			collisionFilter: {group: 1}
		}
  })
 
 .attr({old: {oldx:this.x, oldy:this.y} })
.bind("EnterFrame", function() { 
if(this.old['oldx'] == (this.x.toFixed(2)) && this.old['oldy'] == (this.y.toFixed(2))){
this.quieto = true
} else{
	this.old['oldx'] = this.x.toFixed(2)
	this.old['oldy'] = this.y.toFixed(2)
	this.quieto = false
	
}
//lb.textContent = this.quieto


}).visible = false;
 
   Crafty.e("bol,bo3,bola3")
 .attr({x: 555, y: 150, w: 36, h: 36,
   matter : {
	   slop: slo,
			
			restitution : restit,
			friction: frict,
			frictionAir: frictAir,
			frictionStatic: frictStatic,
			shape : 'circle',
		density: densi,
			collisionFilter: {group: 1}
		}
 })

.attr({old: {oldx:this.x, oldy:this.y} })
.bind("EnterFrame", function() { 
if(this.old['oldx'] == (this.x.toFixed(2)) && this.old['oldy'] == (this.y.toFixed(2))){
this.quieto = true
} else{
	this.old['oldx'] = this.x.toFixed(2)
	this.old['oldy'] = this.y.toFixed(2)
	this.quieto = false
	
}
//lb.textContent = this.quieto

}).visible = false;
	
 
 
 


 //bandas
 Crafty.e("ban")
 .attr({x: 0, y: 500, w: 1000, h: 140,
  matter : {
	  
	  isSleeping: true,
	  isSensor: true,
			restitution : restit2,
			friction: frict2,
			frictionAir: frictAir2,
			frictionStatic: frictStatic2,
			density: densi2,
			collisionFilter: {group: 0, category: 1}
		}
 })
 
 
 
  Crafty.e("marca").attr({x: 153, y: 518, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 268, y: 518, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 383, y: 518, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 498, y: 518, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 613, y: 518, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 728, y: 518, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 843, y: 518, z:100, w: 5, h: 5}).rotation = 45
  

  Crafty.e("marca").attr({x: 153, y: 19, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 268, y: 19, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 383, y: 19, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 498, y: 19, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 613, y: 19, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 728, y: 19, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 843, y: 19, z:100, w: 5, h: 5}).rotation = 45

  Crafty.e("marca").attr({x: 978, y: 153, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 978, y: 268, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 978, y: 383, z:100, w: 5, h: 5}).rotation = 45
  
  Crafty.e("marca").attr({x: 18, y: 153, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 18, y: 268, z:100, w: 5, h: 5}).rotation = 45
  Crafty.e("marca").attr({x: 18, y: 383, z:100, w: 5, h: 5}).rotation = 45

  Crafty.e("ban")
 .attr({x: 0, y: -100, w: 1000, h: 140,
  matter : {
	  
	  isSleeping: true,
	  isSensor: true,
			restitution : restit2,
			friction: frict2,
			frictionAir: frictAir2,
			frictionStatic: frictStatic2,
			density: densi2,
			collisionFilter: {group: 0, category: 1}
		}
 })

 
  Crafty.e("ban")
 .attr({x: 960, y: 0, w: 140, h: 540,
  matter : {
	  
	  isSleeping: true,
	  isSensor: true,
			restitution : restit2,
			friction: frict2,
			frictionAir: frictAir2,
			frictionStatic: frictStatic2,
			density: densi2,
			collisionFilter: {group: 0, category: 1}
		}
 })
 
  
 Crafty.e("ban")
 .attr({x: -100, y: 0, w: 140, h: 540,
  matter : {
	  
	  isSleeping: true,
	  isSensor: true,
			restitution : restit2,
			friction: frict2,
			frictionAir: frictAir2,
			frictionStatic: frictStatic2,
			density: densi2,
			collisionFilter: {group: 0, category: 1}
		}
 })

 
 
 
 Events.on(Crafty.Matter.engine, 'collisionStart', function(event) {
    if(arranque == false) {return}
     var pairs = event.pairs;
    
     //console.log("colision between " + pairs[0].bodyA.id + " - " + pairs[0].bodyB.id);
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


