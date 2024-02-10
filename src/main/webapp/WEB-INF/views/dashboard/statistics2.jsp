<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>

<!-- Content Header (Page header) -->
<div class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1 class="m-0">대시보드</h1>
            </div><!-- /.col -->
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><a href="#">대시보드</a></li>
                    <li class="breadcrumb-item active">통계</li>
                </ol>
            </div><!-- /.col -->
        </div><!-- /.row -->
    </div><!-- /.container-fluid -->
</div>
<!-- /.content-header -->

<section class="content">
    <div class="container-fluid">

        <div class="row">
            <div class="col-md-6">
                <!-- 최근 모임 -->
                <div class="card">
                    <div class="card-header border-transparent">
                        <h3 class="card-title">최근 모임</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table m-0">
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
                        <!-- /.table-responsive -->
                    </div>
                </div>
                <!-- /.card -->
            </div>
            <div class="col-md-6">
                <!-- 참석한 일정 -->
                <div class="card">
                    <div class="card-header border-transparent">
                        <h3 class="card-title">참석한 일정</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <select class="custom-select rounded-0" id="sel_atnMemSeq" onchange="statistics.selectAtnSch();">
                                </select>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table m-0">
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
                        <!-- /.table-responsive -->
                    </div>
                </div>
                <!-- /.card -->
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <!-- 자주 본 멤버 -->
                <div class="card">
                    <div class="card-header border-transparent">
                        <h3 class="card-title">자주 본 멤버</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <select class="custom-select rounded-0" id="sel_memSeq" onchange="statistics.selectOftMem();">
                                </select>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table m-0">
                                <thead>
                                <tr>
                                    <th scope="col">이름</th>
                                    <th scope="col">참석횟수</th>
                                </tr>
                                </thead>
                                <tbody id="tbody_oftList">
                                <tr>
                                    <td><a href="pages/examples/invoice.html">OR9842</a></td>
                                    <td>Call of Duty IV</td>
                                    <td><span class="badge badge-success">Shipped</span></td>
                                    <td>
                                        <div class="sparkbar" data-color="#00a65a" data-height="20">90,80,90,-70,61,-83,63</div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <!-- /.table-responsive -->
                    </div>
                </div>
                <!-- /.card -->
            </div>
            <div class="col-md-6">
                <!-- 자주 못 본 멤버 -->
                <div class="card">
                    <div class="card-header border-transparent">
                        <h3 class="card-title">자주 못 본 멤버</h3>

                        <div class="card-tools">
                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                <i class="fas fa-minus"></i>
                            </button>
                            <button type="button" class="btn btn-tool" data-card-widget="remove">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body p-0">
                        <div class="table-responsive">
                            <table class="table m-0">
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
                        <!-- /.table-responsive -->
                    </div>
                </div>
                <!-- /.card -->
            </div>
        </div>

    </div>
</section>

