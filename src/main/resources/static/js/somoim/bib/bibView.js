var bibleMainList = new Array();
var bibView = {
    init: function() {
        bibView.bind();
        bibView.selectBibMainList();
    },
    bind: function() {
        $("#btn_searchBib").on('click', function() {
           bibView.searchBib();
        });

        // 말씀 자동완성
        $("#mainNm").autocomplete({
            source: bibleMainList,
            select: function(event, ui) {
                console.log('select');
                console.log(ui.item);
                $("#mainNm").val(ui.value);
                return;
            },
        });
    },
    // 말씀 조회
    searchBib: function() {
        var param = {
            mainNm : $("#mainNm").val(),
            stChpt : $("#stChpt").val(),
            stVers : $("#stVers").val(),
            endChpt : $("#endChpt").val(),
            endVers : $("#endVers").val(),
        }

        common.ajax("/bib/selectBibVers", param, function(res) {
           console.log(res);
           bibView.drawBib(res.bibList);
        });
    },
    // 말씀 출력
    drawBib: function(dat) {
        var bibHtml = '';
        bibHtml += '<tr><td colspan="3">'+$("#mainNm").val()+'</td></tr>';
        $.each(dat, function(i, v){
            bibHtml += '<tr>';
            bibHtml += '    <td>'+v.bibChpt+'</td>';
            bibHtml += '    <td>'+v.bibVers+'</td>';
            bibHtml += '    <td style="white-space: normal;">'+v.bibMain+'</td>';
            bibHtml += '</tr>';
        });

        $("#tbd_bibList").html(bibHtml);
    },
    // 성경 조회하기
    selectBibMainList: function() {
        var param = {};
        common.ajax("/bib/selectBibMain", param, function(res) {
            console.log(res);

            $.each(res.bibMainList, function(i, v){
                var row = new Object();
                row.value = v.cdNm;
                row.label = v.cdNm+'('+v.grpCdNm+')';
                bibleMainList.push(row);
            });
        });
    },
}

$(function() {
    bibView.init();
});