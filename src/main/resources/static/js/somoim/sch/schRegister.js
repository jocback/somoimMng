var memList = new Array();

var schRegister = {
    // 최조실행
    init: function() {
        schRegister.selectMemList();
        schRegister.bind();
    },
    bind: function() {
        $("#auto_member").autocomplete({
            source: memList,
            select: function(event, ui) {
                console.log('select');
                console.log(ui.item);
                schRegister.addMember(ui.item);
                $("#auto_member").val('');
                return false;
            },
            focus: function(event, ui) {
                console.log('focus');
                return false;
            }
        });
    },
    // 회원추가
    addMember: function(dat) {
      var memHtml = '';
      // memHtml += '<div class="form-group">';
      // memHtml += '<input type="hidden" name="memSeq" value="'+dat.value+'" />';
      // memHtml += '    <span style="vertical-align:middle;">'+dat.label+'</span>';
      // memHtml += '    <button type="button" class="btn btn-danger btn-sm" onclick="schRegister.register()">삭제</button>';
      // memHtml += '</div>';

      memHtml += '<div class="radio mb-3">';
      memHtml += '<input type="hidden" name="memSeq" value="'+dat.value+'" />';
      memHtml += '    <label>'+dat.label+'</label>';
      memHtml += '    <button type="button" class="btn btn-danger btn-sm" onclick="schRegister.remove(this)">삭제</button>';
      memHtml += '</div>';

      $("#memList").append(memHtml);
    },
    // 멤버 삭제
    remove: function(e) {
        $(e).parent('div').remove();

    },
    // 일정 등록
    register: function() {
        var memSeq = '';
        $.each($("[name=memSeq]"), function(i, v) {
            if(i ==0) {
                memSeq = $(v).val();
            } else{
                memSeq += '|'+$(v).val();
            }
        });
        var param = {
            schNm : $("#schNm").val(),
            schDate : $("#schDate").val(),
            schTime : $("#schTime").val(),
            schCnt : $("#schCnt").val(),
            schLoc : $("#schLoc").val(),
            memSeq: memSeq
        }

        console.log(param);

        common.ajax('/sch/insertSmiSche', param, function(res) {
            location.reload()
        });
    },
    // 회원 목록조회
    selectMemList: function() {
        var param = {};
        common.ajax('/mem/getMemList', param, function(res) {
            console.log(res);

            $.each(res.memList, function(i, v){
                var row = new Object();
                row.value = v.memSeq;
                row.label = v.userNm+'/'+v.age+'/'+v.loc;
                memList.push(row);
            });
        })

    },

}


$(function() {
    schRegister.init();
});