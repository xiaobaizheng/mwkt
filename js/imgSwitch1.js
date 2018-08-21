let objImg1= [{
	imgTxt: "左-图片一",
	imgName: "945.jpg" 
}, {
	imgTxt: "左-图片二",
	imgName: "946.jpg" 
}, {
	imgTxt: "左-图片三",
	imgName: "1092.jpg" 
}, {
	imgTxt: "左-图片四",
	imgName: "1097.jpg" 
}, {
	imgTxt: "左-图片五",
	imgName: "7CC66D18847E.jpg" 
}, {
	imgTxt: "左-图片六",
	imgName: "7CC6CDFDBDBC.jpg" 
}, {
	imgTxt: "左-图片七",
	imgName: "7CC65D2DEF47.jpg" 
}, {
	imgTxt: "左-图片八",
	imgName: "7CC6FDCE8B22.jpg" 
}],
objImg2 = [{
	imgTxt: "右-图片一",
	imgName: "70B79564551B.jpg" 
}, {
	imgTxt: "右-图片二",
	imgName: "7CC66AC55CDF.jpg" 
}, {
	imgTxt: "右-图片三",
	imgName: "7CC6AA81CE6C.jpg" 
}, {
	imgTxt: "右-图片四",
	imgName: "70B7341232E7.jpg" 
}, {
	imgTxt: "右-图片五",
	imgName: "7CC68AEF1391.jpg" 
}, {
	imgTxt: "右-图片六",
	imgName: "70BB3B517594.jpg" 
}, {
	imgTxt: "右-图片七",
	imgName: "7CC6A295C275.jpg" 
}],
oIbox = document.getElementById("lbox"),
oRbox = document.getElementById("rbox"),
oBtnL = document.getElementById("up"),
oBtnR = document.getElementById("down"),
aImgL = oIbox.getElementsByTagName("img")[0],
aImgR = oRbox.getElementsByTagName("img")[0],
aSpanL = oIbox.getElementsByTagName("span")[0],
aSpanR = oRbox.getElementsByTagName("span")[0],
aPl = oIbox.getElementsByTagName("p")[0],
aPr = oRbox.getElementsByTagName("p")[0],
countArr1 = 0,
countArr2 = 0,
len = 0;
//初始化页面
function init () {
	aImgL.src = "img/imgSwitch/" + objImg1[countArr1].imgName;
	aImgR.src = "img/imgSwitch/" + objImg2[countArr2].imgName;
	aPl.innerHTML = objImg1[countArr1].imgTxt;
	aPr.innerHTML = objImg2[countArr2].imgTxt;
	aSpanL.innerHTML =  countArr1 + 1 + "/" + objImg1.length;
	aSpanR.innerHTML =  countArr2 + 1 + "/" + objImg2.length;
	aImgL.index = countArr1;
	aImgR.index = countArr1;
}
init();
//组切换
oBtnL.onclick = function () {
	countArr1 --;
	countArr2 --;
	if (countArr1 === -1) {
		countArr1 = objImg1.length - 1;
	}
	if (countArr2 === -1) {
		countArr2 = objImg1.length - 1;
	}
	init();
}
oBtnR.onclick = function () {
	countArr1 ++;
	countArr2 ++;
	if (countArr1 === objImg1.length) {
		countArr1 = 0
	}
	if (countArr2 === objImg2.length) {
		countArr2 = 0
	}
	init();
}
aImgL.onclick = function () {
	countArr1 ++;
	if (countArr1 === objImg1.length) {
		countArr1 = 0
	}
	init();
}
aImgR.onclick = function () {
	countArr2 ++;
	if (countArr2 === objImg2.length) {
		countArr2 = 0
	}
	init();
}
//function switchsImg (count, objImg) {
//	count ++;
//	if (count === objImg.length) {
//		count = 0
//	}
//	init();
//}

