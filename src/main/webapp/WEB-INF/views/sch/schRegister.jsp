<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!--**********************************
Content body start
***********************************-->
<input type="hidden" id="type" value="${type}"/>
<input type="hidden" id="modSeq" value="${schSeq}"/>

<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>일정등록</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">일정관리</li>
                    <li class="breadcrumb-item active">일정등록</li>
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
                            <label>제목</label>
                            <input type="text" class="form-control" placeholder="제목" id="schNm">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>날짜</label>
                            <input type="text" class="form-control" placeholder="날짜" id="schDate">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>시간</label>
                            <input type="text" class="form-control" placeholder="시간" id="schTime" value="1900">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>장소</label>
                            <input type="text" class="form-control" placeholder="장소" id="schLoc">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>인원</label>
                            <input type="text" class="form-control" placeholder="인원" id="schCnt">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>참여인원</label>
                            <input type="text" class="form-control" placeholder="참여인원" id="auto_member">
                        </div>
                        <div class="form-group row">
                            <label class="col-sm-2 col-form-label"></label>
                            <div class="col-sm-10">
                                <div class="form-group" id="memList">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!-- /.card-body -->
            <div class="card-footer">
                <button type="button" class="btn btn-info" onclick="schRegister.goSchList()">목록</button>
                <c:if test="${type=='modify'}">
                    <button type="button" class="btn btn-danger" onclick="schRegister.delete()">삭제</button>
                    <button type="button" class="btn btn-primary" onclick="schRegister.modify()">수정</button>
                </c:if>
                <c:if test="${type!='modify'}">
                    <button type="button" class="btn btn-primary" onclick="schRegister.register()">저장</button>
                </c:if>
            </div>
        </div>
        <!-- /.card -->

    </div><!-- /.container-fluid -->
</section>
<!-- /.content -->