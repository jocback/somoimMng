<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<input type="hidden" id="type" value="${type}"/>
<input type="hidden" id="modSeq" value="${memSeq}"/>

<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>회원관리</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">회원관리</li>
                    <li class="breadcrumb-item active">회원등록</li>
                </ol>
            </div>
        </div>
    </div>
</section>

<!-- Main content -->
<section class="content">
    <div class="container-fluid">

        <!-- SELECT2 EXAMPLE -->
        <div class="card card-default">
            <div class="card-header">
                <h3 class="card-title">일정등록</h3>
                <%--                <div class="card-tools">--%>
                <%--                    <button type="button" class="btn btn-tool" data-card-widget="collapse">--%>
                <%--                        <i class="fas fa-minus"></i>--%>
                <%--                    </button>--%>
                <%--                    <button type="button" class="btn btn-tool" data-card-widget="remove">--%>
                <%--                        <i class="fas fa-times"></i>--%>
                <%--                    </button>--%>
                <%--                </div>--%>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>아이디</label>
                            <input type="text" class="form-control" placeholder="아이디" id="userId" name="userId">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>이름</label>
                            <input type="text" class="form-control" placeholder="이름" id="userNm" name="userNm">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>나이</label>
                            <input type="text" class="form-control" placeholder="나이" id="age" name="age">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>가입일</label>
                            <input type="text" class="form-control" placeholder="가입일" id="regDate" name="regDate">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>연장기간</label>
                            <input type="text" class="form-control" placeholder="연장기간" id="extdTerm" name="extdTerm">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>성별</label>
                            <input type="text" class="form-control" placeholder="성별" id="gender" name="gender">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>사는지역</label>
                            <input type="text" class="form-control" placeholder="사는지역" id="loc" name="loc">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>메모</label>
                            <input type="text" class="form-control" placeholder="메모" id="rmrk" name="rmrk">
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-info" onclick="memRegister.goMemList()">목록</button>
                <c:if test="${type=='modify'}">
                    <button type="button" class="btn btn-danger" onclick="memRegister.delete()">삭제</button>
                    <button type="button" class="btn btn-primary" onclick="memRegister.modify()">수정</button>
                </c:if>
                <c:if test="${type!='modify'}">
                    <button type="button" class="btn btn-primary" onclick="memRegister.register()">저장</button>
                </c:if>
            </div>
        </div>

    </div>
</section>