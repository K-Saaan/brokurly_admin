<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/order/regOrder.js"></script>
<h3>주문정보 등록 화면</h3>
<button type="button" style="float: right; margin-bottom: 10px;" class="btn btn-primary" id="regOrder">등록</button>
<div class="container" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 10%;">
        <b>고객이름</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 30%;">
        <input id="orderMemberName" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 20%; flex-direction: row-reverse;">
        <button type="button" class="btn btn-primary" id="orderMemberSearch">조회</button>
    </div>
</div>
<div id="orderMemberGrid" style="height: 400px; margin-top: 30px; margin-bottom: 30px;"></div>
<div class="container" style="display: flex; flex-wrap: inherit; border: 1px solid lightgrey;">
    <div style="padding: 10px 15px; flex: 0 10%;">
        <b>상품이름</b>
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 30%;">
        <input id="orderPdName" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
    </div>
    <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; padding: 5px 15px; flex: 0 20%; flex-direction: row;">
        <button type="button" class="btn btn-primary" id="orderOdSearch">조회</button>
    </div>
</div>
<div id="orderPdGrid" style="height: 400px; margin-top: 30px;"></div>
