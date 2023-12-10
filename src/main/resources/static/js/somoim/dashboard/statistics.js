var statistics = {
    // 최조실행
    init: function() {
        // 최근 모임
        statistics.selectRcntSch();

        // 자주 본 멤버
        statistics.selectMemList();

        // 자주 못 본 멤버
        statistics.selectLstAtnDate();
    },
    bind: function() {

    },
    // 자주 못 본 멤버 조회
    selectLstAtnDate: function() {
        var param = {};

        common.ajax('/dashboard/selectLstAtnDate', param, function(res) {
            console.log(res);
            statistics.drawLstAtn(res.lstList);
        });
    },
    // 자주 못 본 멤버 출력
    drawLstAtn: function(lstList){
        var lstHtml = '';
        $.each(lstList, function(i, v){
            lstHtml += '<tr>';
            lstHtml += '    <td>'+v.userNm+'</td>';
            lstHtml += '    <td>'+dateUtil.getFormat(v.rcntDate, 'yyyy-MM-dd')+'</td>';
            lstHtml += '    <td>'+v.diff+'</td>';
            lstHtml += '</tr>';
        });

        $("#tbody_lstList").html(lstHtml);
    },
    // 회원 목록조회
    selectMemList: function() {
        var param = {};
        common.ajax('/mem/getMemList', param, function(res) {
            var selHtml = '';
            $.each(res.memList, function(i, v){
                selHtml += '<option value="'+v.memSeq+'">'+v.userNm+'</option>';
            });
            $("#sel_memSeq").html(selHtml);
            statistics.selectOftMem();
        });
    },
    // 최근 모임 조회
    selectRcntSch: function() {
        var param = {};

        console.log(param);

        common.ajax('/dashboard/selectRcntSch', param, function(res) {
            console.log(res);
            statistics.drawRcntSch(res.schList);
        });
    },
    // 최근 모임 출력
    drawRcntSch: function(schList) {
        var sttHtml = '';
        $.each(schList, function(i, v){
            sttHtml += '<tr>';
            sttHtml += '    <td>'+dateUtil.getFormat(v.schDate, 'yyyy-MM-dd HH:mm')+'</td>';
            sttHtml += '    <td>'+v.schNm+'</td>';
            sttHtml += '    <td>'+v.schCnt+'</td>';
            sttHtml += '    <td>'+v.schLoc+'</td>';
            sttHtml += '</tr>';
        });

        $("#tbody_sttList").html(sttHtml);
    },
    // 자주 본 멤버 조회
    selectOftMem: function() {
        var param = {
            memSeq: $("#sel_memSeq").val()
        }
        common.ajax('/dashboard/selectOftMem', param, function(res) {
            console.log(res);
            statistics.drawOftMem(res.oftList);
        });
    },
    // 자주 본 멤버 출력
    drawOftMem: function(oftList) {
        var oftHtml = '';
        $.each(oftList, function(i ,v) {
            oftHtml += '';
            oftHtml += '<tr>';
            oftHtml += '    <td>'+v.userNm+'</td>';
            oftHtml += '    <td>'+v.cnt+'</td>';
            oftHtml += '</tr>';
        });
        $("#tbody_oftList").html(oftHtml);
    },
}


$(function() {
    statistics.init();
});