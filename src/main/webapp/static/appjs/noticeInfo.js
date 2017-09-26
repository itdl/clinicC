var NoticeInfo = (function($){
    var menuInit = function(){
        $("#yyxz").attr("class","ksorder_ul_color");
    }
    return {
        menuInit:menuInit
    }
})(jQuery)
$(function(){
    NoticeInfo.menuInit();
})