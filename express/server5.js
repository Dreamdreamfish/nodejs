//自己封装模板
const express = require('express');
const bodyParser2 = require('./libs/my-body-parser');

var server = express();

server.listen(8080);

server.use(bodyParser2.method1());

/*server.use('/', funciton(req, res) {
	console.log (req.body);
});*/

server.use('/', function(req, res) {
	//console.log(req.query);//get方法数据
	console.log(req.body); //post方法数据{'user': 'blue', 'pass': '123456'}
});