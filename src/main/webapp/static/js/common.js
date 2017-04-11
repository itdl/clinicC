var Common = (function($){
    var init = function(){
        $(".db_denglu").click(function () {
            Global.popCenterWindow("#djdl", ".ksdl_ul_denglu", "#djdl_close");
        });
        $("#djdl_close").click(function () {
            $("#djdl").css({
                "display": "none"
            });
            $("#bg").css("display", "none");
        });
    }
    return {
        init:init
    }
})(jQuery)
$(function(){
    Common.init();
})