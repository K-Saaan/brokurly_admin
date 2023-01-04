<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/login/login.js"></script>
<style>
   
   html,
   body {
     height: 100%;
   }
   
   body {
     display: flex;
     align-items: center;
     padding-top: 40px;
     padding-bottom: 40px;
     background-color: #f5f5f5;
   }
   
   .form-signin {
     width: 100%;
     max-width: 330px;
     padding: 15px;
     margin: auto;
   }
   
   .form-signin .checkbox {
     font-weight: 400;
   }
   
   .form-signin .form-floating:focus-within {
     z-index: 2;
   }
   
   .form-signin input[type="email"] {
     margin-bottom: -1px;
     border-bottom-right-radius: 0;
     border-bottom-left-radius: 0;
   }
   
   .form-signin input[type="password"] {
     margin-bottom: 10px;
     border-top-left-radius: 0;
     border-top-right-radius: 0;
   }

</style>
<main class="form-signin">
      <form action="login.jsp" method="post">
         <h1 class="h3 mb-3 fw-normal">로그인 페이지</h1>
         
         <div class="form-floating">
         	<label for="id">아이디</label>
            <input type="text" class="form-control" id="id" placeholder="아이디 입력...">
         </div>
         <div class="form-floating">
         	<label for="pwd">비밀번호</label>
            <input type="password" class="form-control" id="pwd" placeholder="Password">
         </div>
         <div class="checkbox mb-3">
            <label>
               <input type="checkbox" value="remember-me"> 아이디 저장
            </label>
         </div>
         <button type="button" class="btn btn-primary" id="loginBtn">로그</button>
         <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
      </form>
   </main>