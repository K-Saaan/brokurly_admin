document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('realgrid');
    const provider = new RealGrid.LocalDataProvider(false);
    const gridView = new RealGrid.GridView(container);
    
    gridView.setDataSource(provider);

	$('#id').keypress(function(event) {
			if(event.keyCode == 13){
				login();
				}
	    	}
	    );

	    $('#pwd').keypress(function(event) {
			if(event.keyCode == 13){
				login();
				}
	    	}
	    );
	
	
	
	// 고객정보조회 조회버튼 클릭시
	$("#memberSearch").click(function(){
		ajax("/member/showMember", param, function(returnData){
			var gridData = returnData.codeList;
			console.log(gridData);
		})
	});

});

function login(){
	if($("id").val() == "") {
			alert("아이디를 확인해주세요.");
			$("#id").focus();
			return;
		}
		
		if($("#pwd").val() == "") {
			alert("비밀번호를 확인해주세요.");
			$("#pwd").focus();
			return;
		}
		
	var param = new Object();
		param.text_id = $("#id").val();
		param.text_nm = $("#pwd").val();
	
	ajax("/member/showMember", param, function(returnData){
			console.log(returnData);
			if(returnData.msg == "GO_MAIN"){
				goMainPage(returnData.url);
			}else if(returnData.msg == "INPUT_NULL"){
				alert("아이디 또는 비밀번호를 입력해주세요.");
			}else if(returnData.msg == "LOGIN_FAIL"){
				alert("아이디 또는 비밀번호가 일치하지 않습니다.");
			}else if(returnData.msg == "OVER_LOGIN_FAIL_CNT"){
				alert("로그인 실패 횟수를 초과했습니다. 관리자에게 문의하세요.");
			}else if(returnData.msg == "OVER_PASSWORD_DUE_DATE"){
				alert("비밀번호 만료일입니다. 비밀번호를 재설정해주세요.");
			}else if(returnData.msg == "LOCK_ACCOUNT"){
				alert("계정이 잠겼습니다. 관리자에게 문의하세요.");
			}
		})
	
}