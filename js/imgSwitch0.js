let objImg = ["7CC65D2DEF47.jpg", "7CC6FDCE8B22.jpg", "7CC6CDFDBDBC.jpg", "7CC66D18847E.jpg"],
	oBox = document.getElementById("img-s1"),
	oImg = document.getElementById("bigImg"),
	oL = document.getElementsByClassName("left")[0],
	oR = document.getElementsByClassName("right")[0],
	aUl = oBox.getElementsByTagName("ul")[0],
	aLi = null,
	count = 0,
	len = objImg.length,
	html = "";
//初始化
function init () {
	html = "";
	oImg.src = "img/imgSwitch/" + objImg[count];
	for (var i = 0; i < len; i++) {
		html += `
			<li><div><img src="img/imgSwitch/${objImg[i]}"/></div></li>
		`;
	}
	aUl.innerHTML = html;
	aUl.getElementsByTagName("li")[count].className = "active";
	hoverEven();
}
init();
function hoverEven () {
	aLi = aUl.getElementsByTagName("li");
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].index = i;
		//悬停展示缩略图
		aLi[i].onmouseenter = function () {
			this.getElementsByTagName("div")[0].style.display = "block";
		}
		aLi[i].onmouseleave = function () {
			this.getElementsByTagName("div")[0].style.display = "none";
		}
		//点击小图标展示相应大图
		aLi[i].onclick = function () {
			oImg.src = "img/imgSwitch/" + objImg[this.index];
			this.className = "active";
			aUl.getElementsByTagName("li")[count].className = "";
			count = this.index;
		}
	}
}
//左右切换
oL.onclick = function () {
	count --;
	if (count === -1) {
		count = len - 1
	}
	init();
}
oR.onclick = function () {
	count ++;
	if (count === len) {
		count = 0
	}
	init();
}
