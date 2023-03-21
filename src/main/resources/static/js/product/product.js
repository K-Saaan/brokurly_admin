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
	// commit testing
    
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
			fieldName: "pdCode",
			dataType: "text",
		},
		{
			fieldName: "pdNm",
			dataType: "text",
		},
		{
			fieldName: "pdExt",
			dataType: "text",
		},
		{
			fieldName: "pdPrice",
			dataType: "text",
		},
		{
			fieldName: "deliType",
			dataType: "text",
		},
		{
			fieldName: "deliExt",
			dataType: "text",
		},
		{
			fieldName: "pdSeller",
			dataType: "text",
		},
		{
			fieldName: "pakgType",
			dataType: "text",
		},
		{
			fieldName: "salesUnit",
			dataType: "text",
		},
		{
			fieldName: "pdWeg",
			dataType: "text",
		},
		{
			fieldName: "pdSweet",
			dataType: "text",
		},
		{
			fieldName: "orgLoc",
			dataType: "text",
		},
		{
			fieldName: "alergInfo",
			dataType: "text",
		},
		{
			fieldName: "expDate",
			dataType: "text",
		},
		{
			fieldName: "extInfo",
			dataType: "text",
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
			name: "pdExt",
			fieldName: "pdExt",
			type: "data",
			width: "120",
			header: {
				text: "상품부가정보",
			},
		},
		{
			name: "pdPrice",
			fieldName: "pdPrice",
			type: "data",
			width: "120",
			header: {
				text: "상품가격",
			},
		},
		{
			name: "deliType",
			fieldName: "deliType",
			type: "data",
			width: "120",
			header: {
				text: "배송타입",
			},
		},
		{
			name: "deliExt",
			fieldName: "deliExt",
			type: "data",
			width: "120",
			header: {
				text: "배송부가정보",
			},
		},
		{
			name: "pdSeller",
			fieldName: "pdSeller",
			type: "data",
			width: "120",
			header: {
				text: "판매자",
			},
		},
		{
			name: "pakgType",
			fieldName: "pakgType",
			type: "data",
			width: "120",
			header: {
				text: "포장타입",
			},
		},
		{
			name: "pakgExt",
			fieldName: "pakgExt",
			type: "data",
			width: "120",
			header: {
				text: "포장부가정보",
			},
		},
		{
			name: "salesUnit",
			fieldName: "salesUnit",
			type: "data",
			width: "120",
			header: {
				text: "판매단위",
			},
		},
		{
			name: "pdWeg",
			fieldName: "pdWeg",
			type: "data",
			width: "120",
			header: {
				text: "상품무게",
			},
		},
		{
			name: "pdSweet",
			fieldName: "pdSweet",
			type: "data",
			width: "120",
			header: {
				text: "당도",
			},
		},
		{
			name: "orgLoc",
			fieldName: "orgLoc",
			type: "data",
			width: "120",
			header: {
				text: "원산지",
			},
		},
		{
			name: "alergInfo",
			fieldName: "alergInfo",
			type: "data",
			width: "120",
			header: {
				text: "알러지정보",
			},
		},
		{
			name: "expDate",
			fieldName: "expDate",
			type: "data",
			width: "120",
			header: {
				text: "유통기한정보",
			},
		},
		{
			name: "extInfo",
			fieldName: "extInfo",
			type: "data",
			width: "120",
			header: {
				text: "상품기타정보",
			},
		},
		{
			name: "regId",
			fieldName: "regId",
			type: "data",
			width: "120",
			header: {
				text: "등록자",
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
			name: "chgrId",
			fieldName: "chgrId",
			type: "data",
			width: "120",
			header: {
				text: "변경자",
			},
		},
		{
			name: "chgrDate",
			fieldName: "chgrDate",
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
			fieldName: "pdCode",
			dataType: "text",
		},
		{
			fieldName: "saleCode",
			dataType: "text",
		},
		{
			fieldName: "cpnCode",
			dataType: "text",
		},
		{
			fieldName: "discYn",
			dataType: "text",
		},
		{
			fieldName: "cpnYn",
			dataType: "text",
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
	
	subgridView.setColumns([
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
			name: "saleCode",
			fieldName: "saleCode",
			type: "data",
			width: "120",
			header: {
				text: "판매코드",
			},
		},
		{
			name: "cpnCode",
			fieldName: "cpnCode",
			type: "data",
			width: "120",
			header: {
				text: "쿠폰코드",
			},
		},
		{
			name: "discYn",
			fieldName: "discYn",
			type: "data",
			width: "120",
			header: {
				text: "할인적용여부",
			},
		},
		{
			name: "cpnYn",
			fieldName: "cpnYn",
			type: "data",
			width: "120",
			header: {
				text: "쿠폰적용여부",
			},
		},
		{
			name: "regId",
			fieldName: "regId",
			type: "data",
			width: "120",
			header: {
				text: "등록자",
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
			name: "chgrId",
			fieldName: "chgrId",
			type: "data",
			width: "120",
			header: {
				text: "수정자",
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
				PRODUCT_NAME			:	$("#productName").val(),
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
			var pdCode = selectOneData.pdCode;
			var param = {
					PRODUCT_CODE	:	pdCode
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
			// var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
			// var pdCode = selectOneData.pdCode;
			// $("#clickData").val(custCode);
			// openPopup(usingUrl + "/detail", "고객 상세정보 조회", 800, 600);
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
	
	$(".dropdown-toggle").click(function(){
		if($('.dropdown-menu').is(':visible')){
			$('.dropdown-menu').hide();
			$('.dropdown-item').hide();
		} else {
			$('.dropdown-menu').show();
			$('.dropdown-item').show();
		}
	});
	// 드롭다운 리스트 밖으로 마우스 옮겼을때 드롭다운 해제되도록 설정
	$(".dropdown-toggle").mouseleave(function(){
		$(".dropdown-menu").mouseover(function(){
			$('.dropdown-menu').show();
			$('.dropdown-item').show();
		});
		$(".dropdown-menu").mouseleave(function(){
			$('.dropdown-menu').hide();
			$('.dropdown-item').hide();
		})
	});
	
	$("#dropdownProduct").on('click', ".dropdown-item", function(){
		$('#packType').text( $(this).attr('value') ).val( $(this).attr('value') );
		if($('.dropdown-item').is(':visible')){
			$('.dropdown-menu').hide();
			$('.dropdown-item').hide();
		} else {
			$('.dropdown-menu').show();
			$('.dropdown-item').show();
		}
	})
	
	var dropdownParam = {
			CATEGORY		:	"PACKTYPE"
	};
	// common에 있는 공통 펑션으로 드롭다운 구성
	setSelbox("dropdownProduct", "/common/showCode", dropdownParam);

});