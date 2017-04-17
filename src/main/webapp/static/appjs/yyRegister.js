var YyRegister = (function($){
    var init = function(){
        $("#yyxx").attr("class", "ksorder_ul_color");
    }
    return {
        init:init
    }
})(jQuery)
$(function(){
    YyRegister.init();
})