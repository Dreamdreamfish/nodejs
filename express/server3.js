//body-parser
const express = require("express");
const bodyParser = require('body-parser');
var server = express();

server.listen(8080);

server.use(bodyParser.urlencoded({}));//解析body数据

server.use('/', function(req, res) {
	//console.log(req.query);//get方法数据
	console.log(req.body); //post方法数据{'user': 'blue', 'pass': '123456'}
});