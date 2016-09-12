var eventEmitter = require("events").EventEmitter;
var life = new eventEmitter();

life.setMaxListeners(11);
life.on("求安慰", function(who){
	console.log("给 " + who + "倒水")
});
life.on("求安慰", function(who){
	console.log("给 " + who + "做饭")
})
life.on("求安慰", function(who){
	console.log("给 " + who + "洗衣服")
})
life.on("求安慰", function(who){
	console.log("给 " + who + "4")
})
life.on("求安慰", function(who){
	console.log("给 " + who + "5")
})
life.on("求安慰", function(who){
	console.log("给 " + who + "6")
})
life.on("求安慰", function(who){
	console.log("给 " + who + "7")
})
life.on("求安慰", function(who){
	console.log("给 " + who + "8")
})
life.on("求安慰", function(who){
	console.log("给 " + who + "9")
})
life.on("求安慰", fn10)
function fn10(who){
	console.log("给 " + who + "10")
}
life.removeListener("求安慰", fn10)
life.emit("求安慰","hanzhi")
//var niai = life.emit("求niaan","meizi")
//console.log(niai);
life.removeAllListeners("求安慰");
console.log(life.listeners("求安慰").length)