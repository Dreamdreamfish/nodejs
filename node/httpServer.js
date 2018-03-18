//接口：/user?act=reg&user=aaa&pass=123456
//      {"ok":false, "msg":"原因"}
//      /user?act=login&user=bbb&pass=123456
//      {"ok":true, "msg":"原因"}

const http = require('http');
const fs = require('fs');
const querystring = require('querystring');
const urlLib = require('url');

var server = http.createServer(function (req, res) {
	
})
