<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!--**********************************
Sidebar start
***********************************-->
<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="../../index3.html" class="brand-link">
        <img src="/lib/adminlte/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
        <span class="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
        <!-- Sidebar user (optional) -->
<%--        <div class="user-panel mt-3 pb-3 mb-3 d-flex">--%>
<%--            <div class="image">--%>
<%--                <img src="/lib/adminlte/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">--%>
<%--            </div>--%>
<%--            <div class="info">--%>
<%--                <a href="#" class="d-block">Alexander Pierce</a>--%>
<%--            </div>--%>
<%--        </div>--%>

        <!-- SidebarSearch Form -->
<%--        <div class="form-inline">--%>
<%--            <div class="input-group" data-widget="sidebar-search">--%>
<%--                <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">--%>
<%--                <div class="input-group-append">--%>
<%--                    <button class="btn btn-sidebar">--%>
<%--                        <i class="fas fa-search fa-fw"></i>--%>
<%--                    </button>--%>
<%--                </div>--%>
<%--            </div>--%>
<%--        </div>--%>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <!-- Add icons to the links using the .nav-icon class
                     with font-awesome or any other icon font library -->
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>Dashboard<i class="right fas fa-angle-left"></i></p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="/dashboard/statistics" class="nav-link"><i class="far fa-circle nav-icon"></i><p>통계</p></a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>일정관리<i class="right fas fa-angle-left"></i></p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="/sch/schCalendar" class="nav-link"><i class="far fa-circle nav-icon"></i><p>일정캘린더</p></a>
                        </li>
                    </ul>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="/sch/schList" class="nav-link"><i class="far fa-circle nav-icon"></i><p>일정목록</p></a>
                        </li>
                    </ul>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="/sch/schRegister" class="nav-link"><i class="far fa-circle nav-icon"></i><p>일정등록</p></a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>회원관리<i class="right fas fa-angle-left"></i></p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="/mem/memList" class="nav-link"><i class="far fa-circle nav-icon"></i><p>회원목록</p></a>
                        </li>
                    </ul>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="/mem/memRegister" class="nav-link"><i class="far fa-circle nav-icon"></i><p>회원등록</p></a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>모임장소<i class="right fas fa-angle-left"></i></p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="/loc/locMap" class="nav-link"><i class="far fa-circle nav-icon"></i><p>지도보기</p></a>
                        </li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a href="#" class="nav-link">
                        <i class="nav-icon fas fa-tachometer-alt"></i>
                        <p>성경<i class="right fas fa-angle-left"></i></p>
                    </a>
                    <ul class="nav nav-treeview">
                        <li class="nav-item">
                            <a href="/loc/locMap" class="nav-link"><i class="far fa-circle nav-icon"></i><p>성경보기</p></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </nav>
        <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
</aside>
<!--**********************************
Sidebar end
***********************************-->