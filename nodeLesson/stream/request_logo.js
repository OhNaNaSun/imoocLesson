var http = require("http");
var fs = require("fs");
var request = require("request");
http
	.createServer(function(req, res){
		//fs.createReadStream('../buffer/logo.png').pipe(res)
		request("https://static.cnblogs.com/images/adminlogo.gif").pipe(res);
	})
	.listen(2015)