<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/memberDtl.js"></script>
<div class="container" style="margin-top: 20px;">
	<div class="container" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
		<div style="padding: 10px 15px; flex: 0 10%;">
			<b>날짜</b>
		</div>
		<div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
	<!-- 		<input id="datepicker" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search"> -->
			<input id="datepicker" type="text">
		</div>
		<div style="padding: 10px 15px; flex: 0 10%;">
			<b>고객이름</b>
		</div>
		<div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
			<input id="memberName" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
		</div>
		<div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 20%; flex-direction: row-reverse;">
			<button type="button" class="btn btn-primary" id="memberSearch">조회</button>
		</div>
	</div>
	<div class="container" style="display: flex; flex-direction: column; border: 1px solid lightgrey;">
		<div style="display: flex;">
			<div style="padding: 10px 15px; flex: 0 20%;">
				<b>고객코드</b>
			</div>
			<div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 80%;">
				<input id="memberCodeDtl" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
			</div>
		</div>
		<div style="display: flex;">
			<div style="padding: 10px 15px; flex: 0 20%;">
				<b>고객이름</b>
			</div>
			<div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 80%;">
				<input id="memberName" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
			</div>
		</div>
		<div style="display: flex;">
			<div style="padding: 10px 15px; flex: 0 20%;">
				<b>고객번호</b>
			</div>
			<div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 80%;">
				<input id="memberPhone" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
			</div>
		</div>
	</div>
</div>