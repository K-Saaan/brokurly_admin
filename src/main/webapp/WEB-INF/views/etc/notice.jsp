<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/etc/notice.js"></script>
<style>
    .left-align {
        text-align: left;
    }
</style>
<h3>공지사항</h3>
<div class="container" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <b>조회건수 : </b><b id="cntNotice" style="margin-left: 10px;"></b>
</div>
<div class="container" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 10%;">
        <b>공지제목</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 30%;">
        <input id="noticeTitle" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 20%; flex-direction: row;">
        <button type="button" style="margin-right: 10px;" class="btn btn-success" id="noticeExcel">엑셀</button>
        <button type="button" class="btn btn-primary" id="noticeSearch">조회</button>
    </div>
</div>
<div id="realgridNotice" style="height: 400px; margin-top: 30px;"></div>
<form name="openForm">
    <input type="hidden" id="clickDataNotice" name="clickData" value="" />
</form>
