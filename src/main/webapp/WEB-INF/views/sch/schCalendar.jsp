<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<section class="content-header">
    <div class="container-fluid">
        <div class="row mb-2">
            <div class="col-sm-6">
                <h1>일정관리</h1>
            </div>
            <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item">일정관리</li>
                    <li class="breadcrumb-item active">일정캘린더</li>
                </ol>
            </div>
        </div>
    </div><!-- /.container-fluid -->
</section>

<section class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">
                        <h3 class="card-title">일정 캘린더</h3>
                    </div>

<%--                    <div class="card-body">--%>
                    <div class="card-body table-responsive p-0">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="card-box m-b-50">
                                    <div id="calendar" class="fc fc-bootstrap4 fc-ltr">
                                        <div class="fc-toolbar fc-header-toolbar">
                                            <div class="fc-left">
                                                <div class="btn-group">
                                                    <button type="button" class="fc-prev-button btn btn-primary" aria-label="prev">
                                                        <span class="fa fa-chevron-left"></span>
                                                    </button>
                                                    <button type="button" class="fc-next-button btn btn-primary" aria-label="next">
                                                        <span class="fa fa-chevron-right"></span>
                                                    </button>
                                                </div>
                                                <button type="button" class="fc-today-button btn btn-primary" >today</button>
                                            </div>
                                            <div class="fc-right">
                                                <div class="btn-group">
                                                    <button type="button" class="fc-month-button btn btn-primary active">month</button>
                                                    <button type="button" class="fc-agendaWeek-button btn btn-primary ">week</button>
                                                    <button type="button" class="fc-listMonth-button btn btn-primary ">list</button>
                                                </div>
                                            </div>
                                            <div class="fc-center"><h2 id="h2_dateText">January 2024</h2></div>
                                            <div class="fc-clear"></div>
                                        </div>
                                        <div class="fc-view-container" id="div_calGrid">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


