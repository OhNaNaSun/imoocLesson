var http = require("http");
var cheerio = require("cheerio");
var url = "http://www.imooc.com/learn/348";
function filterchapter(html){
	var $ = cheerio.load(html);
	var chapters = $(".chapter");
	var chapterDatas = [];
	chapters.each(function(item){
		var chapter = $(this);
		var chapterTitle = chapter.find("strong").text().replace(/[\r\n\s]/g,"");
		var chapterData = {
			title: chapterTitle,
			videos: []
		}
		var videos = chapter.find(".video").children("li");
		videos.each(function(item){
			var video = $(this);
			var videoTitle = video.find(".J-media-item").text().replace(/[\r\n\s]/g,"");
			var videoId = video.find(".J-media-item").attr("href").split("video/")[1].replace(/[\r\n\s]/g,"");
			chapterData.videos.push({
				title: videoTitle,
				id: videoId
			})
		})
		chapterDatas.push(chapterData)
	})
	return chapterDatas;
}
function printData(data){
	data.forEach(function(item){
		var title = item.title;
		console.log("chapterTitle: " + title);
		item.videos.forEach(function(item){
			console.log("[" + item.id + "]:"  + item.title);
		})
	})
}
http.get(url, function(res){
	var html = "";
	res.on("data", function(data){
		html += data;
	})
	res.on("end", function(){
		var htmlData = filterchapter(html);
		printData(htmlData);
	})
}).on("error", function(){

	console.log("获取课程数据错误")
})