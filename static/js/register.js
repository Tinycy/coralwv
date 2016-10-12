$(function(){
	document.forms[0].onsubmit = function(e){
		e.preventDefault();
		var psw = $('#psw').val(),
		pswAgain = $('#pswAgain').val()
		if(psw != pswAgain){
			alert('两次密码不一致！')
			return
		}
		var data = new FormData(e.target)
//		console.log(data)
//		console.log(this)
		var xhr = new XMLHttpRequest()
		xhr.onreadystatechange = function(){
//			console.log(xhr.readyState)
			if(xhr.readyState == 4 ){
//				console.log(xhr.readyState)
				var jsonObj = JSON.parse(xhr.responseText)
				if(jsonObj.success == 1){
					alert('恭喜你，注册成功')
				}
			}
		}
		xhr.open('POST','/register')
		xhr.send(data)
	}
})
	

