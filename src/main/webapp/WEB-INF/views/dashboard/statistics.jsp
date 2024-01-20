<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>

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

            <div class="col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">최근 모임</h4>
                        <div class="table-responsive">
                            <table class="table header-border">
                                <thead>
                                <tr>
                                    <th scope="col">일자</th>
                                    <th scope="col">제목</th>
                                    <th scope="col">인원 수</th>
                                    <th scope="col">장소</th>
                                </tr>
                                </thead>
                                <tbody id="tbody_sttList">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">자주 본 멤버</h4>
                        <div class="basic-form">
                            <form>
                                <div class="form-group">
                                    <select class="custom-select mr-sm-2" id="sel_memSeq" onchange="statistics.selectOftMem();">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="table-responsive">
                            <table class="table header-border">
                                <thead>
                                <tr>
                                    <th scope="col">이름</th>
                                    <th scope="col">참석횟수</th>
                                </tr>
                                </thead>
                                <tbody id="tbody_oftList">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">참석한 일정</h4>
                        <div class="basic-form">
                            <form>
                                <div class="form-group">
                                    <select class="custom-select mr-sm-2" id="sel_atnMemSeq" onchange="statistics.selectAtnSch();">
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="table-responsive">
                            <table class="table header-border">
                                <thead>
                                <tr>
                                    <th scope="col">일자</th>
                                    <th scope="col">제목</th>
                                    <th scope="col">인원 수</th>
                                    <th scope="col">장소</th>
                                </tr>
                                </thead>
                                <tbody id="tbody_atnSchList">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">자주 못 본 멤버</h4>
                        <div class="table-responsive">
                            <table class="table header-border">
                                <thead>
                                <tr>
                                    <th scope="col">이름</th>
                                    <th scope="col">마지막 참석일</th>
                                    <th scope="col">미참석 일수</th>
                                </tr>
                                </thead>
                                <tbody id="tbody_lstList">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">참여 횟수</h4>
                        <div class="table-responsive">
                            <table class="table header-border">
                                <thead>
                                <tr>
                                    <th scope="col">이름</th>
                                    <th scope="col">참석횟수</th>
                                </tr>
                                </thead>
                                <tbody id="tbody_atnCntList">
                                </tbody>
                            </table>
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