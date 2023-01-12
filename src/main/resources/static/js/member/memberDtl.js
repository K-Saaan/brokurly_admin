//상세화면 js

document.addEventListener('DOMContentLoaded', function () {
	var clickData = opener.document.openForm.clickData.value;

	$("#memberCodeDtl").attr('value', clickData);
	var param = {
			MEMBER_CODE	:	clickData
	};
	// 메인그리드에서 가져온 멤버코드를 param으로 멤버 정보 조회
	ajax("/member/showMemberByCode", param, function(returnData){
		var gridData = returnData.codeList;
		console.log(gridData);
		var memberName = gridData[0].custnm;
		var memberEmail = gridData[0].custemail;
		// 가져온 정보들로 input을 채워넣음
		$("#memberName").attr('value', memberName);
		$("#memberEmail").attr('value', memberEmail);
	})
	// 멤버 세부정보도 같이 바인딩되게
	ajax("/member/showMemberDtl", param, function(returnData){
		var detailData = returnData.codeList;
		console.log("detail info")
		console.log(detailData[0])
	})
	
	// 수정 버튼 눌렀을 경우
	$("#updateMember").click(function(){
		var updateParam = {
				custnm	:	$("#memberName").val(),
				custemail :	$("#memberEmail").val()
			};
		ajax("/member/updateMember/" + clickData, updateParam, function(returnData){
			if(returnData == 1) {
				alert("수정이 완료됐습니다.");
				window.close();
			} else {
				alert("update fail!");
			}
		})
	});
	
});