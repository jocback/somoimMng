var contiRegister = {
    init: function() {
        contiRegister.bind();
    },
    bind: function() {
        $("#btn_addStore").on('click', function() {
            contiRegister.addScore();
        });
    },
    // 찬양 추가
    addScore: function() {
        var trHtml = '';
        trHtml += '<tr>';
        trHtml += '    <td>1</td>';
        trHtml += '    <td>';
        trHtml += '        <div class="input-group input-group">';
        trHtml += '            <input type="text" class="form-control" name="scoreNm" readonly/>';
        trHtml += '            <span class="input-group-append">';
        trHtml += '                    <button type="button" class="btn btn-info btn-flat" onclick="contiRegister.searchStore(this);">검색</button>';
        trHtml += '            </span>';
        trHtml += '        </div>';
        trHtml += '    </td>';
        trHtml += '    <td><input type="text" class="form-control" placeholder="코드" name="code" readonly></td>';
        trHtml += '    <td><input type="text" class="form-control" placeholder="파일명" name="realFileNm" readonly></td>';
        trHtml += '    <td>';
        trHtml += '        <button type="button" class="btn btn-danger btn-flat" onclick="contiRegister.removeScore(this);">삭제</button>';
        trHtml += '    </td>';
        trHtml += '    <input type="hidden" name="scoreNo"/>';
        trHtml += '    <input type="hidden" name="scoreSeq"/>';
        trHtml += '</tr>';
        $("#tb_scoreList").append(trHtml);
        contiRegister.setScoreSeq();
    },
    // 찬양 삭제
    removeScore: function(el) {
        $(el).parents('tr').remove();
        contiRegister.setScoreSeq();
    },
    // 순서 채번
    setScoreSeq: function() {
        $.each($("#tb_scoreList").find('tr'), function(i,v){
            $(v).find('td').eq(0).text((i+1));
            $(v).find('input[name=storeSeq]').val((i+1));
        });
    },

    // 찬양 검색
    searchStore: function(el) {
        var addTr = $(el).parents('tr');
        var param = {
            // schSeq: schSeq
        }

        popup.openSubmitPopup('/popup/conti/selScorePopup', param, '', function(dat) {
            console.log(dat);
            $(addTr).find('[name="scoreNm"]').val(dat.scoreNm);
            $(addTr).find('[name="realFileNm"]').val(dat.realFileNm);
            $(addTr).find('[name="code"]').val(dat.code);
            $(addTr).find('[name="scoreNo"]').val(dat.scoreNo);
            $(addTr).find('[name="scoreSeq"]').val(dat.scoreSeq);

        });
    },

    // 콘티 저장
    register: function() {
        var scoreList = $("#frm_scoreList").serializeObject();
        var scoreArray = new Array();
        var len = scoreList.scoreSeq.length;

        if(typeof(scoreList.scoreSeq)=='string') {
            var scoreJson = {
                scoreSeq: scoreList.scoreSeq,
            }
            scoreArray.push(scoreJson);
        } else {
            for(var i=0; i<len; i++) {
                var scoreJson = {
                    scoreSeq: scoreList.scoreSeq[i],
                }
                scoreArray.push(scoreJson);
            }
        }

        var param = {
            contiNm: $("#contiNm").val(),
            contiDate: $("#contiDate").val(),
            scoreList: JSON.stringify(scoreArray),
        }

        console.log(param);

        common.ajax('/conti/registerContiMng', param, function(res) {
            location.reload()
        });
    }
}

$(function(){
    contiRegister.init();
})