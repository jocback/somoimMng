<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>

<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>회원목록</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">회원관리</li>
                    <li class="breadcrumb-item active">회원목록</li>
                </ol>
            </div>
        </div>
    </div><!-- /.container-fluid -->
</section>

<section class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">회원목록</h3>
                        <div class="card-tools">
                            <div class="input-group input-group-sm" style="width: 150px;">
                                <div class="">
                                    <button type="button" class="btn btn-info" onclick="memList.goMemRegister();">회원등록</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-body table-responsive p-0">

                        <div class="dataTables_wrapper dt-bootstrap4">

                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <select class="custom-select mr-sm-2" style="width: 100%;" id="genderType" name="genderType">
                                                    <option selected value="">전체</option>
                                                    <option value="male">남</option>
                                                    <option value="female">여</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <select class="custom-select mr-sm-2" style="width: 100%;" id="searchType" name="searchType">
                                                    <option selected value="name">이름</option>
                                                    <option value="age">나이</option>
                                                    <option value="locate">지역</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <input type="search" class="form-control" id="searchWord" name="searchWord">
                                                    <div class="input-group-append">
                                                        <button type="button" class="btn btn-lg btn-default" onclick="memList.selectMemList();">
                                                            <i class="fa fa-search"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-sm-12">
                                    <table class="table table-bordered table-hover dataTable dtr-inline text-nowrap">
                                        <thead>
                                        <tr>
                                            <th>아이디</th>
                                            <th>이름</th>
                                            <th>나이</th>
                                            <th>등록일</th>
                                            <th>연장일</th>
                                            <th>성별</th>
                                            <th>지역</th>
                                        </tr>
                                        </thead>
                                        <tbody id="tbody_memList">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row" id="memPaging"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Modal -->
<div class="modal fade" id="memModal">
    <div class="modal-dialog modal-fullscreen" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                </button>
            </div>
            <input type="hidden" id="memSeq" name="memSeq" value=""/>
            <div class="modal-body">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-sm-12">
                            <table class="table table-bordered table-hover dataTable dtr-inline text-nowrap">
                                <tr>
                                    <th class="text-center col-3">아이디</th>
                                    <td class="col-9" id="userId"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">이름</th>
                                    <td class="col-9" id="userNm"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">이름ㄴ나이</th>
                                    <td class="col-9" id="age"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">가입일</th>
                                    <td class="col-9" id="regDate"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">연장기간</th>
                                    <td class="col-9" id="extdTerm"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">성별</th>
                                    <td class="col-9" id="gender"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">사는지역</th>
                                    <td class="col-9" id="loc"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">메모</th>
                                    <td class="col-9" id="rmrk"></td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="memList.memModify();">수정</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <%--                    <button type="button" class="btn btn-primary">Save changes</button>--%>
            </div>
        </div>
    </div>
</div>
