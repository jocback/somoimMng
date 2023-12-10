<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>
<div class="content-body">
    <div class="row page-titles mx-0">
        <div class="col p-md-0">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">멤버 목록</a></li>
            </ol>
        </div>
    </div>


    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">멤버 목록</h4>
                        <div class="table-responsive">
                            <table class="table table-striped">
                                <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>RegDate</th>
                                    <th>Gender</th>
                                    <th>Location</th>
                                </tr>
                                </thead>
                                <tbody id="tbody_memList">
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- #/ container -->
</div>