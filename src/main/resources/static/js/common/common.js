/**
 * url을 이용한 페이지 이동
 * 
 * @param url
 */
function goMainPage(url) {
	if(url==null || url=='')return;
	var f = makeform(url);
	
	f.submit();
}