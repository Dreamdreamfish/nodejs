//consolidate 用于express适配各类模板引擎，提供统一接口
const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser'); //只能解析post数据，不能解析post文件
const multer = require('multer'); //解析post文件上传
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const ejs = require('ejs');
const jade = require('jade');
const consolidate = require('consolidate');

var server = express();

var multerObj = multer({dest: './www/upload/'}); // 文件直接存入到磁盘目录中

//1.解析cookie
server.use(cookieParser('vcnadsjlkhgfioer'));

//2.使用session
var arr = [];
for(var i = 0; i < 10000; i++) {
	arr.push('keys_' + Math.random())
}
server.use(cookieSession({name: 'zns_sess_id', keys: arr, maxAge: 20*3600*1000}));

//3.post数据
server.use(bodyParser.urlencoded({extended: false}));
server.use(multerObj.any());

//4.配置模板引擎
server.set('view engine', 'html') //输出什么东西   view engine 视图引擎形式：html
server.set('views', './views') //模板文件放在那里
server.engine('html', consolidate.ejs) //那种模板引擎

//用户请求
server.get('/index', function(req, res) {
	res.render('1.ejs', {name: 'liuxiuhua'});
	/*if(req.session.userid) { //判断是否登陆过
		res.render('1.ejs', {name: 'blue'});
	} else {                 //没有登录
		res.render('login.ejs', {});
	}*/
});

//4.expressStatic数据
server.use(expressStatic('./www'));

server.listen(8080);