var exp = require("express");
var bodyParser = require('body-parser');
var multer = require('multer');
var fs = require('fs');
var multipart = multer();
var app = exp();
app.use(exp.static('static'));

app.use(bodyParser.urlencoded({extended:true}))
app.post('/online',multipart.array(),(request,response)=>{
//	console.log(request.body);
//	console.log(request.body.content);
	//防止<>被识别
//	content = content.replace(RegExp("<","g"),'&lt;');
//	content = content.replace(RegExp(">","g"),'&lt;');
	//获取请求体的用户名
	var userName = request.body.name
	var email = request.body.email
	var phone = request.body.phone
	var content = request.body.content
	var msg = {
		userName,
		email,
		phone,
		content,
		time:new Date(),
		userIP:request.ip
	}
	console.log(msg)
	fs.exists('saveData',(isExists)=>{
		if(!isExists){
			console.log('该文件夹不存在')
			fs.mkdirSync('saveData')
		}
		fs.appendFile('saveData/msg.txt',JSON.stringify(msg)+',',(err)=>{
			if(err){
				console.log('保存文件出错了！')
			}
			
		})
	})
	//设置响应信息，把信息格式设置为json格式
	response.status(200).json({result:'留言成功，感谢您的参与'})
	
})
app.get('/messages',(request,response)=>{
	fs.exists('saveData/msg.txt',(isExists)=>{
		if(isExists){
			fs.readFile('saveData/msg.txt',(err,data)=>{
//				console.log(data)
				if(!err){
					var result = '['+data
					result = result.substr(0,result.length-1)
					result = result+']'
					response.status(200).send(result)
				}
				else{
					response.status(200).send('[]')
				}
			})
		}
	})
})



//处理注册的请求
app.post('/register',multipart.array(),(request,response)=>{
	var name = request.body.name;
	var psw = request.body.psw;
	var email = request.body.email;
	var phone = request.body.phone;
	var massage = request.body.massage;
	var registerMsg = {
		name,
		psw,
		email,
		phone,
		massage
	}
	console.log(registerMsg)
})


app.listen(3000,()=>{
	console.log('Tiny server is running!')
})