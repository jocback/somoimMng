<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>

<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>찬양목록</h1>
            </div>
        </div>
    </div><!-- /.container-fluid -->
</section>

<section class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-body table-responsive p-0">

                        <div class="dataTables_wrapper dt-bootstrap4">

                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <div class="input-group">
                                                    <input type="search" class="form-control" id="searchWord" name="searchWord">
                                                    <div class="input-group-append">
                                                        <button type="button" class="btn btn-lg btn-default" onclick="selScorePopup.selectScoreList();">
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
