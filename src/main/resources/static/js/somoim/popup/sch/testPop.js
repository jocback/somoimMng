var schDetailPopup = {
    init: function() {
        $("#schDetailModal").modal('show');
        // schDetailPopup.openerMessage();
    },
    bind: function() {

    },
    openerMessage: function() {
        if (window.opener) {
            window.opener.postMessage('Hello from child window!', 'https://192.168.21.92:8080');
        }
    },
    // 팝업창 닫기
    close: function() {
        window.close();
    },
};

$(function() {
    schDetailPopup.init();

    window.addEventListener('message', (event) => {

        console.log("origin : " + event.origin);
        console.log("data : " + JSON.stringify(event.data));

        if (event && event.data) {
            console.log("데이터" + event.data.summary);
            $("#resultTxt").html(JSON.stringify(event));
            // Hello from parent!
        }

        // event.source 는 window.opener(팝업을 연 부모)가 된다.
        // event.data는 부모에서 보낸 데이터인 'Hello'가 된다.
        //event.source.postMessage('World!', event.origin); // 메시지를 받으면 메시지를 보낸 쪽에 'World!' 데이터를 보낸다.
    }, false);
});


