var schList = {
    // 최조실행
    init: function() {
        schList.selectSchList();
    },
    bind: function() {

    },
    // 일정 수정하기
    schModify: function() {
        var param = {
            schSeq: $("#schSeq").val(),
            type: 'modify'
        }

        common.goPage('/sch/schRegister', param);
    },
    // 일정 상세보기
    schDetail: function(schSeq) {


        var param = {
            schSeq: schSeq
        }
        common.ajax('/sch/selectSchDetail', param, function(res) {
            console.log(res);
            var schDetail = res.schDetail;
            $("#schNm").text(schDetail.schNm);
            $("#schDate").text(dateUtil.getFormat(schDetail.schDate+''+schDetail.schTime, 'yyyy-MM-dd HH:mm'));
            $("#schCnt").text(schDetail.schCnt);
            $("#schLoc").text(schDetail.schLoc);

            $("#schSeq").val(res.schDetail.schSeq);

            var memHtml = '';

            memHtml += '<div class="col-3">참여인원</div>';
            // memHtml += '<div class="col-9"></div>';


            $.each(schDetail.memlist, function(i, v){
                if(i>0) {
                    memHtml += '<div class="col-3"></div>';
                }
                memHtml += '<div class="col-9">'+v.userNm+'/'+v.age+'/'+v.loc+'</div>';
            });
            $("#memList").html(memHtml);
            $("#schModal").modal('show');

        });



    },
    // 일정 목록 조회
    selectSchList: function(pageNo) {
        var param = {
            pageNum: pageNo,
            pagesize: 10,
        }

        console.log(param);

        common.ajax('/sch/selectSmiSche', param, function(res) {
            schList.drawSchList(res.page);
            paging.drawPage("schPaging", "schList.selectSchList", res.totalInfo);
        });
    },
    // 일정 목록 출력
    drawSchList: function(schList) {
        var schHtml = '';
        $.each(schList, function(i, v){
            schHtml += '<tr>';
            schHtml += '    <td><a href="javascript:schList.schDetail(\''+v.schSeq+'\');">'+v.schNm+'</a></td>';
            schHtml += '    <td class="text-center">'+dateUtil.getFormat(v.schDate, 'yyyy-MM-dd HH:mm')+'</td>';
            schHtml += '    <td class="text-center">'+v.schCnt+'</td>';
            schHtml += '    <td>'+v.schLoc+'</td>';
            schHtml += '</tr>';
        });
        $("#tbody_schList").html(schHtml);
    }

}


$(function() {
    schList.init();
});