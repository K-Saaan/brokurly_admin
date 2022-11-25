// 사이드 메뉴 클릭 이벤트
$('.menu1').click(function(){
	if($('.menu1_down').is(':visible')){
		$('.menu1_down').hide();
	} else {
		$('.menu1_down').show();
	}
	$('.menu2_down').hide();
	$('.menu3_down').hide();
	$('.menu4_down').hide();
	$('.menu5_down').hide();
});
$('.menu2').click(function(){
	if($('.menu2_down').is(':visible')){
		$('.menu2_down').hide();
	} else {
		$('.menu2_down').show();
	}
	$('.menu1_down').hide();
	$('.menu3_down').hide();
	$('.menu4_down').hide();
	$('.menu5_down').hide();
});
$('.menu3').click(function(){
	if($('.menu3_down').is(':visible')){
		$('.menu3_down').hide();
	} else {
		$('.menu3_down').show();
	}
	$('.menu1_down').hide();
	$('.menu2_down').hide();
	$('.menu4_down').hide();
	$('.menu5_down').hide();
});
$('.menu4').click(function(){
	if($('.menu4_down').is(':visible')){
		$('.menu4_down').hide();
	} else {
		$('.menu4_down').show();
	}
	$('.menu1_down').hide();
	$('.menu2_down').hide();
	$('.menu3_down').hide();
	$('.menu5_down').hide();
});
$('.menu5').click(function(){
	if($('.menu5_down').is(':visible')){
		$('.menu5_down').hide();
	} else {
		$('.menu5_down').show();
	}
	$('.menu1_down').hide();
	$('.menu2_down').hide();
	$('.menu3_down').hide();
	$('.menu4_down').hide();
});
