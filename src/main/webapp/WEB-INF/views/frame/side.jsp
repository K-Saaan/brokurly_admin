<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<div id="sidebar-wrapper">
    <ul class="sidebar-nav">
      <li class="sidebar-brand">
        <b style="color: white;">MENU</b>
      </li>
      <li><a href="#" class="menu1">고객</a></li>
	      <li><a href="${pageContext.request.contextPath}/member/show" class="menu1_down" style="display: none; padding-left: 20px;">고객정보조회</a></li>
      <li><a href="#" class="menu2">상품</a></li>
	      <li><a href="${pageContext.request.contextPath}/product/show" class="menu2_down" style="display: none; padding-left: 20px;">상품정보조회</a></li>
	      <li><a href="${pageContext.request.contextPath}/product/review" class="menu2_down" style="display: none; padding-left: 20px;">후기조회</a></li>
	      <li><a href="${pageContext.request.contextPath}/product/qna" class="menu2_down" style="display: none; padding-left: 20px;">문의조회</a></li>
	      <li><a href="${pageContext.request.contextPath}/product/coupon" class="menu2_down" style="display: none; padding-left: 20px;">쿠폰조회</a></li>
	      <li><a href="#" class="menu2_down" style="display: none; padding-left: 20px;">할인조회</a></li>
      <li><a href="#" class="menu3">주문</a></li>
		  <li><a href="${pageContext.request.contextPath}/order/showOrder" class="menu3_down" style="display: none; padding-left: 20px;">주문정보조회</a></li>
		  <li><a href="${pageContext.request.contextPath}/order/showChrg" class="menu3_down" style="display: none; padding-left: 20px;">결제정보조회</a></li>
	      <li><a href="#" class="menu3_down" style="display: none; padding-left: 20px;">배송정보조회</a></li>
	      <li><a href="${pageContext.request.contextPath}/order/regOrder" class="menu3_down" style="display: none; padding-left: 20px;">주문정보등록</a></li>
      <li><a href="#" class="menu4">빌링</a></li>
	      <li><a href="#" class="menu4_down" style="display: none; padding-left: 20px;">매출정보조회</a></li>
	      <li><a href="#" class="menu4_down" style="display: none; padding-left: 20px;">건별입금내역</a></li>
	      <li><a href="#" class="menu4_down" style="display: none; padding-left: 20px;">환불신청내역</a></li>
	      <li><a href="#" class="menu4_down" style="display: none; padding-left: 20px;">환불처리내역</a></li>
	      <li><a href="#" class="menu4_down" style="display: none; padding-left: 20px;">미납현황조회</a></li>
	      <li><a href="#" class="menu4_down" style="display: none; padding-left: 20px;">납부내역조회</a></li>
	      <li><a href="#" class="menu4_down" style="display: none; padding-left: 20px;">결제정보조회</a></li>
      <li><a href="#" class="menu5">공통</a></li>
	      <li><a href="${pageContext.request.contextPath}/etc/notice" class="menu5_down" style="display: none; padding-left: 20px;">공지사항</a></li>
	      <li><a href="#" class="menu5_down" style="display: none; padding-left: 20px;">자주묻는질문</a></li>
    </ul>
  </div>