const express = require('express');
const expressStatic = require('express-static');

var server = express();

var users = {
	'liuxiuhua': '123456',
	'blue': '456123',
	'ciaoming': '456789'
};

server.get('/login', function(req, res) {
	var user = req.query['user']; //express新方法，req.query返回{'user': 'XXX', 'pass': 'XXX'}
	var pass = req.query['pass'];

	if(users[user] == null) {
		res.send({ok: false, msg: '此用户不存在'});
	} else {
		if(users[user] != pass) {
			res.send({ok: false, msg: '密码错误'});
		} else{
			res.send({ok: true, msg: '登录成功'});
		}
	}
});

server.listen(8081);