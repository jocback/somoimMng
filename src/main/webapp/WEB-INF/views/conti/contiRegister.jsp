<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=26faddbaa5c5f513af69537a4117eef7&libraries=services,clusterer"></script>
<input type="hidden" id="type" value="${type}"/>
<input type="hidden" id="modSeq" value="${schSeq}"/>

<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>콘티등록</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">교회</li>
                    <li class="breadcrumb-item active">콘티등록</li>
                </ol>
            </div>
        </div>
    </div>
</section>

<!-- Main content -->
<section class="content">
    <div class="container-fluid">

        <!-- SELECT2 EXAMPLE -->
        <div class="card card-default">
            <div class="card-header">
                <h3 class="card-title">콘티등록</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>콘티명</label>
                            <input type="text" class="form-control" placeholder="콘티명" id="contiNm">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>콘티날짜</label>
                            <input type="text" class="form-control" placeholder="콘티날짜" id="contiDate">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h3 class="card-title">찬양목록</h3>

                                <div class="card-tools">
                                    <div class="input-group input-group-sm" style="width: 150px;">
                                        <div class="input-group-append">
                                            <button type="submit" class="btn btn-info" id="btn_addStore">추가</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- /.card-header -->
                            <form id="frm_scoreList">

                                <div class="card-body table-responsive p-0">
                                    <table class="table table-hover text-nowrap" style="min-width: 700px;">
                                        <thead>
                                        <tr>
                                            <th style="width: 5%;">순서</th>
                                            <th style="width: 20%;">찬양제목</th>
                                            <th style="width: 5%;">코드</th>
                                            <th style="width: 30%;">파일명</th>
                                            <th style="width: 10%;">삭제</th>
                                        </tr>
                                        </thead>
                                        <tbody id="tb_scoreList">
                                            <tr>
                                                <td>1</td>
                                                <td>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" name="scoreNm" readonly/>
                                                        <span class="input-group-append">
                                                                <button type="button" class="btn btn-info btn-flat" onclick="contiRegister.searchStore(this);">검색</button>
                                                        </span>
                                                    </div>
                                                </td>
                                                <td><input type="text" class="form-control" placeholder="코드" name="code" readonly></td>
                                                <td><input type="text" class="form-control" placeholder="파일명" name="realFileNm" readonly></td>
                                                <td>
                                                    <button type="button" class="btn btn-danger btn-flat" onclick="contiRegister.removeScore(this);">삭제</button>
                                                </td>
                                                <input type="hidden" name="scoreNo"/>
                                                <input type="hidden" name="scoreSeq"/>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </form>
                            <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
                    </div>
                </div>
            </div>
            <!-- /.card-body -->
            <div class="card-footer">
                <button type="button" class="btn btn-info" onclick="contiRegister.goSchList()">목록</button>
                <c:if test="${type=='modify'}">
                    <button type="button" class="btn btn-danger" onclick="contiRegister.delete()">삭제</button>
                    <button type="button" class="btn btn-primary" onclick="contiRegister.modify()">수정</button>
                </c:if>
                <c:if test="${type!='modify'}">
                    <button type="button" class="btn btn-primary" onclick="contiRegister.register()">저장</button>
                </c:if>
            </div>
        </div>
        <!-- /.card -->

    </div><!-- /.container-fluid -->
</section>
<!-- /.content -->


<div class="modal" id="mapModal">
    <div class="">
        <div class="modal-content" style="overflow: auto;">
            <div class="modal-header">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="장소, 주소, 버스 검색" id="inp_searchKeyword" value="스타벅스 서울대입구">
                    <div class="input-group-append">
                        <button type="button" class="btn btn-default" id="btn_searchKeyword">
                            <i class="fa fa-search"></i>
                        </button>
                    </div>
                </div>
                <button type="button" class="close" id="btn_mapModalClose"><span>&times;</span></button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <!-- info row -->
                    <div class="row invoice-info" id="div_searchResult">
                    </div>
                    <!-- /.row -->
                </div>
            </div>
        </div>
    </div>
</div>