$(function(){
	$('.demo-login b').click(function(){
	$(this).parent().remove()
})
$('.free-register').click(function(){
	location.href='register.html'
})

document.forms[0].onsubmit = function(e){
	e.preventDefault();
	var data = new FormData(this)
	var xhr = new XMLHttpRequest()
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			var jsonObj = JSON.parse(xhr.responseText)
			if(jsonObj.success == 1){
				
//					alert('success')
				
				location.href = '/'
				
			}
			else{
				alert(jsonObj.resultMsg)
			}
		}
	}
	xhr.open('POST','/login')
	xhr.send(data)
}
})

