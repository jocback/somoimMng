<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%--<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/bootstrap/css/bootstrap.css"/>--%>
<%--<link rel="stylesheet" type="text/css" href="${pageContext.request.contextPath}/bootstrap/css/dashboard.css"/>--%>

<!--**********************************
CSS
***********************************-->
<link href="/lib/bootstrap/css/style.css" rel="stylesheet">
<link href="/lib/jquery/css/jquery-ui-1.12.1.css" rel="stylesheet">

<!-- Bootstrap core JavaScript-->

<!--**********************************
Scripts
***********************************-->

<!--bootstrap -->
<script src="/lib/bootstrap/plugins/common/common.min.js"></script>
<script src="/lib/bootstrap/js/custom.min.js"></script>
<script src="/lib/bootstrap/js/settings.js"></script>
<script src="/lib/bootstrap/js/gleek.js"></script>
<script src="/lib/bootstrap/js/styleSwitcher.js"></script>

<!-- custom -->
<script src="/js/common/dateUtil.js"></script>
<script src="/js/common/stringUtil.js"></script>
<script src="/js/common/paging.js"></script>

<!-- jQuery -->
<%--<script src="/lib/jquery/js/jquery-3.6.0.min.js"></script>--%>
<script src="/lib/jquery/js/jquery-ui-1.12.1.js"></script>

<!-- User Custom Script -->
<script src="/js/common/common.js"></script>

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