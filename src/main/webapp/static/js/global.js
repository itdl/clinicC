/**************************弹窗**************************/
/* 点击登录的弹窗 */
// 获取窗口的高度
var windowHeight;
// 获取窗口的宽度
var windowWidth;
// 获取弹窗的宽度
var popWidth;
// 获取弹窗高度
var popHeight;
var Global = (function ($) {
    var init = function (div) {
        windowHeight = $(window).height();
        windowWidth = $(window).width();
        popHeight = $(div).outerHeight();
        popWidth = $(div).outerWidth();
    }

    var popCenterWindow = function (odiv, clos, clos2) {
        init(odiv);
        var popY = (windowHeight - popHeight) / 2;
        var popX = (windowWidth - popWidth) / 2;
        $(odiv).css("top", popY + $(window).scrollTop()).css("left", popX)
            .show();
        $("#bg").css({
            display: "block",
            height: $(document).height()
        });
        $(window).on('resize scroll', function () {
            $(odiv).css("top", popY + $(window).scrollTop()).css("left", popX);
        });
    }
    // 定义弹出居中窗口的方法
    var popCenterWindow = function (div, closeTag) {
        if ($(div).length <= 0) {
            return false;
        }
        $(div).find(":text").val("");
        $(div).find(":password").val("");
        $(div).find(".error").hide();
        div = "" + div + "";
        closeTag = "" + closeTag + "";
        init(div);
        // 计算弹出窗口的左上角Y的偏移量
        var popY = (windowHeight - popHeight) / 2;
        var popX = (windowWidth - popWidth) / 2;
        //设定窗口的位置
        $(div).css("top", popY + $(window).scrollTop()).css("left", popX).show();
        $("#bg").css({display: "block", height: $(document).height()});
        //跟随滚动条固定住
        $(window).on('resize scroll', function () {
            $(div).css("top", popY + $(window).scrollTop()).css("left", popX);
        });
        closeWindow(closeTag);
    }

    // 关闭窗口的方法
    var closeWindow = function (closeTag) {
        $(".vre_err").hide();
        $(closeTag).click(function () {
            $(this).parent().hide("slow");
            $("#bg").css("display", "none");
        });
    }

    var doCloseWindow = function (div) {
        $(div).hide();
        $("#bg").css("display", "none");
    }

    var popDiv = function () {
        $("#djdl_close").click();
        popCenterWindow('#djdl_fpassword', '#djdl_fp_close');
        reloadImage3($('#djdl_fp_yzmdl'), 'zhmm');
    }

    /**************************弹窗end**************************/

    /**************************新增弹窗居中方法**************************/
    var center = function (obj, bgcol) {
        var screenWidth = $(window).width(), screenHeight = $(window).height();  //当前浏览器窗口的 宽高
        var scrolltop = $(document).scrollTop();//获取当前窗口距离页面顶部高度

        var objLeft = (screenWidth - $(obj).width()) / 2;
        var objTop = (screenHeight - $(obj).height()) / 2;

        $(obj).css({left: objLeft + 'px', top: objTop + 'px', 'display': 'block'});
        //浏览器窗口大小改变时
        $(window).resize(function () {
            screenWidth = $(window).width();
            screenHeight = $(window).height();
            scrolltop = $(document).scrollTop();

            objLeft = (screenWidth - $(obj).width()) / 2;
            objTop = (screenHeight - $(obj).height()) / 2 + scrolltop;

            $(obj).css({left: objLeft + 'px', top: objTop + 'px'});

        });
        //浏览器有滚动条时的操作、
        $(window).scroll(function () {
            screenWidth = $(window).width();
            screenHeight = $(window).height();
            scrolltop = $(document).scrollTop();

            objLeft = (screenWidth - $(obj).width()) / 2;
            objTop = (screenHeight - $(obj).height()) / 2 + scrolltop;


        });
        $("#bg").css({display: "block", height: $(document).height()});
        closeWindow(bgcol);
    }
    //登录
    var login = function(){
        var param = {};
        param.userSms = $("#mobileQuickLogin").val();
        if(!Gvali.notBlankValue(param.userSms)){
            $("#qresultspan").text("登录手机号码不能为空!");
            $(".vre_err").show();
            return;
        }
        param.password = $("#pwQuickLogin").val();
        if(!Gvali.notBlankValue(param.password)){
            $("#qresultspan").text("登录密码不能为空!");
            $(".vre_err").show();
            return;
        }
        $(".vre_err").hide();
        $.post("/login",param,function(data){
            if(data.result=='T'){
                $("#djdl_close").click();
                Global.msg(data.msg,3000);
            }
            $(".vre_err").show();
            $("#qresultspan").text(data.msg);
        },'json');
    }
    var msg = function(msg,time){
        swal({
            text: msg,
            timer: time
        });
    }
    return {
        init:init,
        center:center,
        popDiv:popDiv,
        doCloseWindow:doCloseWindow,
        popCenterWindow:popCenterWindow,
        closeWindow:closeWindow,
        login:login,
        msg:msg
    }
})(jQuery)
$(function(){
    Global.init();
})
