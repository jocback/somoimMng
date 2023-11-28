var memRegister = {
    // 최조실행
    init: function() {

    },
    bind: function() {

    },
    // 회원등록
    register: function() {
        var param = {
            userId : $("#userId").val(),
            userNm: $("#userNm").val(),
            age: $("#age").val(),
            regDate: $("#regDate").val(),
            gender: $("#gender").val(),
            loc: $("#loc").val(),
            rmrk: $("#rmrk").val()
        }

        console.log(param);

        common.ajax('/mem/join', param, function(res) {
            // location.reload()
        });
    }

}


$(function() {
    memRegister.init();
});