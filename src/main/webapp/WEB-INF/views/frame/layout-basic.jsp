<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link rel="stylesheet" href="../static/css/styles.css">
<link type="text/css" href="../static/css/realgrid-style.css" rel="stylesheet" />
<link type="text/css" href="../static/css/bootstrap.css" rel="stylesheet" />
<link type="text/css" href="../static/css/bootstrap.min.css" rel="stylesheet" />
<link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
<script src="//code.jquery.com/jquery.min.js"></script>
<link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"> <!-- datepicker 용도 -->
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script> <!-- datepicker 용도 -->
<script src="//maxcdn.bootstrapcdn.com/bootstrap/latest/js/bootstrap.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/echarts@5.4.1/dist/echarts.min.js"></script> <!-- echarts -->
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/common/realgrid.2.6.0.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/common/realgrid-lic.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/libs/jszip.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/common/bootstrap.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/common/bootstrap.min.js"></script>
<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/common/common.js"></script>
<style>
	
</style>
	<title>title</title>
	<tiles:insertAttribute name="include"/>
</head>
<body>
	<tiles:insertAttribute name="header"/>
	<div id="page-wrapper" style="padding-top: 60px;">
		<tiles:insertAttribute name="side"/>
		<div id="page-content-wrapper">
			<div class="container-fluid">
				<tiles:insertAttribute name="body"/>
				<tiles:insertAttribute name="footer"/>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="${pageContext.request.contextPath}/static/js/common/home.js"></script>
</body>
</html>