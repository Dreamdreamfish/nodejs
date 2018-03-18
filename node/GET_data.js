const http = require('http');
const fs = require('fs');
const urlLib = require('url');

var server = http.createServer(function(req, res) {

    var obj = urlLib.parse(req.url,true);

    var url = obj.pathname;
    var GET = obj.query;


	/*var GET = {};
	if(req.url.indexOf("?") != -1) {
		
	    var arr = req.url.split('?');
	    var url = arr[0];
	    //arr[0]=>地址 '/aaa'
	    //arr[1]=>数据 "user=liuxiuhua&pass=123456"
	    var arr2 = arr[1].split('&');
	    for(var i = 0; i < arr2.length; i++) {
	    	var arr3 = arr2[i].split('=');
	    	GET[arr3[0]]=arr3[1];
	    }
	} else {
		var url = req.url;
	}*/
	console.log(url, GET);
	res.write('aaa');
	res.end();
});
server.listen(8080);