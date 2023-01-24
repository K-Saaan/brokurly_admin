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
			fieldName: "catecode",
			dataType: "text",
		},
		{
			fieldName: "pdnm",
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
			fieldName: "pdseller",
			dataType: "text",
		},
		{
			fieldName: "packtype",
			dataType: "text",
		},
		{
			fieldName: "salesunit",
			dataType: "text",
		},
		{
			fieldName: "orgloc",
			dataType: "text",
		},
		{
			fieldName: "pdweight",
			dataType: "text",
		},
		{
			fieldName: "alerginfo",
			dataType: "text",
		},
		{
			fieldName: "expdateinfo",
			dataType: "text",
		},
		{
			fieldName: "pdextinfo",
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
			name: "catecode",
			fieldName: "catecode",
			type: "data",
			width: "120",
			header: {
				text: "카테고리코드",
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
			name: "pdseller",
			fieldName: "pdseller",
			type: "data",
			width: "120",
			header: {
				text: "판매자",
			},
		},
		{
			name: "packtype",
			fieldName: "packtype",
			type: "data",
			width: "120",
			header: {
				text: "포장타입",
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
			name: "orgloc",
			fieldName: "orgloc",
			type: "data",
			width: "120",
			header: {
				text: "원산지",
			},
		},
		{
			name: "pdweight",
			fieldName: "pdweight",
			type: "data",
			width: "120",
			header: {
				text: "상품중량",
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
			name: "expdateinfo",
			fieldName: "expdateinfo",
			type: "data",
			width: "120",
			header: {
				text: "유통기한정보",
			},
		},
		{
			name: "pdextinfo",
			fieldName: "pdextinfo",
			type: "data",
			width: "120",
			header: {
				text: "상품부가정보",
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
	
	var countData = 0;
	// 고객정보조회 조회버튼 클릭시
//	$("#productSearch").click(function(){
//		subprovider.clearRows(); // 서브 그리드 비우기
//		var param = {
//				PRODUCT_NAME		:	$("#productName").val()
//		};
//		ajax("/product/showProductByName", param, function(returnData){
//			countData = returnData.countData;
//			gridData = returnData.codeList;
//			$("#cntProduct").text(countData); // 화면에 조회건수 출력
//			// 조회된 값이 있을때만 실제 조회 쿼리 돌리게 설정
//			if(countData > 0){
//				var gridData = returnData.codeList;
//				provider.fillJsonData(gridData, { fillMode : "set"});
//				gridCellClicked();
//				gridDblCellClicked();
//			} else {
//				provider.clearRows(); // 조회 결과가 없을시 그리드 비우기
//			}
//		})
//	});
	// 고객정보조회 조회버튼 클릭시 // 테스트
	$("#productSearch").click(function(){
		subprovider.clearRows(); // 서브 그리드 비우기
		var param = {
				PRODUCT_NAME		:	$("#productName").val(),
				PACK_TYPE		:	$("#packType").val()
		};
		ajax("/product/showProduct", param, function(returnData){
			gridData = returnData.codeList;
			countData = returnData.countData;
			$("#cntProduct").text(countData); // 화면에 조회건수 출력
			// 조회된 값이 있을때만 실제 조회 쿼리 돌리게 설정
			if(countData > 0) {
				var gridData = returnData.codeList;
				provider.fillJsonData(gridData, { fillMode : "set"});
				gridCellClicked();
				gridDblCellClicked();
			} else {
				provider.clearRows(); // 조회 결과가 없을시 그리드 비우기
			}
		})
	});
	// 엑셀 버튼 클릭시
	$("#productExcel").click(function(){
		if(countData > 0) {
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
		$('#packType').text( $(this).text() ).val( $(this).text() );
		if($('.dropdown-item').is(':visible')){
			$('.dropdown-menu').hide();
			$('.dropdown-item').hide();
		} else {
			$('.dropdown-menu').show();
			$('.dropdown-item').show();
		}
	});

});