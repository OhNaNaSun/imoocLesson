var http = require("http");
var querystring = require("querystring");
var formdata = querystring.stringify({
	"content": "老师讲得很好（test）！！！！",
	"mid": "8837"
});
var options = {
	"hostname":"www.imooc.com",
	"port":80,
	"path": "/course/docomment",
	"method": 'POST',
	"headers":{
		"Accept": "application/json, text/javascript, */*; q=0.01",
		"Accept-Encoding": "gzip, deflate",
		"Accept-Language": "zh-CN,zh;q=0.8,en;q=0.6",
		"Connection": "keep-alive",
		"Content-Length": "80",
		"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
		"Cookie": "imooc_uuid=92d0df8e-ce6f-4dbe-b16f-261d9138a207; imooc_isnew_ct=1472911592; loginstate=1; apsid=Q0MmUzOTk2YTdmMzBhOGUwNDIyMzRlOThhOWY5ZDcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTIwNjA4MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2MjY1NDEyMDFAcXEuY29tAAAAAAAAAAAAAAAAAAAAADI1ZmM4MTg1OGMyZTg5YTViNjIxNmNlYWMyMGFlNDZmvSfNV70nzVc%3DZm; last_login_username=626541201%40qq.com; PHPSESSID=2us7p9snntksv3cmdb26a13c21; imooc_isnew=2; cvde=57d0d0c529acb-93; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1472921661,1473127614,1473127617,1473302726; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1473482629; IMCDNS=0",
		"Host": "www.imooc.com",
		"Origin": "http://www.imooc.com",
		"Referer": "http://www.imooc.com/video/8837",
		"User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36",
		"X-Requested-With": "XMLHttpRequest"
	}

}
console.log(111)

var req = http.request(options, function (res) {
	console.log("Status: " + res.statusCode);
	console.log("Headers: " + JSON.stringify(res.headers));
	res.on("data", function(chunk){
		console.log(Buffer.isBuffer(chunk));
		console.log(chunk)
	})
	res.on("end", function(){
		console.log("评论完毕")
	})
})

req.on("error", function(e){
	console.log("Error: " + e.message)
})
req.write(formdata);
req.end();
