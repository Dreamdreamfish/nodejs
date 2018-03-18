const fs = require("fs"); //file system 文件操作

//读取文件 
fs.readFile('a.txt', function(err, data) {
  if(err) {
  	console.log("有问题")
  } else {
  	console.log(data.toString());
  }
});

//写入文件
fs.writeFile("b.txt", "789325780", function(err) {
  console.log(err);
})