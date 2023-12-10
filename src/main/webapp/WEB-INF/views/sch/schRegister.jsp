<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!--**********************************
Content body start
***********************************-->
<div class="content-body">

    <input type="hidden" id="type" value="${type}"/>
    <input type="hidden" id="modSeq" value="${schSeq}"/>

    <div class="row page-titles mx-0">
        <div class="col p-md-0">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Home</a></li>
            </ol>
        </div>
    </div>
    <!-- row -->

    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Vertical Form</h4>
                        <div class="basic-form">
                            <form>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">제목</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" placeholder="제목" id="schNm">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">날짜</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" placeholder="날짜" id="schDate" value="2023">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">시간</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" placeholder="시간" id="schTime" value="1900">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">인원</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" placeholder="인원" id="schCnt">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">장소</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" placeholder="장소" id="schLoc">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">참여인원</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" placeholder="참여인원" id="auto_member">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label"></label>
                                    <div class="col-sm-10">
                                        <div class="form-group" id="memList">
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div class="basic-form">
                            <form>
                                <div class="form-group row">
                                    <div class="col-sm-10">
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
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <!-- #/ container -->
</div>
<!--**********************************
Content body end
***********************************-->