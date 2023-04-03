document.addEventListener('DOMContentLoaded', function () {
	// 메인그리드를 그리기 위한 사전 설정
    const container = document.getElementById('realgridReview');
    const provider = new RealGrid.LocalDataProvider(false);
    const gridView = new RealGrid.GridView(container);
    
    gridView.setDataSource(provider);
    
    gridView.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    // 데이트피커 날짜 형식 지정
    $(".datepicker").datepicker({
    	dateFormat: "yy-mm-dd"
    });
    
    var realPath = location.href; // http://localhost:8080/member/show 같은 full URL
    var urlIndex = realPath.lastIndexOf("/");
    var usingUrl = realPath.substr(0, urlIndex); // full URL에서 http://localhost:8080/member 까지만 자른 URL
    
    // 메인그리드 컬럼
	provider.setFields([
		{
			fieldName: "reviewSeqNo",
			dataType: "int",
		},
		{
			fieldName: "userId",
			dataType: "text",
		},
		{
			fieldName: "custCode",
			dataType: "text",
		},
		{
			fieldName: "custNm",
			dataType: "text",
		},
		{
			fieldName: "pdCode",
			dataType: "text",
		},
		{
			fieldName: "pdNm",
			dataType: "text",
		},
		{
			fieldName: "reviewDate",
			dataType: "text",
		},
		{
			fieldName: "reviewTxt",
			dataType: "text",
		},
		{
			fieldName: "reviewLike",
			dataType: "int",
		},
		{
			fieldName: "regId",
			dataType: "text",
		},
		{
			fieldName: "regDate",
			dataType: "text",
		},
		{
			fieldName: "chgrId",
			dataType: "text",
		},
		{
			fieldName: "chgrDate",
			dataType: "text",
		},
	]);
	
	gridView.setColumns([
		{
			name: "reviewSeqNo",
			fieldName: "reviewSeqNo",
			type: "data",
			width: "120",
			header: {
				text: "후기시퀀스번호",
			},
		},
		{
			name: "userId",
			fieldName: "userId",
			type: "data",
			width: "120",
			header: {
				text: "유저아이디",
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
			name: "custNm",
			fieldName: "custNm",
			type: "data",
			width: "120",
			header: {
				text: "고객이름",
			},
		},
		{
			name: "pdCode",
			fieldName: "pdCode",
			type: "data",
			width: "120",
			header: {
				text: "상품코드",
			},
		},
		{
			name: "pdNm",
			fieldName: "pdNm",
			type: "data",
			width: "120",
			header: {
				text: "상품이름",
			},
		},
		{
			name: "reviewDate",
			fieldName: "reviewDate",
			type: "data",
			width: "120",
			header: {
				text: "후기날짜",
			},
		},
		{
			name: "reviewTxt",
			fieldName: "reviewTxt",
			type: "data",
			width: "120",
			header: {
				text: "후기내용",
			},
		},
		{
			name: "reviewLike",
			fieldName: "reviewLike",
			type: "data",
			width: "120",
			header: {
				text: "좋아요수",
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
		{
			name: "regDate",
			fieldName: "regDate",
			type: "data",
			width: "120",
			header: {
				text: "등록날짜",
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
			name: "chgrDate",
			fieldName: "chgrDate",
			type: "data",
			width: "120",
			header: {
				text: "수정날짜",
			},
		},
	]);
	
	var totalCount = 0;
	var countData = 0;
	var pagingIndex = 0;
	var pagingRows = 50;
	
	// 이름 입력하고 엔터키 눌렀을시 조회되게
	$('#reviewPdName').keypress(function(event) {
		if(event.keyCode == 13){
			$("#reviewSearch").trigger("click");
		}
	});
	$('#reviewCustName').keypress(function(event) {
		if(event.keyCode == 13){
			$("#reviewSearch").trigger("click");
		}
	});
	
	// 후기조회 조회버튼 클릭시 // 테스트
	$("#reviewSearch").click(function(){
		provider.clearRows(); // 서브 그리드 비우기
		pagingIndex = 0;
		pagingRows = 50;
		var param = {
				PD_NM		:	$("#reviewPdName").val(),
				CUST_NM		:	$("#reviewCustName").val(),
				pagingIndex		:	pagingIndex,
				pagingRows		:	pagingRows
		};
		ajax("/product/showReview", param, function(returnData){
			totalCount = returnData.codeList.totalElements;
			countData = returnData.codeList.size;
			$("#cntPdReview").text(totalCount); // 화면에 조회건수 출력
			// 조회된 값이 있을때만 실제 조회 쿼리 돌리게 설정
			if(countData > 0) {
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
	// 엑셀 버튼 클릭시
	$("#reviewExcel").click(function(){
		if(totalCount > 0) {
			gridView.exportGrid({
			     type: 'excel',
			     fileName: "후기 정보 조회.xlsx"
			})
		} else {
			alert("조회된 데이터가 없습니다.");
		}
	});
	// 메인그리드 클릭했을때 해당 데이터의 세부정보를 서브그리드에 보여주기위함
	function gridCellClicked(){
		gridView.onCellClicked = function(grid, clickData){
//			var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
//			var pdcode = selectOneData.pdcode;
//			var param = {
//					PRODUCT_CODE	:	pdcode
//			}
//			ajax("/product/showProductDtl", param, function(returnData){
//				var detailData = returnData.codeList;
//				subprovider.fillJsonData(detailData, { fillMode : "set"});
//			})
		}
	}
	// 메인그리드 더블클릭했을때 모달 호출
	function gridDblCellClicked(){
		gridView.onCellDblClicked = function(grid, clickData){
			var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
			var custNm = selectOneData.custNm;
			var pdNm = selectOneData.pdNm;
			var reviewDate = selectOneData.reviewDate;
			var reviewTxt = selectOneData.reviewTxt;
			var reviewLike = selectOneData.reviewLike;
			$("#clickCustNm").val(custNm);
			$("#clickPdNm").val(pdNm);
			$("#clickReviewDate").val(reviewDate);
			$("#clickReviewTxt").val(reviewTxt);
			$("#clickReviewLike").val(reviewLike);
			openPopup(usingUrl + "/review/detail", "리뷰 상세정보 조회", 800, 600);
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
					PD_NM		:	$("#reviewPdName").val(),
					CUST_NM		:	$("#reviewCustName").val(),
					pagingIndex		:	pagingIndex,
					pagingRows		:	pagingRows
			};
			ajax("/product/showReview", param, function(returnData){
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
	
//	var dropdownParam = {
//			CATEGORY		:	"PACKTYPE"
//	};
	// common에 있는 공통 펑션으로 드롭다운 구성
//	setSelbox("dropdownProduct", "/common/showCode", dropdownParam);
	
	$(".dropdown-toggle").click(function(){
		if($('.dropdown-menu').is(':visible')){
			$('.dropdown-menu').hide();
			$('.dropdown-item').hide();
		} else {
			$('.dropdown-menu').show();
			$('.dropdown-item').show();
		}
	});
	$(".dropdown-item").click(function(){
		$('#packType').text( $(this).attr('value') ).val( $(this).attr('value') );
		if($('.dropdown-item').is(':visible')){
			$('.dropdown-menu').hide();
			$('.dropdown-item').hide();
		} else {
			$('.dropdown-menu').show();
			$('.dropdown-item').show();
		}
	});
	// 삭제 버튼 클릭시
	$("#reviewDelete").click(function(){
		var reply = confirm("삭제하시겠습니까?");
		if(reply) {
			var checkedRows = gridView.getCheckedRows();
			var rowDatas = [];
			for (var i in checkedRows) {
				var chkdata = provider.getJsonRow(checkedRows[i]);
				rowDatas.push(chkdata);
			}
			var delData = [];
			for(var i in rowDatas) {
				delData.push(rowDatas[i].reviewSeqNo);
			}
			ajax("/product/deleteReview", delData, function(returnData){
				if(returnData == 1) {
					alert("삭제가 완료됐습니다.");
					$("#reviewSearch").trigger("click");
				} else {
					alert("delete fail!");
				}
			})
		}

	});

});