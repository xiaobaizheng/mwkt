/**
 * 模拟短信发送
 */
let objImg = [{
		imgName: "15101AN6-1.jpg",
		imgType: 0
	}, {
		imgName: "2011121201851764.jpg",
		imgType: 1
	}],
	oHead = document.getElementById("head"),
	oSendCon = document.getElementById("sendCon"),
	oBtn = document.getElementById("btn"),
	oCon = document.getElementById("con"),
	type = 0,
	obj = {};

//初始化
function init () {
	oHead.src = "img/imgSwitch/" + objImg[type].imgName;
}
init();
//点击头像进行切换
oHead.onclick = function () {
	if (type === 0) {
		type = 1;
	} else{
		type = 0;
	}
	init();
}
//点击发送发送对应信息
oBtn.onclick = function () {
	obj.senInfo = oSendCon.value.trim();
	obj.imgName = objImg[type].imgName;
	obj.imgType = type;
	senInfo(obj);
	oSendCon.value = "";
	oCon.scrollTop = oCon.scrollHeight;
}
//数据生成
function senInfo (obj) {
	if (obj.senInfo == "") {
		alert("请输入发送内容");
		return false;
	}
	let html = `
				<img class="se-head" src="img/imgSwitch/${obj.imgName}"/>
				<p class="ml10">${obj.senInfo}</p>
			`,
	fra = document.createDocumentFragment(),
	divHtml = document.createElement("div");
	divHtml.className = "disflex flexty1 mb10";
	divHtml.innerHTML = html;
	fra.appendChild(divHtml);
	if (obj.imgType === 0) {
		fra.children[0].classList.add("mysend");
	}
	oCon.appendChild(fra);
}
