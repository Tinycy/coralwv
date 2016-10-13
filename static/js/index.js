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
	
	window._bd_share_config = {
		common : {
			bdText : '自定义分享内容',	
			bdDesc : '自定义分享摘要',	
			bdUrl : '自定义分享url地址', 	
			bdPic : '自定义分享图片'
		},
		share : [{
			"bdSize" : 16
		}],
		slide : [{	   
			bdImg : 0,
			bdPos : "right",
			bdTop : 100
		}],
		image : [{
			viewType : 'list',
			viewPos : 'top',
			viewColor : 'black',
			viewSize : '16',
			viewList : ['qzone','tsina','huaban','tqq','renren']
		}],
		selectShare : [{
			"bdselectMiniList" : ['qzone','tqq','kaixin001','bdxc','tqf']
		}]
	}
	with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];
})