var SelCancel = (function($){
    var menuInit = function(){
        $("#cxqx").attr("class","ksorder_ul_color");
    }
    var selYy = function(){
        alert(1)
        var sms = $("#sms").val().trim();
        if(!Gvali.notBlankValue(sms))
            Global.msg("请输入手机号码");
        var selYyNode = $("#selYy");
        selYyNode.attr("action","/selYy");
        selYyNode.attr("method","post");
        selYyNode.submit();
    }
    return {
        menuInit:menuInit,
        selYy:selYy
    }
})(jQuery)
$(function(){
    SelCancel.menuInit();
})