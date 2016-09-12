var student = require("./student")
var teacher = require("./teacher")
function add(teacherName, students){
	teacher.add(teacherName);
	students.forEach(function(item, index){
		student.add(item)
	})
}
//传统的模块实例
exports.add = add;
//使对象成为特殊的对象类型
//module.exports = add;