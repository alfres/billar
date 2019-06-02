Crafty.c('can', {
	init: function( ) {
		

		this.requires("2D, Canvas, Color, cv")
		this.attr({x: 0, y: 0, w: 1000, h: 540});
		this.bind("Draw", function(Data) { 
		var ctx = Data.ctx
		ctx.lineWidth = 35;
		ctx.strokeStyle = "#669900";
		ctx.fillStyle = "#669900";
		ctx.beginPath();
ctx.arc(Crafty('puntero').x, Crafty('puntero').y, 18, 0, Math.PI*2); 
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(Crafty('bola16')._body.position.x , Crafty('bola16')._body.position.y);
ctx.lineTo(Crafty('puntero').x , Crafty('puntero').y );
ctx.stroke(); 

ctx.lineWidth = 0.5;
		ctx.strokeStyle = "black";
 ctx.beginPath();
ctx.moveTo(Crafty('bola16')._body.position.x , Crafty('bola16')._body.position.y);
ctx.lineTo(Crafty('puntero').x , Crafty('puntero').y );
ctx.stroke();  



		
		});
		
		this.bind("NoCanvas", function() { alert("NoCanvas"); });
		//Crafty.DrawManager.addCanvas(this)
	  }
	 
})

Crafty.c('bol', {
	init: function( ) {

		this.requires("2D, DOM,  Matter, Mouse, Draggable, MouseDrag");
this.quieto = true;
this.origin("center")
this.touche = false;
this.num = 16;
this.fuera = false;

}
})



Crafty.c('ban', {
	init: function( ) {

		this.requires("2D, DOM, Color,   Mouse")
		this.color("#661a00")
	   
}
})

Crafty.c('ban2', {
	init: function( ) {

		this.requires("2D, DOM, Color, Matter, Mouse")
		// this.color("white")
	    this.bind("MouseDown", function(event) {
		Crafty("puntero").attr({x: event.clientX -6, y: event.clientY -6, z: 100, w: 1, h: 1})
		Crafty('can').destroy()	
        Crafty.e('can')
		//alert("clientX: " + event.clientX + " - clientY: " + event.clientY)
		}).bind("MouseOver", function(event) {Crafty('can').visible = true})
		  .bind("MouseOut", function(event) {Crafty('can').visible = false})
}
})



