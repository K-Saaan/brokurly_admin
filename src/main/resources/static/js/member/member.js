document.addEventListener('DOMContentLoaded', function () {
	// 메인그리드를 그리기 위한 사전 설정
    const container = document.getElementById('realgrid');
    const provider = new RealGrid.LocalDataProvider(false);
    const gridView = new RealGrid.GridView(container);
    // 서브그리드를 그리기 위한 사전 설정
    const subcontainer = document.getElementById('subgrid');
    const subprovider = new RealGrid.LocalDataProvider(false);
    const subgridView = new RealGrid.GridView(subcontainer);
    
    gridView.setDataSource(provider);
    subgridView.setDataSource(subprovider);
    
    gridView.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    subgridView.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    // 데이트피커 날짜 형식 지정
    $("#datepicker").datepicker({
    	dateFormat: "yy-mm-dd"
    });
    
    var realPath = location.href; // http://localhost:8080/member/show 같은 full URL
    var urlIndex = realPath.lastIndexOf("/");
    var usingUrl = realPath.substr(0, urlIndex); // full URL에서 http://localhost:8080/member 까지만 자른 URL
    
    // 메인그리드 컬럼
	provider.setFields([
		{
			fieldName: "chgrdate",
			dataType: "text",
		},
		{
			fieldName: "chgrid",
			dataType: "text",
		},
		{
			fieldName: "custaddr",
			dataType: "text",
		},
		{
			fieldName: "custaddrdtl",
			dataType: "text",
		},
		{
			fieldName: "custbirth",
			dataType: "text",
		},
		{
			fieldName: "custcode",
			dataType: "text",
		},
		{
			fieldName: "custemail",
			dataType: "text",
		},
		{
			fieldName: "custgradecode",
			dataType: "text",
		},
		{
			fieldName: "custnm",
			dataType: "text",
		},
		{
			fieldName: "custtel",
			dataType: "text",
		},
		{
			fieldName: "deliloccode",
			dataType: "text",
		},
		{
			fieldName: "regdate",
			dataType: "text",
		},
		{
			fieldName: "regid",
			dataType: "text",
		},
	]);
	
	gridView.setColumns([
		{
			name: "chgrdate",
			fieldName: "chgrdate",
			type: "data",
			width: "120",
			header: {
				text: "수정일시",
			},
		},
		{
			name: "chgrid",
			fieldName: "chgrid",
			type: "data",
			width: "120",
			header: {
				text: "수정자아이디",
			},
		},
		{
			name: "custaddr",
			fieldName: "custaddr",
			type: "data",
			width: "120",
			header: {
				text: "고객주소",
			},
		},
		{
			name: "custaddrdtl",
			fieldName: "custaddrdtl",
			type: "data",
			width: "120",
			header: {
				text: "고객상세주소",
			},
		},
		{
			name: "custbirth",
			fieldName: "custbirth",
			type: "data",
			width: "120",
			header: {
				text: "고객생년월일",
			},
		},
		{
			name: "custcode",
			fieldName: "custcode",
			type: "data",
			width: "120",
			header: {
				text: "고객코드",
			},
		},
		{
			name: "custemail",
			fieldName: "custemail",
			type: "data",
			width: "120",
			header: {
				text: "고객이메일",
			},
		},
		{
			name: "custgradecode",
			fieldName: "custgradecode",
			type: "data",
			width: "120",
			header: {
				text: "고객등급코드",
			},
		},
		{
			name: "custnm",
			fieldName: "custnm",
			type: "data",
			width: "120",
			header: {
				text: "고객이름",
			},
		},
		{
			name: "custtel",
			fieldName: "custtel",
			type: "data",
			width: "120",
			header: {
				text: "고객전화번호",
			},
		},
		{
			name: "deliloccode",
			fieldName: "deliloccode",
			type: "data",
			width: "120",
			header: {
				text: "고객배송코드",
			},
		},
		{
			name: "regdate",
			fieldName: "regdate",
			type: "data",
			width: "120",
			header: {
				text: "등록일시",
			},
		},
		{
			name: "regid",
			fieldName: "regid",
			type: "data",
			width: "120",
			header: {
				text: "등록자아이디",
			},
		},
	]);
	// 서브그리드 컬럼
	subprovider.setFields([
		{
			fieldName: "custCode",
			dataType: "text",
		},
		{
			fieldName: "ageYn",
			dataType: "text",
		},
		{
			fieldName: "agreEmail",
			dataType: "text",
		},
		{
			fieldName: "agrePrivacyEss",
			dataType: "text",
		},
		{
			fieldName: "agrePrivacyOpt",
			dataType: "text",
		},
		{
			fieldName: "agreSms",
			dataType: "text",
		},
		{
			fieldName: "agreTerms",
			dataType: "text",
		},
		{
			fieldName: "chgrDate",
			dataType: "text",
		},
		{
			fieldName: "chgrId",
			dataType: "text",
		},
		{
			fieldName: "regDate",
			dataType: "text",
		},
		{
			fieldName: "regId",
			dataType: "text",
		},
		]);
	
	subgridView.setColumns([
		{
			name: "custCode",
			fieldName: "custCode",
			type: "data",
			width: "120",
			header: {
				text: "고객코드",
			},
		},
		{
			name: "ageYn",
			fieldName: "ageYn",
			type: "data",
			width: "120",
			header: {
				text: "이용약관동의",
			},
		},
		{
			name: "agreEmail",
			fieldName: "agreEmail",
			type: "data",
			width: "120",
			header: {
				text: "광고성\n수신여부\n(이메일)",
			},
		},
		{
			name: "agreTerms",
			fieldName: "agreTerms",
			type: "data",
			width: "120",
			header: {
				text: "이용약관동의",
			},
		},
		{
			name: "agreSms",
			fieldName: "agreSms",
			type: "data",
			width: "120",
			header: {
				text: "광고성\n수신여부\n(SMS)",
			},
		},
		{
			name: "agrePrivacyEss",
			fieldName: "agrePrivacyEss",
			type: "data",
			width: "120",
			header: {
				text: "개인정보\n수집이용동의\n(필수)",
			},
		},
		{
			name: "agrePrivacyOpt",
			fieldName: "agrePrivacyOpt",
			type: "data",
			width: "120",
			header: {
				text: "개인정보\n수집이용동의\n(필수)",
			},
		},
		{
			name: "chgrDate",
			fieldName: "chgrDate",
			type: "data",
			width: "120",
			header: {
				text: "수정일시",
			},
		},
		{
			name: "chgrId",
			fieldName: "chgrId",
			type: "data",
			width: "120",
			header: {
				text: "수정자아이디",
			},
		},
		{
			name: "regDate",
			fieldName: "regDate",
			type: "data",
			width: "120",
			header: {
				text: "등록일시",
			},
		},
		{
			name: "regId",
			fieldName: "regId",
			type: "data",
			width: "120",
			header: {
				text: "등록자아이디",
			},
		},
		]);
	
	var countData = 0;
	// 고객정보조회 조회버튼 클릭시
	$("#memberSearch").click(function(){
		var param = {
				MEMBER_NAME		:	$("#memberName").val()
		};
		ajax("/member/showMemberCnt", param, function(returnData){
			countData = returnData.countData;
			$("#cntMember").text(countData); // 화면에 조회건수 출력
			// 조회된 값이 있을때만 실제 조회 쿼리 돌리게 설정
			if(countData > 0){
				var param = {
						MEMBER_NAME		:	$("#memberName").val()
				};
				ajax("/member/showMemberByName", param, function(returnData){
					var gridData = returnData.codeList;
					provider.fillJsonData(gridData, { fillMode : "set"});
					gridCellClicked();
					gridDblCellClicked();
				})
			} else {
				
			}
		})
	});
	
	// 메인그리드 클릭했을때 해당 데이터의 세부정보를 서브그리드에 보여주기위함
	function gridCellClicked(){
		gridView.onCellClicked = function(grid, clickData){
			var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
			var custCode = selectOneData.custcode;
			var param = {
					MEMBER_CODE	:	custCode
			}
			ajax("/member/showMemberDtl", param, function(returnData){
				var detailData = returnData.codeList;
				subprovider.fillJsonData(detailData, { fillMode : "set"});
			})
		}
	}
	// 메인그리드 더블클릭했을때 모달 호출
	function gridDblCellClicked(){
		gridView.onCellDblClicked = function(grid, clickData){
			var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
			var custCode = selectOneData.custcode;
			$("#clickData").val(custCode);
			openPopup(usingUrl + "/detail", "고객 상세정보 조회", 800, 600);
			
//			var detailSite = {
//					id: "memberDetailInfoModal",
//					url: usingUrl + "/detail",
//					width: 800,
//					height: 600,
//					level: 1
//			}
//			var detailParam = {
//					CUSTCODE	:	custCode
//			}
//			loadModalObj(detailSite, detailParam);
		}
	}

});