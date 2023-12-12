<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!--**********************************
Sidebar start
***********************************-->
<div class="nk-sidebar">
    <div class="nk-nav-scroll">
        <ul class="metismenu" id="menu">
            <li class="nav-label">Dashboard</li>
            <li>
                <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                    <i class="icon-speedometer menu-icon"></i><span class="nav-text">Dashboard</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="/dashboard/statistics">통계</a></li>
<%--                    <li><a href="/dashboard/statistics">통계</a></li>--%>
                </ul>
            </li>
            <li class="mega-menu mega-menu-sm">
                <a class="has-arrow" href="javascript:void();" aria-expanded="false">
                    <i class="icon-grid menu-icon"></i><span class="nav-text">일정관리</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="/sch/schList">일정목록</a></li>
                    <li><a href="/sch/schRegister">일정등록</a></li>
                </ul>
            </li>
            <li class="mega-menu mega-menu-sm">
                <a class="has-arrow" href="javascript:void();" aria-expanded="false">
                    <i class="icon-grid menu-icon"></i><span class="nav-text">회원관리</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="/mem/memList">회원목록</a></li>
                    <li><a href="/mem/memRegister">회원등록</a></li>
                </ul>
            </li>
            <li class="mega-menu mega-menu-sm">
                <a class="has-arrow" href="javascript:void();" aria-expanded="false">
                    <i class="icon-grid menu-icon"></i><span class="nav-text">모임장소</span>
                </a>
                <ul aria-expanded="false">
                    <li><a href="/loc/locMap">지도보기</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
<!--**********************************
Sidebar end
***********************************-->