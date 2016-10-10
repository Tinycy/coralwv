$(function() {
	$('.show li').each(function(index) {
		$('.show li')[index].onmouseenter = function() {
			
			$('.show-div1').eq(index).fadeIn();
		}
		$('.show li')[index].onmouseleave = function() {
			$('.show-div1').eq(index).fadeOut()
		}

	})
})