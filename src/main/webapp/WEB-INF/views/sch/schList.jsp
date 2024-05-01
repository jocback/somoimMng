<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>일정관리</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">일정관리</li>
                    <li class="breadcrumb-item active">일정목록</li>
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
                        <h3 class="card-title">일정목록</h3>
                        <div class="card-tools">
                            <div class="input-group input-group-sm" style="width: 150px;">
                                <div class="">
                                    <button type="button" class="btn btn-info" onclick="schList.goSchRegister();">일정등록</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body table-responsive p-0">

                        <div class="dataTables_wrapper dt-bootstrap4">
<%--                            <div class="row"><div class="col-sm-12 col-md-6"></div><div class="col-sm-12 col-md-6"></div></div>--%>
                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <select class="custom-select mr-sm-2" style="width: 100%;" id="searchType" name="searchType">
                                                    <option selected value="schNm">일정명</option>
                                                    <option value="storeName">장소</option>
                                                    <option value="userNm">참석자</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <input type="search" class="form-control" id="searchWord" name="searchWord">
                                                    <div class="input-group-append">
                                                        <button type="button" class="btn btn-lg btn-default" onclick="schList.selectSchList();">
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
                                            <th class="text-center">제목</th>
                                            <th class="text-center">날짜</th>
                                            <th class="text-center">인원</th>
                                            <th class="text-center">장소</th>
                                        </tr>
                                        </thead>
                                        <tbody id="tbody_schList">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row" id="schPaging"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Modal -->
<div class="modal fade" id="schModal">
    <div class="modal-dialog modal-fullscreen" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                </button>
            </div>
            <input type="hidden" id="schSeq" name="schSeq" value=""/>
            <div class="modal-body">
                <div class="container-fluid">


                    <div class="row">
                        <div class="col-sm-12">
                            <table class="table table-bordered table-hover dataTable dtr-inline text-nowrap">
                                <tr>
                                    <th class="text-center col-3">제목</th>
                                    <td class="col-9" id="schNm"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">날짜</th>
                                    <td class="col-9" id="schDate"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">인원</th>
                                    <td class="col-9" id="schCnt"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">장소</th>
                                    <td class="col-9" id="schLoc"></td>
                                </tr>
                                <tr>
                                    <th class="text-center col-3">참석자</th>
                                    <td class="col-9" id="memList"></td>
                                </tr>
                            </table>
                        </div>
                    </div>

<%--                    <div class="row">--%>
<%--                        <div class="col-3">제목</div>--%>
<%--                        <div class="col-9" id="schNm"></div>--%>
<%--                    </div>--%>
<%--                    <div class="row">--%>
<%--                        <div class="col-3">날짜</div>--%>
<%--                        <div class="col-9" id="schDate"></div>--%>
<%--                    </div>--%>
<%--                    <div class="row">--%>
<%--                        <div class="col-3">인원</div>--%>
<%--                        <div class="col-9" id="schCnt"></div>--%>
<%--                    </div>--%>
<%--                    <div class="row">--%>
<%--                        <div class="col-3">장소</div>--%>
<%--                        <div class="col-9" id="schLoc"></div>--%>
<%--                    </div>--%>
<%--                    <div class="row" id="memList">--%>
<%--                    </div>--%>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="schList.schModify();">수정</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">닫기</button>
<%--                    <button type="button" class="btn btn-primary">Save changes</button>--%>
            </div>
        </div>
    </div>
</div>