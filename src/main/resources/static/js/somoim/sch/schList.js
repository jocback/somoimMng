var schList = {
    // 최조실행
    init: function() {
        schList.selectSchList();
    },
    bind: function() {

    },
    // 일정 상세보기
    schDetail: function(schSeq) {
        var param = {
            schSeq: schSeq,
            type: 'modify'
        }

        common.goPage('/sch/schRegister', param);
    },
    // 일정 목록 조회
    selectSchList: function() {
        var param = {
        }

        console.log(param);

        common.ajax('/sch/selectSmiSche', param, function(res) {
            schList.drawSchList(res.schList);
        });
    },
    // 일정 목록 출력
    drawSchList: function(schList) {
        var schHtml = '';
        $.each(schList, function(i, v){
            schHtml += '<tr>';
            schHtml += '    <td class="text-center"><a href="javascript:schList.schDetail(\''+v.schSeq+'\');">'+v.schNm+'</a></td>';
            schHtml += '    <td class="text-center">'+dateUtil.getFormat(v.schDate, 'yyyy-MM-dd HH:mm')+'</td>';
            schHtml += '    <td class="text-center">'+v.schCnt+'</td>';
            schHtml += '    <td class="text-center">'+v.schLoc+'</td>';
            schHtml += '</tr>';
        });
        $("#tbody_schList").html(schHtml);
    }

}


$(function() {
    schList.init();
});