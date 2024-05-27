<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=26faddbaa5c5f513af69537a4117eef7&libraries=services,clusterer"></script>
<input type="hidden" id="type" value="${type}"/>
<input type="hidden" id="modSeq" value="${schSeq}"/>

<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>콘티목록</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">교회</li>
                    <li class="breadcrumb-item active">콘티목록</li>
                </ol>
            </div>
        </div>
    </div>
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
                                    <button type="button" class="btn btn-info" onclick="contiList.contiRegister()">콘티 등록</button>
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
                                            <th>콘티번호</th>
                                            <th>콘티명</th>
                                            <th>콘티날짜</th>
                                            <th>보기</th>
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
                <h5 class="modal-title">콘티 등록</h5>
                <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                </button>
            </div>
            <input type="hidden" id="memSeq" name="memSeq" value=""/>
            <div class="modal-body">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>콘티명</label>
                                <input type="text" class="form-control" placeholder="번호" id="contiNm">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>콘티날짜</label>
                                <input type="text" class="form-control" placeholder="제목" id="contiDate">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="contiList.saveScore();">저장</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <%--                    <button type="button" class="btn btn-primary">Save changes</button>--%>
            </div>
        </div>
    </div>
</div>
