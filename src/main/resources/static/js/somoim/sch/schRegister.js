var memList = new Array();

var schRegister = {
    // 최조실행
    init: function() {
        schRegister.selectMemList();
        schRegister.bind();
        if($("#type").val()=='modify') {
            schRegister.selectDetail();
        }
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
    // 일정 수정
    modify: function() {
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
            schSeq: $("#modSeq").val(),
            memSeq: memSeq
        }

        console.log(param);

        common.ajax('/sch/modifySmiSche', param, function(res) {
            // location.reload()
            common.goPage('/sch/schList');
        });
    },
    // 일정 삭제
    delete: function() {
        var param = {
            schSeq: $("#modSeq").val(),
        }
        common.ajax('/sch/deleteSmiSche', param, function(res) {
           schRegister.goSchList();
        });
    },
    // 상세조회
    selectDetail: function() {
        var param = {
            schSeq: $("#modSeq").val()
        }
        common.ajax('/sch/selectSchDetail', param, function(res) {
            var schDetail = res.schDetail;
            $("#schNm").val(schDetail.schNm);
            $("#schDate").val(schDetail.schDate);
            $("#schTime").val(schDetail.schTime);
            $("#schCnt").val(schDetail.schCnt);
            $("#schLoc").val(schDetail.schLoc);

            var memHtml = '';
            $.each(schDetail.memlist, function(i, v){
                memHtml += '<div class="radio mb-3">';
                memHtml += '<input type="hidden" name="memSeq" value="'+v.memSeq+'" />';
                memHtml += '    <label>'+v.userNm+'/'+v.age+'/'+v.loc+'</label>';
                memHtml += '    <button type="button" class="btn btn-danger btn-sm" onclick="schRegister.remove(this)">삭제</button>';
                memHtml += '</div>';

            });
            $("#memList").append(memHtml);


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
    // 목록페이지 이동
    goSchList: function() {
        var param = {};
        common.goPage('/sch/schList');
    },

}


$(function() {
    schRegister.init();
});