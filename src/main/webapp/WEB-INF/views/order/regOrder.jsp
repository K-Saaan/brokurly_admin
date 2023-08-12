<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/order/regOrder.js"></script>
<style>
    .bottomSpace {
        margin-bottom: 30px;
        max-width: none;
    }
</style>
<h3>주문정보 등록 화면</h3>
<h5>주문고객 조회</h5>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>고객이름</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderMemberName" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 25%;"></div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; ">
        <button type="button" style="float: right; margin-right: 10px;" class="btn btn-primary" id="orderMemberAdd">추가</button>
        <button type="button" style="float: right;" class="btn btn-primary" id="orderMemberSearch">조회</button>
    </div>
</div>
<div id="orderMemberGrid" class="bottomSpace" style="height: 300px;"></div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>고객코드</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderMemberCode" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<hr>
<h5>배송지코드 조회</h5>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>고객코드</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderDeliCustCode" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 25%;"></div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 20%; flex-direction: row;">
        <button type="button" style="float:right; margin-right: 10px;" class="btn btn-primary" id="orderDeliAdd">추가</button>
        <button type="button" style="float: right;" class="btn btn-primary" id="orderDeliSearch">조회</button>
    </div>
</div>
<div id="orderDeliGrid" class="bottomSpace" style="height: 300px;"></div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>배송지코드</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderDeliLocCode" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<hr>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>수령인</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderReveNm" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>수령인 전화번호</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderReveTelNo" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>수령장소</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <div class="btn-group">
            <button type="button" class="btn dropdown-toggle dropdown-toggle-split toggleRevePlace" style="width: 200px; border: 1px solid lightgrey;" data-bs-toggle="dropdown" aria-expanded="false">
                <span id="revePlaceValue" class="visually-hidden"></span>
            </button>
            <ul class="dropdown-menu revePlaceMenu" id="dropdownRevePlace">
                <li class="dropdown-item itemRevePlace" value="">선택하세요</li>
                <li class="dropdown-item itemRevePlace" value="10">문앞</li>
                <li class="dropdown-item itemRevePlace" value="20">경비실</li>
                <li class="dropdown-item itemRevePlace" value="30">택배함</li>
                <li class="dropdown-item itemRevePlace" value="40">기타장소</li>
            </ul>
        </div>
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>수령장소 상세정보</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderRevePlaceDtl" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>배송완료 메시지</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderDeliComMsg" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<h5>상품 조회</h5>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>상품이름</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderPdName" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 5%;"></div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%; flex-direction: row;">
        <button type="button" class="btn btn-primary" style="float: right; margin-right: 10px;" id="orderPdReset">초기화</button>
        <button type="button" class="btn btn-primary" style="float: right; margin-right: 10px;" id="orderPdRemove">삭제</button>
        <button type="button" class="btn btn-primary" style="float: right; margin-right: 10px;" id="orderPdAdd">추가</button>
        <button type="button" class="btn btn-primary" style="float: right;" id="orderPdSearch">조회</button>
    </div>
</div>
<div id="orderPdGrid" class="bottomSpace" style="height: 300px;"></div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 60%;"></div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%; flex-direction: row;">
        <button type="button" class="btn btn-primary" style="float: right; margin-right: 10px;" id="orderPdAdReset">초기화</button>
        <button type="button" class="btn btn-primary" style="float: right; margin-right: 10px;" id="orderPdAdRemove">삭제</button>
    </div>
</div>
<div id="orderPdAddGrid" class="bottomSpace" style="height: 300px;"></div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>보유적립금</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderOwnReservedAmt" class="form-control me-2" type="text" readonly="readonly" placeholder="입력해주세요" aria-label="Search">
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 25%;">
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 20%; flex-direction: row;">
        <button type="button" class="btn btn-primary" style="float: right; margin-right: 10px;" id="orderShowOwnResAmt">조회</button>
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>사용적립금</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderUsedReservedAmt" class="form-control me-2" type="text" readonly="readonly" placeholder="입력해주세요" aria-label="Search">
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <span id="reserveAmtInfo" style="padding-top: 10px; color: red;"></span>
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>적립예정금액</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderTobeReserve" class="form-control me-2" type="text" readonly="readonly" placeholder="입력해주세요" aria-label="Search">
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 25%;">
        <span id="reserveRatio" style="padding-top: 10px; color: red;"></span>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 20%; flex-direction: row;">
        <button type="button" class="btn btn-primary" style="float: right; margin-right: 10px;" id="orderMbrshCalc">계산</button>
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>배송비</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderDeliPrice" class="form-control me-2" type="text" readonly="readonly" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>총 주문금액</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderTotOdAmt" class="form-control me-2" type="text" readonly="readonly" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>상품 할인금액</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderPdDiscAmt" class="form-control me-2" type="text" readonly="readonly" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>쿠폰 할인금액</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderCpnDiscAmt" class="form-control me-2" type="text" readonly="readonly" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>총 할인금액</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderTotDiscAmt" class="form-control me-2" type="text" readonly="readonly" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>총 결제금액</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderTotPayAmt" class="form-control me-2" type="text" readonly="readonly" placeholder="입력해주세요" aria-label="Search">
    </div>
    <span id="infoDeliPrice" style="padding-top: 10px; color: red;"></span>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>납부자명</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="payAcntNm" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>핸드폰번호</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="payAcntTel" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>이메일</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="payAcntEmail" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>생년월일</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="payAcntBirth" class="form-control me-2" type="text" placeholder="YYYYMMDD" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>납부방법</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <div class="btn-group">
            <button type="button" class="btn dropdown-toggle dropdown-toggle-split togglePayWay" style="width: 200px; border: 1px solid lightgrey;" data-bs-toggle="dropdown" aria-expanded="false">
                <span id="payWayValue" class="visually-hidden"></span>
            </button>
            <ul class="dropdown-menu payWayMenu" id="dropdownPayWay">
                <li class="dropdown-item itemPayWay" value="">선택하세요</li>
                <li class="dropdown-item itemPayWay" value="01">계좌이체</li>
                <li class="dropdown-item itemPayWay" value="02">카드</li>
            </ul>
        </div>
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>은행</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <div class="btn-group">
            <button type="button" class="btn dropdown-toggle dropdown-toggle-split toggleBank" style="width: 200px; border: 1px solid lightgrey;" data-bs-toggle="dropdown" aria-expanded="false">
                <span id="bankValue" class="visually-hidden"></span>
            </button>
            <ul class="dropdown-menu bankMenu" id="dropdownBank">
                <li class="dropdown-item itemBank" value="">선택하세요</li>
            </ul>
        </div>
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>예금주</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="acntHolder" class="form-control me-2" type="text" readonly="readonly" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>계좌번호</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="acntNo" class="form-control me-2" type="text" readonly="readonly" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>카드번호</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="cardNo" class="form-control me-2" type="text" readonly="readonly" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>카드만료일자</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="cardExpDt" class="form-control me-2" type="text" readonly="readonly" placeholder="YYYYMMDD" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>할부여부</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="installYn" type="checkbox" disabled="disabled">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>할부개월</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="installM" class="form-control me-2" type="text" readonly="readonly" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>가상계좌번호</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="virtualAcntNo" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>카드유효년</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="cardDueYy" class="form-control me-2" type="text" readonly="readonly" placeholder="YY" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>카드유효월</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="cardDueMm" class="form-control me-2" type="text" readonly="readonly" placeholder="MM" aria-label="Search">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit;">
    <div class="container bottomSpace" style="float:right;">
        <button type="button" style="float: right; margin-bottom: 10px;" class="btn btn-primary" id="regOrder">등록</button>
    </div>
</div>
<input id="clickPdCode" type="text" style="display: none;">
<input id="clickCustCode" type="text" style="display: none;">
<input id="clickRow" type="text" style="display: none;">
<input id="bindCpnCode" type="text" style="display: none;">
<input id="bindCpnNm" type="text" style="display: none;">
<input id="bindCpnPrice" type="text" style="display: none;">
<input id="bindCpnRatio" type="text" style="display: none;">
<input id="bindMinOdAmt" type="text" style="display: none;">
<input id="bindMaxAmt" type="text" style="display: none;">
<input id="hiddenPdCode" type="text" style="display: none;">
<input id="hiddenPdCnt" type="text" style="display: none;">
<input id="hiddenPdDiscAmt" type="text" style="display: none;">
<input id="hiddenCpnDiscAmt" type="text" style="display: none;">
<input id="hiddenCpnCode" type="text" style="display: none;">
<input id="hiddenPdOptCode" type="text" style="display: none;">
<button type="button" style="display: none;" class="btn btn-primary" id="useCpnBtn"></button>