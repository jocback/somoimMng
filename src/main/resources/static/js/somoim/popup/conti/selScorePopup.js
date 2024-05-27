var selScorePopup = {
    // 최조실행
    init: function() {
        // 멤버리스트 조회
        selScorePopup.selectScoreList();
    },
    bind: function() {

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
        selScorePopup.resetModal();
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
            url: '/bib/uploadScore',
            processData: false,
            contentType: false,
            data: formData,
            type: 'POST',
            dataType: 'json',
            success: function(dat) {
                selScorePopup.resetModal();
                $('#regScoreModal').modal('show');
            }
        });

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
            selScorePopup.drawStoreList(res.page);
            paging.drawPage("scorePaging", "selScorePopup.selectScoreList", res.totalInfo);
        });
    },
    // 멤버리스트 출력
    drawStoreList: function(memList) {
        console.log(memList);
        var scoreHtml = '';
        $.each(memList, function(i, v){
            scoreHtml += '<tr>';
            scoreHtml += '    <td>'+v.scoreNo+'</td>';
            scoreHtml += '    <td>'+v.scoreNm+'</td>';
            scoreHtml += '    <td>'+v.code+'</td>';
            scoreHtml += '    <td><button type="button" class="btn-xs btn-info btn-flat" onclick="selScorePopup.addScore(this);">추가</button></td>';
            scoreHtml += '<input type="hidden" name="inp_scoreNo" value="'+v.scoreNo+'" />'
            scoreHtml += '<input type="hidden" name="inp_realFileNm" value="'+v.realFileNm+'" />'
            scoreHtml += '<input type="hidden" name="inp_scoreNm" value="'+v.scoreNm+'" />'
            scoreHtml += '<input type="hidden" name="inp_code" value="'+v.code+'" />'
            scoreHtml += '<input type="hidden" name="inp_scoreSeq" value="'+v.scoreSeq+'" />'
            scoreHtml += '</tr>';
        });

        $("#tbody_scoreList").html(scoreHtml);
    },
    // 찬양 추가
    addScore: function(el) {
        var el = $(el).parents('tr');

        var popParam = {
            scoreNo: el.find('[name="inp_scoreNo"]').val(),
            scoreNm: el.find('[name="inp_scoreNm"]').val(),
            realFileNm: el.find('[name="inp_realFileNm"]').val(),
            code: el.find('[name="inp_code"]').val(),
            scoreSeq: el.find('[name="inp_scoreSeq"]').val(),
        }
        opener.popup.callback(popParam);
        window.close();
    },

}


$(function() {
    selScorePopup.init();
});