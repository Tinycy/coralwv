var exp = require("express");
var app = exp();
app.use(exp.static('static'));
app.listen(3000,()=>{
	console.log('Tiny server is running!')
})
