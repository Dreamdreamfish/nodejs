const express = require('express');
const expressStatic = require('express-static');
const bodyParser = require('body-parser'); //只能解析post数据，不能解析post文件
const multer = require('multer'); //解析post文件上传
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const ejs = require('ejs');
const jade = require('jade');

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
server.use(bodyParser.urlencodede({extended: false}));
server.use(multerObj.any());

//用户请求
server.use('/', function(req, res, next) {
	//req.query(get数据), req.body(post数据), req.cookies(cookie数据), req.session(session数据), req.files(post文件数据)

});

//4.expressStatic数据
server.use(expressStatic('./www'));

server.listen(8080);