/*
 * 练习一：图片切换
 */
let objImg = [{
	imgName: "7CC65D2DEF47.jpg",
	imgTit: "糯米团"
},{
	imgName: "7CC6CDFDBDBC.jpg",
	imgTit: "妹纸木木哒"
},{
	imgName: "7CC6FDCE8B22.jpg",
	imgTit: "哈哈哈~~~"
},{
	imgName: "7CC66D18847E.jpg",
	imgTit: "开心到飞起！"
}],
oImg = document.getElementById("img"),
oImgCount = document.getElementById("imgCount"),
oImgTitle = document.getElementById("imgTitle"),
oNext = document.getElementById("next"),
oPrv = document.getElementById("prv"),
oBtn1 = document.getElementById("btn1"),
oBtn2 = document.getElementById("btn2"),
oTip = document.getElementById("tips"),
count = 0,
isLoop = true;
//初始化页面
function init() {
	oImgCount.innerHTML = count+1 + "/" +  objImg.length;
	oImgTitle.innerHTML = objImg[count].imgTit;
	oImg.src = "img/imgSwitch/" + objImg[count].imgName;
}
init();
//下切
oNext.onclick = function () {
	count++;
	if (count === objImg.length) {
		if (isLoop) {
			count = 0;
		} else {
			alert("已经是最后一张了，不能再往后了~");
			count = objImg.length - 1;
		}
	}
	init();
}
//上切
oPrv.onclick = function () {
	count--;
	if (count === -1) {
		if (isLoop) {
			count = objImg.length - 1;
		} else{
			alert("已经是第一张了，不能再往前了~");
			count = 0;
		}
	}
	init();
}
oBtn1.onclick = function () {
	isLoop = true;
	oTip.innerHTML = "图片可以从最后一张跳转到第一张循环切换";
}
oBtn2.onclick = function () {
	isLoop = false;
	oTip.innerHTML = "图片只能到最后一张或只能到第一张切换";
}
