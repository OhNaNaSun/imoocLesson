/*
var pet = {
	words: "speak",
	speak: function(name){
		console.log(this.words + "  :" + name)
	}
}
pet.speak("miao");
var dog = {
	words: "say"
};
pet.speak.call(dog, "wang");//dog为上下文*/
function Pet(words){
	this.words = words;
	this.speak = function(){
		console.log(this.words)
	}
}
function Dog(words){
	Pet.call(this, words);
	//Pet.apply(this, arguments);
}

var dog1 = new Dog("wang");
dog1.speak();