const http = require('http');
const querystring = require('querystring');

http.createServer(function(req, res) {

	var str = ""; //接收数据

    //POST数据很大=>分段发送
    //data——有一段数据到达（很多次）
    req.on('data', function(data) {
    	str += data;
    });
    //全部接受
    req.on('end', function(){
    	const POST = querystring.parse(str);
    });
}).listen(8080);