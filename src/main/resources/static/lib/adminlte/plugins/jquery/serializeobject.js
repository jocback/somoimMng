
$.fn.serializeObject = function() {
    "use strict"
    var result = {}
    var extend = function(i, element) {
        var node = result[element.name]
        if ("undefined" !== typeof node && node !== null) {
            if ($.isArray(node)) {
                node.push(element.value)
            } else {
                result[element.name] = [node, element.value]
            }
        } else {
            result[element.name] = element.value
        }
    }
    console.log(result);

    $.each(this.serializeArray(), extend)
    return result;
}