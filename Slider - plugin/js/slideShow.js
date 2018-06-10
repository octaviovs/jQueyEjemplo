(function(){
	$.slideShow=function (opciones) {

		opciones=$.extend({
			divDestina:".slideShow",
			intervalo:1500,
			ancho:600,
			slides:[],
			velocidad:1200

		},opciones);
		if (opciones.slides.length==0) {
			alert("");
			return;
		}

		opciones.velocidad=opciones.velocidad/1000;

	var actual = 0;
	var ancho  = opciones.ancho;

	
	var slides  = opciones.slides.length;
	//creacion del 	slideshow
	var contenido="";
	contenido +="<ul>";
	for (var i = opciones.slides.length - 1; i >= 0; i--) {	
		contenido+="<li><img src='"+opciones.slides[i]+"'></li>";
	}
	contenido+=	"</ul>";
	$(opciones.divDestina).append(contenido);

	var $slideshow = $(opciones.divDestina+" ul");

	//creacion de los botones
	contenido="";
	contenido+='<div class="slideShowButtons">';
	for (var i =0;i<opciones.slides.length ;i++) {
		
		contenido+='<div data-idx="'+i+'" class="slideButton"></div>';
	}
	contenido+='</div>';
	$(opciones.divDestina).append(contenido);


	var $puntos = $(".slideShowButtons");

	$puntos.find("div").eq(0).css({
		backgroundColor: "#58167d"
	});

	var intervalo = setInterval(function(){
		mover("sig");
	}, opciones.intervalo );


	function mover( dir, click ){


		( dir === "sig" ) ? actual-- : actual++;

		if( actual > 0 ){

			actual = ( slides - 1 ) * -1;

		}else if( actual <= ( slides * -1 ) ){
			actual = 0;
		}


		mover_por_punto( actual, click );

	}


	function mover_por_punto( actual, click ){

		if( click )
			clearInterval( intervalo );


		var margen = actual * ancho;
		var idx    = actual * -1;

		var $puntoActual = $puntos.find("div").eq( idx );
		var $demasPuntos = $puntos.find("div").not( $puntoActual );

		var tl = new TimelineMax();
		tl.to( $slideshow, opciones.velocidad, { marginLeft: margen, ease: Elastic.easeOut.config(1, 0.75) } )
		  .to( $puntoActual, 0.5, { backgroundColor: "#58167d" }, "-=1.2" )
		  .to( $demasPuntos, 0.5, { backgroundColor: "#a1a1a1" }, "-=1.2" );

		// $slideshow.animate({
		// 	marginLeft: margen
		// }, 400 );


	}



	$(".slideButton").on("click",function(){

		var idx =$(this).data("idx");
		idx = idx *-1;

		console.log( idx );

		mover_por_punto( idx, true );

	});



	$(".botSlide").on("click",function(){

		var dir = $(this).data("mov");
		mover( dir, true );

	});
	}
})();