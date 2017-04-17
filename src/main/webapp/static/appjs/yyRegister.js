var YyRegister = (function($){
    /**
     * 初始化
     */
    var init = function(){
        $("#yyxx").attr("class", "ksorder_ul_color");
    }
    /**
     * 预约提交
     */
    var yyRegister = function(){
        var param = {};
        param.rptType = $("#rptType").val();
        param.workInfo = $("#workInfo").val();
        param.workAddr = $("#workAddr").val();
        param.remarks = $("#remarks").val();
        param.date = _date;
        param.time = _time;
        $.post("/",param,function(data){

        },'json');
    }
    return {
        init:init,
        yyRegister:yyRegister
    }
})(jQuery)
$(function(){
    YyRegister.init();
})