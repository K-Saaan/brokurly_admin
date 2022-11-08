<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<link type="text/css" href="../static/css/realgrid-style.css" rel="stylesheet" />
<script type="text/javascript" src="../static/js/realgrid.2.6.0.min.js"></script>
<script type="text/javascript" src="../static/js/realgrid-lic.js"></script>
<script type="text/javascript" src="../static/js/libs/jszip.min.js"></script>
<script type="text/javascript" src="../static/js/jquery-3.6.1.min.js"></script>
<script type="text/javascript" src="../static/js/practice.js"></script>
	
<style>
	#realgrid {
	width: 100%;
	height: 440px;
	}
</style>
	
	<title>title</title>
	<tiles:insertAttribute name="include"/>
</head>
<body>
	<tiles:insertAttribute name="header"/>
	<tiles:insertAttribute name="side"/>
	<tiles:insertAttribute name="body"/>
</body>
</html>