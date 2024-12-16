var schDetailPopup = {
    init: function() {
        $("#schDetailModal").modal('show');
        schDetailPopup.initSchDetail();
    },
    bind: function() {

    },
    // 일정상세 조회
    initSchDetail: function() {

        var param = {
            schSeq : $("#popupSchSeq").val()
        }

        common.ajax('/sch/selectSchDetail', param, function(res) {
            console.log(res);
            var schDetail = res.schDetail;
            $("#schNm").text(schDetail.schNm);
            $("#schDate").text(dateUtil.getFormat(schDetail.schDate+''+schDetail.schTime, 'yyyy-MM-dd HH:mm'));
            $("#schCnt").text(schDetail.schCnt);
            // $("#schLoc").text(schDetail.schLoc);

            $("#schSeq").html(res.schDetail.schSeq);

            var memHtml = '';

            // memHtml += '<div class="col-9"></div>';


            $.each(schDetail.memlist, function(i, v){
                if(i>0) {
                    memHtml += '<br/>';
                    // memHtml += '<div class="col-3"></div>';
                }
                // memHtml += '<div class="col-9">'+v.userNm+'/'+v.age+'/'+v.loc+'</div>';
                memHtml += v.userNm+'/'+v.age+'/'+v.loc;
            });
            $("#memList").html(memHtml);

            common.ajax('/sch/selectSchStoreList', param, function(res) {
                var storeHtml = '';
                $.each(res.schStoreList, function(i, v){
                    if(i>0) {
                        storeHtml += '<br/>';
                    }
                    storeHtml += (i+1)+'차 : '+v.storeName;
                });
                $("#schLoc").html(storeHtml);
                console.log(res);
            });


            $("#schModal").modal('show');

        });
    },
    // 팝업창 닫기
    close: function() {
        window.close();
    },
    // 수정페이지 이동
    modify: function() {
        opener.popup.callback($("#popupSchSeq").val());
        schDetailPopup.close();
    }
};

$(function() {
    schDetailPopup.init();
});