/**
 * 
 */

document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('realgrid');
    const provider = new RealGrid.LocalDataProvider(false);
    const gridView = new RealGrid.GridView(container);
    gridView.setDataSource(provider);

	provider.setFields([
		{
			fieldName: "KorName",
			dataType: "text",
		},
	]);
	
	gridView.setColumns([
		{
			name: "KorNameColumn",
			fieldName: "KorName",
			type: "data",
			width: "70",
			header: {
				text: "이름",
			},
		},
	]);
});
