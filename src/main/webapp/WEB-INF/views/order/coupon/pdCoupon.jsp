<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<% String mng = (String) session.getAttribute("mngId"); %>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/order/pdCoupon.js"></script>
<style>
    .bottomSpace {
        margin-bottom: 30px;
    }
</style>
<div class="container bottomSpace">
    <div style="float: right; margin-top: 15px;">
        <button type="button" style="margin-bottom: 10px;" class="btn btn-primary" id="useCpn">적용</button>
    </div>
</div>
<div class="container bottomSpace" style="margin-top: 20px;">
    <div id="orderPrdCpnGrid" class="bottomSpace" style="height: 300px;"></div>
</div>