var register = {
    init: function() {
    },
    bind: function() {
    },
    join: function() {
        var param = {
            userId: $("#userId").val(),
            userPw: $("#userPw").val(),
            userNm: $("#userNm").val(),
            age: $("#age").val(),
            gender: $("#gender").val(),
            loc: $("#loc").val(),
            phone: $("#phone").val(),
            email: $("#email").val(),
        };
        console.log(param);

        common.ajax('/login/joinUser', param, function(res) {
            // common.goPage('/login/loginForm');
        });

        // common.ajax("/login", param, function(res) {
        //     console.log('login Return');
        //     console.log(res);
        //     // var redirectUrl = $("#redirectUrl").val().replace(window.location.protocol+'//'+window.location.host, '');
        //     var redirectUrl = $("#redirectUrl").val();
        //     common.goPage(redirectUrl);
        // });
    }
}

$(function() {
    register.init();
});