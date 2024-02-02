var schArr;
var schCalendarMonth = {
    // 최조실행
    init: function() {
        schCalendarMonth.selectMonthList();
    },
    bind: function() {
    },
    selectMonthList: function() {
        var param = {
        };
        common.ajax('/sch/selectMonthList', param, function(res) {
            schArr = res.schList;
            console.log(res);
            schCalendarMonth.drawMonthList(res.calList, res.schList);
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

        var tdCnt = 0;
        var weekCnt = 0;
        var totalCnt = calList.length;
        var calCnt = 0;

        var calIdx = 0;
        var lastIdx = 0;
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

            // for(var i=0; i<3; i++) {
            //     // calIdx = lastIdx;
            //     if(i==0) {
            //         calHtml += '<tr>';
            //     }
            //     for(var j=0; j<8; j++) {
            //         if(j==0) {
            //             calHtml += '                <td class="fc-week-number" style="width: 23.5px;"></td>';
            //         } else {
            //             calHtml += '                <td rowspan="4"></td>';
            //             // if(calIdx<totalCnt && j==calList[calIdx].days) {
            //             //     calHtml += '                <td class="fc-day-top" data-date="'+calList[calIdx].calDate+'"><span class="fc-day-number">'+calList[calIdx].calDay+'</span></td>';
            //             //     calIdx = calIdx+1;
            //             // } else {
            //             //     calHtml += '                <td class="fc-day-top"></td>';
            //             // }
            //         }
            //     }
            //     if(i==2) {
            //         calHtml += '</tr>';
            //     }
            // }


            calHtml += '        </tbody>';
            calHtml += '    </table>';
            calHtml += '</div>';


            calHtml += '</div>';
            if(calIdx>totalCnt-1) break;
            lastIdx = calIdx;
        }


        $("#div_calGrid").html(calHtml);

    },
}


$(function() {
    schCalendarMonth.init();
});