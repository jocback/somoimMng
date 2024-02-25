var container;      // 지도를 담을 영역
var options;        // 지도 생성에 필요한 옵션
var map;            // 지도 객체 생성
var ps;             // 장소 검색 객체
var infowindow;     // 인포윈도우(장소명 노출)
var overlay;        // 커스텀 overlay
var clusterer;

var locMapPopup = {
    init: function() {
        $(".modal-content").css('height', window.innerHeight);
        $("#mapModal").show();
        locMapPopup.loadMap();
        locMapPopup.bind();
    },
    bind: function() {

        // 지도 열기
        $("#btn_search").on('click', function() {
            $(".modal-content").css('height', window.innerHeight);
            $("#mapModal").show();
        });

        // 지도 닫기
        $("#btn_mapModalClose").on('click', function() {
            $("#mapModal").hide();
        });

        // 지명 검색하기
        $("#btn_searchKeyword").on('click', function() {
            ps.keywordSearch($("#inp_searchKeyword").val(), locMapPopup.searchPlace);
        });

        $("#inp_searchKeyword").on('keyup', function() {
            var replaceName = /^[가-힣a-zA-Z\s]+$/;
            var str = $("#inp_searchKeyword").val();
            if(str.length>0) {
                if(str.match(replaceName)) {
                    var param = {
                        keyword : encodeURI(str)
                    }
                    common.ajax('/loc/getAutoComp', param, function(res) {
                        console.log(res);
                        console.log(JSON.parse(res.result));
                        locMapPopup.drawAutoCompResult(JSON.parse(res.result));
                    });
                }
            }
        });
    },
    loadMap: function() {
        // $("#map").css("height", window.innerHeight-129.5);

        container = $("#map")[0]; //지도를 담을 영역의 DOM 레퍼런스
        options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 장소 검색 객체
        ps = new kakao.maps.services.Places();

        // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        // infowindow = new kakao.maps.InfoWindow({zIndex:1});

        // clusterer = new kakao.maps.MarkerClusterer({
        //     map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        //     averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        //     minLevel: 10 // 클러스터 할 최소 지도 레벨
        // });



        container.style.width='100%';
        container.style.height=window.innerHeight+'px';

        map.relayout();
    },
    // 지도 검색하기
    searchPlace: function(data, status, pagination) {
        console.log(data);
        console.log(status);
        console.log(pagination);
        if (status === kakao.maps.services.Status.OK) {

            locMapPopup.drawSearchResult(data);

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            var bounds = new kakao.maps.LatLngBounds();

            for (var i=0; i<data.length; i++) {
                locMapPopup.displayMarker(data[i]);
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
        }
    },
    // 지도 검색결과 출력
    drawSearchResult: function(data) {
        $("#div_searchResult").show();
        $("#div_autoCompResult").hide();
        var resultHtml = '';
        $.each(data, function(i, v){
            resultHtml += '<div class="col-sm-12 invoice-col">';
            resultHtml += '    <address>';
            resultHtml += '        <strong><a href="javascript:locMapPopup.moveToMap(\''+v.y+'\',\''+v.x+'\');">'+v.place_name+'</a></strong>';
            resultHtml += '        <span class="text-muted small">'+v.category_name+'</span><br>';
            if(!common.isEmpty(v.road_address_name)) {
                resultHtml += '        '+v.road_address_name+'<br>';
            } else {
                resultHtml += '        '+v.address_name+'<br>';
            }
            resultHtml += '        '+v.phone+'<br>';

            resultHtml += '<a href="javascript:locMapPopup.addressDetail(\''+v.place_url+'\')" class="btn btn-outline-dark btn-xs">카카오지도</a>&nbsp;';
            resultHtml += '<a href="javascript:void(0);" onclick="locMapPopup.selectStore(this)" class="btn btn-info btn-xs">가게 선택하기</a>';
            resultHtml += '<input type="hidden" name="hidplace_name" value="'+v.place_name+'"/>';
            resultHtml += '<input type="hidden" name="hidaddress_name" value="'+v.address_name+'"/>';
            resultHtml += '<input type="hidden" name="hidroad_address_name" value="'+v.road_address_name+'"/>';
            resultHtml += '<input type="hidden" name="hidcategory_name" value="'+v.category_name+'"/>';
            resultHtml += '<input type="hidden" name="hidx" value="'+v.x+'"/>';
            resultHtml += '<input type="hidden" name="hidy" value="'+v.y+'"/>';
            resultHtml += '    </address>';
            resultHtml += '</div>';
        });
        $("#div_searchResult").html(resultHtml);
    },
    selectStore: function(el) {
        // console.log($(el));
        // console.log($(el).html());
        // var storeAddress = $(el).parents('address');
        // console.log($(storeAddress).find('input[type=hidden]'));
        var addressEl = $(el).parent('address');
        var hidArr = addressEl.find('input[type=hidden]')
        var storeParam = {};
        $.each(hidArr, function(i,v){
            storeParam[$(v).attr('name').replace("hid","")]=$(v).attr('value');
        });

        opener.popup.callback(storeParam);
        window.close();
    },
    // 자동완성 목록
    drawAutoCompResult: function(data) {
        $("#div_searchResult").hide();
        $("#div_autoCompResult").show();
        var resultHtml = '';
        $.each(data.items, function(i, v){
            resultHtml += '<div class="col-sm-12 invoice-col">';
            resultHtml += '    <address>';
            resultHtml += '        <strong><a href="javascript:locMapPopup.selectAutoComp(\''+v.key+'\');">'+v.key+'</a></strong>';
            resultHtml += '    </address>';
            resultHtml += '</div>';
        });
        $("#div_autoCompResult").html(resultHtml);
    },
    // 자동완성 선택
    selectAutoComp: function(keyword) {
        $("#inp_searchKeyword").val(keyword);
        ps.keywordSearch($("#inp_searchKeyword").val(), locMapPopup.searchPlace);
    },
    // 마커 체크
    displayMarker(place) {
        // 마커를 생성하고 지도에 표시          합니다
        var marker = new kakao.maps.Marker({
            map: map,
            position: new kakao.maps.LatLng(place.y, place.x)
        });

        // 마커에 클릭이벤트를 등록합니다
        // kakao.maps.event.addListener(marker, 'click', function() {
        //     // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        //     // infowindow.setContent(content);
        //     infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
        //     infowindow.open(map, marker);
        //     console.log(marker);
        //     console.log(place);
        // });

        kakao.maps.event.addListener(marker, 'click', function() {

            if(overlay!=undefined && overlay.getMap()!=null) {
                overlay.setMap(null);
            }

            console.log(place);
            var content = '';
            content += '<div class="wrap">';
            content += '    <div class="info">';
            content += '        <div class="title">';
            content += '            '+place.place_name;
            content += '            <div class="close" onclick="locMapPopup.closeOverlay()" title="닫기"></div>';
            content += '        </div>';
            content += '        <div class="body">';
            content += '            <div class="img">';
            content += '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">';
            content += '           </div>';
            content += '            <div class="desc">';
            content += '                <div class="ellipsis">'+place.road_address_name+'</div>';
            content += '                <div class="jibun ellipsis">'+place.address_name+'</div>';
            content += '                <div class="ellipsis">'+place.category_name+'</div>';
            content += '                <div class="ellipsis">'+place.phone+'</div>';
            content += '                <div><a href="'+place.place_url+'" target="_blank" class="link">상세보기</a></div>';
            content += '            </div>';
            content += '        </div>';
            content += '    </div>';
            content += '</div>';

            overlay = new kakao.maps.CustomOverlay({
                content: content,
                map: map,
                position: marker.getPosition()
            });
            overlay.setMap(map);
        });




    },
    // 지도 이동
    moveToMap: function(lat, lng) {
        $("#mapModal").hide();
        map.setLevel(3);
        var moveLatLon = new kakao.maps.LatLng(lat, lng);
        map.panTo(moveLatLon);
    },
    // 지명 상세 보기
    addressDetail: function(url) {
        window.open(url);
    },
    // 검색창 닫기
    closeOverlay: function() {
        overlay.setMap(null);
    },
}

$(function() {
    locMapPopup.init();
});