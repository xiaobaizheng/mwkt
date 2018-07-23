let oBtnSet = document.getElementById("clickset"),
	oLayer = document.getElementById("pl-layer"),
	oBtnSure = document.getElementById("sure"),
	oBtnClear = document.getElementById("clear"),
	oDiv = document.getElementsByClassName("p1-sdiv")[0],
	oBtnEach = document.getElementsByClassName("pl-layer-box")[0].getElementsByTagName("dd"),
	count = 0,
	finalStyle = oDiv.currentStyle ? oDiv.currentStyle : document.defaultView.getComputedStyle(oDiv, null),/*利用判断是否支持currentStyle（是否为ie）*/
	deStyle = {
		bgColor: finalStyle.backgroundColor,
		width: finalStyle.width.replace("px",""),
		height: finalStyle.height.replace("px","")
	};
	console.log(oDiv.css)
//点击相关按钮，div对应改变
function changeDiv(obj) {
	oDiv.style.backgroundColor = obj.bgColor ? obj.bgColor : oDiv.style.backgroundColor;
	oDiv.style.width = (obj.width ? obj.width : oDiv.style.width) + "px";
	oDiv.style.height = (obj.height ? obj.height : oDiv.style.height) + "px";
}
//遍历节点
function eachNode(attr) {
	for (let i = 0; i < attr.length; i++) {
		let objs = {};
		attr[i].onclick = function () {
			if (i === 0) {
				objs.bgColor ="red";
			} else if (i === 1) {
				objs.bgColor ="yellow";
			} else if (i === 2){
				objs.bgColor ="dodgerblue";
			} else if (i === 3){
				objs.width ="200";
			} else if (i === 4){
				objs.width ="300";
			} else if (i === 5){
				objs.width ="400";
			} else if (i === 6){
				objs.height ="200";
			} else if (i === 7){
				objs.height ="300";
			} else if (i === 8){
				objs.height ="400";
			}
			changeDiv(objs);
		}
	}
}
//调用设置
eachNode(oBtnEach)
//点击设置弹出弹出层
oBtnSet.onclick = function () {
	oLayer.style.display = "block";
}
//点击确定关闭弹出层
oBtnSure.onclick = function () {
	oLayer.style.display = "none";
}
//点击恢复
oBtnClear.onclick = function () {
	changeDiv(deStyle);
}
