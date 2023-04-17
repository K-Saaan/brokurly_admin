<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/product/cpnDtl.js"></script>
<div class="container">
    <div style="float: right; margin-top: 15px;">
        <button type="button" style="margin-bottom: 10px;" class="btn btn-primary" id="regCpn">등록</button>
    </div>
</div>
<div class="container" style="margin-top: 20px;">
    <div class="container" style="display: flex; flex-direction: column; border: 1px solid lightgrey;">
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>쿠폰코드</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="cpnDtlCpnCode" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>쿠폰구분</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="cpnDtlCpnGubun" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>쿠폰명</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="cpnDtlCpnNm" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>생성일시</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="cpnDtlCreateDate" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>만료일시</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="cpnDtlEndDate" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>쿠폰금액</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="cpnDtlCpnPrice" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>할인률</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="cpnDtlCpnRatio" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>최대할인금액</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="cpnDtlMaxAmt" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>상세내용</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="cpnDtlDtlDesc" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>사용조건</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="cpnDtlUseReq" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
    </div>
</div>
