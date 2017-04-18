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
        if(!Gvali.notBlankValue(param.rptType)){
            Global.msg("请输入预约类型",3000);
            return;
        }
        param.workInfo = $("#workInfo").val();
        if(!Gvali.notBlankValue(param.workInfo)){
            Global.msg("请输入职业名称",3000);
            return;
        }
        param.workAddr = $("#workAddr").val();
        if(!Gvali.notBlankValue(param.workAddr)){
            Global.msg("请输入工作地点",3000);
            return;
        }
        param.remarks = $("#remarks").val();
        if(!Gvali.notBlankValue(param.remarks)){
            Global.msg("请输入病情简述",3000);
            return;
        }
        param.date = _date;
        param.time = _time;
        $.post("/yy",param,function(data){
            Global.msg(data.msg,3000);
            if(data.result=='T')
                window.location.href='/';
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