document.addEventListener('DOMContentLoaded', function () {
	// 메인그리드를 그리기 위한 사전 설정
    const container = document.getElementById('realgridProduct');
    const provider = new RealGrid.LocalDataProvider(false);
    const gridView = new RealGrid.GridView(container);
    // 서브그리드를 그리기 위한 사전 설정
    const subcontainer = document.getElementById('subgridProduct');
    const subprovider = new RealGrid.LocalDataProvider(false);
    const subgridView = new RealGrid.GridView(subcontainer);
    
    gridView.setDataSource(provider);
    subgridView.setDataSource(subprovider);
    
    gridView.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
    subgridView.setEditOptions({editable : false}); // 더블클릭시 그리드 셀 수정 불가능하게 설정
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
			fieldName: "pdcode",
			dataType: "text",
		},
		{
			fieldName: "pdnm",
			dataType: "text",
		},
		{
			fieldName: "pdext",
			dataType: "text",
		},
		{
			fieldName: "pdprice",
			dataType: "text",
		},
		{
			fieldName: "delitype",
			dataType: "text",
		},
		{
			fieldName: "deliext",
			dataType: "text",
		},
		{
			fieldName: "pdseller",
			dataType: "text",
		},
		{
			fieldName: "pakgtype",
			dataType: "text",
		},
		{
			fieldName: "salesunit",
			dataType: "text",
		},
		{
			fieldName: "pdweg",
			dataType: "text",
		},
		{
			fieldName: "pdsweet",
			dataType: "text",
		},
		{
			fieldName: "orgloc",
			dataType: "text",
		},
		{
			fieldName: "alerginfo",
			dataType: "text",
		},
		{
			fieldName: "expdate",
			dataType: "text",
		},
		{
			fieldName: "extinfo",
			dataType: "text",
		},
		{
			fieldName: "regid",
			dataType: "text",
		},
		{
			fieldName: "regdate",
			dataType: "text",
		},
		{
			fieldName: "chgrid",
			dataType: "text",
		},
		{
			fieldName: "chgrdate",
			dataType: "text",
		},
	]);
	
	gridView.setColumns([
		{
			name: "pdcode",
			fieldName: "pdcode",
			type: "data",
			width: "120",
			header: {
				text: "상품코드",
			},
		},
		{
			name: "pdnm",
			fieldName: "pdnm",
			type: "data",
			width: "120",
			header: {
				text: "상품이름",
			},
		},
		{
			name: "pdext",
			fieldName: "pdext",
			type: "data",
			width: "120",
			header: {
				text: "상품부가정보",
			},
		},
		{
			name: "pdprice",
			fieldName: "pdprice",
			type: "data",
			width: "120",
			header: {
				text: "상품가격",
			},
		},
		{
			name: "delitype",
			fieldName: "delitype",
			type: "data",
			width: "120",
			header: {
				text: "배송타입",
			},
		},
		{
			name: "deliext",
			fieldName: "deliext",
			type: "data",
			width: "120",
			header: {
				text: "배송부가정보",
			},
		},
		{
			name: "pdseller",
			fieldName: "pdseller",
			type: "data",
			width: "120",
			header: {
				text: "판매자",
			},
		},
		{
			name: "pakgtype",
			fieldName: "pakgtype",
			type: "data",
			width: "120",
			header: {
				text: "포장타입",
			},
		},
		{
			name: "pakgext",
			fieldName: "pakgext",
			type: "data",
			width: "120",
			header: {
				text: "포장부가정보",
			},
		},
		{
			name: "salesunit",
			fieldName: "salesunit",
			type: "data",
			width: "120",
			header: {
				text: "판매단위",
			},
		},
		{
			name: "pdweg",
			fieldName: "pdweg",
			type: "data",
			width: "120",
			header: {
				text: "상품무게",
			},
		},
		{
			name: "pdsweet",
			fieldName: "pdsweet",
			type: "data",
			width: "120",
			header: {
				text: "당도",
			},
		},
		{
			name: "orgloc",
			fieldName: "orgloc",
			type: "data",
			width: "120",
			header: {
				text: "원산지",
			},
		},
		{
			name: "alerginfo",
			fieldName: "alerginfo",
			type: "data",
			width: "120",
			header: {
				text: "알러지정보",
			},
		},
		{
			name: "expdate",
			fieldName: "expdate",
			type: "data",
			width: "120",
			header: {
				text: "유통기한정보",
			},
		},
		{
			name: "extinfo",
			fieldName: "extinfo",
			type: "data",
			width: "120",
			header: {
				text: "상품기타정보",
			},
		},
		{
			name: "regid",
			fieldName: "regid",
			type: "data",
			width: "120",
			header: {
				text: "등록자",
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
			name: "chgrid",
			fieldName: "chgrid",
			type: "data",
			width: "120",
			header: {
				text: "변경자",
			},
		},
		{
			name: "chgrdate",
			fieldName: "chgrdate",
			type: "data",
			width: "120",
			header: {
				text: "변경일시",
			},
		},
	]);
	// 서브그리드 컬럼
	subprovider.setFields([
		{
			fieldName: "pdcode",
			dataType: "text",
		},
		{
			fieldName: "salecode",
			dataType: "text",
		},
		{
			fieldName: "cpncode",
			dataType: "text",
		},
		{
			fieldName: "discyn",
			dataType: "text",
		},
		{
			fieldName: "cpnyn",
			dataType: "text",
		},
		{
			fieldName: "regid",
			dataType: "text",
		},
		{
			fieldName: "regdate",
			dataType: "text",
		},
		{
			fieldName: "chgrid",
			dataType: "text",
		},
		{
			fieldName: "chgrdate",
			dataType: "text",
		},
		]);
	
	subgridView.setColumns([
		{
			name: "pdcode",
			fieldName: "pdcode",
			type: "data",
			width: "120",
			header: {
				text: "상품코드",
			},
		},
		{
			name: "salecode",
			fieldName: "salecode",
			type: "data",
			width: "120",
			header: {
				text: "판매코드",
			},
		},
		{
			name: "cpncode",
			fieldName: "cpncode",
			type: "data",
			width: "120",
			header: {
				text: "쿠폰코드",
			},
		},
		{
			name: "discyn",
			fieldName: "discyn",
			type: "data",
			width: "120",
			header: {
				text: "할인적용여부",
			},
		},
		{
			name: "cpnyn",
			fieldName: "cpnyn",
			type: "data",
			width: "120",
			header: {
				text: "쿠폰적용여부",
			},
		},
		{
			name: "regid",
			fieldName: "regid",
			type: "data",
			width: "120",
			header: {
				text: "등록자",
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
			name: "chgrid",
			fieldName: "chgrid",
			type: "data",
			width: "120",
			header: {
				text: "수정자",
			},
		},
		{
			name: "chgrdate",
			fieldName: "chgrdate",
			type: "data",
			width: "120",
			header: {
				text: "수정일시",
			},
		},
		]);
	
	var totalCount = 0;
	var countData = 0;
	var pagingIndex = 0;
	var pagingRows = 50;
	
	// 이름 입력하고 엔터키 눌렀을시 조회되게
	$('#productName').keypress(function(event) {
		if(event.keyCode == 13){
			$("#productSearch").trigger("click");
		}
	});
	
	// 고객정보조회 조회버튼 클릭시 // 테스트
	$("#productSearch").click(function(){
		subprovider.clearRows(); // 서브 그리드 비우기
		pagingIndex = 0;
		pagingRows = 50;
		var param = {
				PRODUCT_NAME		:	$("#productName").val(),
				PAKG_TYPE		:	$("#packType").val(),
				pagingIndex		:	pagingIndex,
				pagingRows		:	pagingRows
		};
		ajax("/product/showProduct", param, function(returnData){
			totalCount = returnData.codeList.totalElements;
			countData = returnData.codeList.size;
			$("#cntProduct").text(totalCount); // 화면에 조회건수 출력
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
	$("#productExcel").click(function(){
		if(totalCount > 0) {
			gridView.exportGrid({
			     type: 'excel',
			     fileName: "상품 정보 조회.xlsx"
			})
		} else {
			alert("조회된 데이터가 없습니다.");
		}
	});
	// 메인그리드 클릭했을때 해당 데이터의 세부정보를 서브그리드에 보여주기위함
	function gridCellClicked(){
		gridView.onCellClicked = function(grid, clickData){
			var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
			var pdcode = selectOneData.pdcode;
			var param = {
					PRODUCT_CODE	:	pdcode
			}
			ajax("/product/showProductDtl", param, function(returnData){
				var detailData = returnData.codeList;
				subprovider.fillJsonData(detailData, { fillMode : "set"});
			})
		}
	}
	// 메인그리드 더블클릭했을때 모달 호출
	function gridDblCellClicked(){
		gridView.onCellDblClicked = function(grid, clickData){
			var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
			var pdCode = selectOneData.pdcode;
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
					PRODUCT_NAME		:	$("#productName").val(),
					PAKG_TYPE		:	$("#packType").val(),
					pagingIndex		:	pagingIndex,
					pagingRows		:	pagingRows
			};
			ajax("/product/showProduct", param, function(returnData){
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
	
	// test
	var dropdownParam = {
			CATEGORY		:	"PACKTYPE"
	};
	// common에 있는 공통 펑션으로 드롭다운 구성
	setSelbox("dropdownProduct", "/common/showCode", dropdownParam);
	
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

});