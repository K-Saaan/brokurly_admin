<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/product/reviewDtl.js"></script>
<div class="container">
    <div style="float: right; margin-bottom: 15px;">
        <button type="button" class="btn btn-primary" id="updateReview">수정</button>
    </div>
</div>
<div class="container" style="margin-top: 20px;">
    <div class="container" style="display: flex; flex-direction: column; border: 1px solid lightgrey;">
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>고객이름</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="custNm" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>상품이름</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="pdNm" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>후기날짜</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="reviewDate" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>후기내용</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <textarea id="reviewTxt" value="" style="height: 200px;" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search"></textarea>
            </div>
        </div>
        <div style="display: flex;">
            <div style="padding: 10px 15px; flex: 0 20%;">
                <b>좋아요</b>
            </div>
            <div style="display: flex; flex-wrap: inherit; padding: 5px 15px; flex: 0 80%;">
                <input id="reviewLike" value="" class="form-control me-2" type="text" placeholder="입력해주세요" aria-label="Search">
            </div>
        </div>
    </div>
</div>