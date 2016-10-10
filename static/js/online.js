document.forms[0].onsubmit = function(e){
	//阻止表单的默认事件
	e.preventDefault();
	//从表单取出表单内的数据，打包进FormDate对象里，形成一个formdata格式的请求数据
	var data = new FormData(this);
	//构建请求对象
	var xhr = new XMLHttpRequest();
	
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
//			console.log(xhr.status)
			if(xhr.status == 200){
				var obj = JSON.parse(xhr.responseText)
				
				new Alert(obj.result,function(){
					location.href = 'online.html'
				})
				console.log('ss')
			}
			else{
				new Alert('服务器繁忙，请稍后重试',function(){
					location.href = 'online.html'
				})
			
			}
		}
	}
	xhr.open('POST','/online');
	xhr.send(data);
	
//	console.dir(data)
}

