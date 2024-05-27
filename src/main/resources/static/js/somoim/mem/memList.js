var memList = {
    // 최조실행
    init: function() {
        // 멤버리스트 조회
        memList.selectMemList();
    },
    bind: function() {

    },
    goMemRegister: function() {
      common.goPage('/mem/memRegister');
    },
    // 멤버 수정하기
    memModify: function() {
        var param = {
            memSeq: $("#memSeq").val(),
            type: 'modify'
        }

        common.goPage('/mem/memRegister', param);
    },
    // 멤버 상세보기
    memDetail: function(memSeq) {

        var param = {
            memSeq: memSeq
        }

        popup.openSubmitPopup('/popup/mem/memDetailPopup', param, '', function(memSeq) {
            console.log('popupcallback');
            console.log(memSeq);
            var param = {
                memSeq: memSeq,
                type: 'modify'
            }

            common.goPage('/mem/memRegister', param);
        });

        // common.ajax('/mem/selectMemDetail', param, function(res) {
        //     console.log(res);
        //     var memDetail = res.memDetail;
        //     $("#userId").text(memDetail.userId);
        //     $("#userNm").text(memDetail.userNm);
        //     $("#age").text(memDetail.age);
        //     $("#regDate").text(dateUtil.getFormat(memDetail.regDate, 'yyyy-MM-dd'));
        //     $("#extdTerm").text(dateUtil.getFormat(memDetail.extdTerm, 'yyyy-MM-dd'));
        //     $("#gender").text(memDetail.gender);
        //     $("#loc").text(memDetail.loc);
        //     $("#rmrk").text(memDetail.rmrk);
        //     $("#memModal").modal('show');
        //     $("#memSeq").val(memDetail.memSeq);
        // });
    },
    // 멤버리스트 조회
    selectMemList: function(pageNo) {
        var param = {
            pageNum: pageNo,
            pageSize: 10,
            genderType: $("#genderType").val(),
            searchType: $("#searchType").val(),
            searchWord: $("#searchWord").val()
        }

        console.log(param);

        common.ajax('/mem/selectMemMng', param, function(res) {
            console.log(res);
            memList.drawMemList(res.page);
            paging.drawPage("memPaging", "memList.selectMemList", res.totalInfo);
        });
    },
    // 멤버리스트 출력
    drawMemList: function(memList) {
        var memHtml = '';
        $.each(memList, function(i, v){
            console.log(v);
            memHtml += '<tr>';
            memHtml += '    <td><a href="javascript:memList.memDetail(\''+v.memSeq+'\');">'+v.userId+'</a></td>';
            memHtml += '    <td>'+v.userNm+'</td>';
            memHtml += '    <td>'+v.age+'</td>';
            memHtml += '    <td>'+dateUtil.getFormat(v.regDate, 'yyyy-MM-dd')+'</td>';
            memHtml += '    <td>'+dateUtil.getFormat(v.extdTerm, 'yyyy-MM-dd')+'</td>';
            memHtml += '    <td>'+v.gender+'</td>';
            memHtml += '    <td>'+v.loc+'</td>';
            memHtml += '</tr>';
        });

        $("#tbody_memList").html(memHtml);
    }

}


$(function() {
    memList.init();
});