function marquee(){
	var imgArr = ['images/33.jpg','images/34.jpg','images/50.jpg','images/33.jpg','images/34.jpg','images/50.jpg']
			var index=3,leftDis = 0
				
				function myMar(){
					leftDis -=1
				$('.lunbo').css('left',leftDis + 'px')

				if(leftDis<=-415){
					leftDis=0
					$('.lunbo>img').eq(0).remove()
					$('.lunbo').css('left','0px').append($('<img>').attr('src',imgArr[index++]))

					index = index >= imgArr.length ? 0 : index
				    }
				}
				
			var timer = setInterval(myMar,10);
			$('.lunbo')[0].onmouseover = function(){
				clearInterval(timer)
//				alert(';;')
			}
			$('.lunbo')[0].onmouseout = function(){
				timer = setInterval(myMar,10)
			}
}
marquee();
