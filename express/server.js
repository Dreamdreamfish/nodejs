const express = require('express');
const expressStatic = require('express-static');

var server = express(); //创建服务

server.use(expressStatic('/www')); //用于读取文件



//处理请求
/*server.use('/a.html', function (req, res) {
	res.send('abc'); //类似于res.write(),但是write只能传入string和buffer(二进制)。
	res.end();
});
server.use('/b.html', function (req, res) {
	res.send('123');
	res.end();
});*/

server.listen(8080); //监听