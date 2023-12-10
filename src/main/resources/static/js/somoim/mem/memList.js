var memList = {
    // 최조실행
    init: function() {
        // 멤버리스트 조회
        memList.selectMemList();
    },
    bind: function() {

    },
    // 멤버 상세보기
    memDetail: function(memSeq) {
        var param = {
            memSeq: memSeq,
            type: 'modify'
        }

        common.goPage('/mem/memRegister', param);
    },
    // 멤버리스트 조회
    selectMemList: function() {
        var param = {
        }

        console.log(param);

        common.ajax('/mem/selectMemMng', param, function(res) {
            console.log(res);
            memList.drawMemList(res.memList);
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