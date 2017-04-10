//登录弹窗和注册
$(function() {
	banCopy();// 绑定注册表单,只在注册页面调用此方法
	initValidator();// 注册
	bindQLoginForm();// 快速登录
	bindVLoginForm();// 验证登录
});

function inputOnFocusTip(e, elementClass, tipSelector, tipClass, tipText) {
	if (e.value == e.defaultValue) {
		e.value = '';
	};
	$(e).attr("class", elementClass);
	$(e).parent().find(tipSelector).eq(0).html(tipText);
	$(e).parent().find(tipSelector).eq(0).attr("class", tipClass);
}
function inputOnBlurTip(e, elementClass, tipSelector, tipClass) {

	if (e.value == '') {
		e.value = e.defaultValue;
	}
	$(e).removeClass(elementClass);
	$(e).parent().find(tipSelector).eq(0).removeClass(tipClass);
	$(e).parent().find(tipSelector).eq(0).html("");
	$(e).valid();
}
function inputOnFocus(e, elementClass, tipSelector, tipClass) {
	$("#pw").remove();
	if (e.value == e.defaultValue) {
		e.value = '';
	}
	;
	$(e).attr("class", elementClass);
	$(e).css("color", "black");
	if ($(e).parent().find(tipSelector).length != 0) {
		$(e).parent().find(tipSelector).eq(0).html("");
		$(e).parent().find(tipSelector).eq(0).attr("class", tipClass);
		return false;
	}
	$(tipSelector).html("");
	$(tipSelector).attr("class", tipClass);

}
function inputOnBlur(e) {
	if (e.value == '') {
		e.value = e.defaultValue;
	}
}
if (typeof String.prototype.trim !== 'function') {
	String.prototype.trim = function() {
		return this.replace(/^\s+|\s+$/g, '');
	};
}
// 初始化注册的validate表单
function initValidator(base) {
	$("#rg_nrfromReg")
			.validate(
					{
						submitHandler : submitByAjax,
						// onsubmit : false ,
						// onfocusout :false ,
						onkeyup : false,
						focusInvalid : false,
						// 设置验证规则
						rules : {
							"userName" : {
								testvalidation : true,
								userNameCheck : true,
								isNotSameChar : true
							},
							"passWord" : {
								required : true,
								rangelength : [ 6, 12 ],
								passstrong : true
							},
							"isshefn" : {
								testvalidation : true,
								sfzjy : "#rg_nr_dl_zjlx",
								checkHkongMacao : "#rg_nr_dl_zjlx",
								checkTaiw : "#rg_nr_dl_zjlx",
								checkPassport : "#rg_nr_dl_zjlx",
								isjunguanzheng : "#rg_nr_dl_zjlx",
								remote : {
									url : basePath + "v/idno.htm", // 后台处理程序
									type : "post", // 数据发送方式
									dataType : "json", // 接受数据格式
									data : { // 要传递的数据
										isAjax : true,
										idNo : function() {
											return $("#rg_nr_zjhm").val();
										}
									}
								}

							},
							"isshefnAgain" : {
								testvalidation : true,
								equalTo : "#rg_nr_zjhm"

							},
							"passWordAgain" : {
								required : true,
								rangelength : [ 6, 12 ],
								equalTo : "#rg_nr_password"
							},
							"corpName" : {
								required : true
							},
							"sms" : {
								testvalidation : true,
								isMobile : true,
								remote : {
									url : basePath + "v/mobile.htm", // 后台处理程序
									type : "post", // 数据发送方式
									dataType : "json", // 接受数据格式
									data : { // 要传递的数据
										idType : function() {
											return $("#rg_nr_dl_zjlx").val();
										},
										idNo : function() {
											return $("#rg_nr_zjhm").val();
										},
										isAjax : true
									}
								}
							},
							"email" : {
								required : true,
								isEmail : true
							},
							"code" : {
								required : true,
								remote : {
									url : basePath + "v/code.htm", // 后台处理程序
									type : "post", // 数据发送方式
									data : {
										isAjax : true
									},
									dataType : "json" // 接受数据格式
								}
							},
							"smsCode" : {
								required : true,
								remote : {
									url : basePath + "reg/sms.htm", // 后台处理程序
									type : "post", // 数据发送方式
									dataType : "json", // 接受数据格式
									data : { // 要传递的数据
										isAjax : true,
										mobileNo : function() {
											return $("#rg_nr_sjhm").val();
										}
									}
								}
							},
							"county" : {
								required : true,
								min : 0,
								multiSelsetMin : true
							},
							"Fruit" : {
								required : true
							}

						},
						// 设置错误信息
						messages : {
							"userName" : {
								testvalidation : "请您输入真实姓名",
								userNameCheck : "请输入4-20位字母开头的字母或2-10个汉字",
								isNotSameChar : "请输入非重复的字符"
							},
							"passWord" : {
								required : "请您输入登录密码",
								rangelength : "密码长度为6-12位",
								passstrong : "请使用数字和字母的混合作为密码!"
							},
							"isshefn" : {
								testvalidation : "请您输入有效证件号码",
								isshefnd : "请您输入有效证件号码！",
								remote : "身份证已被注册！"
							},
							"isshefnAgain" : {
								testvalidation : "请您再次输入有效证件号码",
								isshefnd : "请您再次输入有效证件号码！",
								equalTo : "两次输入信息不相同"
							},
							"passWordAgain" : {
								required : "请您再次输入登录密码",
								rangelength : "密码长度为6-12位",
								equalTo : "两次输入密码不相同"
							},
							"corpName" : {
								required : "请输入公司名称"
							},
							"sms" : {
								testvalidation : "请您输入有效手机号码",
								isMobile : "您输入的手机号码格式有误",
								remote : "手机号码已被注册！"
							},
							"email" : {
								required : "请输入邮箱",
								isEmail : "请正确填写邮箱格式"
							},
							"code" : {
								required : "请输入验证码",
								remote : "验证码错误"
							},
							"smsCode" : {
								required : "请输入手机验证码",
								remote : "手机验证码错误"
							},
							"county" : {
								required : "请您选择现居住地",
								min : "请您选择现居住地",
								multiSelsetMin : "请您选择现居住地"
							},
							"Fruit" : {
								required : "请同意服务协议"
							}
						},
						errorElement : "font",
						errorPlacement : function(error, element) {
							$(element).siblings("p").addClass("rg_nr_dl_o")
									.html(error);
							$(element).parent().siblings("p").addClass(
									"rg_nr_dl_o").html(error);
						},
						errorClass : "rg_nr_dl_o",
						success : "rg_nr_dl_sucss",
						highlight : function(element, errorClass, validClass) {
							$(element).addClass("rg_nr_input_color");
							$(element).siblings("select").addClass(
									"rg_nr_input_color");
						},
						unhighlight : function(element, errorClass) { // element通过验证时触发
							$(element).removeClass("rg_nr_input_color");
						}
					});
}
// 注册提交时的ajax请求.
var submitByAjax = function() {

	var genderTest = $($(".rg_nr_acolor")[1]).attr("href");
	// 数据validate
	var userName = $("#rg_nr_name").val();
	var year = $("#sel_year").val();
	var month = $("#sel_month").val();
	var day = $("#sel_day").val();
	var birthday = year+"-"+month+"-"+day;
	var gender = genderTest;
	var cardType = $("#rg_nr_dl_zjlx").val();
	var cardNo = $("#rg_nr_zjhm").val();
	var cardNoConfirm = $("#rg_nr_qrzjhm").val();
	var password = $("#rg_nr_password").val();
	var passwordConfirm = $("#rg_nr_agin_password").val();
	var provinceId = $("#s_province").val();
	var cityId = $("#s_city").val();
	var countyId = $("#s_county").val();
	var mobileNo = $("#rg_nr_sjhm").val();
	var code = $("#rg_nr_dl_yzm").val();
	var smsCode = $("#rg_nr_dl_s_sjyzm").val();
	var isAgreeTest = $("input[name='Fruit']").attr("checked");
	var isAgree = 0;
	if (isAgreeTest == "checked") {
		isAgree = 1;
	}
	$.ajax({
		type : "post",
		url : basePath + "reg/1.htm",
		data : {
			name : userName,
			sex : gender,
			idType : cardType,
			idNo : cardNo,
			cardNoConfirm : cardNoConfirm,
			password : password,
			passwordConfirm : passwordConfirm,
			provinceId : provinceId,
			cityId : cityId,
			countyId : countyId,
			mobileNo : mobileNo,
			code : code,
			smsCode : smsCode,
			isAgree : isAgree,
			birthday: birthday,
			isAjax : true
		},
		dataType : "json",
		success : function(a) {
			if (a.code == "200") {
				window.location.href = basePath + "reg/2.htm";
			} else {
				alert(a.msg);
			}
		}
	});
	return false;
};
// 禁止注册表单复制
var banCopy = function() {
	$("#rg_nr_zjhm").bind("copy cut paste", function(e) {
		return false;
	});
	$("#rg_nr_qrzjhm").bind("copy cut paste", function(e) {
		return false;
	});
	$("#rg_nr_password").bind("copy cut paste", function(e) {
		return false;
	});
	$("#rg_nr_agin_password").bind("copy cut paste", function(e) {
		return false;
	});
};

// --登录
// 初始化快速登录表单
var bindQLoginForm = function() {
	initValidatorQLogin();
	var $form = $("#rg_nrfrom1");
	var $mobile = $("#mobileQuickLogin");
	var $password = $("#pwQuickLogin");
	var $yzm = $("#yzmQuickLogin");
	var $loginBtn = $("#quick_login");
	var $result = $("#qresultspan");
	// focus
	$mobile.bind("focus", {}, function(e) {
		$result.html("");
	});
	$password.bind("focus", {}, function(e) {
		$result.html("");
	});
	$yzm.bind("focus", {}, function(e) {
		$result.html("");
	});
	
	// submit
	$loginBtn.unbind('click').bind("click", {}, function() {
		if (!$mobile.valid()) {
			return false;
		}
		if (!$password.valid()) {
			return false;
		}
		var mobile1 = $("#mobileQuickLogin").val();
		var password1 = $("#pwQuickLogin").val();
		var yzm1 = $("#yzmQuickLogin").val();
		$.ajax({
			type : "post",
			url : basePath + "quicklogin.htm",
			data : {
				mobileNo : mobile1,
				password : password1,
				yzm : yzm1,
				isAjax : true
			},
			dataType : "json",
			success : function(response) {
				if (!response.hasError) {
					if ($("#djdl_close").length != 0) {
						$("#djdl_close").click();
					}
					 popCenterWindow2("#denglucg");
					isLogin();
				} else {
					var msgp = $("<p class='error'>" + response.msg + "</p>");
					$result.html(msgp);
					var failureTimes = response.data[0];
					if(failureTimes >= 3){
						$("#quick_login_yzm_dl").css("display","block");
						reloadImage($('#quick_login_yzmdl'));
					}
				}
			}
		});
		return false;
	});

};
// 初始化快速登录表单validate规则
function initValidatorQLogin(base) {
	$("#rg_nrfrom1").validate({
		onsubmit : false,
		onfocusout : false,
		onkeyup : false,
		focusInvalid : false,
		// 设置验证规则
		rules : {
			"passWordQuick" : {
				required : true,
				rangelength : [ 6, 12 ]
			},
			"smsQuick" : {
				required : true,
				isMobile : true
			}
		},
		// 设置错误信息
		messages : {
			"passWordQuick" : {
				required : "请输入密码",
				rangelength : "密码长度非法"
			},
			"smsQuick" : {
				required : "请输入手机号码",
				isMobile : "请输入有效的手机号码"
			}
		},
		errorElement : "p",
		errorPlacement : function(error, element) {
			$("#qresultspan").html(error);
		},
		highlight : function(element, errorClass, validClass) {
		},
		unhighlight : function(element, errorClass) { // element通过验证时触发
		}
	});
}
/***********************************************************************/
// TODO 验证登陆
// 初始化验证登录表单
var bindVLoginForm = function() {
	initValidatorV();
	var $form = $("#rg_nrfrom2");
	var $userName = $("#nameVerifyLogin");
	var $idNo = $("#zjhmVerifyLogin");
	var $mobile = $("#mobileVerifyLogin");
	var $verifyCode = $("#yzmVerifyLogin");
	var $smsCode = $("#sjyzmVerifyLogin");
	var $loginBtn = $("#verify_login");
	var $result = $("#vresultspan");
	// focus

	$userName.bind("focus", {}, function(e) {
		$result.html("");
	});
	$idNo.bind("focus", {}, function(e) {
		$result.html("");
	});
	$mobile.bind("focus", {}, function(e) {
		$result.html("");
	});
	$verifyCode.bind("focus", {}, function(e) {
		$result.html("");
	});
	$smsCode.bind("focus", {}, function(e) {
		$result.html("");
	});
	// bind submit
	$loginBtn.unbind('click').bind("click", {}, function() {

		if (!$userName.valid()) {
			return false;
		}
		if (!$idNo.valid()) {
			return false;
		}
		if (!$mobile.valid()) {
			return false;
		}
		if (!$verifyCode.valid()) {
			return false;
		}
		if (!$smsCode.valid()) {
			return false;
		}
		var mobile2 = $("#mobileVerifyLogin").val();
		var idCard2 = $("#zjhmVerifyLogin").val();
		var username2 = $("#nameVerifyLogin").val();
		var smscode2 = $("#sjyzmVerifyLogin").val();
		var code2 = $("#yzmVerifyLogin").val();
		var loginLocation = $("#loginLocation").val();
		// 用户名
		// 证件号码
		// 手机号码
		// 验证码
		// 手机验证码
		$.ajax({
			type : "post",
			url : basePath + "login.htm",
			data : {
				mobileNo : mobile2,
				idCard : idCard2,
				userName : username2,
				smsCode : smscode2,
				code : code2,
				loginLocation : loginLocation,
				isAjax : true,
				channel :'yzdl'
			},
			cache : "false",
			success : function(ms) {
				var data = ms.split('|');
				var a = data[0].trim();
				var b = data[1];
				if ("1" == a) {
					if ($("#djdl_close").length != 0) {
						$("#djdl_close").click();
					}
					 popCenterWindow2("#denglucg");
					isLogin();
				} else if ("0" == a || "reg" == a) {
					var msgp = $("<p class='error'>" + b + "</p>");
					$result.html(msgp);
				} else {
					overloaddiv(ms);
				}
			}
		});
		return false;
	});
};

// 初始化验证登录的校验规则.
function initValidatorV(base) {
	$("#rg_nrfrom2").validate({
		onsubmit : false,
		onfocusout : false,
		onkeyup : false,
		focusInvalid : false,
		// 设置验证规则
		rules : {
			"userName" : {
				required : true,
				userNameCheck : true,
				isNotSameChar : true
			},
			"sms" : {
				required : true,
				isMobile : true
			},
			"code" : {
				required : true
			},
			"smsCode" : {
				required : true
			}
		},
		// 设置错误信息
		messages : {
			"userName" : {
				required : "请输入用户姓名",
				userNameCheck : "请输入4-20位字母或2-10个汉字",
				isNotSameChar : "请输入非重复的字符"
			},
			"isshefn" : {
				required : "请输入有效证件号码",
				isshefnd : "请填入有效证件号码",
				remote : "身份证已被注册！"
			},
			"sms" : {
				required : "请输入手机号码",
				isMobile : "请输入有效的手机号码"
			},
			"code" : {
				required : "请输入验证码",
				remote : "验证码错误"
			},
			"smsCode" : {
				required : "请输入手机验证码",
				remote : "手机验证码错误"
			}
		},
		errorElement : "p",
		errorPlacement : function(error, element) {
			$("#vresultspan").html(error);
		},
		highlight : function(element, errorClass, validClass) {
		},
		unhighlight : function(element, errorClass) { // element通过验证时触发
		}
	});
}
// 找回密码第一步********************************************
function initValidatorFindPW(base) {
	$("#rg_nrfrom6").validate({
		onsubmit : false,
		onfocusout : false,
		onkeyup : false,
		focusInvalid : false,
		// 设置验证规则
		rules : {
			"isshefn" : {
				required : true,
				allIdType : 0
			},
			"sms" : {
				required : true,
				isMobile : true
			},
			"code" : {
				required : true
			},
			"smsCode" : {
				required : true
			}
		},
		// 设置错误信息
		messages : {
			"isshefn" : {
				required : "请输入有效证件号码",
				isshefnd : "请填入有效证件号码"

			},
			"sms" : {
				required : "请输入手机号码",
				isMobile : "请输入有效的手机号码"
			},
			"code" : {
				required : "请输入验证码",
				remote : "验证码错误"
			},
			"smsCode" : {
				required : "请输入手机验证码",
				remote : "手机验证码错误"
			}
		},
		errorElement : "p",
		errorPlacement : function(error, element) {
			$("#fpresultspan").html(error);
		},
		highlight : function(element, errorClass, validClass) {
		},
		unhighlight : function(element, errorClass) { // element通过验证时触发
		}
	});
}
// 找回密码第二步********************************************
function initValidatorFindPW2(base) {
	$("#rg_nrfrom7").validate({
		onsubmit : false,
		onfocusout : false,
		onkeyup : false,
		focusInvalid : false,
		// 设置验证规则
		rules : {
			"passWord" : {
				required : true,
				rangelength : [ 6, 12 ],
				passstrong : true
			},
			"passWordAgain" : {
				required : true,
				rangelength : [ 6, 12 ],
				equalTo : "#passWordfp"
			}
		},
		// 设置错误信息
		messages : {
			"passWord" : {
				required : "请您输入登录密码",
				rangelength : "密码长度为6-12位"
			},
			"passWordAgain" : {
				required : "请您再次输入登录密码",
				rangelength : "密码长度为6-12位",
				equalTo : "两次输入密码不相同"
			}
		},
		errorElement : "p",
		errorPlacement : function(error, element) {
			$("#fp2resultspan").html(error);
		},
		highlight : function(element, errorClass, validClass) {
		},
		unhighlight : function(element, errorClass) { // element通过验证时触发
		}
	});
}