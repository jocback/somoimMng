<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!--**********************************
Content body start
***********************************-->
<div class="content-body">

    <div class="row page-titles mx-0">
        <div class="col p-md-0">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">Dashboard</a></li>
                <li class="breadcrumb-item active"><a href="javascript:void(0)">Home</a></li>
            </ol>
        </div>
    </div>
    <!-- row -->

    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Vertical Form</h4>
                        <div class="basic-form">
                            <form>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">제목</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" placeholder="제목" id="schNm">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">날짜</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" placeholder="날짜" id="schDate">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">시간</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" placeholder="시간" id="schTime">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">인원</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" placeholder="인원" id="schCnt">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">장소</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" placeholder="장소" id="schLoc">
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label">참여인원</label>
                                    <div class="col-sm-10">
                                        <input type="text" class="form-control" placeholder="참여인원" id="auto_member">
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <label class="col-sm-2 col-form-label"></label>
                                    <div class="col-sm-10">
                                        <div class="form-group" id="memList">
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>

                        <div class="basic-form">
                            <form>

                                <div class="form-group row">
                                    <div class="col-sm-10">
                                        <button type="submit" class="btn btn-info" onclick="memRegister.register()">목록</button>
                                        <button type="submit" class="btn btn-primary" onclick="schRegister.register()">저장</button>
                                    </div>
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-10">

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Radio Buttons</h4>
                        <div class="basic-form">
                            <div class="form-group">
                                <div class="radio mb-3">
                                    <label>
                                        <input type="radio" name="optradio">Option 1</label>
                                </div>
                                <div class="radio mb-3">
                                    <label>
                                        <input type="radio" name="optradio">Option 2</label>
                                </div>
                                <div class="radio disabled">
                                    <label>
                                        <input type="radio" name="optradio" disabled="disabled">Option 3</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- #/ container -->
</div>
<!--**********************************
Content body end
***********************************-->