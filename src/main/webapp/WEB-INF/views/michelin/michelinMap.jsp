<%--
  Created by IntelliJ IDEA.
  User: jaehoonyoun
  Date: 2024. 12. 18.
  Time: 04:36
  To change this template use File | Settings | File Templates.
--%>
<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=26faddbaa5c5f513af69537a4117eef7&libraries=services,clusterer"></script>

<style>
  .wrap {position: absolute;left: 0;bottom: 40px;width: 288px;height: 142px;margin-left: -144px;text-align: left;overflow: hidden;font-size: 12px;font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;line-height: 1.5;}
  .wrap * {padding: 0;margin: 0;}
  .wrap .info {width: 286px;height: 130px;border-radius: 5px;border-bottom: 2px solid #ccc;border-right: 1px solid #ccc;overflow: hidden;background: #fff;}
  .wrap .info:nth-child(1) {border: 0;box-shadow: 0px 1px 2px #888;}
  .info .title {padding: 5px 0 0 10px;height: 30px;background: #eee;border-bottom: 1px solid #ddd;font-size: 18px;font-weight: bold;}
  .info .close {position: absolute;top: 10px;right: 10px;color: #888;width: 17px;height: 17px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');}
  .info .close:hover {cursor: pointer;}
  .info .body {position: relative;overflow: hidden;}
  .info .desc {position: relative;margin: 13px 0 0 90px;height: 85px;}
  .desc .ellipsis {overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
  .desc .jibun {font-size: 11px;color: #888;margin-top: -2px;}
  .info .img {position: absolute;top: 6px;left: 5px;width: 73px;height: 71px;border: 1px solid #ddd;color: #888;overflow: hidden;}
  .info:after {content: '';position: absolute;margin-left: -12px;left: 50%;bottom: 0;width: 22px;height: 12px;background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')}
  .info .link {color: #5085BB;}
</style>

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
            <div class="input-group col-md-10" style="position: absolute; z-index: 2; justify-content: right">
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

<div class="modal" id="mapModal">
    <div class="modal-dialog modal-fullscreen">
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

