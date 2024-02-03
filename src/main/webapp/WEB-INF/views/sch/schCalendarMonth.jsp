<%@ page contentType="text/html;charset=UTF-8" language="java" %>


<%--<script src="/lib/bootstrap/js/plugins-init/fullcalendar-init.js"></script>--%>
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
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                            <h4>Calendar</h4>
                        </div>
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
                                        <div class="fc-view-container" style="">
                                            <div class="fc-view fc-month-view fc-basic-view">
                                                <table class="table-bordered">
                                                    <thead class="fc-head">
                                                    <tr>
                                                        <td class="fc-head-container ">
                                                            <div class="fc-row table-bordered">
                                                                <table class="table-bordered">
                                                                    <thead>
                                                                    <tr>
                                                                        <th class="fc-week-number " style="width: 23.5px;"><span>W</span></th>
                                                                        <th class="fc-sun"><span>Sun</span></th>
                                                                        <th class="fc-mon"><span>Mon</span></th>
                                                                        <th class="fc-tue"><span>Tue</span></th>
                                                                        <th class="fc-wed"><span>Wed</span></th>
                                                                        <th class="fc-thu"><span>Thu</span></th>
                                                                        <th class="fc-fri"><span>Fri</span></th>
                                                                        <th class="fc-sat"><span>Sat</span></th>
                                                                    </tr>
                                                                    </thead>
                                                                </table>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    </thead>
                                                    <tbody class="fc-body">
                                                        <tr>
                                                            <td class="">
                                                                <div class="fc-scroller fc-day-grid-container" style="overflow: hidden;">
                                                                    <div class="fc-day-grid fc-unselectable" id="div_calGrid">
                                                                    </div>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /# card -->
            </div>
            <!-- /# column -->
        </div>
    </div>
    <!-- #/ container -->
</div>

