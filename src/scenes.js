Crafty.defineScene("portada", function() {


Crafty.e("2D, DOM, fondo, Mouse")
 .attr({x: 0, y: 0, z: -100, w: 1000, h: 540})
.bind("MouseDown", function(event) { picar(event)})

Crafty.e("2D, DOM,  Color, puntero")
 .attr({x: 525.00, y: 20, z: 100, w: 1, h: 1})
 .attr({origen: {origenx: 525.00, origeny: 20} })
 .color("white").origin("center")	
 
 //bolas 
 Crafty.e("bol, bo,  bola1").attr({x: 70.111111111111111, y: 345.111111111111111, w: 35, h: 35,  matter : bolmater})
.attr({old: {oldx:this.x, oldy:this.y} })
.attr({origen: {origenx: 70.111111111111111, origeny: 345.111111111111111} })
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
 
 
 Crafty.e("bol,bo2,bola2").attr({x: 295.111111111111111, y: 250.111111111111111, w: 35, h: 35,  matter : bolmater})  
 .attr({origen: {origenx: 295.111111111111111, origeny: 250.111111111111111} })
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
 .attr({x: 555.111111111111111, y: 150.111111111111111, w: 35, h: 35,  matter : bolmater})
.attr({origen: {origenx: 555.111111111111111, origeny: 150.111111111111111} })
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
	 
	 if(pairs[0].bodyB.id < 4 && son.checked == true){
	var vol = (pairs[0].bodyA.speed / 60)
	// console.log("play volume " + vol);
	
	if(vol > 0.04){
	if(vol > 1){vol = 1}
	if(vol < 0.32 ){ Crafty.audio.play("golpe2",1,(vol * 2))
		}else { Crafty.audio.play("golpe",1,vol)}
		 
	}
		}
    
     // console.log("colision between " + pairs[0].bodyA.id + " - " + pairs[0].bodyB.id);
	 if(pairs[0].bodyA.id ==1 && pairs[0].bodyB.id ==3) {
		 if(Crafty('bola3').touche == true ) {return}
		 pintar('img/Billiard_Balls_01_Yellow_64x64.png', '15px')
		 Crafty('bola3').touche = true
		 } else if(pairs[0].bodyA.id ==1 && pairs[0].bodyB.id ==2){
			if(Crafty('bola2').touche == true ) {return}
			pintar('img/Billiard_Balls_01_Red_64x64.png', '15px')
			 Crafty('bola2').touche = true
		 } else if(pairs[0].bodyA.id ==1 && pairs[0].bodyB.id > 3){
			 if(modo == 0) {return}
			 if(Crafty('bola3').touche == true && Crafty('bola2').touche == true) {return}
			 if(cuentabandas > 2) {return}
			 pintar('img/3bandas.png', '15px')
			 cuentabandas += 1}
});

Matter.Resolver._restingThresh = 0.1;
 
})


