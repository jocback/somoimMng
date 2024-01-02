<%@ page contentType="text/html;charset=UTF-8" language="java" %>
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
            <div class="col-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">멤버 목록</h4>
                        <div class="table-responsive">
                            <div class="row">
                                <div class="col-sm-12">
                                    <table class="table table-striped table-bordered zero-configuration">
                                        <thead>
                                        <tr>
                                            <th>제목</th>
                                            <th>날짜</th>
                                            <th>인원</th>
                                            <th>장소</th>
                                        </tr>
                                        </thead>
                                        <tbody id="tbody_schList">
                                        </tfoot>
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
    <!-- #/ container -->
    <!-- Modal -->
    <div class="modal fade" id="schModal">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-3">제목</div>
                            <div class="col-9" id="schNm"></div>
                        </div>
                        <div class="row">
                            <div class="col-3">날짜</div>
                            <div class="col-9" id="schDate"></div>
                        </div>
                        <div class="row">
                            <div class="col-3">인원</div>
                            <div class="col-9" id="schCnt"></div>
                        </div>
                        <div class="row">
                            <div class="col-3">장소</div>
                            <div class="col-9" id="schLoc"></div>
                        </div>
                        <div class="row" id="memList">
                            <div class="col-3">참여인원</div>
                            <div class="col-9"></div>
                            <div class="col-3"></div>
                            <div class="col-9">윤재훈/86/서울대입구</div>
                            <div class="col-3"></div>
                            <div class="col-9">윤재훈/86/서울대입구</div>
                            <div class="col-3"></div>
                            <div class="col-9">윤재훈/86/서울대입구</div>
                            <div class="col-3"></div>
                            <div class="col-9">윤재훈/86/서울대입구</div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
<%--                    <button type="button" class="btn btn-primary">Save changes</button>--%>
                </div>
            </div>
        </div>
    </div>
</div>