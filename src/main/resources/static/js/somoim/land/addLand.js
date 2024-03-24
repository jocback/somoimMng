var mapContainer;
var mapOptions;
var map;
var geocoder;

var addLand = {
    init: function() {
        addLand.initContainer();
    },
    initContainer: function() {
        // mapContainer = $("#map")[0];
        // mapOptions = {
        //     center: new kakao.maps.LatLng(37.48025932001686, 126.95089697194955), //지도의 중심좌표.
        //     level: 3 //지도의 레벨(확대, 축소 정도)
        // }
        //
        // map = new kakao.maps.Map(mapContainer, mapOptions);

        geocoder = new kakao.maps.services.Geocoder();

    },
    bind: function() {
    },
    test: function() {
        var param = {
            url : $("#naverUrl").val()
        }
        common.ajax("/land/getSaleInfo", param, function(dat) {
            console.log(dat.result);
            addLand.setSaleInfo(dat.result);
        })
    },
    setSaleInfo: function(dat) {
        console.log(dat);
        $("#deposit").val(dat.deposit);
        $("#admnCost").val(dat.admnCost);
        $("#supplyArea").val(dat.supplyArea);
        $("#exclArea").val(dat.exclArea);
        $("#floor").val(dat.floor);
        $("#facing").val(dat.facing);
        $("#room").val(dat.room);
        $("#duplex").val(dat.duplex);
        $("#moveInDate").val(dat.moveInDate);
        $("#saleNumber").val(dat.saleNumber);
        $("#saleIntroduce").val(dat.saleIntroduce);
    },
    onPostCode: function() {
        new daum.Postcode({
            oncomplete: function(data) {
                console.log(data);
                addLand.getLatLng(data.address);
            }
        }).open();
    },
    getLatLng: function(addrStr) {
        geocoder.addressSearch(addrStr, function(result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {

                var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
                var message = 'latlng: new kakao.maps.LatLng(' + result[0].y + ', ';
                message += result[0].x + ')';
                console.log(message);
            }
        })
    },
};

$(function(){
    addLand.init();
});