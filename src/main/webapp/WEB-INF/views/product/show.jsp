<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/product/product.js"></script>
<div class="container" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
	<b>조회건수 : </b><b id="cntProduct" style="margin-left: 10px;"></b>
</div>
<div class="container" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
	<div style="padding: 10px 15px; flex: 0 10%;">
		<b>날짜</b>
	</div>
	<div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 30%;">
<!-- 		<input id="datepicker" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search"> -->
		<input class="datepicker" type="text">
	</div>
	<div style="padding: 10px 15px; flex: 0 10%;">
		<b>상품이름</b>
	</div>
	<div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 30%;">
		<input id="productName" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
	</div>
	<div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 20%; flex-direction: row;">
		<button type="button" style="margin-right: 10px;" class="btn btn-success" id="productExcel">엑셀</button>
		<button type="button" class="btn btn-primary" id="productSearch">조회</button>
	</div>
</div>
상품 정보 조회 화면
<div id="realgridProduct" style="height: 400px; margin-top: 30px;"></div>
<div id="subgridProduct" style="height: 400px; margin-top: 30px;"></div>
<form name="openForm">
	<input type="hidden" id="clickDataProduct" name="clickData" value="" />
</form>