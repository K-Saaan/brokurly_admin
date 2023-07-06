<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/order/regOrder.js"></script>
<style>
    .bottomSpace {
        margin-bottom: 30px;
    }
</style>
<h3>주문정보 등록 화면</h3>
<div class="container bottomSpace" style="float:right;">
    <button type="button" style="float: right; margin-bottom: 10px;" class="btn btn-primary" id="regOrder">등록</button>
</div>
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
<div id="orderMemberGrid" class="bottomSpace" style="height: 400px;"></div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>고객코드</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderMemberCode" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>
<hr>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>주문일시</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="datepickerOrder" type="text">
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%; ">
        <b>주문상태</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%; ">
        <div class="btn-group">
            <button type="button" class="btn dropdown-toggle dropdown-toggle-split toggleOrderState" style="width: 200px; border: 1px solid lightgrey;" data-bs-toggle="dropdown" aria-expanded="false">
                <span id="orderStateValue" class="visually-hidden"></span>
            </button>
            <ul class="dropdown-menu orderStateMenu" id="dropdownOrderState">
                <li class="dropdown-item itemOrderState" value="">선택하세요</li>
            </ul>
        </div>
    </div>
</div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>납부방식</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <div class="btn-group">
            <button type="button" class="btn dropdown-toggle dropdown-toggle-split toggleOrderPayState" style="width: 200px; border: 1px solid lightgrey;" data-bs-toggle="dropdown" aria-expanded="false">
                <span id="orderPayStateValue" class="visually-hidden"></span>
            </button>
            <ul class="dropdown-menu payStateMenu" id="dropdownOrderPayState">
                <li class="dropdown-item itemOrderPayState" value="">선택하세요</li>
                <li class="dropdown-item itemOrderPayState" value="10">납부전</li>
                <li class="dropdown-item itemOrderPayState" value="20">납부완료</li>
                <li class="dropdown-item itemOrderPayState" value="30">환불처리</li>
            </ul>
        </div>
    </div>
</div>
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
<div id="orderDeliGrid" class="bottomSpace" style="height: 400px;"></div>
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
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 25%;"></div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 20%; flex-direction: row;">
        <button type="button" class="btn btn-primary" style="float: right; margin-right: 10px;" id="orderOdAdd">추가</button>
        <button type="button" class="btn btn-primary" style="float: right;" id="orderOdSearch">조회</button>
    </div>
</div>
<div id="orderPdGrid" class="bottomSpace" style="height: 400px;"></div>
<div class="container bottomSpace" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 15%;">
        <b>상품코드</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 40%;">
        <input id="orderPdCode" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
</div>