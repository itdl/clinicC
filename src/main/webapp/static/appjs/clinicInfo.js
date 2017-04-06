var ClinicInfo = (function($){
    var menuInit = function(){
        $("#zsjs").attr("class","ksorder_ul_color");
    }
    return {
        menuInit:menuInit
    }
})(jQuery)
$(function(){
    ClinicInfo.menuInit();
})