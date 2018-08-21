/*
 * 搜狗视频记录片列表展示
 * 2018-8-1
 */
let jList = [{
	dsp: "111我是一段描述我是一段描述我是一段描述",
	img: "945.jpg",
	dspInfo: "111我是，管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了"
}, {
	dsp: "222我是一段描述我是一段描述我是一段描述",
	img: "946.jpg",
	dspInfo: "222我是，管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了"
}, {
	dsp: "333我是一段描述我是一段描述我是一段描述",
	img: "1092.jpg",
	dspInfo: "333我是，管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了"
}, {
	dsp: "444我是一段描述我是一段描述我是一段描述",
	img: "1097.jpg",
	dspInfo: "4444我是，管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了"
}, {
	dsp: "55我是一段描述我是一段描述我是一段描述",
	img: "7CC66D18847E.jpg",
	dspInfo: "5我是，管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了"
}, {
	dsp: "66我是一段描述我是一段描述我是一段描述",
	img: "7CC6CDFDBDBC.jpg",
	dspInfo: "666我是，管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了"
}, {
	dsp: "7我是一段描述我是一段描述我是一段描述",
	img: "7CC65D2DEF47.jpg",
	dspInfo: "77我是，管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了"
}, {
	dsp: "288我是一段描述我是一段描述我是一段描述",
	img: "7CC6FDCE8B22.jpg",
	dspInfo: "88我是，管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了"
}, {
	dsp: "999我是一段描述我是一段描述我是一段描述",
	img: "70B79564551B.jpg",
	dspInfo: "9我是，管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了"
}, {
	dsp: "10897我是一段描述我是一段描述我是一段描述",
	img: "7CC66AC55CDF.jpg",
	dspInfo: "1=0我是，管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了管他是什么呢，不管了"
}],
	oCon = document.getElementById("content"),
	aList = "",
	fra = "",
	html = "";
//初始化列表
for (var i = 0; i < jList.length; i++) {
	html += `<div class="list"><span class="inline-block">${i+1}</span>
					<p class="ml25 text-index dsp1">${jList[i].dsp}</p>
					<div class="content ml25 clearfix hidden">
						<img src="img/imgSwitch/${jList[i].img}"/>
						<p class="dsp dsp2">${jList[i].dspInfo}</p>
						<div class="text-r mt10">
							<input class="btn fr" type="button" name="" id="" value="播放" />
						</div>
					</div></div>`;
}
oCon.innerHTML = html;
aList = document.getElementsByClassName("list");
for (var i = 0; i < aList.length; i++) {
	aList[i].index = i + 1;
	init(aList[i]);
}
//初始化数据
function init(oList){
	let oNum = oList.getElementsByTagName("span")[0],
		aDsp = oList.getElementsByTagName("p"),
		oImg = oList.getElementsByTagName("img")[0],
		oHid = oList.getElementsByClassName("content")[0];
//	oNum.innerHTML = oList.index;
//	aDsp[0].innerHTML = jList[oList.index - 1].dsp;
//	aDsp[1].innerHTML = jList[oList.index - 1].dspInfo;
//	oImg.src = "img/imgSwitch/" + jList[oList.index - 1].img;
	//鼠标悬停展示事件
	oList.onmouseenter = function () {
		oHid.classList.remove("hidden");
		aDsp[0].classList.add("hidden");
	}
	oList.onmouseleave = function () {
		oHid.classList.add("hidden");
		aDsp[0].classList.remove("hidden");
	}
}