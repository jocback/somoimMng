var common = {
    /***************************************************************************
     * @ description : submit 호출.
     * @ param : str : 호출url
     * @ param : str : form 아이디
     * @ usage : common.goPage(url : "requestURL"  , form_id  : "Parameter");
     **************************************************************************/
    goPage: function (url, frmData) {
        // url += '?backurl='+location.pathname;
        if (common.isEmpty(frmData)) {
            var frmHtml = '';
            frmHtml += '<form action="' + url + '" id="tempForm" method="post">';
            frmHtml += '</form>';
            $('body').append(frmHtml);
            $("#tempForm").submit();
        } else {
            if (typeof (frmData) == 'string') {
                $("#" + frmData).attr("action", url);
                $("#" + frmData).submit();
            } else {
                var frmHtml = '';
                frmHtml += '<form action="' + url + '" id="tempForm" method="post">';
                $.each(frmData, function (i, v) {
                    frmHtml += '<input type="hidden" name="' + i + '" value="' + v + '" >';
                });
                frmHtml += '</form>';

                $('body').append(frmHtml);
                $("#tempForm").submit();
            }
        }
    },

    /***************************************************************************
     * @ description : AJAX 호출.(Callback)
     * @ param : str : 호출url
     * @ param : json : json Data
     * @ param : func : 콜백함수
     * @ param : json : json 옵션
     * @ usage : common.ajax(url : "requestURL"  , data  : "Parameter" , success : function( json ){ }, options : {type:'post',dataType:'json'});
     **************************************************************************/
    ajax: function (url, data, callback, options) {
        var ajaxData = {
            url: url,
            type: 'post',
            dataType: 'json',
            data: data,
            beforeSend: function () {
                // $(".loadingDim").show();
            },
            success: function (dat) {
                callback(dat);
            },
            complete: function () {
                // $(".loadingDim").hide();
            }
        };

        $.each(options, function (i, v) {
            ajaxData[i] = v;
        });

        $.ajax(ajaxData);
    },

    // 공통 공백 체크로직 추가
    /***************************************************************************
     * @ description : 공백 객체 체크
     * @ param : obj : 체크할 대상
     * @ usage : common.isEmpty({});
     **************************************************************************/

    isEmpty: function (obj) {
        if (obj === null || obj === undefined || obj == "") {
            return true
        } else if (obj instanceof Array) {
            return obj.length === 0
        } else {
            return false
        }
    },
}