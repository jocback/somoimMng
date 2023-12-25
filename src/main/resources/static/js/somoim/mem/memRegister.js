var memRegister = {
    // 최조실행
    init: function() {
        if($("#type").val()=='modify') {
            memRegister.selectDetail();
        }
    },
    bind: function() {

    },
    // 회원 상세조회
    selectDetail: function() {
        var param = {
            memSeq: $("#modSeq").val()
        }

        common.ajax('/mem/selectMemDetail', param, function(res) {
           console.log(res);
           var memDetail = res.memDetail;
           $("#userId").val(memDetail.userId);
           $("#userNm").val(memDetail.userNm);
           $("#age").val(memDetail.age);
           $("#regDate").val(memDetail.regDate);
           $("#gender").val(memDetail.gender);
           $("#loc").val(memDetail.loc);
           $("#rmrk").val(memDetail.rmrk);
        });
    },
    // 회원등록
    register: function() {
        var param = {
            userId : $("#userId").val(),
            userNm: $("#userNm").val(),
            age: $("#age").val(),
            regDate: $("#regDate").val(),
            extdTerm: $("#extdTerm").val(),
            gender: $("#gender").val(),
            loc: $("#loc").val(),
            rmrk: $("#rmrk").val()
        }

        console.log(param);

        common.ajax('/mem/join', param, function(res) {
            common.goPage('/mem/memList');
        });
    },
    // 회원 수정
    modify: function() {
        var param = {
            userId : $("#userId").val(),
            userNm: $("#userNm").val(),
            age: $("#age").val(),
            regDate: $("#regDate").val(),
            extdTerm: $("#extdTerm").val(),
            gender: $("#gender").val(),
            loc: $("#loc").val(),
            rmrk: $("#rmrk").val(),
            memSeq: $("#modSeq").val(),
        }

        common.ajax('/mem/modifyMemMng', param, function(res) {
            // location.reload();
        });
    },
    // 회원 삭제
    delete: function() {
        var param = {
            memSeq: $("#modSeq").val(),
        }

        common.ajax('/mem/deleteMemMng', param, function(res) {
            // location.reload()
            common.goPage('/mem/memList');
        });
    },
    // 목록페이지 이동
    goMemList: function() {
        var param = {};
        common.goPage('/mem/memList');
    },

}


$(function() {
    memRegister.init();
});