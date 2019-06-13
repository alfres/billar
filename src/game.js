 var cuentabandas = 0, modo = 0 ,   arranque = false, serie = 0
 var old1, old2,old3, oldforce, oldpuntero


 
  function reseting2(){
	Crafty("bol").each(function(i) { this.old = {oldx: this._body.position.x, oldy: this._body.position.y}})
	reseting()
 }

 

Game = {
	
 load:function(){
 
iniciarcrafty()

  Crafty.sprite("img/Billiard_Balls_01_White_64x64.png", {bo:[0,0,64,64]});
 Crafty.sprite("img/Billiard_Balls_01_Red_64x64.png", {bo2:[0,0,64,64]});
 Crafty.sprite("img/Billiard_Balls_01_Yellow_64x64.png", {bo3:[0,0,64,64]});
 

Crafty.scene("portada")
prev()
}
}



function por(){if(mode.value == 2){return window.location = "pool/index.html"}
	porcomun()
	gob.style.visibility =  'hidden'
	serie = 0
	ser.textContent = 'serie ' + serie;
	}

function setold(){
	old1 = {x: Crafty('bola1')._body.position.x, y: Crafty('bola1')._body.position.y}; 
	old2 = {x: Crafty('bola2')._body.position.x, y: Crafty('bola2')._body.position.y}; 
	old3 = {x: Crafty('bola3')._body.position.x, y: Crafty('bola3')._body.position.y}; 
	oldforce = {force: b.value, efectx: c.value};
	oldpuntero = {punx: Crafty("puntero").x, puny: Crafty("puntero").y};
}

function goback(){
	Matter.Body.setPosition(Crafty('bola1')._body, {x : old1.x, y: old1.y})
	Matter.Body.setPosition(Crafty('bola2')._body, {x : old2.x, y: old2.y})
	Matter.Body.setPosition(Crafty('bola3')._body, {x : old3.x, y: old3.y})
	b.value = oldforce.force
	c.value = oldforce.efectx
	Crafty("puntero").x = oldpuntero.punx ;  Crafty("puntero").y = oldpuntero.puny
	rayo()
	power()
	gob.style.visibility = 'hidden';
	st.style.backgroundColor = '#993300';
	gatillo.style.visibility = 'visible';
	serie = 0
	ser.textContent = 'serie ' + serie;
}


function duermen(){
	var contador = true
	Crafty("bol").each(function(i) { if(this.quieto == false){ contador = false; }})
		if(contador == true){
		pararbolas()
			
		timer5 = setTimeout(function(){
		clearTimeout(timer5);
		hideballs()
		if(chekcar()== true){gatillo.style.visibility = 'visible'; rayo();reseting2()
			}else{gob.style.visibility = 'visible';st.style.backgroundColor = '#ff0066';}
		
		}, 300);
		}
		
		return contador
}

function chekcar(){if(modo == 0){
	if(Crafty("bola3").touche == true && Crafty("bola2").touche == true){
		if(son.checked == true)   Crafty.audio.play("mal",1,0.3);
		serie += 1; ser.textContent = 'serie ' + serie; return true}
	
} else{
if(Crafty("bola3").touche == true && Crafty("bola2").touche == true && cuentabandas > 2){
	if(son.checked == true)   Crafty.audio.play("mal",1,0.3);
	serie += 1;ser.textContent = 'serie ' + serie;return true}
}
return false
}