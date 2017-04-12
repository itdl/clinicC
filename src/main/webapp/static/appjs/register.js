var Register = (function($){
    var regSubmit = function(){
        if($("#passWordAgain").val()!=$("#passWord").val()){
            $("#passWordAgain,#passWord").val("");
            alert("两次密码输入不相同请重新输入!");
            return ;
        }
        if($("#isshefn").val()!=$("#isshefnAgain").val()){
            $("#isshefn,#isshefnAgain").val("");
            alert("证件号码输入不相同请重新输入!");
            return ;
        }
        var param = {};
        param.userName = $("#userName").val();
        param.idType = $("#idType").val();
        param.isshefn = $("#isshefn").val();
        param.jzd = $("#jzd").val();
        param.passWord = $("#passWord").val();
        param.sex = $("#sex").val();
        param.sms = $("#sms").val();
        param.birthday = $("#datepicker").val();
        $.post("/register",param,function(data){
            if(data.result=='F'){
                alert(data.msg);
                return;
            }
            window.location.href="/";
        },'json');
    }
    var init = function(){
        $("#datepicker").datepicker();
        $("#datepicker").datepicker("option","dateFormat","yy-mm-dd");
    }
    return {
        regSubmit:regSubmit,
        init:init
    }
})(jQuery)
$(function(){
    Register.init();
})