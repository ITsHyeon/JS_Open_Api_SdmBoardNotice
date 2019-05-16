window.onload = function() {
	/* var interval = setInterval(handleRefresh, 3000); */
	handleRefresh();
}

function handleRefresh() {
	console.log("here");

	var url = "http://openapi.seoul.go.kr:8088/5947747272746e7834306e6768646a/json/SdmBoardNotice/1/10/";
	$.getJSON(url, updateTraffic);
}
/*
 * function updateTraffic(responseText) { var subwayDiv =
 * document.getElementById("subway"); var subways = JSON.parse(responseText);
 * for (var i = 0; i < subways.length; i++) { var subway = subways[i]; var div =
 * document.createElement("div"); div.setAttribute("class", "subwayItem");
 * div.innerHTML = subway.USE_MON + " : " + subway.LINE_NUM + " : " +
 * subway.SUB_STA_NM + " : " + subway.SEVENTEEN_RIDE_NUM + " : " +
 * subway.SEVENTEEN_ALIGHT_NUM; if (subwayDiv.childElementCount == 0) {
 * subwayDiv.appendChild(div); } else { subwayDiv.insertBefore(div,
 * subwayDiv.firstChild); } } }
 */

function updateTraffic(subwaypeople) {
	var subwayDiv = document.getElementById("subwaypeople");
	var traffic = subwaypeople.SdmBoardNotice.row;
	for (var i = 0; i < traffic.length; i++) {
		var div = document.createElement("div");
		div.setAttribute("class", "subwayItem");
		/*
		 * div.innerHTML = " " + traffic[i].USE_DT + "일에 " + traffic[i].LINE_NUM +
		 * "에 " + traffic[i].SUB_STA_NM + "역에서 " + traffic[i].RIDE_PASGR_NUM +
		 * "명이 승차하고 " + traffic[i].ALIGHT_PASGR_NUM+ "명이 내렸습니다. ";
		 */
		
		/*
		div.innerHTML = "<div class='board'><table>제목 : "
				+ traffic[i].TITLE + "</div><br>" + traffic[i].USER_NM
				+ "부서에서 " + traffic[i].REG_DT + "에 " + traffic[i].CONTS
				+ "</div>";*/
		
		div.innerHTML = "<div class='boardTable'><table border='1'><tr><td colspan='6'>" + traffic[i].SDM_BOARD_SEQ + "</td></tr><tr><th>제목</th><td colspan='5'>" + traffic[i].TITLE + "</td></tr><tr><th>작성부서</th><td>"
		+ traffic[i].USER_NM + "</td><th>작성일시</th><td>" + traffic[i].REG_DT + "</td><th>조회수</th><td>" + traffic[i].READ_CNT + "</td></tr><tr><td colspan='6' align='center'>" + traffic[i].CONTS + "</td></tr></table></div>";
		subwayDiv.appendChild(div);

	}

}