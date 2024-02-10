<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=26faddbaa5c5f513af69537a4117eef7&libraries=services"></script>

<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>모임장소</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">모임장소</li>
                    <li class="breadcrumb-item active">지도보기</li>
                </ol>
            </div>
        </div>
    </div><!-- /.container-fluid -->
</section>

<section class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="input-group col-md-10" style="position: absolute; z-index: 2;">
<%--                <input type="search" class="form-control form-control-lg" placeholder="Type your keywords here">--%>
                <div class="input-group-append">
                    <button type="button" class="btn btn-lg btn-default" id="btn_search">
                        <i class="fa fa-search"></i>
                    </button>
                </div>
            </div>
            <div class="col-12" >
                <div id="map" style="width: 100%;position: relative;"></div>
            </div>
        </div>
    </div>
</section>

<!--map css 끝!-->

<div class="modal" id="mapModal">
    <div class="">
        <div class="modal-content" style="overflow: auto;">
            <div class="modal-header">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="장소, 주소, 버스 검색" id="inp_searchKeyword">
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
<%--                        <div class="col-sm-12 invoice-col">--%>
<%--                            <address>--%>
<%--                                <strong>팀홀튼 신논현점</strong>--%>
<%--                                <span class="text-muted small">음식점 > 카페 > 커피전문점</span><br>--%>
<%--                                서울 강남구 강남대로 476<br>--%>
<%--                            </address>--%>
<%--                        </div>--%>
                    </div>
                    <!-- /.row -->
                </div>
            </div>
        </div>
    </div>
</div>
