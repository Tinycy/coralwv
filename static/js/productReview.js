$(function() {
	//颜色分类的选择
	function colorPointer(){
		$('.small-img ul li').each(function(index) {
			//颜色分类的点击事件
			$('.small-img ul li')[index].onclick = function(e) {
					var cont = index + 2;
					var urlImg = 'url(pimage/p' + cont + '.png)';
					$('.big-img').css('background-image', urlImg);
					$(this).addClass('small-imgClick').siblings().removeClass('small-imgClick');
				}
				//颜色分类的hover事件
			$('.small-img ul li').eq(index).hover(function() {
				//			console.log(index)
				if(index == 0) {
					layer.tips('粉色', '.lay-pink', {
						tips: [1, 'rgb(0,1,1)'] //还可配置颜色
					});
				}
				if(index == 1) {
					layer.tips('黄色', '.lay-yellow', {
						tips: [1, 'rgb(0,1,1)'] //还可配置颜色
					});
				}
				if(index == 2) {
					layer.tips('褐色', '.lay-brown', {
						tips: [1, 'rgb(0,1,1)'] //还可配置颜色
					});
				}
				if(index == 3) {
					layer.tips('玫红', '.lay-red', {
						tips: [1, 'rgb(0,1,1)'] //还可配置颜色
					});
				}

			}, function() {
				layer.tips('玫红', '.lay-none', {
					tips: [1, 'rgba(0,0,0,0)'] //还可配置颜色
				});
			})

		})
	}
	colorPointer()
		//适用尺寸的点击事件
	function sizePointer() {
		$('.size span').each(function(index) {
			$('.size span')[index].onclick = function() {
				//			alert(index)
				if(index != 0) {
					$(this).addClass('size-border').siblings().removeClass('size-border')
				}
				
			}
		})
	}
	sizePointer()

	//二维码的hover事件
	function ewmHover() {
		$('.proDetail h2 img').hover(function() {
			//		alert('aa')
			$('<div></div>').addClass('ewb').appendTo($('.proDetail h2'))

		}, function() {
			$('.ewb').remove()
		})
	}
	ewmHover()

	//购买数量
	function buyCount() {
		var contVal = $('.cont-Input').val()
		if(contVal == 1) {
			$('.cont-subtract').css('border', 'lightgray 1px solid')
		}
		$('.cont-add').click(function() {
			contVal = parseInt(contVal) + 1
			$('.cont-Input').val(contVal)
			$('.cont-subtract').css({
				'border': 'gray 1px solid',
				'cursor': 'pointer'
			})
		})
		$('.cont-subtract').click(function() {
			contVal = $('.cont-Input').val()
			if(contVal != 1) {
				contVal = parseInt(contVal) - 1
				$('.cont-Input').val(contVal)
			}
			if(contVal == 1) {
				contVal = parseInt(contVal)
				$('.cont-Input').val(contVal)
				$('.cont-subtract').css({
					'border': 'lightgray 1px solid',
					'cursor': 'default'
				})
			}
		})
	}
	buyCount()
	function isChoose(){
		$('.cart').click(function(){
		var sizeCount = $('.size span').hasClass('size-border')
		var colorCount = $('.small-img ul li').hasClass('small-imgClick')
		if(sizeCount == true & colorCount == true){
			$('#isChoose').css('display','none');
			location.href="login.html"
		}
		else if(colorCount == false){
			$('#isChoose').css('display','inline-block').html('请选择颜色分类')
		}
		else if(sizeCount == false){
			$('#isChoose').css('display','inline-block').html('请选择尺寸分类')
		}
	})
		$('.cart-shop').click(function(){
		var sizeCount = $('.size span').hasClass('size-border')
		var colorCount = $('.small-img ul li').hasClass('small-imgClick')
		if(sizeCount == true & colorCount == true){
			$('#isChoose').css('display','none')
		}
		else if(colorCount == false){
			$('#isChoose').css('display','inline-block').html('请选择颜色分类')
		}
		else if(sizeCount == false){
			$('#isChoose').css('display','inline-block').html('请选择尺寸分类')
		}
	})
	}
	isChoose()
	//下部选择颜色的hover事件
	function colorPointerH(){
		$('.small-hoverImg ul li').each(function(index) {
			//颜色分类的点击事件
				//颜色分类的hover事件
			$('.small-hoverImg ul li').eq(index).hover(function() {
//							console.log(index)
			var cont = index + 1;
					var urlImg = 'url(pimage/p' + cont + '.png)';
					$('.big-img').css('background-image', urlImg);
					$(this).addClass('small-imgClick').siblings().removeClass('small-imgClick');

			}, function() {
				
			})
		})
	}
	colorPointerH()
	
	//分享按钮的hover事件
	$('#share ').hover(function(){
		$('.bdsharebuttonbox').css('display','block')
	},function(){
		$('.bdsharebuttonbox').css('display','none')
	})
})