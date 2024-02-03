var calToday = new Date();
var calArr = new Array();

var schCalendarMonth = {
    // 최조실행
    init: function() {
        schCalendarMonth.selectMonthList();
        schCalendarMonth.bind();
    },
    bind: function() {
        // 이전월
        $(".fc-prev-button").on('click', function() {
            calToday = dateUtil.addDate(calToday, 'mm', -1);
            schCalendarMonth.selectMonthList();
        });
        // 다음월
        $(".fc-next-button").on('click', function() {
            calToday = dateUtil.addDate(calToday, 'mm', 1);
            schCalendarMonth.selectMonthList();
        });

        // 캘린더 유형 선택
        $(".fc-right .btn-group [type=button]").on('click', function() {
            $(".fc-right .btn-group [type=button]").removeClass('active');
            $(this).addClass('active');
            schCalendarMonth.selectMonthList();
        });
    },
    selectMonthList: function() {
        var param = {
            year: dateUtil.getFormat(calToday, 'yyyy'),
            month: dateUtil.getFormat(calToday, 'MM'),
        };
        calArr = dateUtil.getCalDate(calToday);
        $("#h2_dateText").html(param.year+'년 '+param.month+'월');
        common.ajax('/sch/selectMonthList', param, function(res) {
            if($(".fc-right .btn-group .active").text()=='month') {
                schCalendarMonth.drawMonthList(calArr, res.schList);
            } else if($(".fc-right .btn-group .active").text()=='list') {
                schCalendarMonth.drawAgendaList(calArr, res.schList);
            }

        });
    },
    parseJson: function(schArr) {
        var schJson = {};
        for(var i=0; i<schArr.length; i++) {
            schJson[schArr[i].schDate] = {
                schCnt: schArr[i].schCnt,
                schNm: schArr[i].schNm.split('|'),
                schSeq: schArr[i].schSeq.split('|'),
                schTime: schArr[i].schTime.split('|'),
            }

        }
        return schJson;
    },
    drawMonthList: function(calList, schList) {
        var calHtml = '';
        var schJsonList = schCalendarMonth.parseJson(schList);

        var weekCnt = 0;
        var totalCnt = calList.length;

        var calIdx = 0;
        var lastIdx = 0;

        calHtml += '<div class="fc-view fc-month-view fc-basic-view">';
        calHtml += '    <table class="table-bordered">';
        calHtml += '        <thead class="fc-head">';
        calHtml += '        <tr>';
        calHtml += '            <td class="fc-head-container ">';
        calHtml += '                <div class="fc-row table-bordered">';
        calHtml += '                    <table class="table-bordered">';
        calHtml += '                        <thead>';
        calHtml += '                        <tr>';
        calHtml += '                            <th class="fc-week-number " style="width: 23.5px;"><span>W</span></th>';
        calHtml += '                            <th class="fc-sun"><span>Sun</span></th>';
        calHtml += '                            <th class="fc-mon"><span>Mon</span></th>';
        calHtml += '                            <th class="fc-tue"><span>Tue</span></th>';
        calHtml += '                            <th class="fc-wed"><span>Wed</span></th>';
        calHtml += '                            <th class="fc-thu"><span>Thu</span></th>';
        calHtml += '                            <th class="fc-fri"><span>Fri</span></th>';
        calHtml += '                            <th class="fc-sat"><span>Sat</span></th>';
        calHtml += '                        </tr>';
        calHtml += '                        </thead>';
        calHtml += '                    </table>';
        calHtml += '                </div>';
        calHtml += '            </td>';
        calHtml += '        </tr>';
        calHtml += '        </thead>';
        calHtml += '        <tbody class="fc-body">';
        calHtml += '            <tr>';
        calHtml += '                <td class="">';
        calHtml += '                    <div class="fc-scroller fc-day-grid-container" style="overflow: hidden;">';
        calHtml += '                        <div class="fc-day-grid fc-unselectable" id="div_calGrid">';



        while(calIdx<totalCnt) {

            weekCnt = weekCnt+1;

            calHtml += '<div class="fc-row fc-week table-bordered fc-rigid" style="height: 136px;">';


            calIdx = lastIdx;
            calHtml += '<div class="fc-bg">';
            calHtml += '    <table class="table-bordered">';
            calHtml += '        <tbody>';
            calHtml += '            <tr>';
            for(var i=0; i<8; i++) {
                if(i==0) {
                    calHtml += '                <td class="fc-week-number" style="width: 23.5px;"></td>';
                } else {
                    if(calIdx<totalCnt && i==calList[calIdx].days) {
                        calHtml += '                <td class="fc-day" data-date="'+calList[calIdx].calDate+'"></td>';
                        calIdx = calIdx+1;
                    } else {
                        calHtml += '                <td class="fc-day"></td>';
                    }
                }
            }
            calHtml += '            </tr>';
            calHtml += '        </tbody>';
            calHtml += '    </table>';
            calHtml += '</div>';


            calIdx = lastIdx;
            calHtml += '<div class="fc-content-skeleton">';
            calHtml += '    <table>';
            calHtml += '        <thead>';
            calHtml += '            <tr>';
            for(var i=0; i<8; i++) {
                if(i==0) {
                    calHtml += '                <td class="fc-week-number" style="width: 23.5px;"><span>'+weekCnt+'</span></td>';
                } else {
                    if(calIdx<totalCnt && i==calList[calIdx].days) {
                        calHtml += '                <td class="fc-day-top fc-past" data-date="'+calList[calIdx].calDate+'"><span class="fc-day-number">'+calList[calIdx].calDay+'</span></td>';
                        calIdx = calIdx+1;
                    } else {
                        calHtml += '                <td class="fc-day-top fc-past"><span class="fc-day-number"></span></td>';
                    }
                }
            }
            calHtml += '            </tr>';
            calHtml += '        </thead>';
            calHtml += '        <tbody>';

            for(var i=0; i<3; i++) {
                calIdx = lastIdx;

                calHtml += '<tr>';

                for(j=0; j<8; j++) {
                    if(j==0) {
                        calHtml += '<td class="fc-week-number" style="width: 23.5px;"></td>';
                    }else {
                        if(calIdx<totalCnt && j==calList[calIdx].days) {
                            var schJson = schJsonList[calList[calIdx].calDate];
                            if(schJson!=undefined && schJson.schNm[i]!=undefined) {
                                calHtml += '    <td class="fc-event-container">';
                                calHtml += '        <a class="fc-day-grid-event fc-h-event fc-event fc-start fc-end">';
                                calHtml += '            <div class="fc-content">';
                                calHtml += '                <span class="fc-time">'+dateUtil.getFormat(calList[calIdx].calDate+''+schJson.schTime[i], 'HH:mm')+'</span>';
                                calHtml += '                <span class="fc-title">'+schJson.schNm[i]+'</span>';
                                calHtml += '            </div>';
                                calHtml += '        </a>';
                                calHtml += '    </td>';
                            } else {
                                calHtml += '<td></td>';
                            }

                            calIdx = calIdx+1;
                        } else {
                            calHtml += '<td></td>';
                        }

                    }
                }


                calHtml += '</tr>';

            }

            calHtml += '        </tbody>';
            calHtml += '    </table>';
            calHtml += '</div>';


            calHtml += '</div>';
            if(calIdx>totalCnt-1) break;
            lastIdx = calIdx;
        }

        calHtml += '                        </div>';
        calHtml += '                    </div>';
        calHtml += '                </td>';
        calHtml += '            </tr>';
        calHtml += '        </tbody>';
        calHtml += '    </table>';
        calHtml += '</div>';

        $("#div_calGrid").html(calHtml);

    },

    drawAgendaList: function(calList, schList) {
        var calHtml = '';
        var schJsonList = schCalendarMonth.parseJson(schList);
        tmpCalList = schJsonList;

        calHtml += '<div class="fc-view fc-listMonth-view fc-list-view card card-primary" style="">';
        calHtml += '    <div class="fc-scroller" style="overflow: hidden auto; height: 842px;">';
        calHtml += '        <table class="fc-list-table table">';
        calHtml += '            <tbody>';

        for(var i=0; i<calArr.length; i++) {
            if(schJsonList[calArr[i].calDate]!=undefined) {
                var schJson = schJsonList[calArr[i].calDate];

                // 날짜 영역
                calHtml += '<tr class="fc-list-heading" data-date="2024-01-01">';
                calHtml += '    <td class="table-active" colspan="3">';
                calHtml += '        <span class="fc-list-heading-main">'+dateUtil.getFormat(calArr[i].calDate, 'yyyy년 MM월 dd일')+'</span>';
                calHtml += '        <span class="fc-list-heading-alt">'+dateUtil.korWeekName[calArr[i].days-1]+'</span>';
                calHtml += '    </td>';
                calHtml += '</tr>';

                // 일정 영역(반복)
                for(var j=0; j<schJson.schNm.length; j++) {
                    calHtml += '<tr class="fc-list-item">';
                    calHtml += '    <td class="fc-list-item-time ">'+schJson.schTime[j].substring(0,2)+':'+schJson.schTime[j].substring(2,4)+'</td>';
                    calHtml += '    <td class="fc-list-item-marker "><span class="fc-event-dot"></span></td>';
                    calHtml += '    <td class="fc-list-item-title "><a>'+schJson.schNm[j]+'</a></td>';
                    calHtml += '</tr>';
                }

            }
        }

        calHtml += '            </tbody>';
        calHtml += '        </table>';
        calHtml += '    </div>';
        calHtml += '</div>';

        $("#div_calGrid").html(calHtml);

        if($(".fc-scroller .fc-list-table tr").length==0) {
            var emptyHtml;
            emptyHtml += '<div class="fc-list-empty-wrap2"><div class="fc-list-empty-wrap1"><div class="fc-list-empty">No events to display</div></div></div>';
            $(".fc-scroller").html(emptyHtml);

        }
    },
}


$(function() {
    schCalendarMonth.init();
});