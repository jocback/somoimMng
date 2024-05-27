<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>

<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>찬양목록</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">교회</li>
                    <li class="breadcrumb-item active">찬양목록</li>
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
                        <h3 class="card-title">찬양목록</h3>
                        <div class="card-tools">
                            <div class="input-group input-group-sm" style="width: 150px;">
                                <div class="">
                                    <button type="button" class="btn btn-info" onclick="scoreList.scoreModal()">악보 등록</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="card-body table-responsive p-0">

                        <div class="dataTables_wrapper dt-bootstrap4">

                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <div class="row">
                                        <div class="col-6">
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <input type="search" class="form-control" id="searchWord" name="searchWord">
                                                    <div class="input-group-append">
                                                        <button type="button" class="btn btn-lg btn-default" onclick="scoreList.selectScoreList();">
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
                                            <th>번호</th>
                                            <th>제목</th>
                                            <th>코드</th>
                                            <th>파일명</th>
                                            <th>삭제</th>
                                        </tr>
                                        </thead>
                                        <tbody id="tbody_scoreList">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row" id="scorePaging"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Modal -->
<div class="modal fade" id="regScoreModal">
    <div class="modal-dialog modal-fullscreen" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">악보 등록</h5>
                <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                </button>
            </div>
            <input type="hidden" id="memSeq" name="memSeq" value=""/>
            <div class="modal-body">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>번호</label>
                                <input type="text" class="form-control" placeholder="번호" id="scoreNo">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>제목</label>
                                <input type="text" class="form-control" placeholder="제목" id="scoreNm">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>코드</label>
                                <input type="text" class="form-control" placeholder="코드" id="code">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>악보</label>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="scoreFile" onchange="scoreList.selectFile(this);">
                                        <label class="custom-file-label" for="scoreFile">Choose file</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="scoreList.saveScore();">저장</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <%--                    <button type="button" class="btn btn-primary">Save changes</button>--%>
            </div>
        </div>
    </div>
</div>
