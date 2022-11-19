<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<nav class="navbar navbar-expand-md navbar-dark" style="background-color: purple;">
        <div class="container">
            <a href="#" class="navbar-brand">BROKURLY</a>
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
                </ul>
                <form class="d-flex m-2">
                    <input class="form-control me-2" type="text" placeholder="검색" aria-label="Search">
                    <input value="검색" type="button" class="submit btn btn-outline-dark">
                  </form>
            </div>
        </div>
    </nav>