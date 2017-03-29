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
function init(div){ 
	 windowHeight=$(window).height(); 
	 windowWidth=$(window).width(); 
	 popHeight=$(div).outerHeight(); 
	 popWidth=$(div).outerWidth(); 
 }

// 定义弹出居中窗口的方法
function popCenterWindow(div,closeTag) {
	if($(div).length <= 0){
		return false;
	}
	reloadImage3($('#yzmdl'),'yzdl');
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
	$(div).css("top",popY+$(window).scrollTop()).css("left",popX).show();
	$("#bg").css({display: "block", height:$(document).height()});
	//跟随滚动条固定住
	$(window).on('resize scroll',function(){
		$(div).css("top",popY+$(window).scrollTop()).css("left",popX);
	});
	closeWindow(closeTag);
}

// 关闭窗口的方法
function closeWindow(closeTag) {
	$(closeTag).click(function(){
		  $(this).parent().hide("slow"); 
		  $("#bg").css("display", "none");
	  }); 
}

function doCloseWindow(div){
	  $(div).hide(); 
	  $("#bg").css("display", "none");
}

function popDiv(){
	$("#djdl_close").click();
	popCenterWindow('#djdl_fpassword','#djdl_fp_close');
	alert("wrong");
	reloadImage3($('#djdl_fp_yzmdl'),'zhmm');
}
/**************************弹窗end**************************/

/**************************新增弹窗居中方法**************************/
function center(obj,bgcol) {
	var screenWidth = $(window).width(), screenHeight = $(window).height();  //当前浏览器窗口的 宽高
	var scrolltop = $(document).scrollTop();//获取当前窗口距离页面顶部高度

	var objLeft = (screenWidth - $(obj).width())/2 ;
	var objTop = (screenHeight - $(obj).height())/2 ;

	$(obj).css({left: objLeft + 'px', top: objTop + 'px','display': 'block'});
	//浏览器窗口大小改变时
	$(window).resize(function() {
		screenWidth = $(window).width();
		screenHeight = $(window).height();
		scrolltop = $(document).scrollTop();
	   
		objLeft = (screenWidth - $(obj).width())/2 ;
		objTop = (screenHeight - $(obj).height())/2 + scrolltop;
	   
		$(obj).css({left: objLeft + 'px', top: objTop + 'px'});
	   
	});
	//浏览器有滚动条时的操作、
	$(window).scroll(function() {
		screenWidth = $(window).width();
		screenHeight = $(window).height();
		scrolltop = $(document).scrollTop();
	   
		objLeft = (screenWidth - $(obj).width())/2 ;
		objTop = (screenHeight - $(obj).height())/2 + scrolltop;
	   
		
	});
	$("#bg").css({display: "block", height: $(document).height()});
   closeWindow(bgcol);
}
//关闭窗口的方法 
function closeCenterWindow(bgcol){ 
  $(bgcol).click(function(){ 
	  $(this).parent().hide(); 
	   $("#bg").css("display", "none");
  });
}
/**************************新增弹窗居中方法end**************************/

/**************************省市级三级联动**************************/
/* 点击登录的弹窗 end */
//省市区三级联动
/**
 * 加载省份
 * 
 * @param provinceId
 * @returns
 */
function loadProvinces(provinceId) {
	$.ajax({
		type : "get",
		url : basePath + "gl/povs.htm",
		dataType : "json",
		data:{
			isAjax:true
		},
		async: false,
		success : function(response) {
			if (response.hasError) {
				alert(response.msg);
				return false;
			}
			var msg = response.data;
			for ( var i = 0; i < msg.length; i++) {
				$("#" + provinceId).append(
						"<option style='color:black' value=" + msg[i].id + ">" + msg[i].name
								+ "</option>");
			}
		}
	});
}
/**
 * 加载省份下的城市
 * 
 * @param provinceId
 * @param cityId
 * @returns
 */
function loadCities(provinceId, cityId) {
	var pid = $("#" + provinceId).val();
	if (pid == -1) {
		return;
	}
	$("#" + cityId).html("");
	$.ajax({
		type : "get",
		url : basePath + "gl/cts.htm",
		data : {
			provinceId : pid,
			isAjax:true
		},
		async: false,
		dataType : "json",
		success : function(response) {
			if (response.hasError) {
				alert(response.msg);
				return false;
			}
			var msg = response.data;
			$("#" + cityId).append("<option value='-1'>请选择城市 </option>");
			for ( var i = 0; i < msg.length; i++) {
				$("#" + cityId).append(
						"<option style='color:black' value=" + msg[i].id + ">" + msg[i].name
								+ "</option>");
			}
		}
	});
}
/**
 * 加载区县
 * 
 * @returns
 */
function loadCounty(cityId, countyId) {
	var cid = $("#" + cityId).val();
	if (cid == -1) {
		return;
	}
	$("#" + countyId).html("");
	$.ajax({
		type : "get",
		url : basePath + "gl/cotys.htm",
		async: false,
		data : {
			cityId : cid,
			isAjax:true
		},
		dataType : "json",
		success : function(response) {
			if (response.hasError) {
				alert(response.msg);
				return;
			}
			var msg = response.data;
			$("#" + countyId).append("<option value='-1'>请选择区县 </option>");
			for ( var i = 0; i < msg.length; i++) {
				$("#" + countyId).append(
						"<option style='color:black' value=" + msg[i].id + ">" + msg[i].name
								+ "</option>");
			}
		}
	});
}
/**
 * 加载省市区县信息
 * 
 * @param provinceId
 *            省份的select标签id
 * @param cityId
 *            城市的select标签id
 * @param countyId
 *            区县的select标签id
 */
function startLoadingPositionData(provinceId, cityId, countyId) {
	$("#" + provinceId).bind('change', function() {
		loadCities(provinceId, cityId);
	});
	$("#" + cityId).bind('change', function() {
		loadCounty(cityId, countyId);
	});
	loadProvinces(provinceId);
}
/**************************省市级三级联动end**************************/
/**************************短信验证码**************************/
function sendSmsCodeBtn(option) {
	if (eval("typeof (" + option.GLVar + ")") == "undefined"
			|| !eval(option.GLVar)) {
		eval(option.GLVar + "= {}");
	} else {
	}
	eval(option.GLVar).SetRemainTime = function(SELF) {
		if (SELF.curCount <= 0) {
			window.clearInterval(SELF.InterValObj);// 停止计时器
			SELF.obj.disabled = false;
			SELF.obj.value = "重新发送验证码";
		} else {
			SELF.curCount--;
			SELF.obj.value = "可在" + SELF.curCount + "秒后重发";
		}
	};
	$(option.btnId).click(
			function() {
				var obj = $(this);
				$(this).attr("disabled",true);
				if (!option.valid()) {
					$(this).attr("disabled",false);
					return false;
				}
				;
				eval(option.GLVar).obj = $(option.btnId)[0];
				$.ajax({
					type : "POST",
					url : option.url,
					data : $(option.formId).serialize(),
					dataType : "json",
					success : function(a) {
						if (a.code == "200") {
							eval(option.GLVar).obj.disabled = true;
							eval(option.GLVar).curCount = 60;
							eval(option.GLVar).obj.value = "可在"
									+ eval(option.GLVar).curCount + "秒后重发";
							eval(option.GLVar).InterValObj = window
									.setInterval(option.GLVar
											+ ".SetRemainTime(" + option.GLVar
											+ ")", 1000);
							option.ok(a);
						} else {
							option.notok(a);
							obj.attr("disabled",false);
						}
					},
					error : function() {
						option.error();
						obj.attr("disabled",false);
					}
				});
			});
}
/**************************短信验证码end**************************/
var prompts = {
		success : "成功！",
		add_success : "添加成功！",
		modify_success : "修改成功！",
		delete_success : "删除成功！",
		operation_success : "操作成功！",
		select_id_type : "请选择类型！",
		id_format_error : "证件格式错误！",
		phone_format_error : "手机号格式错误！",
		phone_or_mobile_format_error : "请填写正确的电话号码!",
		username_format_error : "用户名格式不正确！",
		date_format_error : "日期格式错误！",
		hospital_format_error : "请选择医院！",
		end_time_is_greater_than_start_time : "结束时间不能大于开始时间！", 
		query_nothing : "您好，当前条件下没有查询到数据！",		
		agent_id_format_error : "工号格式错误！",
		old_password_cannot_be_empty : "旧密码不能为空！",
		password_cannot_be_empty : "密码不能为空！",
		password_cannot_be_same : "新老密码不能相同！",
		password_composition_element : "密码只能由数字，英文字符和下划线组成！",
		password_strong : "请用数字和字母的组合作为密码!",
		new_password_confirm : "请确认请密码！",
		password_confirm_not_same : "两次输入的密码不相同!",
		modify_password_success : "密码修改成功！",
		password_error : "密码错误！",
		please_select_date: "请选择日期",
		page_error: "请输入正确的页码!",
		please_input_agent: "请输入工号",
		please_input_idno: "请输入证件号码",
		please_upload_photo: "请先上传图片",
		upload_photo_ok: "上传图片成功",
		upload_photo_failed: "上传图片失败",
		idNo_inCorrect: "请输入正确的证件号码",
		please_input_applyReason: "请输入申请理由",
		please_input_picture_code: "请输入图片验证码",
		please_input_sms_code: "请输入短信验证码",
		same_as_old_no: "新号码不能和旧号码相同",

		apply_success:"您的申请已经成功提交到系统,我们工作人员将在5个工作日内审核处理，并以电话或短信方式通知到您，请保持电话通畅。",
		idno_error : "证件号码有误！",
		please_select_department: "请选择科室",
		please_input_mobile: "请输入手机号",
		please_input_name: "请输入正确姓名",
		sms_code_send_ok : "短信已发送,请5分钟内输入!",
		sms_code_send_failed : "短信验证码发送失败!",
		server_error : "系统错误,请稍候重试!",
		invalide_param : "参数不合法!",
		no_more_notice :"没有更多公告了!"
};