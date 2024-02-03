var calToday = new Date();
var calArr = new Array();
var tmpCalList;

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
    },
    selectMonthList: function() {
        var param = {
            year: dateUtil.getFormat(calToday, 'yyyy'),
            month: dateUtil.getFormat(calToday, 'MM'),
        };
        calArr = dateUtil.getCalDate(calToday);
        $("#h2_dateText").html(param.year+'년 '+param.month+'월');
        common.ajax('/sch/selectMonthList', param, function(res) {
            schCalendarMonth.drawAgendaList(calArr, res.schList);
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
    drawAgendaList: function(calList, schList) {
        var calHtml = '';
        var schJsonList = schCalendarMonth.parseJson(schList);
        tmpCalList = schJsonList;

        calHtml += '<div class="fc-view fc-listMonth-view fc-list-view card card-primary" style="">';
        calHtml += '    <div class="fc-scroller" style="overflow: hidden auto; height: 842px;">';
        calHtml += '        <table class="fc-list-table table">';
        calHtml += '            <tbody>';

        for(var i=0; i<calList.length; i++) {
            if(schJsonList[calList[i].calDate]!=undefined) {
                var schJson = schJsonList[calList[i].calDate];

                // 날짜 영역
                calHtml += '<tr class="fc-list-heading" data-date="2024-01-01">';
                calHtml += '    <td class="table-active" colspan="3">';
                calHtml += '        <span class="fc-list-heading-main">'+dateUtil.getFormat(calList[i].calDate, 'yyyy년 MM월 dd일')+'</span>';
                calHtml += '        <span class="fc-list-heading-alt">'+dateUtil.korWeekName[calList[i].days-1]+'</span>';
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
    },
}


$(function() {
    schCalendarMonth.init();
});