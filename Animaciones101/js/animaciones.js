(function () {
	var $cajaRoja=$(".cajaRoja");
		
	function mover(dir) {
		$cajaRoja.clearQueue();
		switch(dir){
			case "arr":
				$cajaRoja.animate({
					top:"-=50px"
				});
			 break;
			case "aba": 
			$cajaRoja.animate({
					top:"+=50px"
				});
			break;
			case "izq": 
				$cajaRoja.animate({
					left:"+=50px"
				});
			break;
			case "der":
				$cajaRoja.animate({
					left:"-=50px"
				});
			 break;
		}
	}
	$("button").on("click",function(){
		var dir=$(this).data("dir");
		console.log(dir);
		mover(dir);
	});

	$(document).on("keypress",function(e){
		var dir=e.keyCode;
		switch(dir){
			case 119:
				$cajaRoja.animate({
					top:"-=50px"
				},200);
			 break;
			case 115: 
			$cajaRoja.animate({
					top:"+=50px"
				},200);
			break;
			case 100: 
				$cajaRoja.animate({
					left:"+=50px"
				},200);
			break;
			case 97:
				$cajaRoja.animate({
					left:"-=50px"
				},200);
			 break;
		}

	});
})();