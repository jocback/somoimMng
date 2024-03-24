<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=26faddbaa5c5f513af69537a4117eef7&libraries=services,clusterer"></script>


<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>매물추가</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">부동산</li>
                    <li class="breadcrumb-item active">매물추가</li>
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
                <h3 class="card-title">매물추가</h3>
            </div>
            <!-- /.card-header -->
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>네이버주소</label>
                            <div class="input-group input-group">
                                <input type="text" class="form-control" placeholder="네이버주소" id="naverUrl" name="naverUrl" value="https://fin.land.naver.com/articles/2412716701">
                                <span class="input-group-append">
                                        <button type="button" class="btn btn-info btn-flat" onclick="addLand.test();">추가</button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>소재지</label>
                            <div class="input-group input-group">
                                <input type="text" class="form-control" placeholder="네이버주소" id="address" name="naverUrl" value="https://fin.land.naver.com/articles/2412716701">
                                <span class="input-group-append">
                                        <button type="button" class="btn btn-info btn-flat" onclick="addLand.onPostCode();">검색</button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>보증금/월세</label>
                            <input type="text" class="form-control" placeholder="보증금/월세" id="deposit">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>관리비</label>
                            <input type="text" class="form-control" placeholder="관리비" id="admnCost">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>공급면적</label>
                            <input type="text" class="form-control" placeholder="공급면적" id="supplyArea">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>전용면적</label>
                            <input type="text" class="form-control" placeholder="전용면적" id="exclArea">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>층</label>
                            <input type="text" class="form-control" placeholder="층" id="floor">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>향</label>
                            <input type="text" class="form-control" placeholder="향" id="facing">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>방/욕실</label>
                            <input type="text" class="form-control" placeholder="방/욕실" id="room">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>복층여부</label>
                            <input type="text" class="form-control" placeholder="복층여부" id="duplex">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>입주가능일</label>
                            <input type="text" class="form-control" placeholder="입주가능일" id="moveInDate">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>매물번호</label>
                            <input type="text" class="form-control" placeholder="매물번호" id="saleNumber">
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label>매물소개</label>
                            <textarea class="form-control" rows="5" placeholder="매물소개" id="saleIntroduce"></textarea>
                        </div>
                    </div>
                </div>


            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-info" onclick="addLand.test()">등록</button>
<%--                <button type="button" class="btn btn-primary" onclick="addLand.register()">저장</button>--%>
            </div>
        </div>

    </div>
</section>