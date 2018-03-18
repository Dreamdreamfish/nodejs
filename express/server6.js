//cookie: 在浏览器保存一些数据，每次请求都会带过来，不安全，大小有限4k
//session: 在服务端保存数据，更安全，更大（基于cookie实现，例如在cookie中保存session的id）

//npm install express express-static cookie-parser cookie-session

const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

var server = express();

server.use(cookieParser('dmcnkfsghpdosd'));
server.use(cookieSession());

server.use('/aaa/a.html', function(req, res) {
	res.secrite('dmcnkfsghpdosd');
	res.
	res.send('ok');
	res.cookie('user', 'blue', {path: '/aaa', maxAge: 30*24*3600*1000, signed:true});
});

server.listen(8080);