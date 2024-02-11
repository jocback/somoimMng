var container;      // 지도를 담을 영역
var options;        // 지도 생성에 필요한 옵션
var map;            // 지도 객체 생성
var ps;             // 장소 검색 객체
var infowindow;     // 인포윈도우(장소명 노출)
var overlay;        // 커스텀 overlay
var clusterer;

var locMap = {
    init: function() {
        locMap.loadMap();
        locMap.bind();
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
            ps.keywordSearch($("#inp_searchKeyword").val(), locMap.searchPlace);
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



            clusterer = new kakao.maps.MarkerClusterer({
                map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
                averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
                minLevel: 10 // 클러스터 할 최소 지도 레벨
            });

        // 데이터를 가져오기 위해 jQuery를 사용합니다
        // 데이터를 가져와 마커를 생성하고 클러스터러 객체에 넘겨줍니다

        cljson = JSON.parse(cljson);

        // 데이터에서 좌표 값을 가지고 마커를 표시합니다
        // 마커 클러스터러로 관리할 마커 객체는 생성할 때 지도 객체를 설정하지 않습니다
        var markers = $(cljson.positions).map(function(i, position) {
            return new kakao.maps.Marker({
                position : new kakao.maps.LatLng(position.lat, position.lng)
            });
        });

        // 클러스터러에 마커들을 추가합니다
        clusterer.addMarkers(markers);

        container.style.width='100%';
        container.style.height=window.innerHeight-157+'px';

        map.relayout();
    },

    // 지도 검색하기
    searchPlace: function(data, status, pagination) {
        console.log(data);
        console.log(status);
        console.log(pagination);
        if (status === kakao.maps.services.Status.OK) {

            locMap.drawSearchResult(data);

            // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
            // LatLngBounds 객체에 좌표를 추가합니다
            var bounds = new kakao.maps.LatLngBounds();

            for (var i=0; i<data.length; i++) {
                locMap.displayMarker(data[i]);
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
            resultHtml += '        <strong><a href="javascript:locMap.moveToMap(\''+v.y+'\',\''+v.x+'\');">'+v.place_name+'</a></strong>';
            resultHtml += '        <span class="text-muted small">'+v.category_name+'</span><br>';
            if(!common.isEmpty(v.road_address_name)) {
                resultHtml += '        '+v.road_address_name+'<br>';
            } else {
                resultHtml += '        '+v.address_name+'<br>';
            }
            resultHtml += '        '+v.phone+'<br>';

            resultHtml += '<a href="javascript:locMap.addressDetail(\''+v.place_url+'\')" class="btn btn-outline-dark btn-xs">상세보기</a>';
            resultHtml += '    </address>';
            resultHtml += '</div>';
        });
        $("#div_searchResult").html(resultHtml);
    },
    // 마커 체크
    displayMarker(place) {
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
            content += '            <div class="close" onclick="locMap.closeOverlay()" title="닫기"></div>';
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
    locMap.init();
})

var cljson = '{\n'
    + '  "positions": [\n'
    + '    {\n'
    + '      "lat": 37.27943075229118,\n'
    + '      "lng": 127.01763998406159\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.55915668706214,\n'
    + '      "lng": 126.92536526611102\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.13854258261161,\n'
    + '      "lng": 129.1014781294671\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.55518388656961,\n'
    + '      "lng": 126.92926237742505\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.20618517638034,\n'
    + '      "lng": 129.07944301057026\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.561110808242056,\n'
    + '      "lng": 126.9831268386891\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.86187129655063,\n'
    + '      "lng": 127.7410250820423\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.47160156778542,\n'
    + '      "lng": 126.62818064142286\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.10233410927457,\n'
    + '      "lng": 129.02611815856181\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.10215562270429,\n'
    + '      "lng": 129.02579793018205\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.475423012251106,\n'
    + '      "lng": 128.76666923366042\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.93282824693927,\n'
    + '      "lng": 126.95307628834287\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 36.33884892276137,\n'
    + '      "lng": 127.393666019664\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.520412849636,\n'
    + '      "lng": 126.9742764161581\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.155139675209675,\n'
    + '      "lng": 129.06154773758374\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.816041994696576,\n'
    + '      "lng": 127.11046706211324\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 38.20441110638504,\n'
    + '      "lng": 128.59038671285234\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.586112739308916,\n'
    + '      "lng": 127.02949148517999\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.50380641844987,\n'
    + '      "lng": 127.02130716617751\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.55155704387368,\n'
    + '      "lng": 126.92161115892036\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.55413060051369,\n'
    + '      "lng": 126.92207472929526\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 36.362321615174835,\n'
    + '      "lng": 127.35000483225389\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.55227862908755,\n'
    + '      "lng": 126.92280546294998\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.490413948014606,\n'
    + '      "lng": 127.02079678472444\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.172358507549596,\n'
    + '      "lng": 126.90545394866643\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.15474103200252,\n'
    + '      "lng": 129.11827889154455\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.516081250973485,\n'
    + '      "lng": 127.02369057166361\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 36.80711722863776,\n'
    + '      "lng": 127.14020346037576\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.28957415752673,\n'
    + '      "lng": 127.00103752005424\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.83953896766896,\n'
    + '      "lng": 128.7566880321854\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.51027412948879,\n'
    + '      "lng": 127.08227718124704\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.493581783270294,\n'
    + '      "lng": 126.72541955660554\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.135291862962795,\n'
    + '      "lng": 129.10060911448775\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.174574933144065,\n'
    + '      "lng": 126.91389980787773\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.795887691878654,\n'
    + '      "lng": 127.10660416587146\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.59288687521181,\n'
    + '      "lng": 126.96560524627377\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.45076411130452,\n'
    + '      "lng": 127.14593003749792\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.86008337557079,\n'
    + '      "lng": 127.1263912488061\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.23773491330953,\n'
    + '      "lng": 129.08371037429578\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.524297321304886,\n'
    + '      "lng": 127.05018281937049\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 36.33386658021849,\n'
    + '      "lng": 127.4461721466889\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.72963747546802,\n'
    + '      "lng": 128.27079056365005\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 36.02726828142973,\n'
    + '      "lng": 129.37257233594056\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.0708030360945,\n'
    + '      "lng": 129.0593185494088\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.86835862950247,\n'
    + '      "lng": 128.59755089175871\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 33.51133264696746,\n'
    + '      "lng": 126.51852347452322\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.61284289586752,\n'
    + '      "lng": 127.03120547238589\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.851696038722466,\n'
    + '      "lng": 128.59092937125666\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.59084695083232,\n'
    + '      "lng": 127.01872773588882\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.52114874288784,\n'
    + '      "lng": 129.33573629945764\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 36.362326407439845,\n'
    + '      "lng": 127.33577420148076\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.28941189110747,\n'
    + '      "lng": 127.00446132665141\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.32049801117398,\n'
    + '      "lng": 129.1810343576788\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.53338631541601,\n'
    + '      "lng": 127.00615481678061\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.413461468258156,\n'
    + '      "lng": 126.67735680840826\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.920390371093205,\n'
    + '      "lng": 128.54411720249956\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 36.65489374054824,\n'
    + '      "lng": 127.48374816871991\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.49491987110441,\n'
    + '      "lng": 127.01493134206048\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.64985695608336,\n'
    + '      "lng": 127.14496345268074\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.55686770317417,\n'
    + '      "lng": 127.16927880543041\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.37014007589146,\n'
    + '      "lng": 127.10614330185591\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.5350236507627,\n'
    + '      "lng": 126.96157681184789\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.40549630594667,\n'
    + '      "lng": 126.8980581820004\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 34.867950544005744,\n'
    + '      "lng": 128.69069690081176\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.16317059543225,\n'
    + '      "lng": 128.98452978748048\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 36.607484825953186,\n'
    + '      "lng": 127.48520451195111\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.651724785213986,\n'
    + '      "lng": 126.58306748337554\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.86059690063427,\n'
    + '      "lng": 128.59193087665244\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.25685847585025,\n'
    + '      "lng": 128.59912605060455\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 33.509258155694496,\n'
    + '      "lng": 126.5109451464813\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.64366155701157,\n'
    + '      "lng": 126.63255039247507\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.82667262227336,\n'
    + '      "lng": 127.1030670574823\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.82003554991111,\n'
    + '      "lng": 127.14810974062483\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.097485195649455,\n'
    + '      "lng": 128.99486181862338\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.32204249590605,\n'
    + '      "lng": 127.95591893585816\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.50535127272031,\n'
    + '      "lng": 127.1047465440526\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 36.99081407156533,\n'
    + '      "lng": 127.09338324956647\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.323486640444834,\n'
    + '      "lng": 127.12285239871076\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.78973089440451,\n'
    + '      "lng": 127.13644319545601\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.641373953578196,\n'
    + '      "lng": 129.35463220719618\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.47423127310911,\n'
    + '      "lng": 126.97625029161996\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.84357192991226,\n'
    + '      "lng": 128.61143720719716\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.180974984085736,\n'
    + '      "lng": 128.20294526341132\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.57895718642583,\n'
    + '      "lng": 126.9316897337244\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 33.49077253755052,\n'
    + '      "lng": 126.49314817000993\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 36.42175925330255,\n'
    + '      "lng": 128.67409133225766\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.46405540570109,\n'
    + '      "lng": 126.7153544119173\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.594758776232126,\n'
    + '      "lng": 127.10099917489818\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.7239966558994,\n'
    + '      "lng": 127.0478671731854\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.86680171505329,\n'
    + '      "lng": 128.5923738376741\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.560573727266785,\n'
    + '      "lng": 126.81239107485251\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.78692224857484,\n'
    + '      "lng": 126.98966010341789\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.10368644802913,\n'
    + '      "lng": 129.0206862606022\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.063839948992644,\n'
    + '      "lng": 127.06856523030079\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.34344643728643,\n'
    + '      "lng": 127.94382181350932\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.512521267219064,\n'
    + '      "lng": 127.40054805648133\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.15286653837983,\n'
    + '      "lng": 126.90419903971498\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.173238445546296,\n'
    + '      "lng": 129.176082844468\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 36.082394201323524,\n'
    + '      "lng": 129.40330471725923\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.51043665598106,\n'
    + '      "lng": 127.03974070036524\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 36.627816673285054,\n'
    + '      "lng": 127.44969866021904\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.59194624756919,\n'
    + '      "lng": 127.01817545576053\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.387147045560866,\n'
    + '      "lng": 127.1253365438929\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.89948383848115,\n'
    + '      "lng": 128.60809550730653\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.555316235235324,\n'
    + '      "lng": 127.14038447894715\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 36.09622092762977,\n'
    + '      "lng": 128.43314679004078\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.582855922985544,\n'
    + '      "lng": 126.91907857008522\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.516000983841586,\n'
    + '      "lng": 128.72798872032757\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.48429363675198,\n'
    + '      "lng": 127.0379630203579\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.54502575965604,\n'
    + '      "lng": 126.95429338245707\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.236247173046394,\n'
    + '      "lng": 128.8677618015292\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.40157536691968,\n'
    + '      "lng": 127.11717457214067\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 36.95191038001258,\n'
    + '      "lng": 127.91064040877527\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.491526492971346,\n'
    + '      "lng": 126.85463749525812\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 36.124356479753196,\n'
    + '      "lng": 128.09517052346138\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.15715169307048,\n'
    + '      "lng": 128.15853461363773\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.5808156608605,\n'
    + '      "lng": 126.95109705510639\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.46931787249714,\n'
    + '      "lng": 126.89904775044873\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.52195614910054,\n'
    + '      "lng": 129.3209904841746\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.58625703195563,\n'
    + '      "lng": 126.9496035206742\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.28463639199199,\n'
    + '      "lng": 126.85984474757359\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.534169458631226,\n'
    + '      "lng": 129.31169021536095\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.553341234194285,\n'
    + '      "lng": 127.15481222237025\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 37.62293367990081,\n'
    + '      "lng": 126.83445005122417\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.5272027005698,\n'
    + '      "lng": 127.72953798950101\n'
    + '    },\n'
    + '    {\n'
    + '      "lat": 35.180032285898854,\n'
    + '      "lng": 128.06954509175367\n'
    + '    }\n'
    + '  ]\n'
    + '}'