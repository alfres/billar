Crafty.c('can', {
	init: function( ) {
		

		this.requires("2D, Canvas, Color, cv")
		this.attr({x: 0, y: 0, w: 1000, h: 540});
		this.bind("Draw", function(Data) { 
		var ctx = Data.ctx
		ctx.lineWidth = 0.5;
		/*ctx.beginPath();
ctx.arc(Crafty('bola1')._body.position.x, Crafty('bola1')._body.position.y, 300, 0, Math.PI*2); 
ctx.closePath();
ctx.stroke();
*/
ctx.beginPath();
ctx.moveTo(Crafty('bola1')._body.position.x , Crafty('bola1')._body.position.y);
ctx.lineTo(Crafty('puntero').x , Crafty('puntero').y );
ctx.stroke(); 
        
		
		});
		
		this.bind("NoCanvas", function() { alert("NoCanvas"); });
		//Crafty.DrawManager.addCanvas(this)
	  }
	 
})

Crafty.c('bol', {
	init: function( ) {

		this.requires("2D, DOM,  Matter");
this.quieto = true;
this.origin("center")
this.touche = false;
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
		this.color("#004d00")
	    this.bind("Click", function(event) {
		Crafty("puntero").attr({x: event.clientX -6, y: event.clientY -6, z: 100, w: 1, h: 1})
		Crafty('can').destroy()	
        Crafty.e('can')
		//alert("clientX: " + event.clientX + " - clientY: " + event.clientY)
		})
}
})



