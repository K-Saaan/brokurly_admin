<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/product/coupon.js"></script>
<h3>쿠폰 정보 조회 화면</h3>
<div class="container" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <b>조회건수 : </b><b id="cntPdCoupon" style="margin-left: 10px;"></b>
</div>
<div class="container" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 10%;">
        <b>쿠폰코드</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 30%;">
        <input id="couponCode" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
    <div style="padding: 10px 15px; flex: 0 10%;">
        <b>쿠폰명</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 30%;">
        <input id="couponName" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 20%; flex-direction: row;">
        <button type="button" style="margin-right: 10px;" class="btn btn-success" id="couponExcel">엑셀</button>
        <button type="button" style="margin-right: 10px;" class="btn btn-primary" id="couponReg">등록</button>
        <button type="button" class="btn btn-primary" id="couponSearch">조회</button>
    </div>
</div>

<div id="realgridCoupon" style="height: 400px; margin-top: 30px;"></div>
<div class="container" style="">
    <button type="button" class="btn btn-primary" style="float: right; margin-top: 10px; margin-bottom: 10px;" id="couponDtlReg">상품등록</button>
</div>
<div id="subgridCoupon" style="height: 400px; margin-top: 30px;"></div>
<form name="openForm">
    <input type="hidden" id="clickCouponCode" name="clickData" value="" />
    <input type="hidden" id="clickCouponCd" name="clickData" value="" />
    <input type="hidden" id="clickStateCpn" name="clickData" value="" />
</form>