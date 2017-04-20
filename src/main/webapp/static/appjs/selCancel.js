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
        if(obj.id == null)
            Global.msg("无法获取预约时间");
        $.post("/yycancel",{dt:obj.id},function(data){
            Global.msg(data.msg);
            if(data.result=='T')
                location.reload();
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