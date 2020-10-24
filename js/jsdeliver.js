// jsdeliver CDN 加速图片加载
var name = "A1va";
var repository = "A1va.github.io";
if(document.domain != 'localhost'){
	if(document.getElementById("post")){
		for (var key in document.getElementById("article-container").getElementsByTagName('img')){
  			if (isNaN(key)){
    			break;
  			}
    		document.getElementById("article-container").getElementsByTagName('img')[key].src = document.getElementById("article-container").getElementsByTagName('img')[key].src.replace(document.domain,"cdn.jsdelivr.net/gh/" + name + "/" + repository)
		}
    }
}