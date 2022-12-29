<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/member.js"></script>
<div class="container" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
	<b>조회건수 : </b><b id="cntMember" style="margin-left: 10px;"></b>
</div>
<div class="container" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
	<div style="padding: 10px 15px; flex: 0 10%;">
		<b>날짜</b>
	</div>
	<div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 30%;">
<!-- 		<input id="datepicker" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search"> -->
		<input id="datepicker" type="text">
	</div>
	<div style="padding: 10px 15px; flex: 0 10%;">
		<b>고객이름</b>
	</div>
	<div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 30%;">
		<input id="memberName" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
	</div>
	<div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 20%; flex-direction: row-reverse;">
		<button type="button" class="btn btn-primary" id="memberSearch">조회</button>
	</div>
</div>
고객 정보 조회 화면
<div id="realgrid"></div>
<div id="subgrid" style="height: 400px; margin-top: 30px;"></div>
