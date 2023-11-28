var schList = {
    // 최조실행
    init: function() {
        schList.selectSchList();
    },
    bind: function() {

    },
    selectSchList: function() {
        var param = {
        }

        console.log(param);

        common.ajax('/sch/selectSmiSche', param, function(res) {
            console.log(res);
            schList.drawSchList(res.schList);
        });
    },
    drawSchList: function(schList) {
        var schHtml = '';
        $.each(schList, function(i, v){
            console.log(v);
            schHtml += '<tr>';
            schHtml += '    <td class="text-center">'+v.schNm+'</td>';
            schHtml += '    <td class="text-center">'+v.schDate+'</td>';
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