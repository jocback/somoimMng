var memList = new Array();
var ps;
var schRegister = {
    // 최조실행
    init: function() {
        schRegister.selectMemList();
        schRegister.bind();
        if($("#type").val()=='modify') {
            schRegister.selectDetail();
        }
        schRegister.loadMap();
    },
    loadMap: function() {
        ps = new kakao.maps.services.Places();
    },
    bind: function() {
        $("#auto_member").autocomplete({
            source: memList,
            select: function(event, ui) {
                console.log('select');
                console.log(ui.item);
                schRegister.addMember(ui.item);
                $("#auto_member").val('');
                return false;
            },
            focus: function(event, ui) {
                console.log('focus');
                return false;
            }
        });
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
            ps.keywordSearch($("#inp_searchKeyword").val(), schRegister.searchPlace);
        });

        // 주소 검색
        // $("#btn_searchAddress").on('click', function() {
        //     popup.openWindowPopup('/popup/locMapPopup', '', function(data) {
        //         console.log(data);
        //     })
        // });

        $("#btn_addStore").on('click', function() {
            schRegister.addStore();
        });
    },
    // 가게 추가
    addStore: function() {
        var trHtml = '';
        trHtml += '<tr>';
        trHtml += '    <td></td>';
        trHtml += '    <td><input type="text" class="form-control" placeholder="가게명" name="storeName"></td>';
        trHtml += '    <td>';
        trHtml += '        <div class="input-group input-group">';
        trHtml += '            <input type="text" class="form-control" name="roadAddressName">';
        trHtml += '            <span class="input-group-append">';
        trHtml += '                <button type="button" class="btn btn-info btn-flat" onclick="schRegister.searchStoreAddress(this)">검색</button>';
        trHtml += '            </span>';
        trHtml += '        </div>';
        trHtml += '    </td>';
        trHtml += '    <td><input type="text" class="form-control" placeholder="상세" name="addressDetail"></td>';
        trHtml += '    <td>';
        trHtml += '        <button type="button" class="btn btn-danger btn-flat" onclick="schRegister.removeStore(this);">삭제</button>';
        trHtml += '    </td>';
        trHtml += '<input type="hidden" name="addressName"/>';
        trHtml += '<input type="hidden" name="lat" />';
        trHtml += '<input type="hidden" name="lng" />';
        trHtml += '<input type="hidden" name="categoryName"/>';
        trHtml += '</tr>';
        $("#tb_storeList").append(trHtml);
        schRegister.setStoreSeq();
    },
    // 가게 삭제
    removeStore: function(el) {
        $(el).parents('tr').remove();
        schRegister.setStoreSeq();
    },
    // 순서 채번
    setStoreSeq: function() {
        $.each($("#tb_storeList").find('tr'), function(i,v){
            $(v).find('td').eq(0).text((i+1));
            $(v).find('input[name=storeSeq]').val((i+1));
        });
    },
    // 검색 팝업
    searchStoreAddress: function(el) {
        var addTr = $(el).parents('tr');
        popup.openWindowPopup('/popup/locMapPopup', '', function(data) {
            console.log(data);
            $(addTr).find('input[name=storeName]').val(data.place_name);
            if(!common.isEmpty(data.road_address_name)) {
                $(addTr).find('input[name=roadAddressName]').val(data.road_address_name);
            } else {
                $(addTr).find('input[name=roadAddressName]').val(data.address_name);
            }

            $(addTr).find('input[name=addressName]').val(data.address_name);
            $(addTr).find('input[name=categoryName]').val(data.category_name);
            $(addTr).find('input[name=lng]').val(data.x);
            $(addTr).find('input[name=lat]').val(data.y);
        })
    },
    // 지도 검색하기
    searchPlace: function(data, status, pagination) {
        console.log(data);
        console.log(status);
        console.log(pagination);
        if (status === kakao.maps.services.Status.OK) {
            schRegister.drawSearchResult(data);
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

            resultHtml += '<a href="javascript:locMap.addressDetail(\''+v.place_url+'\')" class="btn btn-outline-dark btn-xs">카카오지도</a>';
            resultHtml += '    </address>';
            resultHtml += '</div>';
        });
        $("#div_searchResult").html(resultHtml);
    },
    // 회원추가
    addMember: function(dat) {
      var memHtml = '';

      memHtml += '<div class="radio mb-3">';
      memHtml += '<input type="hidden" name="memSeq" value="'+dat.value+'" />';
      memHtml += '    <label>'+dat.label+'</label>';
      memHtml += '    <button type="button" class="btn btn-danger btn-sm" onclick="schRegister.removeMember(this)">삭제</button>';
      memHtml += '</div>';

      $("#memList").append(memHtml);
    },
    // 멤버 삭제
    removeMember: function(e) {
        $(e).parent('div').remove();
    },
    // 일정 등록
    register: function() {
        var memSeq = '';
        $.each($("[name=memSeq]"), function(i, v) {
            if(i ==0) {
                memSeq = $(v).val();
            } else{
                memSeq += '|'+$(v).val();
            }
        });

        var storeList = $("#frm_list").serializeObject();
        var locArray = new Array();
        var len = storeList.storeName.length;

        if(typeof(storeList.storeName)=='string') {
            var locJson = {
                storeSeq: 1,
                addressDetail: storeList.addressDetail,
                addressName: storeList.addressName,
                categoryName: storeList.categoryName,
                lat: storeList.lat,
                lng: storeList.lng,
                roadAddressName: storeList.roadAddressName,
                storeName: storeList.storeName,
            };
            locArray.push(locJson);
        } else {
            var len = storeList.storeName.length;

            for(var i=0; i<len; i++) {
                var locJson = {
                    storeSeq: i+1,
                    addressDetail: storeList.addressDetail[i],
                    addressName: storeList.addressName[i],
                    categoryName: storeList.categoryName[i],
                    lat: storeList.lat[i],
                    lng: storeList.lng[i],
                    roadAddressName: storeList.roadAddressName[i],
                    storeName: storeList.storeName[i],
                };
                locArray.push(locJson);
            }
        }

        var param = {
            schNm : $("#schNm").val(),
            schDate : $("#schDate").val(),
            schTime : $("#schTime").val(),
            schCnt : $("#schCnt").val(),
            schLoc : $("#schLoc").val(),
            locList: JSON.stringify(locArray),
            memSeq: memSeq
        }

        console.log(param);

        common.ajax('/sch/insertSmiSche', param, function(res) {
            location.reload()
        });
    },
    // 일정 수정
    modify: function() {
        var memSeq = '';
        $.each($("[name=memSeq]"), function(i, v) {
            if(i ==0) {
                memSeq = $(v).val();
            } else{
                memSeq += '|'+$(v).val();
            }
        });

        var storeList = $("#frm_list").serializeObject();
        var locArray = new Array();

        if(typeof(storeList.storeName)=='string') {
            var locJson = {
                storeSeq: 1,
                addressDetail: storeList.addressDetail,
                addressName: storeList.addressName,
                categoryName: storeList.categoryName,
                lat: storeList.lat,
                lng: storeList.lng,
                roadAddressName: storeList.roadAddressName,
                storeName: storeList.storeName,
            };
            locArray.push(locJson);
        } else {
            var len = storeList.storeName.length;

            for(var i=0; i<len; i++) {
                var locJson = {
                    storeSeq: i+1,
                    addressDetail: storeList.addressDetail[i],
                    addressName: storeList.addressName[i],
                    categoryName: storeList.categoryName[i],
                    lat: storeList.lat[i],
                    lng: storeList.lng[i],
                    roadAddressName: storeList.roadAddressName[i],
                    storeName: storeList.storeName[i],
                };
                locArray.push(locJson);
            }
        }

        var param = {
            schNm : $("#schNm").val(),
            schDate : $("#schDate").val(),
            schTime : $("#schTime").val(),
            schCnt : $("#schCnt").val(),
            schLoc : $("#schLoc").val(),
            schSeq: $("#modSeq").val(),
            locList: JSON.stringify(locArray),
            memSeq: memSeq
        }

        console.log(param);

        common.ajax('/sch/modifySmiSche', param, function(res) {
            // location.reload()
            common.goPage('/sch/schList');
        });
    },
    // 일정 삭제
    delete: function() {
        var param = {
            schSeq: $("#modSeq").val(),
        }
        common.ajax('/sch/deleteSmiSche', param, function(res) {
           schRegister.goSchList();
        });
    },
    // 상세조회
    selectDetail: function() {
        var param = {
            schSeq: $("#modSeq").val()
        }
        common.ajax('/sch/selectSchDetail', param, function(res) {
            var schDetail = res.schDetail;
            $("#schNm").val(schDetail.schNm);
            $("#schDate").val(schDetail.schDate);
            $("#schTime").val(schDetail.schTime);
            $("#schCnt").val(schDetail.schCnt);
            $("#schLoc").val(schDetail.schLoc);

            var memHtml = '';
            $.each(schDetail.memlist, function(i, v){
                memHtml += '<div class="radio mb-3">';
                memHtml += '<input type="hidden" name="memSeq" value="'+v.memSeq+'" />';
                memHtml += '    <label>'+v.userNm+'/'+v.age+'/'+v.loc+'</label>';
                memHtml += '    <button type="button" class="btn btn-danger btn-sm" onclick="schRegister.remove(this)">삭제</button>';
                memHtml += '</div>';

            });
            $("#memList").append(memHtml);
        });

        common.ajax('/sch/selectSchStoreList', param, function(res) {
            console.log(res);
            schRegister.drawSchStoreList(res.schStoreList);
        });
    },
    // 소모임장소 출력
    drawSchStoreList: function(data) {
        var storeHtml = '';

        $.each(data, function(i, v) {
            storeHtml += '<tr>';
            storeHtml += '    <td>'+v.storeSeq+'</td>';
            storeHtml += '    <td><input type="text" class="form-control" placeholder="가게명" name="storeName" value="'+v.storeName+'"></td>';
            storeHtml += '    <td>';
            storeHtml += '        <div class="input-group input-group">';
            storeHtml += '            <input type="text" class="form-control" name="roadAddressName" value="'+v.roadAddressName+'"/>';
            storeHtml += '            <span class="input-group-append">';
            storeHtml += '                    <button type="button" class="btn btn-info btn-flat" onclick="schRegister.searchStoreAddress(this);">검색</button>';
            storeHtml += '                </span>';
            storeHtml += '        </div>';
            storeHtml += '    </td>';
            storeHtml += '    <td><input type="text" class="form-control" placeholder="상세" name="addressDetail" value="'+v.addressDetail+'"></td>';
            storeHtml += '    <td>';
            storeHtml += '        <button type="button" class="btn btn-danger btn-flat" onclick="schRegister.removeStore(this);">삭제</button>';
            storeHtml += '    </td>';
            storeHtml += '    <input type="hidden" name="addressName" value="'+v.addressName+'"/>';
            storeHtml += '    <input type="hidden" name="lat" value="'+v.lat+'" />';
            storeHtml += '    <input type="hidden" name="lng" value="'+v.lng+'"/>';
            storeHtml += '    <input type="hidden" name="categoryName" value="'+v.categoryName+'"/>';
            storeHtml += '</tr>';
        })

        $("#tb_storeList").html(storeHtml);

    },
    // 회원 목록조회
    selectMemList: function() {
        var param = {};
        common.ajax('/mem/getMemList', param, function(res) {
            console.log(res);

            $.each(res.memList, function(i, v){
                var row = new Object();
                row.value = v.memSeq;
                row.label = v.userNm+'/'+v.age+'/'+v.loc;
                memList.push(row);
            });
        })
    },
    // 목록페이지 이동
    goSchList: function() {
        var param = {};
        common.goPage('/sch/schList');
    },

}


$(function() {
    schRegister.init();
});