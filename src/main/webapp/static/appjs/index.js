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
        $.ajax({
            type: 'POST',
            url: '/yyCheck',
            data: {dt:obj.id},
            dataType: 'json',
            success: function(data){
                if(data.result=='T'){
                    var form = document.createElement("form");
                    form.method = "post";
                    form.action = "/yyRegister";
                    document.body.appendChild(form);
                    var input = document.createElement("input");
                    input.hidden = "hidden";
                    input.name = "id";
                    input.value = data.id;
                    form.appendChild(input);
                    form.submit();
                    return;
                }
                Global.msg(data.msg);
            },
            error:function(data){
                Global.msg("网络开小差了亲!");
            }
        })
    }
    return {
        menuInit: menuInit,
        yyClick: yyClick
    }
})(jQuery)
$(function () {
    Index.menuInit();
})