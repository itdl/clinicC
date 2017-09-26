var StopRepn = (function($){
    var menuInit = function(){
        $("#tzxx").attr("class","ksorder_ul_color");
    }
    return {
        menuInit:menuInit
    }
})(jQuery)
$(function(){
    StopRepn.menuInit();
})