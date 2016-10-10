var xhr = new XMLHttpRequest()

xhr.onreadystatechange = function(){
	if(xhr.readyState == 4){
//		console.log(xhr.responseText)
		
		var jsonObj = JSON.parse(xhr.responseText)
		
//		console.log(jsonObj[0])
		//获取到的是一个服务组织好的json数据，数据格式是[{留言1},{留言2}。。。]
		var str = ''
		//遍历所有的留言
		for(var i = 0;i<jsonObj.length;i++){
			var aMsg = jsonObj[i]
//			<section>
//			<p>张三</p>
//			<p>留言
//			<span>2016-7-26 14:01:00</span>
//			<span>127.0.0.1</span>
//			</p>
//			</section>
			//同编写脚本字符串，往页面注入脚本
			str = '<section> <div>' + aMsg.userName + '</div>' + '<p>' + aMsg.content + '</p>' + '<span>' + new Date(aMsg.time).myFormatDateTime() +'</span>' +'<span>' + aMsg.userIP.myFormatIP() + '</span>　</section>' + str	
			if(aMsg.userName !== null){
				document.querySelector('.massage').innerHTML=''
			}
			else{
				document.querySelector('.massage').innerHTML='暂无留言'
			}
		}
		
		
		var article = document.querySelector('article')
			article.innerHTML = str
	}
}

xhr.open('GET','/messages')

xhr.send()

Date.prototype.myFormatDateTime = function(){
	
	//获取当前的年份信息
	var Y = this.getFullYear()
	
	//获取当前的月份信息.月份从0 开始的，所以加1
	var M = this.getMonth() + 1
	
	//获取当前的日期
	var Day = this.getDate()
	
	//获取小时
	var H = this.getHours()
	
	//获取分钟
	var minutes = this.getMinutes()
	
	//获取秒
	var s = this.getSeconds()
	M = M > 9 ? M : '0'+ M
	Day = Day >9 ? Day : '0' + Day
	H = H > 9?H:'0'+H
	minutes = minutes > 9 ? minutes :'0' + minutes
	s=s>9?s:'0'+s
	return Y + '-' + M +'-' + Day + ' '+' '+ H + ':' + minutes + ':' + s
}

String.prototype.myFormatIP = function()
{
	//string.startsWith()判断字符串是否是以指定的字符开始的
	if(this.startsWith('::1')){
		return '127.0.0.1'
	}
	if(this.startsWith('::ffff:')){
		return this.substr(7)
	}
}

