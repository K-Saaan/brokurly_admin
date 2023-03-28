<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/product/qna.js"></script>
<h3>문의 정보 조회 화면</h3>
<div class="container" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <b>조회건수 : </b><b id="cntPdQna" style="margin-left: 10px;"></b>
</div>
<div class="container" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 10%;">
        <b>상품코드</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 30%;">
        <input id="qnaPdCode" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
    <div style="padding: 10px 15px; flex: 0 10%;">
        <b>고객코드</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 30%;">
        <input id="qnaCustCode" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 20%; flex-direction: row;">
        <button type="button" style="margin-right: 10px;" class="btn btn-success" id="qnaExcel">엑셀</button>
        <button type="button" class="btn btn-primary" id="qnaSearch">조회</button>
    </div>
</div>

<div id="realgridQna" style="height: 400px; margin-top: 30px;"></div>
<form name="openForm">
    <input type="hidden" id="qnaClickQnaCode" name="clickData" value="" />
</form>