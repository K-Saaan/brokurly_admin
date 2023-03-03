<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/product/review.js"></script>
<h3>후기 정보 조회 화면</h3>
<div class="container" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
	<b>조회건수 : </b><b id="cntPdReview" style="margin-left: 10px;"></b>
</div>
<div class="container" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
	<div style="padding: 10px 15px; flex: 0 10%;">
		<b>상품이름</b>
	</div>
	<div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 30%;">
		<input id="reviewName" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
	</div>
	<div style="padding: 10px 15px; flex: 0 10%;">
		<b>포장타입</b>
	</div>
	<div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 30%;">
<!-- 		<input id="packType" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search"> -->
		<div class="btn-group">
		  <button type="button" class="btn dropdown-toggle dropdown-toggle-split" style="width: 200px; border: 1px solid lightgrey;" data-bs-toggle="dropdown" aria-expanded="false">
		    <span id="reviewpackType" class="visually-hidden"></span>
		  </button>
		  <ul class="dropdown-menu" id="dropdownReview">
		    <li class="dropdown-item" value="">선택하세요</li>
		  </ul>
		</div>
	</div>
	<div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 20%; flex-direction: row;">
		<button type="button" style="margin-right: 10px;" class="btn btn-success" id="reviewExcel">엑셀</button>
		<button type="button" class="btn btn-primary" id="reviewSearch">조회</button>
	</div>
</div>

<div id="realgridReview" style="height: 400px; margin-top: 30px;"></div>
<form name="openForm">
	<input type="hidden" id="clickDataReview" name="clickData" value="" />
</form>