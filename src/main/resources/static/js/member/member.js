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
			fieldName: "chgrDate",
			dataType: "text",
		},
		{
			fieldName: "chgrId",
			dataType: "text",
		},
		{
			fieldName: "custAddrDtl",
			dataType: "text",
		},
		{
			fieldName: "custBirth",
			dataType: "text",
		},
		{
			fieldName: "custCode",
			dataType: "text",
		},
		{
			fieldName: "custEmail",
			dataType: "text",
		},
		{
			fieldName: "custNm",
			dataType: "text",
		},
		{
			fieldName: "custTel",
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

	gridView.setColumns([
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
			name: "custAddrDtl",
			fieldName: "custAddrDtl",
			type: "data",
			width: "120",
			header: {
				text: "고객상세주소",
			},
		},
		{
			name: "custBirth",
			fieldName: "custBirth",
			type: "data",
			width: "120",
			header: {
				text: "고객생년월일",
			},
		},
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
			name: "custEmail",
			fieldName: "custEmail",
			type: "data",
			width: "120",
			header: {
				text: "고객이메일",
			},
		},
		{
			name: "custNm",
			fieldName: "custNm",
			type: "data",
			width: "120",
			header: {
				text: "고객이름",
			},
		},
		{
			name: "custTel",
			fieldName: "custTel",
			type: "data",
			width: "120",
			header: {
				text: "고객전화번호",
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

	var totalCount = 0;
	var countData = 0;
	var pagingIndex = 0;
	var pagingRows = 50;

	// 이름 입력하고 엔터키 눌렀을시 조회되게
	$('#memberName').keypress(function(event) {
		if(event.keyCode == 13){
			$("#memberSearch").trigger("click");
		}
	});

	// 고객정보조회 조회버튼 클릭시
	$("#memberSearch").click(function(){
		subprovider.clearRows(); // 서브 그리드 비우기
		pagingIndex = 0;
		pagingRows = 50;
		var param = {
			CUST_NM		:	$("#memberName").val(),
			pagingIndex		:	pagingIndex,
			pagingRows		:	pagingRows
		};
		ajax("/member/showMember", param, function(returnData){
			totalCount = returnData.codeList.totalElements;
			countData = returnData.codeList.size;
			$("#cntMember").text(totalCount); // 화면에 조회건수 출력
			// 조회된 값이 있을때만 실제 조회 쿼리 돌리게 설정
			if(countData > 0){
				// 만약 이번 조회된 카운트값이 pagingRows 값과 같다면 다음 페이지가 있는것이므로 pagingIndex 증가
				if(countData == pagingRows) {
					pagingIndex++;
				}
				var gridData = returnData.codeList.content;
				provider.fillJsonData(gridData, { fillMode : "set"});
				gridPaging();
				gridCellClicked();
				gridDblCellClicked();
			} else {
				provider.clearRows(); // 조회 결과가 없을시 그리드 비우기
			}
		})
	});

	// 메인그리드 클릭했을때 해당 데이터의 세부정보를 서브그리드에 보여주기위함
	function gridCellClicked(){
		gridView.onCellClicked = function(grid, clickData){
			var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
			var custCode = selectOneData.custCode;
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
			var custCode = selectOneData.custCode;
			$("#clickData").val(custCode);
			openPopup(usingUrl + "/detail", "고객 상세정보 조회", 800, 600);
		}
	}

	// 스크롤 가장 아래로 내렸을때 추가로 조회
	function gridPaging(){
		gridView.onScrollToBottom = function() {
			// pagingIndex가 1이라면 카운트값이 pagingRows 보다 적은것이므로 return 처리
			if(pagingIndex == 0) {
				return;
			}
			var param = {
				MEMBER_NAME		:	$("#memberName").val(),
				pagingIndex		:	pagingIndex,
				pagingRows		:	pagingRows
			};
			ajax("/product/showMember", param, function(returnData){
				totalCount = returnData.codeList.totalElements;
				countData = returnData.codeList.size;
				// 스크롤 시 추가 데이터가 있을때만 show
				if(countData > 0) {
					var gridData = returnData.codeList.content;
					pagingIndex++;
					provider.fillJsonData(gridData, { fillMode : "append", noStates: true});
					gridView.refresh();
				} else {
					provider.clearRows(); // 조회 결과가 없을시 그리드 비우기
				}
			})
		}
	}

});