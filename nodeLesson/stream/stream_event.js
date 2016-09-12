var fs = require("fs");
var readStream = fs.createReadStream("test.png");
var n = 0;
readStream
	.on("data", function(chunk){
		n++;
		readStream.pause();
		//console.log("pause," + n + "---" + chunk.toString("utf8"))
		setTimeout(function(){
			console.log("pause ends")
			readStream.resume();
		}, 30)
	})
	.on("readable", function(){
		console.log("readable")
	})
	.on("end", function(){
		console.log("data ends ---- " + n);
	})
	.on("close", function(){
		console.log("data close")
	})
	.on("error", function(e){
		console.log(e)
	})