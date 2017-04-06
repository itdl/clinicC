var Index = (function($){
    var menuInit = function(){
        $("#yyxx").attr("class","ksorder_ul_color");
    }
    return {
        menuInit:menuInit
    }
})(jQuery)
$(function(){
    Index.menuInit();
})