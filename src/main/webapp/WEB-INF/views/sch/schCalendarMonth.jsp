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
                                                    <button type="button"
                                                            class="fc-prev-button btn btn-primary"
                                                            aria-label="prev"><span
                                                      class="fa fa-chevron-left"></span></button>
                                                    <button type="button"
                                                            class="fc-next-button btn btn-primary"
                                                            aria-label="next"><span
                                                      class="fa fa-chevron-right"></span></button>
                                                </div>
                                                <button type="button"
                                                        class="fc-today-button btn btn-primary disabled"
                                                        disabled="">today
                                                </button>
                                            </div>
                                            <div class="fc-right">
                                                <div class="btn-group">
                                                    <button type="button"
                                                            class="fc-month-button btn btn-primary active">
                                                        month
                                                    </button>
                                                    <button type="button"
                                                            class="fc-agendaWeek-button btn btn-primary ">
                                                        week
                                                    </button>
                                                    <button type="button"
                                                            class="fc-listMonth-button btn btn-primary ">
                                                        list
                                                    </button>
                                                </div>
                                            </div>
                                            <div class="fc-center"><h2>January 2024</h2></div>
                                            <div class="fc-clear"></div>
                                        </div>
                                        <div class="fc-view-container" style="">
                                            <div class="fc-view fc-month-view fc-basic-view"
                                                 style="">
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
                                                                        <div class="fc-row fc-week table-bordered fc-rigid" style="height: 136px;">
                                                                            <div class="fc-bg">
                                                                                <table class="table-bordered">
                                                                                    <tbody>
                                                                                        <tr>
                                                                                            <td style="width: 23.5px;"></td>
                                                                                            <td data-date="2023-12-31"></td>
                                                                                            <td data-date="2024-01-01"></td>
                                                                                            <td data-date="2024-01-02"></td>
                                                                                            <td data-date="2024-01-03"></td>
                                                                                            <td data-date="2024-01-04"></td>
                                                                                            <td data-date="2024-01-05"></td>
                                                                                            <td data-date="2024-01-06"></td>
                                                                                        </tr>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                            <div class="fc-content-skeleton">
                                                                                <table>
                                                                                    <thead>
                                                                                        <tr>
                                                                                            <td class="fc-week-number" style="width: 23.5px;">
                                                                                                <span>1</span>
                                                                                            </td>
                                                                                            <td class="fc-day-top fc-other-month" data-date="2023-12-31"><span class="fc-day-number">31</span></td>
                                                                                            <td class="fc-day-top" data-date="2024-01-01"><span class="fc-day-number">1</span></td>
                                                                                            <td class="fc-day-top" data-date="2024-01-02"><span class="fc-day-number">2</span></td>
                                                                                            <td class="fc-day-top" data-date="2024-01-03"><span class="fc-day-number">3</span></td>
                                                                                            <td class="fc-day-top" data-date="2024-01-04"><span class="fc-day-number">4</span></td>
                                                                                            <td class="fc-day-top" data-date="2024-01-05"><span class="fc-day-number">5</span></td>
                                                                                            <td class="fc-day-top" data-date="2024-01-06"><span class="fc-day-number">6</span></td>
                                                                                        </tr>
                                                                                    </thead>
                                                                                    <tbody>
                                                                                    </tbody>
                                                                                </table>
                                                                            </div>
                                                                        </div>
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

