//상세화면 js

document.addEventListener('DOMContentLoaded', function () {
	var clickData = opener.document.openForm.clickData.value;

	$("#memberCodeDtl").attr('value', clickData);
});