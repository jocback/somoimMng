var scoreList = {
    // 최조실행
    init: function() {
        // 멤버리스트 조회
        scoreList.selectScoreList();
    },
    bind: function() {

    },
    // 멤버리스트 조회
    selectScoreList: function(pageNo) {
        var param = {
            searchWord: $("#searchWord").val(),
            pageNum: pageNo,
            pageSize: 10,
        }

        console.log(param);

        common.ajax('/conti/selectScore', param, function(res) {
            console.log(res);
            scoreList.drawStoreList(res.page);
            paging.drawPage("scorePaging", "scoreList.selectScoreList", res.totalInfo);
        });
    },
    // 멤버리스트 출력
    drawStoreList: function(memList) {
        var scoreHtml = '';
        $.each(memList, function(i, v){
            console.log(v);
            scoreHtml += '<tr>';
            scoreHtml += '    <td>'+v.scoreNo+'</td>';
            scoreHtml += '    <td>'+v.scoreNm+'</td>';
            scoreHtml += '    <td>'+v.code+'</td>';
            scoreHtml += '    <td>'+v.realFileNm+'</td>';
            scoreHtml += '    <td><button type="button" class="btn-xs btn-danger btn-flat" onclick="schRegister.removeStore(this);">삭제</button></td>';
            scoreHtml += '</tr>';
        });

        $("#tbody_scoreList").html(scoreHtml);
    },
    // 모달 초기화
    resetModal: function() {
        $("#scoreFile").val('');
        $("#scoreNo").val('');
        $("#scoreNm").val('');
        $("#code").val('');
        $("[for=scoreFile]").html('Choose file');
    },
    // 악보 등록 팝업
    scoreModal: function(memSeq) {
        scoreList.resetModal();
        $('#regScoreModal').modal('show');
    },
    // 파일 선택
    selectFile: function(el) {
        $(el).next().html($(el)[0].files[0].name);
    },
    saveScore: function() {
        const formData = new FormData();
        // formData.append('uploadFile', $(el).parent().parent().find('[type=file]')[0].files[0]);
        formData.append('uploadFile', $("#scoreFile")[0].files[0]);
        formData.append('scoreNo', $("#scoreNo").val());
        formData.append('scoreNm', $("#scoreNm").val());
        formData.append('code', $("#code").val());

        $.ajax({
            url: '/conti/uploadScore',
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

}


$(function() {
    scoreList.init();
});