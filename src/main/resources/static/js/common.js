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
//			console.log("success!")
//			console.log(returnData)
//			console.log(JSON.stringify(paramData))
			returnCallBack(returnData);
		},
		complete:	function(xhr, status){
//			console.log("complete!")
//			console.log(status)
		},
		error:	function(xhr, status, errorThrow){
//			console.log("error!")
//			console.log(errorThrow)
		}
	});
}


/**
 * Post 방식으로 페이지를 이동한다. 
 * uri : 이동할 페이지
 */

function goMainPage(uri) {
	var form = document.createElement('form');
	
	form.setAttribute('method', 'post');
	form.setAttribute('action', uri);
	document.body.appendChild(form);
	form.submit();
}