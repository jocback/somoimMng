<%--
  Created by IntelliJ IDEA.
  User: jaehoonyoun
  Date: 2022/04/30
  Time: 0:01
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>혼밥 모임</title>

    <link rel="icon" type="image/png" sizes="16x16" href="/lib/bootstrap/images/favicon.png">

    <!--**********************************
    Scripts
    ***********************************-->


</head>
<body class="hold-transition sidebar-mini">


<div class="wrapper ">

    <!-- Content Wrapper. Contains page content -->
    <div class="">
            <tiles:insertAttribute name="body"/>

    </div>
    <!-- /.content -->
</div>

<tiles:insertAttribute name="include"/>
<%--<script src="/lib/bootstrap/plugins/moment/moment.min.js"></script>--%>
<%--<script src="/lib/bootstrap/plugins/fullcalendar/js/fullcalendar.min.js"></script>--%>
<%--<script src="/lib/bootstrap/js/plugins-init/fullcalendar-init.js"></script>--%>
<script type="text/javascript" src="${pageContext.request.contextPath}/js/somoim<tiles:getAsString name="includeJs" />.js?111"></script>
</body>
</html>
