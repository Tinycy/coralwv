	var express = require("express");
	var bodyParser = require('body-parser');
	var multer = require('multer');
	var fs = require('fs');
	var multipart = multer();
	var mongoose = require('mongoose');
	var template = require('art-template');
	var app = express();
	app.use(express.static('static'));
	app.use(bodyParser.urlencoded({extended:true}));
	template.config('cache',false);

//处理留言的请求
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
	fs.exists('saveData',(isExists)=>{
		if(!isExists){
			fs.mkdirSync('saveData')
		}
		else{
			var isUser = 0
			var data = fs.readFileSync('saveData/msg.txt','utf-8')
			var result = '['+data
			result = result.substr(0,result.length-1)
			result = result + ']'
			var jsonObj = JSON.parse(result)
			for(var i = 0;i<jsonObj.length;i++){
				var aUser = jsonObj[i]
				isUser = aUser.name == name ? true : false
				if(isUser){
					break
				}
			}
			if(isUser){
				response.status(200).json({success:0,resultMsg:'该用户已存在'})
				return
			}
		}
		fs.appendFile('saveData/reg.txt',JSON.stringify(registerMsg)+',',(err)=>{
			if(err){
				response.status(500).json({success:0,resultMsg:'服务器异常，注册失败'})
			}else{
				response.status(200).json({success:1,resultMsg:'注册成功'})
			}
		})
	})
})

//处理登录的请求
app.post('/login',multipart.array(),(request,response)=>{
	var name = request.body.name;
	var psw = request.body.psw;
	fs.exists('saveData/reg.txt',(isExists)=>{
		if(isExists){
			fs.readFile('saveData/reg.txt',(err,data)=>{
				//把数据转化成json数组
				var result = '['+data;
				result = result.substr(0,result.length-1);
				result = result+']';
				//把保存的数据转化为json对象
				var  jsonObj = JSON.parse(result);
				var isUser = 0 ;
				var getPsw = 0;
				//遍历所有的用户信息，找到一个和请求的用户名一样的信息，假如没有找到就带表没有注册，找到了就登录成功
				for(var i = 0;i<jsonObj.length;i++){
					var aUser = jsonObj[i];
					isUser = aUser.name == name ? true : false
					//找到该用户信息之后，取出该用户注册密码信息，用于后边判断密码是否正确。同时跳出循环，结束查找。
					if(isUser){
						getPsw = aUser.psw
						break
					}
				}
				if(!isUser){
					response.status(200).json({success:0,resultMsg:'用户名不存在'})
				}
				else{
					//判断密码是否正确
					if(getPsw == psw){
						response.status(200).json({success:1,resultMsg:'登录成功'})
					}
					else{
						response.status(200).json({success:0,resultMsg:'密码错误'})
					}
				}
			})
		}
		else{
			response.status(200).json({success:0,resultMsg:'该用户不存在'})
		}
	})
})

app.listen(3000,()=>{
	console.log('Tiny server is running!')
})