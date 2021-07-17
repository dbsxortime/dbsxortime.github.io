<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<h1>this is jsp include test.</h1>
	<%@ include file="../test/1_main.html"%>
	<h1>line!</h1>
	<hr/>
	<%@ include file="../test/2_aboutme.html"%>
</body>
</html>