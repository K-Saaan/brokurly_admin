<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<% String user = (String) session.getAttribute("userId"); %>

<nav class="navbar navbar-expand-md navbar-dark"
style="background-color: purple; position: fixed; top: 0; left: 0; width: 100%; height: 60px; z-index: 999;">
        <div class="container">
            <a href="${pageContext.request.contextPath}/home" class="navbar-brand">BROKURLY</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav-menu"
                aria-controls="navbarNav-menu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-end" id="navbarNav-menu">
                <ul class="navbar-nav text-center">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">홈</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">태그</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">방명록</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><%=user%></a>
                    </li>
                </ul>
                <form class="d-flex m-2">
                    <input class="form-control me-2" type="text" placeholder="검색" aria-label="Search">
                    <input value="검색" type="button" class="submit btn btn-outline" style="background-color: white; margin-left: 10px;">
                  </form>
            </div>
        </div>
    </nav>