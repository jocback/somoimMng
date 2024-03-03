var loginForm = {
    init: function() {
    },
    bind: function() {
    },
    signin: function() {

        var hPwd = CryptoJS.SHA512($("#userPw").val());
        var usrPwd = CryptoJS.AES.encrypt(hPwd.toString(), "somoim");
        $("#encPw").val(usrPwd);

        var param = {
            userId: $("#userId").val(),
            userPw: $("#encPw").val()
        };
        common.ajax("/login", param, function(res) {
            console.log('login Return');
            console.log(res);
            // var redirectUrl = $("#redirectUrl").val().replace(window.location.protocol+'//'+window.location.host, '');
            var redirectUrl = $("#redirectUrl").val();
            if(common.isEmpty(redirectUrl)) {
                redirectUrl = '/';
            }
            redirectUrl = '/login/workspace';
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