var popup = {
    callback: undefined,
    /***************************************************************************
     * @ description : 팝업 호출.
     * @ param : str : 호출url
     * @ param : str : form 아이디
     * @ usage : popup.openWindowPopup(url : "requestURL"  , form_id  : "Parameter");
     **************************************************************************/
    openWindowPopup: function(url, option, callback) {
        console.log(url);
        console.log(options);
        console.log(callback);
        var name = '';
        var options;
        popup.callback = undefined;
        if(option!='' && options!=undefined) {
            options = option;
        } else {
            options = 'toolbar=no,scrollbars=no,resizable=no,status=no,menubar=no,location=no';
        }

        if(callback!=undefined) {
            popup.callback = callback;
        }
        var newWindow = window.open(url, "", name, options);
    },
    openSubmitPopup: function(url, frmData, option, callback) {

        var name = '';
        var options;
        var popupForm;

        if($("#tempPopForm").length>0) {
            $("#tempPopForm").remove();
        }

        if(option!='' && options!=undefined) {
            options = option;
        } else {
            options = 'toolbar=no,scrollbars=no,resizable=no,status=no,menubar=no,location=no';
        }

        var newWindow = window.open(url, "popForm", name, options);

        if (common.isEmpty(frmData)) {
            var popupFrmHtml = '';
            popupFrmHtml += '<form action="' + url + '" id="tempPopForm" method="post">';
            popupFrmHtml += '</form>';
            $('body').append(popupFrmHtml);

        } else {
            if (typeof (frmData) == 'string') {
                $("#" + frmData).attr("action", url);
                // $("#" + frmData).submit();
            } else {
                var popupFrmHtml = '';
                popupFrmHtml += '<form action="' + url + '" id="tempPopForm" method="post">';
                $.each(frmData, function (i, v) {
                    popupFrmHtml += '<input type="hidden" name="' + i + '" value="' + v + '" >';
                });
                popupFrmHtml += '</form>';

                $('body').append(popupFrmHtml);
                // $("#tempPopForm").submit();
            }
        }

        if(callback!=undefined) {
            popup.callback = callback;
        }

        popupForm = $("#tempPopForm")[0];
        popupForm.action = url;
        popupForm.method = 'post';
        popupForm.target = 'popForm';
        popupForm.submit();

    }
}