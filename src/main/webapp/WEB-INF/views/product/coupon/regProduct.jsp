<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<% String mng = (String) session.getAttribute("mngId"); %>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/product/regProduct.js"></script>
<style>
    .left-align {
        text-align: left;
    }
</style>
<div class="container">
    <div style="float: right; margin-top: 15px;">
        <button type="button" style="margin-bottom: 10px;" class="btn btn-primary" id="regCpnPd">등록</button>
    </div>
</div>
<div class="container" style="margin-top: 20px;">
    <div id="gridCpnPd" style="height: 400px; margin-top: 30px; margin-bottom: 30px;"></div>
    <div class="container" style="margin-top: 20px;">
        <button type="button" class="btn btn-primary" style="float: right; margin-top: 60px; margin-bottom: 10px;" id="cpnDtlPdSearch">조회</button>
    </div>
    <div class="container" style="margin-top: 40px;">
        <div class="container" style="display: flex; flex-direction: column; border: 1px solid lightgrey;">
            <div style="display: flex;">
                <div style="padding: 10px 15px; flex: 0 20%;">
                    <b>상품이름</b>
                </div>
                <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                    <input id="cpnDtlPdNm" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
                </div>
            </div>
        </div>
    </div>
</div>