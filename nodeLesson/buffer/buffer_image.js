var fs = require("fs");
fs.readFile('logo.png', function (err, origin_buffer) {
	if (err) throw err;
	var base64str = origin_buffer.toString("base64");
	var str = origin_buffer.toString("ascii");
	//console.log(str);
	var new_buffer = new Buffer(str, "base64");
	//console.log(new_buffer.toString())
	fs.writeFile("logo_buffer.png", origin_buffer, function(err){
		console.log(err)
	})
	fs.writeFile("logo_buffer_base64.png", new_buffer, function(err){
		console.log(err)
	})
	//console.log(str);
	//console.log(Buffer.isBuffer(buffer))
});