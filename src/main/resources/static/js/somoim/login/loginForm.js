var loginForm = {
    init: function() {
    },
    bind: function() {
    },
    signin: function() {
        var param = {
            userId: $("#userId").val(),
            userPw: $("#userPw").val()
        };
        common.ajax("/login", param, function(res) {
            console.log('login Return');
            console.log(res);
            // var redirectUrl = $("#redirectUrl").val().replace(window.location.protocol+'//'+window.location.host, '');
            var redirectUrl = $("#redirectUrl").val();
            if(common.isEmpty(redirectUrl)) {
                redirectUrl = '/';
            }
            common.goPage(redirectUrl);
        });
    },
    goRegister: function() {
        common.goPage('/login/register');
    }
}

$(function() {
    loginForm.init();
});