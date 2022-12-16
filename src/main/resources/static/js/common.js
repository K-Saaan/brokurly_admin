function ajax(paramUrl, paramData, returnCallBack, uiType){
	$.ajax({
		url:	paramUrl,
		method:	"POST",
		type:	"POST",
		data:	JSON.stringify(paramData),
		dataType:	"json",
		async:	true,
		contentType:	"application/json;charset=utf-8",
		cache:	false,
		success:	function(returnData){
			console.log("success!")
			console.log(returnData)
			returnCallBack(returnData);
		},
		complete:	function(xhr, status){
			console.log("complete!")
			console.log(status)
		},
		error:	function(xhr, status, errorThrow){
			console.log("error!")
			console.log(errorThrow)
		}
	});
}