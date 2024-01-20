var workspace = {
    init: function() {
        workspace.selectSomoim();
    },
    bind: function() {

    },
    // 소모임 목록 조회
    selectSomoim: function() {
        common.ajax('/login/selectSomoim', {}, function(res) {
            console.log(res);

            var somoimHtml = '';
            $.each(res.somoimList, function(i, v){

                somoimHtml += '<div class="col-md-6 col-lg-3">';
                somoimHtml += '    <div class="card">';
                // somoimHtml += '        <img class="img-fluid" src="/lib/bootstrap/images/big/img1.jpg" alt="">';
                somoimHtml += '        <div class="card-body">';
                somoimHtml += '            <h5 class="card-title">'+v.smiNm+'</h5>';
                somoimHtml += '            <p class="card-text">'+v.smiRmrk+'</p>';
                somoimHtml += '            <p class="card-text">';
                somoimHtml += '                <small class="text-muted">'+v.centArea+'</small>';
                somoimHtml += '            </p>';
                somoimHtml += '            <a href="javascript:workspace.choiceSomoim('+v.smiSeq+');" class="btn btn-primary mb-1">모임 선택하기</a>';
                somoimHtml += '        </div>';
                somoimHtml += '    </div>';
                somoimHtml += '</div>';
            });

            $("#div_somoimList").html(somoimHtml);






        });
    },
    // 소모임 추가 팝업
    lyrAddSomoim: function() {
    },
    // 소모임 생성 팝업
    lyrCreateSomoim: function() {
        $("#createModal").modal('show');
    },
    // 소모임 선택하기
    choiceSomoim: function(smiSeq) {
        var param = {
            smiSeq: smiSeq
        }
        common.ajax('/login/choiceSomoim', param, function(res) {
            common.goPage('/', param);
        });

    },
    // 소모임 추가하기
    addSomoim: function() {
    },
    // 소모임 생성하기
    createSomoim: function() {
        var param = {
            smiNm: $("#smiNm").val(),
            centArea: $("#centArea").val(),
            smiRmrk: $("#smiRmrk").val(),
        }

        common.ajax('/login/insertSmiMng', param, function(res) {
            $("#createModal").modal('hide');
        });
    },
}

$(function() {
    workspace.init();
});