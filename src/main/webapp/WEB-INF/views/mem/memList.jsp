<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>
<div class="content-body">
    <div class="row page-titles mx-0">
        <div class="col p-md-0">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">멤버 목록</a></li>
            </ol>
        </div>
    </div>


    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">멤버 목록</h4>
                        <div class="table-responsive">
                            <div class="row">
                                <div class="col-sm-12">
                                    <table class="table table-striped">
                                        <thead>
                                        <tr>
                                            <th>Id</th>
                                            <th>Name</th>
                                            <th>Age</th>
                                            <th>RegDate</th>
                                            <th>ExtdTerm</th>
                                            <th>Gender</th>
                                            <th>Location</th>
                                        </tr>
                                        </thead>
                                        <tbody id="tbody_memList">
                                        </tfoot>
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
    <!-- #/ container -->

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

</div>