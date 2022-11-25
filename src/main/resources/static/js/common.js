function ajax(paramUrl, paramData, returnCallBack, uiType){
	$.ajax({
		url:	paramUrl,
		type:	"GET",
		data:	JSON.stringify(paramData),
		dataType:	"json",
		async:	true,
		contentType:	"application/json;charset=utf-8",
		cache:	false,
		success:	function(returnData){
			console.log(returnData)
		},
		complete:	function(xhr, status){
			console.log(status)
		},
		error:	function(xhr, status, errorThrow){
			console.log(errorThrow)
		}
	});
}