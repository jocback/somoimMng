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
                                        <div class="fc-view-container" id="div_calGrid">



                                            <div class="fc-view fc-listMonth-view fc-list-view card card-primary" style="">
                                                <div class="fc-scroller" style="overflow: hidden auto; height: 842px;">
                                                    <table class="fc-list-table table">
                                                        <tbody>
                                                            <tr class="fc-list-heading" data-date="2024-01-01">
                                                                <td class="table-active" colspan="3">
                                                                    <span class="fc-list-heading-main">January 1, 2024</span>
                                                                    <span class="fc-list-heading-alt">Monday</span>
                                                                </td>
                                                            </tr>
                                                            <tr class="fc-list-item">
                                                                <td class="fc-list-item-time ">all-day</td>
                                                                <td class="fc-list-item-marker ">
                                                                    <span class="fc-event-dot"></span>
                                                                </td>
                                                                <td class="fc-list-item-title ">
                                                                    <a>All Day Even2</a>
                                                                </td>
                                                            </tr>
                                                            <tr class="fc-list-item">
                                                                <td class="fc-list-item-time ">all-day</td>
                                                                <td class="fc-list-item-marker ">
                                                                    <span class="fc-event-dot"></span>
                                                                </td>
                                                                <td class="fc-list-item-title ">
                                                                    <a>All Day Even2</a>
                                                                </td>
                                                            </tr>
                                                            <tr class="fc-list-item">
                                                                <td class="fc-list-item-time ">10:30am - 12:30pm</td>
                                                                <td class="fc-list-item-marker "><span class="fc-event-dot"></span></td>
                                                                <td class="fc-list-item-title "><a>All Day Even2</a></td>
                                                            </tr>

                                                            <tr class="fc-list-heading" data-date="2024-01-02">
                                                                <td class="table-active" colspan="3">
                                                                    <span class="fc-list-heading-main">January 2, 2024</span>
                                                                    <span class="fc-list-heading-alt">Tuesday</span>
                                                                </td>
                                                            </tr>
                                                            <tr class="fc-list-item">
                                                                <td class="fc-list-item-time ">10:30am - 12:30pm</td>
                                                                <td class="fc-list-item-marker "><span class="fc-event-dot"></span></td>
                                                                <td class="fc-list-item-title "><a>tuesday</a></td>
                                                            </tr>
                                                            <tr class="fc-list-item">
                                                                <td class="fc-list-item-time ">10:30am - 12:30pm</td>
                                                                <td class="fc-list-item-marker "><span class="fc-event-dot"></span></td>
                                                                <td class="fc-list-item-title "><a>tuesday</a></td>
                                                            </tr>

                                                            <tr class="fc-list-heading" data-date="2024-01-03">
                                                                <td class="table-active" colspan="3">
                                                                    <span class="fc-list-heading-main">January 3, 2024</span>
                                                                    <span class="fc-list-heading-alt">Wednesday</span>
                                                                </td>
                                                            </tr>
                                                            <tr class="fc-list-item">
                                                                <td class="fc-list-item-time ">12:30pm - 2:30pm</td>
                                                                <td class="fc-list-item-marker "><span class="fc-event-dot"></span></td>
                                                                <td class="fc-list-item-title "><a>wednesday</a></td>
                                                            </tr>

                                                            <tr class="fc-list-heading" data-date="2024-01-22">
                                                                <td class="table-active" colspan="3">
                                                                    <span class="fc-list-heading-main">January 22, 2024</span>
                                                                    <span class="fc-list-heading-alt">Monday</span>
                                                                </td>
                                                            </tr>
                                                            <tr class="fc-list-item">
                                                                <td class="fc-list-item-time ">10:30am - 12:30pm</td>
                                                                <td class="fc-list-item-marker "><span class="fc-event-dot"></span></td>
                                                                <td class="fc-list-item-title "><a>Meetin111g</a></td>
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
                </div>
                <!-- /# card -->
            </div>
            <!-- /# column -->
        </div>
    </div>
    <!-- #/ container -->
</div>
