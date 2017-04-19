var SelCancel = (function($){
    var menuInit = function(){
        $("#cxqx").attr("class","ksorder_ul_color");
    }
    var selYy = function(){
        var sms = $("#sms").val().trim();
        if(!Gvali.notBlankValue(sms))
            Global.msg("请输入手机号码");
        var selYyNode = $("#selYy");
        selYyNode.attr("action","/selYy");
        selYyNode.attr("method","post");
        selYyNode.submit();
    }
    return {
        menuInit:menuInit
    }
})(jQuery)
$(function(){
    SelCancel.menuInit();
})