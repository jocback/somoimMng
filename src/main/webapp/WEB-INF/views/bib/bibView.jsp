<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>

<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>성경</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="javascript:void(0);">성경</a></li>
                    <li class="breadcrumb-item active">성경</li>
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
                        <h3 class="card-title">성경</h3>
                    </div>

                    <div class="card-body table-responsive p-0">

                        <div class="dataTables_wrapper dt-bootstrap4">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label>말씀</label>
                                        <input type="text" class="form-control" placeholder="말씀" id="mainNm">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="시작 장" id="stChpt">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="시작 절" id="stVers">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="종료 장" id="endChpt">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="종료 절" id="endVers">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <button class="btn-sm btn-primary" tabindex="0" aria-controls="example1" type="button" id="btn_searchBib">
                                            <span>검색</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
<%--                                <div class="col-sm-12 col-md-6">--%>
<%--                                    <div class="dataTables_filter">--%>
<%--                                        <label>--%>
<%--                                            성경 <input type="search" class="form-control" style="width: 100px;" id="mainNm">--%>
<%--                                            <input type="search" class="form-control" style="width: 50px;" id="stChpt" />장--%>
<%--                                            <input type="search" class="form-control" style="width: 50px;" id="stVers" />절 ~--%>
<%--                                                <span>검색</span>--%>
<%--                                            </button>--%>
<%--                                        </label>--%>
<%--                                    </div>--%>
<%--                                </div>--%>
<%--                                <div class="col-sm-12 col-md-6">--%>
<%--                                    <div class="dataTables_filter">--%>
<%--                                        <label>--%>
<%--                                            <input type="search" class="form-control" style="width: 50px;" id="endChpt" />장--%>
<%--                                            <input type="search" class="form-control" style="width: 50px;" id="endVers" />절--%>
<%--                                            <button class="btn-sm btn-primary" tabindex="0" aria-controls="example1" type="button" id="btn_searchBib">--%>
<%--                                                <span>검색</span>--%>
<%--                                            </button>--%>
<%--                                        </label>--%>
<%--                                    </div>--%>
<%--                                </div>--%>
<%--                                <div class="col-sm-12 col-md-6">--%>
<%--                                    <div class="dt_buttons btn_group">--%>
<%--                                        성경 <input type="search" class="form-control" style="width: 100px;" id="mainNm">--%>
<%--                                        <input type="search" class="form-control" style="width: 50px;" id="stChpt" />장--%>
<%--                                        <input type="search" class="form-control" style="width: 50px;" id="stVers" />절 ~--%>
<%--                                        <input type="search" class="form-control" style="width: 50px;" id="endChpt" />장--%>
<%--                                        <input type="search" class="form-control" style="width: 50px;" id="endVers" />절--%>
<%--                                        <button class="btn-sm btn-primary" tabindex="0" aria-controls="example1" type="button" id="btn_searchBib">--%>
<%--                                            <span>검색</span>--%>
<%--                                        </button>--%>
<%--                                    </div>--%>
<%--                                </div>--%>
                            </div>
                            <div class="row">
                                <div class="col-sm-12 col-md-12">
                                    <table class="table table-bordered table-hover dataTable dtr-inline text-nowrap">
                                        <colgroup>
                                            <col style="width: 10%;" />
                                            <col style="width: 10%" />
                                            <col style="width: 80%;" />
                                        </colgroup>
                                        <tbody id="tbd_bibList">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

