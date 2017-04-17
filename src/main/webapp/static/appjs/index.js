var Index = (function ($) {
    var menuInit = function () {
        $("#yyxx").attr("class", "ksorder_ul_color");
        if(_id!=null){
            $("#"+_id).html(_msg);
            $("#"+_id).removeAttr("onclick");
        }
    }
    /**
     * 预约提交
     * @param obj
     */
    var yyClick = function (obj) {
        var form = document.createElement("form");
        form.method = "post";
        form.action = "/yyCheck";
        document.body.appendChild(form);
        var input = document.createElement("input");
        input.hidden = "hidden";
        input.name = "dt";
        input.value = obj.id;
        form.appendChild(input);
        form.submit();
    }
    return {
        menuInit: menuInit,
        yyClick: yyClick
    }
})(jQuery)
$(function () {
    Index.menuInit();
})