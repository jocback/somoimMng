<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!--**********************************
Content body start
***********************************-->
<div class="content-body">

    <input type="hidden" id="type" value="${type}"/>
    <input type="hidden" id="modSeq" value="${memSeq}"/>

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
                        <h4 class="card-title">회원등록</h4>
                        <div class="basic-form">
                            <form>
                                <div class="input-group mb-3">
                                    <label class="col-sm-2 col-form-label">아이디</label>
                                    <input type="text" class="form-control" placeholder="아이디" id="userId" name="userId">
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-dark" type="button">중복확인</button>
                                    </div>
                                </div>
                                <div class="input-group mb-3">
                                    <label class="col-sm-2 col-form-label">이름</label>
                                    <input type="text" class="form-control" placeholder="이름" id="userNm" name="userNm">
                                </div>
                                <div class="input-group mb-3">
                                    <label class="col-sm-2 col-form-label">나이</label>
                                    <input type="text" class="form-control" placeholder="나이" id="age" name="age">
                                </div>
                                <div class="input-group mb-3">
                                    <label class="col-sm-2 col-form-label">가입일</label>
                                    <input type="text" class="form-control" placeholder="가입일" id="regDate" name="regDate">
                                </div>
                                <div class="input-group mb-3">
                                    <label class="col-sm-2 col-form-label">성별</label>
                                    <input type="text" class="form-control" placeholder="성별" id="gender" name="gender">
                                </div>
                                <div class="input-group mb-3">
                                    <label class="col-sm-2 col-form-label">사는지역</label>
                                    <input type="text" class="form-control" placeholder="사는지역" id="loc" name="loc">
                                </div>
                                <div class="input-group mb-3">
                                    <label class="col-sm-2 col-form-label">메모</label>
                                    <input type="text" class="form-control" placeholder="메모" id="rmrk" name="rmrk">
                                </div>
                            </form>
                        </div>

                        <div class="basic-form">
                            <div class="form-group row">
                                <div class="col-sm-10">
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