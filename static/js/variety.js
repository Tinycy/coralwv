$(function() {
	$('.container section ul li').each(function(index) {
//		console.log(this)
		$('.container section ul li')[index].onmouseenter = function(){
//			console.log(index)
			$('.container section ul li div').eq(index).css('opacity','0.7')
		}
		$('.container section ul li')[index].onmouseleave = function(){
			$('.container section ul li div').eq(index).css('opacity','0')
		}
			$('.container section ul li div').eq(index).click(function(){
//				console.log(index)
				
			})
	})
	
})