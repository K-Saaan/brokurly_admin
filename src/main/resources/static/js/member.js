document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('realgrid');
    const provider = new RealGrid.LocalDataProvider(false);
    const gridView = new RealGrid.GridView(container);
    
    gridView.setDataSource(provider);

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
	
	
	var param = {
			
	};
	// 고객정보조회 조회버튼 클릭시
	$("#memberSearch").click(function(){
		ajax("/member/showMember", param, function(returnData){
			var gridData = returnData.codeList;
			var countData = gridData.length;
			if(countData > 0){
				provider.fillJsonData(gridData, { fillMode : "set"});
				gridCellClicked();
				console.log("데이터가 있습니다.");
			} else {
				console.log("데이터가 없습니다.");
			}
		})
	});
	
	function gridCellClicked(){
		gridView.onCellClicked = function(grid, clickData){
			var selectOneData = gridView.getDataSource().getJsonRow(gridView.getCurrent().dataRow);
			console.log("클릭한 그리드의 데이터")
			console.log(selectOneData)
		}
	}

});