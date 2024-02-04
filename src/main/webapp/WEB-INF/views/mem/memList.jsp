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
                        <h3 class="card-title">DataTable with minimal features & hover style</h3>
                    </div>

                    <div class="card-body table-responsive p-0">

                        <div class="dataTables_wrapper dt-bootstrap4">
                            <div class="row"><div class="col-sm-12 col-md-6"></div><div class="col-sm-12 col-md-6"></div></div>
                            <div class="row">
                                <div class="col-sm-12">
                                    <table class="table table-bordered table-hover dataTable dtr-inline text-nowrap">
                                        <thead>
                                        <tr>
                                            <th class="text-center">제목</th>
                                            <th class="text-center">날짜</th>
                                            <th class="text-center">인원</th>
                                            <th class="text-center">장소</th>
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
    <div class="modal-dialog" role="document">
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
                        <div class="col-3">아이디</div>
                        <div class="col-9" id="userId"></div>
                    </div>
                    <div class="row">
                        <div class="col-3">이름</div>
                        <div class="col-9" id="userNm"></div>
                    </div>
                    <div class="row">
                        <div class="col-3">나이</div>
                        <div class="col-9" id="age"></div>
                    </div>
                    <div class="row">
                        <div class="col-3">가입일</div>
                        <div class="col-9" id="regDate"></div>
                    </div>
                    <div class="row">
                        <div class="col-3">연장기간</div>
                        <div class="col-9" id="extdTerm"></div>
                    </div>
                    <div class="row">
                        <div class="col-3">성별</div>
                        <div class="col-9" id="gender"></div>
                    </div>
                    <div class="row">
                        <div class="col-3">사는지역</div>
                        <div class="col-9" id="loc"></div>
                    </div>
                    <div class="row">
                        <div class="col-3">메모</div>
                        <div class="col-9" id="rmrk"></div>
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
