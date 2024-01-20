<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>

<div class="login-form-bg h-100">
    <div class="container h-100">
        <!-- row -->
        <div class="row">
            <div class="col-12 mb-3 mt-3">
                <h4 class="d-inline">모임 선택</h4>
                <p class="text-muted">모임을 선택해 주세요.</p>
                <div class="row" id="div_somoimList">
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-3">
                        <div class="card text-center">
                            <div class="card-body">
                                <h5 class="card-title">모임추가, 생성하기</h5>
                                <a href="javascript:void(0);" class="btn btn-success mb-1" onclick="workspace.lyrAddSomoim();">모임 추가하기</a>
                                <a href="javascript:void(0);" class="btn btn-danger mb-1" onclick="workspace.lyrCreateSomoim();">모임 생성하기</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Row -->
    </div>
</div>

<!-- Modal -->
<div class="modal fade" id="createModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">소모임 등록</h5>
                <button type="button" class="close" data-dismiss="modal"><span>&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label for="smiNm" class="col-form-label">모임명:</label>
                    <input type="text" class="form-control" id="smiNm">
                </div>
                <div class="form-group">
                    <label for="centArea" class="col-form-label">모임지역:</label>
                    <input type="text" class="form-control" id="centArea">
                </div>
                <div class="form-group">
                    <label for="smiRmrk" class="col-form-label">모임소개:</label>
                    <textarea class="form-control" id="smiRmrk"></textarea>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" onclick="workspace.createSomoim();">생성</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <%--                    <button type="button" class="btn btn-primary">Save changes</button>--%>
            </div>
        </div>
    </div>
</div>