var michelinList = {
    init: function() {
        michelinList.selectMichelinList();
    },
    bind: function () {

    },
    // 미쉐린 목록 조회
    selectMichelinList: function (pageNo) {
        var param = {
            pageNum: pageNo,
            pagesize: 10,
            searchType: $("#searchType").val(),
            searchWord: $("#searchWord").val(),
        };

        common.ajax('/michelin/selectMichelin', param, function(res) {
            console.log('res');
            console.log(res);
            michelinList.drawMichelinList(res.page);
            paging.drawPage("michelinPaging", "michelinList.selectMichelinList", res.totalInfo);
        });
    },
    // 미쉐린 목록 출력
    drawMichelinList: function (michelinList) {
        var michelinHtml = '';
        $.each(michelinList, function(i, v){
            michelinHtml += '<tr>';
            // michelinHtml += '    <td><a href="javascript:schList.schDetail(\''+v.schSeq+'\');">'+v.schNm+'</a></td>';
            // michelinHtml += '    <td class="text-center">'+dateUtil.getFormat(v.schDate, 'yyyy-MM-dd HH:mm')+'</td>';
            michelinHtml += '    <td class="text-center">'+v.michelinNm+'</td>';
            michelinHtml += '    <td class="text-center">'+v.fcltyNm+'</td>';
            michelinHtml += '    <td class="text-center">'+v.rdnmadrNm+'</td>';
            michelinHtml += '    <td class="text-center">'+v.areaNm+'</td>';
            michelinHtml += '    <td class="text-center">'+v.hmpgUrl+'</td>';
            michelinHtml += '    <td class="text-center">'+v.reprsntMenuNm+'</td>';

            // michelinHtml += '    <td>'+v.schLoc+'</td>';
            michelinHtml += '</tr>';
        });
        console.log(michelinList);
        $("#tbody_michelinList").html(michelinHtml);
    },
    // 등록 팝업
    michelinModal: function() {
        michelinList.resetModal();
        $('#michelinModal').modal('show');
    },
    resetModal: function() {

    },
    // 파일 선택
    selectFile: function(el) {
        $(el).next().html($(el)[0].files[0].name);
    },
    saveMichelin: function() {
        const formData = new FormData();
        // formData.append('uploadFile', $(el).parent().parent().find('[type=file]')[0].files[0]);
        formData.append('uploadFile', $("#michelinFile")[0].files[0]);

        $.ajax({
            url: '/michelin/uploadMichelin',
            processData: false,
            contentType: false,
            data: formData,
            type: 'POST',
            dataType: 'json',
            success: function(dat) {
                scoreList.resetModal();
                $('#regScoreModal').modal('show');
            }
        });
    },
};

$(function(){
    michelinList.init();
});