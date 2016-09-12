var fs = require("fs");
var source = fs.readFileSync('../buffer/logo.png')
fs.writeFileSync("logo_stream.png", source)