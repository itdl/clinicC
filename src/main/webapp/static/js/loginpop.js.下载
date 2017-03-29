// 下面是全局函数
// start验证登录按钮后出现5种情况的新弹窗
function overloaddiv(data) {
	$("#djdl_close").click();
	$("#djdl_twoperson").html("" + data + "");
	popCenterWindow("#djdl_twoperson", "#djdl_twoperson_close");

};
// start验证登录按钮后出现5种情况的新弹窗
function isLogin() {
	var targetPath = $("#redirectUrl");
	if(targetPath.length!=0){
		if ($.trim(targetPath.val()) == "") {
			window.location.href = basePath + "index.htm";
		} else {
			window.location.href = targetPath.val();
		}
		return false;
	}
	var tfu = '<p class="dbnav_context_right" id="isLogin">欢迎来到北京市预约挂号统一平台 请<a href="javascript:void(0);" class="db_denglu" \
		onclick="popCenterWindow(\'#djdl\',\'#djdl_close\');">登录</a><a href="'
			+ basePath + 'regist.htm" target="_blank">注册</a></p>';
	$.ajax({
		type : "post",
		url : basePath + "islogin.htm",
		dataType : "json",
		data:{
			isAjax:true
		},
		success : function(a) {
			if (a.code * 1 == 200) {
				var tfl = '<p class="grdbnav_context_right">欢迎您，' + a.username
						+ ' <a href="' + basePath
						+ 'u/index.htm">个人中心</a><a href="' + basePath
						+ 'logout.htm" >退出</a></p>';
				$(".dbnav_context_left").siblings().eq(0).replaceWith(tfl);
				logined = true;
			} else {
				// $(".dbnav_context_left").siblings().eq(0).replaceWith(tfu);
			}
		}
	});
}