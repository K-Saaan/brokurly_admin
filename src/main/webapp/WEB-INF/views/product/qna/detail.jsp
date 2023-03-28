<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/product/qnaDtl.js"></script>
<div class="container" style="margin-top: 20px;">
    <div class="container" style="display: flex; flex-direction: column; border: 1px solid lightgrey;">
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>문의코드</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="qnaDtlQnaCode" readonly="readonly" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>문의제목</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="qnaDtlQnaTitle" readonly="readonly" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>고객코드</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="qnaDtlCustCode" readonly="readonly" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>상품코드</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="qnaDtlPdCode" readonly="readonly" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>문의내용</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <textarea id="qnaDtlQnaDesc" readonly="readonly" value="" style="height: 200px;" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search"></textarea>
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>문의작성일시</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="qnaDtlWriteDate" readonly="readonly" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>문의상태</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="qnaDtlQnaState" readonly="readonly" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
                <input id="qnaDtlQnaStateVal" style="display: none;" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>답변내용</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="qnaDtlQnaReply" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
    </div>
</div>
<div class="container">
    <div style="float: right; margin-top: 15px;">
        <button type="button" class="btn btn-primary" id="replyQna">답변</button>
    </div>
</div>