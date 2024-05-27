var contiList = {
    // 최조실행
    init: function() {
        // 멤버리스트 조회
        contiList.selectContiList();
    },
    bind: function() {

    },
    // 콘티 보기
    showContiScore: function(contiSeq) {
        var param = {
            contiSeq: contiSeq
        }
        popup.openSubmitPopup('/popup/conti/viewContiPopup', param, '', function() {
        });
    },
    // 모달 초기화
    resetModal: function() {
        $("#scoreFile").val('');
        $("#scoreNo").val('');
        $("#scoreNm").val('');
        $("#code").val('');
        $("[for=scoreFile]").html('Choose file');
    },
    // 콘티 등록하기
    contiRegister: function(memSeq) {
        common.goPage('/conti/contiRegister');
    },
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
                contiList.resetModal();
                $('#regScoreModal').modal('show');
            }
        });

    },
    // 멤버리스트 조회
    selectContiList: function(pageNo) {
        var param = {
            pageNum: pageNo,
            pageSize: 10,
        }

        console.log(param);

        common.ajax('/conti/selectContiMng', param, function(res) {
            console.log(res);
            contiList.drawStoreList(res.page);
            paging.drawPage("scorePaging", "bibConti.selectContiList", res.totalInfo);
        });
    },
    // 콘티리스트 출력
    drawStoreList: function(memList) {
        var scoreHtml = '';
        $.each(memList, function(i, v){
            console.log(v);
            scoreHtml += '<tr>';
            scoreHtml += '    <td>'+v.contiSeq+'</td>';
            scoreHtml += '    <td>'+v.contiNm+'</td>';
            scoreHtml += '    <td>'+v.contiDate+'</td>';
            scoreHtml += '    <td><button type="button" class="btn btn-primary btn-sm" onclick="contiList.showContiScore(\''+v.contiSeq+'\')">보기</button></td>';
            scoreHtml += '</tr>';
        });

        $("#tbody_scoreList").html(scoreHtml);
    }

}


$(function() {
    contiList.init();
});