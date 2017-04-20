var SelCancel = (function($){
    var menuInit = function(){
        $("#cxqx").attr("class","ksorder_ul_color");
    }
    /**
     * 查询
     */
    var selYy = function(){
        var sms = $("#sms").val().trim();
        if(!Gvali.notBlankValue(sms))
            Global.msg("请输入手机号码");
        $("#selYy").submit();
    }
    /**
     * 取消
     * @param obj
     */
    var cancel =function(obj){
        if(!Gvali.notBlankValue(obj.id))
            Global.msg("无法获取预约时间");
        if(!Gvali.notBlankValue($("#sms").val()))
            Global.msg("预约手机号码不能为空");
        $.post("/yycancel",{dt:obj.id,sms:$("#sms").val()},function(data){
            Global.msg(data.msg);
            if(data.result=='T')
                window.setTimeout('location.reload();',2000);
        },'json');
    }
    return {
        menuInit:menuInit,
        selYy:selYy,
        cancel:cancel
    }
})(jQuery)
$(function(){
    SelCancel.menuInit();
})