<%@ page language="java" contentType="text/html;charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<input type="hidden" id="popupMemSeq" value="${memSeq}"/>
<style>
  html,
  body {
    position: relative;
    height: 100%;
  }

  body {
    background: #eee;
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    color: #000;
    margin: 0;
    padding: 0;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>
<!-- Modal -->
<div class="modal fade" id="viewContiPopup">
    <div class="modal-dialog modal-fullscreen" role="document">
        <div class="modal-content">
<%--            <div class="modal-header">--%>
<%--                <h5 class="modal-title">일정 상세</h5>--%>
<%--                <button type="button" class="close" data-dismiss="modal" aria-label="Close">--%>
<%--                    <span aria-hidden="true">×</span>--%>
<%--                </button>--%>
<%--            </div>--%>
            <div class="modal-body">
                <button type="button" class="close" onclick="window.close();">
                    <span aria-hidden="true">×</span>
                </button>
                <div class="swiper main_swiper">
                    <div class="swiper-wrapper">
                        <c:forEach var="item" items="${contiScoreList}" varStatus="status">
                            <div class="swiper-slide"><img src="/conti/fileView/${item.fileSeq}" style="object-fit: contain" /></div>
                        </c:forEach>
<%--                        <div class="swiper-slide"><img src="/conti/fileView/215" style="object-fit: contain" /></div>--%>
<%--                        <div class="swiper-slide"><img src="/conti/fileView/216" style="object-fit: contain" /></div>--%>
<%--                        <div class="swiper-slide"><img src="/conti/fileView/217" style="object-fit: contain" /></div>--%>
<%--                        <div class="swiper-slide"><img src="/conti/fileView/218" style="object-fit: contain" /></div>--%>
<%--                        <div class="swiper-slide"><img src="/conti/fileView/219" style="object-fit: contain" /></div>--%>


                    </div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
<%--            <div class="modal-footer">--%>
<%--                <button type="button" class="btn btn-primary" onclick="memDetailPopup.modify();">수정</button>--%>
<%--                <button type="button" class="btn btn-secondary" onclick="memDetailPopup.close();">닫기</button>--%>
<%--            </div>--%>
        </div>
    </div>
</div>