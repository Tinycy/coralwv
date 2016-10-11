$(function() {
	$('.show li').each(function(index) {
		$('.show li')[index].onmouseenter = function() {
			
			$('.show-div1').eq(index).fadeIn();
			$(this).click(function(){
				
				var cont = index
				console.log(cont)
				
			})
		}
		$('.show li')[index].onmouseleave = function() {
			$('.show-div1').eq(index).fadeOut()
		}
//			console.log(index)
		
	})
	
})