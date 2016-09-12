var klass = require("./klass")
exports.add = function(classes){
	classes.forEach(function(item, index){
		var teacher = item.teacher;
		var students = item.students;
		klass.add(teacher, students);
	})
}
var url = require("url");
var urlparse = url.parse("http://www.imooc.com/video/6710?from=222", true);
console.log(urlparse);
