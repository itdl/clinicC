var SelCancel = (function($){
    var menuInit = function(){
        $("#cxqx").attr("class","ksorder_ul_color");
    }
    return {
        menuInit:menuInit
    }
})(jQuery)
$(function(){
    SelCancel.menuInit();
})