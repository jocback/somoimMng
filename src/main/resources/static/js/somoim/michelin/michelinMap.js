var container;      // 지도를 담을 영역
var options;        // 지도 생성에 필요한 옵션
var map;            // 지도 객체 생성
var ps;             // 장소 검색 객체
var infowindow;     // 인포윈도우(장소명 노출)
var overlay;        // 커스텀 overlay
var clusterer;

var michelinMap = {
    init: function() {
        michelinMap.loadMap();
        michelinMap.bind();
    },
    bind: function() {

        // 지도 열기
        $("#btn_search").on('click', function() {
            $(".modal-content").css('height', window.innerHeight-15);
            $("#mapModal").show();
        });

        // 지도 닫기
        $("#btn_mapModalClose").on('click', function() {
            $("#mapModal").hide();
        });

        // 지명 검색하기
        $("#btn_searchKeyword").on('click', function() {
            ps.keywordSearch($("#inp_searchKeyword").val(), michelinMap.searchPlace);
        });
    },
    // 지도 조회
    loadMap: function() {
        // $("#map").css("height", window.innerHeight-129.5);

        container = $("#map")[0]; //지도를 담을 영역의 DOM 레퍼런스
        options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.48025932001686, 126.95089697194955), //지도의 중심좌표.
            level: 3 //지도의 레벨(확대, 축소 정도)
        };

        map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

        // 장소 검색 객체
        ps = new kakao.maps.services.Places();

        // 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
        // infowindow = new kakao.maps.InfoWindow({zIndex:1});

        kakao.maps.event.addListener(map, 'dragend', function() {
            michelinMap.dragEvent();
        });
        kakao.maps.event.addListener(map, 'zoom_changed', function() {
            michelinMap.dragEvent();
        });

        // 클러스터 추가하기
        clusterer = new kakao.maps.MarkerClusterer({
            map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
            averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
            minLevel: 10, // 클러스터 할 최소 지도 레벨
            disableClickZoom: true
        });

        michelinMap.addCluster();


        container.style.width='100%';
        container.style.height=window.innerHeight-157+'px';

        map.relayout();
    },
    // 지도 이동 이이벤트
    dragEvent: function() {
        clusterer.clear();
        michelinMap.addCluster();

        // var message = '변경된 지도 중심좌표는 ' + latlng.getLat() + ' 이고, ';
        // message += '경도는 ' + latlng.getLng() + ' 입니다';

        // console.log(message);
        // var resultDiv = document.getElementById('result');
        // resultDiv.innerHTML = message;
    },
    // 클러스터 추가하기
    addCluster: function() {

        var bounds = map.getBounds();

        // 클러스터 DB 조회
        var param = {
            bfLat: bounds.getSouthWest().getLat(),
            bfLng: bounds.getSouthWest().getLng(),
            afLat: bounds.getNorthEast().getLat(),
            afLng: bounds.getNorthEast().getLng(),
        };
        common.ajax('/michelin/selectMapMichelinList', param, function(data){

            console.log('showdata');
            console.log(data);
            var markers = $(data.mapMichelinList).map(function(i, position) {
                console.log('position');
                console.log(position);
                var marker = new kakao.maps.Marker({
                    // map: map,
                    position: new kakao.maps.LatLng(position.fcltyLa, position.fcltyLo)
                });

                kakao.maps.event.addListener(marker, 'click', function() {
                    console.log('click event');
                    console.log(position);

                    if(overlay!=undefined && overlay.getMap()!=null) {
                        overlay.setMap(null);
                    }

                    var content = '';
                    content += '<div class="wrap">';
                    content += '    <div class="info">';
                    content += '        <div class="title">';
                    content += '            '+position.fcltyNm;
                    content += '            <div class="close" onclick="michelinMap.closeOverlay()" title="닫기"></div>';
                    content += '        </div>';
                    content += '        <div class="body">';
                    content += '            <div class="img">';
                    content += '                <img src="https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/thumnail.png" width="73" height="70">';
                    content += '           </div>';
                    content += '            <div class="desc">';
                    content += '                <div class="ellipsis">'+position.rdnmadrNm+'</div>';
                    content += '                <div class="jibun ellipsis">'+position.rdnmadrNm+'</div>';
                    content += '                <div class="ellipsis">'+position.reprsntMenuNm+'</div>';
                    content += '                <div class="ellipsis"><a href="https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query='+position.fcltyNm+'" target="_blank">검색하기</a></div>';
                    // content += '                <div class="ellipsis">'+position.phone+'</div>';
                    // content += '                <div><a href="'+position.place_url+'" target="_blank" class="link">상세보기</a></div>';
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

                return marker;

            });
            console.log(markers);

            // var marker = new kakao.maps.Marker({
            //     map: map,
            //     position: new kakao.maps.LatLng(place.y, place.x)
            // });


            clusterer.addMarkers(markers);

        });

        kakao.maps.event.addListener(clusterer, 'clusterclick', function(cluster) {

            alert('cluster click');
            // 현재 지도 레벨에서 1레벨 확대한 레벨
            // var level = map.getLevel()-1;

            // 지도를 클릭된 클러스터의 마커의 위치를 기준으로 확대합니다
            // map.setLevel(level, {anchor: cluster.getCenter()});
        });
    },
    // 지도 검색하기
    searchPlace: function(data, status, pagination) {
        console.log(data);
        console.log(status);
        console.log(pagination);
        if (status === kakao.maps.services.Status.OK) {

            michelinMap.drawSearchResult(data);

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            var bounds = new kakao.maps.LatLngBounds();

            for (var i=0; i<data.length; i++) {
                michelinMap.displayMarker(data[i]);
                bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
            }

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
            map.setBounds(bounds);
        }
    },
    drawSearchResult: function(data) {
        var resultHtml = '';
        $.each(data, function(i, v){
            resultHtml += '<div class="col-sm-12 invoice-col">';
            resultHtml += '    <address>';
            resultHtml += '        <strong><a href="javascript:michelinMap.moveToMap(\''+v.y+'\',\''+v.x+'\');">'+v.place_name+'</a></strong>';
            resultHtml += '        <span class="text-muted small">'+v.category_name+'</span><br>';
            if(!common.isEmpty(v.road_address_name)) {
                resultHtml += '        '+v.road_address_name+'<br>';
            } else {
                resultHtml += '        '+v.address_name+'<br>';
            }
            resultHtml += '        '+v.phone+'<br>';

            resultHtml += '<a href="javascript:michelinMap.addressDetail(\''+v.place_url+'\')" class="btn btn-outline-dark btn-xs">카카오지도</a>';
            resultHtml += '    </address>';
            resultHtml += '</div>';
        });
        $("#div_searchResult").html(resultHtml);
    },
    // 마커 체크

    displayMarker: function(place) {
        // 마커를 생성하고 지도에 표시합니다
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

            var content = '';
            content += '<div class="wrap">';
            content += '    <div class="info">';
            content += '        <div class="title">';
            content += '            '+place.place_name;
            content += '            <div class="close" onclick="michelinMap.closeOverlay()" title="닫기"></div>';
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
    closeOverlay: function() {
        overlay.setMap(null);
    },
}

$(function() {
    michelinMap.init();
});