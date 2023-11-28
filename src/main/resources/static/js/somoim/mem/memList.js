var memList = {
    // 최조실행
    init: function() {
        memList.selectMemList();
    },
    bind: function() {

    },
    selectMemList: function() {
        var param = {
        }

        console.log(param);

        common.ajax('/mem/selectMemMng', param, function(res) {
            console.log(res);
            memList.drawMemList(res.memList);
        });
    },
    drawMemList: function(memList) {
        var memHtml = '';
        $.each(memList, function(i, v){
            memHtml += '<tr>';
            memHtml += '    <td>'+v.userId+'</td>';
            memHtml += '    <td>'+v.userNm+'</td>';
            memHtml += '    <td>'+v.age+'</td>';
            memHtml += '    <td>'+v.regDate+'</td>';
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