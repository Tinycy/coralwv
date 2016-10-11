function Alert(msg,action){
	
	this.message = msg
	
	this.action = action
	
	this.show()
}

//显示弹出的蒙板
Alert.prototype.showMask = function(){
	
	var mask = document.createElement('div')
	
	document.body.appendChild(mask)
	
	mask.className = 'modal-mask'
	var height = document.body.offsetHeight
	document.body.style = "overflow:hidden"
	console.log(height)
	
}

//显示弹出框的主体部分
Alert.prototype.showBody = function(){
	
	//创建弹出框的主体
	var container = document.createElement('div')

	document.body.appendChild(container)
	
	container.className = 'modal-container'
	
	
	//弹出框的信息栏
	var msg = document.createElement('div')
	
	container.appendChild(msg)
	
	msg.className = 'modal-message'
	
	msg.innerHTML = this.message
	
	//弹出框的点击按钮
	var btn = document.createElement('div')
	
	container.appendChild(btn)
	
	btn.className = 'modal-button'
	
	btn.innerHTML = '确定'
	
	btn.onclick = this.buttonClick.bind(this)
	
	//btn.onclick = this.buttonClick 
	
}


Alert.prototype.buttonClick = function(){
	
	var mask = document.querySelector('.modal-mask')
	
	//删除标签元素
	mask.remove()
	
	
	var container =  document.querySelector('.modal-container')
	
	//删除标签元素
	//document.body.removeChild(container)
	
	container.remove()
	
	//执行回调方法
	this.action()
	
	
}


Alert.prototype.show = function(){
	
	this.showMask()
	this.showBody()
}







