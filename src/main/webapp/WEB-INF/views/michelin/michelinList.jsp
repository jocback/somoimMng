<%--
  Created by IntelliJ IDEA.
  User: jaehoonyoun
  Date: 2024. 12. 17.
  Time: 11:45
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>미쉐린 목록</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">미쉐린</li>
                    <li class="breadcrumb-item active">미쉐린목록</li>
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
                        <h3 class="card-title">미쉐린목록</h3>
                        <div class="card-tools">
                            <div class="input-group input-group-sm" style="width: 150px;">
                                <div class="">
                                    <button type="button" class="btn btn-info" onclick="michelinList.michelinModal();">등록</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body table-responsive p-0">

                        <div class="dataTables_wrapper dt-bootstrap4">
                            <%--                            <div class="row"><div class="col-sm-12 col-md-6"></div><div class="col-sm-12 col-md-6"></div></div>--%>
<%--                            <div class="row">--%>
<%--                                <div class="col-md-10 offset-md-1">--%>
<%--                                    <div class="row">--%>
<%--                                        <div class="col-6">--%>
<%--                                            <div class="form-group">--%>
<%--                                                <select class="custom-select mr-sm-2" style="width: 100%;" id="searchType" name="searchType">--%>
<%--                                                    <option selected value="schNm">일정명</option>--%>
<%--                                                    <option value="storeName">장소</option>--%>
<%--                                                    <option value="userNm">참석자</option>--%>
<%--                                                </select>--%>
<%--                                            </div>--%>
<%--                                        </div>--%>
<%--                                        <div class="col-6">--%>
<%--                                            <div class="form-group">--%>
<%--                                                <div class="input-group">--%>
<%--                                                    <input type="search" class="form-control" id="searchWord" name="searchWord">--%>
<%--                                                    <div class="input-group-append">--%>
<%--                                                        <button type="button" class="btn btn-lg btn-default" onclick="schList.selectSchList();">--%>
<%--                                                            <i class="fa fa-search"></i>--%>
<%--                                                        </button>--%>
<%--                                                    </div>--%>
<%--                                                </div>--%>
<%--                                            </div>--%>
<%--                                        </div>--%>
<%--                                    </div>--%>
<%--                                </div>--%>
<%--                            </div>--%>



                            <div class="row">
                                <div class="col-sm-12">
                                    <table class="table table-bordered table-hover dataTable dtr-inline text-nowrap">
                                        <thead>
                                        <tr>
                                            <th class="text-center">미쉐린명</th>
                                            <th class="text-center">시설명</th>
                                            <th class="text-center">도로주소명</th>
                                            <th class="text-center">지역</th>
                                            <th class="text-center">홈페이지</th>
                                            <th class="text-center">대표메뉴</th>
                                        </tr>
                                        </thead>
                                        <tbody id="tbody_michelinList">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="row" id="michelinPaging"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>



<!-- Modal -->
<div class="modal fade" id="michelinModal">
    <div class="modal-dialog modal-fullscreen" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">등록</h5>
                <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                </button>
            </div>
            <input type="hidden" id="memSeq" name="memSeq" value=""/>
            <div class="modal-body">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label>미쉐린파일</label>
                                <div class="input-group">
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="michelinFile" onchange="michelinList.selectFile(this);">
                                        <label class="custom-file-label" for="michelinFile">Choose file</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="michelinList.saveMichelin();">저장</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <%--                    <button type="button" class="btn btn-primary">Save changes</button>--%>
            </div>
        </div>
    </div>
</div>
