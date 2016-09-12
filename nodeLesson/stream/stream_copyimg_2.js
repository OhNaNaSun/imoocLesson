var fs = require("fs");
/*
var readStream = fs.createReadStream("test.png");
var out = fs.createWriteStream("testwrite.png");
readStream
	.on("data", function(chunk){
		//防暴仓
		if(!out.write(chunk)){
			console.log("still cached");
			readStream.pause()
		}
	})
	.on("end", function(){
		out.end();
	})
out
	.on("drain", function(){
		console.log("data drains")
		readStream.resume()
	})*/
fs.createReadStream("test.png").pipe(fs.createWriteStream("testPipe.png"));