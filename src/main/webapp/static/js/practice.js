/**
 * 
 */
 
console.log("Hello");

document.addEventListener('DOMContentLoaded', function () {
	    var container = document.getElementById('realgrid');
	    var provider = new RealGrid.LocalDataProvider(false);
	    var gridView = new RealGrid.GridView(container);
	    gridView.setDataSource(provider);

	provider.setFields([
		{
			fieldName: 'KorName',
			dataType: 'text',
		},
		{
			fieldNmae: 'Age',
			dataType: 'number',
		},
	]);
	gridView.setColumns([
		{
			name: 'KorNameColumn',
			fieldName: 'KorName',
			type: 'data',
			width: '70',
			header: {
				text: '이름',
			}
		}
	]);
});
