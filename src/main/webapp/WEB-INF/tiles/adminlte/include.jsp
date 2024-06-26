<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%--<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.css"/>--%>
<%--<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/bootstrap/css/dashboard.css"/>--%>

<!--**********************************
CSS
***********************************-->
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback">
<link rel="stylesheet" href="/lib/adminlte/plugins/fontawesome-free/css/all.min.css">
<link rel="stylesheet" href="/lib/adminlte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css">
<link rel="stylesheet" href="/lib/adminlte/dist/css/adminlte.css">
<link rel="stylesheet" href="/lib/custom/css/custom.css">
<link rel="stylesheet" href="/lib/swiper/css/swiper.min.css">




<link href="/lib/bootstrap/plugins/fullcalendar/css/fullcalendar.min.css" rel="stylesheet">
<link href="/lib/jquery/css/jquery-ui-1.12.1.css" rel="stylesheet">

<!-- Bootstrap core JavaScript-->

<!--**********************************
Scripts
***********************************-->

<!--bootstrap -->

<script src="/lib/adminlte/plugins/jquery/jquery.min.js"></script>
<script src="/lib/adminlte/plugins/jquery/serializeobject.js"></script>
<script src="/lib/jquery/js/jquery-ui-1.12.1.js"></script>

<script src="/lib/adminlte/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="/lib/adminlte/dist/js/adminlte.min.js"></script>
<script src="/lib/swiper/js/swiper.min.js"></script>

<!-- 주소 검색 -->
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>


<%--<script src="/lib/bootstrap/plugins/fullcalendar/js/fullcalendar.min.js"></script>--%>

<!-- custom -->
<script src="/js/common/dateUtil.js"></script>
<script src="/js/common/stringUtil.js"></script>
<script src="/js/common/paging.js"></script>
<script src="/js/common/common.js"></script>
<script src="/js/common/popup.js"></script>
<script src="/js/common/cryptojs.min.js"></script>

<!-- jQuery -->
<%--<script src="/lib/jquery/js/jquery-3.6.0.min.js"></script>--%>
<%--<script src="/lib/jquery/js/jquery-ui-1.12.1.js"></script>--%>

<script>
    $(function() {
        // memRegister.init();
        $("body").show();
    });
    var jsonParam = '${jsonStr}';
    if(jsonParam!='') {
        jsonParam = JSON.parse('${jsonStr}');
    }

</script>