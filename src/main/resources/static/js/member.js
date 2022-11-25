document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('realgrid');
    const provider = new RealGrid.LocalDataProvider(false);
    const gridView = new RealGrid.GridView(container);
    gridView.setDataSource(provider);

	provider.setFields([
		{
			fieldName: "memberCode",
			dataType: "text",
		},
		{
			fieldName: "memberName",
			dataType: "text",
		},
		{
			fieldName: "memberPhone",
			dataType: "text",
		},
		{
			fieldName: "memberEmail",
			dataType: "text",
		},
	]);
	
	gridView.setColumns([
		{
			name: "memberCode",
			fieldName: "memberCode",
			type: "data",
			width: "120",
			header: {
				text: "고객코드",
			},
		},
		{
			name: "memberName",
			fieldName: "memberName",
			type: "data",
			width: "120",
			header: {
				text: "고객이름",
			},
		},
		{
			name: "memberPhone",
			fieldName: "memberPhone",
			type: "data",
			width: "120",
			header: {
				text: "고객 전화번호",
			},
		},
		{
			name: "memberEmail",
			fieldName: "memberEmail",
			type: "data",
			width: "120",
			header: {
				text: "고객 이메일",
			},
		},
	]);
	var param = {
			
	};
	// 고객정보조회 조회버튼 클릭시
	$("#memberSearch").click(function(){
		ajax("/showMember", param, function(returnData){
			var gridData = returnData.members;
			console.log(gridData);
		})
	})

});