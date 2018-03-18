//路由：把不同的目录，对应到不同的模块
//router下面可以继续分router,类似于文件夹
var express = require('express');

var server = express();

var router = express.Router();

server.use('/user', router);

router.get('/1.html', function(req, res) {
	res.send('dsgfdshgsf');
});

server.listen(8080);