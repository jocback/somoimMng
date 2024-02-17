var popup = {
    callback: undefined,
    /***************************************************************************
     * @ description : 팝업 호출.
     * @ param : str : 호출url
     * @ param : str : form 아이디
     * @ usage : common.goPage(url : "requestURL"  , form_id  : "Parameter");
     **************************************************************************/
    openWindowPopup: function(url, option, callback) {
        console.log(url);
        console.log(options);
        console.log(callback);
        var name = '_blank';
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
        var newWindow = window.open(url, name, options);
    },
}