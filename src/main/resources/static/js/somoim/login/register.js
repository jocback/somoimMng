var register = {
    init: function() {
    },
    bind: function() {
    },
    // 회원가입 validation
    joinValidate: function() {
        if(common.isEmpty($("#userId").val())) {
            alert("아이디를 입력해 주세요.");
            $("#userId").focus();
            return false;
        }

        if(common.isEmpty($("#userPw").val())) {
            alert("비밀번호를 입력해 주세요.");
            $("#userId").focus();
            return false;
        }

        if(common.isEmpty($("#userNm").val())) {
            alert("이름을 입력해 주세요.");
            $("#userNm").focus();
            return false;
        }

        if(common.isEmpty($("#age").val())) {
            alert("나이를 입력해 주세요.");
            $("#age").focus();
            return false;
        }

        if(common.isEmpty($("#loc").val())) {
            alert("지역을 입력해 주세요.");
            $("#loc").focus();
            return false;
        }

        if(common.isEmpty($("#phone").val())) {
            alert("연락처를 입력해 주세요.");
            $("#phone").focus();
            return false;
        }

        if(common.isEmpty($("#email").val())) {
            alert("이메일을 입력해 주세요.");
            $("#email").focus();
            return false;
        }

        return true;


    },
    join: function() {

        if(!register.joinValidate()) {
            return;
        }

        var hPwd = CryptoJS.SHA512($("#userPw").val());
        var usrPwd = CryptoJS.AES.encrypt(hPwd.toString(), "somoim");
        $("#encPw").val(usrPwd);

        var param = {
            userId: $("#userId").val(),
            userPw: $("#encPw").val(),
            userNm: $("#userNm").val(),
            age: $("#age").val(),
            gender: $("#gender").val(),
            loc: $("#loc").val(),
            phone: $("#phone").val(),
            email: $("#email").val(),
        };
        console.log(param);

        common.ajax('/login/joinUser', param, function(res) {
            alert('회원가입에 성공하였습니다.');
            common.goPage('/login/loginForm');
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