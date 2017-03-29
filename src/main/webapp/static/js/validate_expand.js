/**
 * jquery.validate相关扩展验证
 * @author Administrator
 */
jQuery.validator.addMethod("testvalidation", function(value, element) {
      return value != element.defaultValue && value.length > 0;
  }, "");
//验证用户名       
jQuery.validator.addMethod("userNameCheck", function(value, element) {
    return this.optional(element) || /(^[a-zA-Z]{4,50}(\ [a-zA-Z]{2,})*$)|(^[\u2E80-\uFEFF]{2,}(\·[\u2E80-\uFEFF]{2,})*$)/.test(value);
}, "请输入4-50位字母或2-10个汉字");
jQuery.validator.addMethod("multiSelsetMin", function(value, element) {
	var isOK = true;
	$(element).siblings("select").each(function(){
		if($(this).val()<0){
			isOK = false;
		}
	});
	return isOK;
}, "请选择正确的项目");
//验证字符串是否重复字符 ,请首先保证是纯英文或中文
jQuery.validator.addMethod("isNotSameChar", function(value, element) {
	if(/(^[\u2E80-\uFEFF]{2,15}$)/.test(value)){
		return true;
	}
	var isSame = false;
	var count = findStr(value,value.charCodeAt(0));
	if(count == value.length){
		isSame = true;
	}
	if(false == isSame){
		return true;
	}else if (true == isSame){
		return false;
	}
}, "不能输入全部重复的字符");
//字符验证       
jQuery.validator.addMethod("stringCheck", function(value, element) {       
    return this.optional(element) || /^[\u0391-\uFFE5\w]+$/.test(value);       
}, "只能包括中文字、英文字母、数字和下划线");  


//身份证验证       
jQuery.validator.addMethod("isshefnd", function(value, element) {       
    return this.optional(element) || /^(\d{15}|\d{18}|\d{17}[a-zA-Z]{1})$/.test(value);       
}, "请填入有效信息！");  


//邮政编码验证       
jQuery.validator.addMethod("isEmail", function(value, element) {       
    return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/.test(value);     
}, "请正确填写邮箱格式");
		
//手机号码验证       
jQuery.validator.addMethod("isMobile", function(value, element) { 
	if(value =='13800138000'){
		return false;
	}
    var length = value.length;   
    var mobile = /(^(13|14|15|17|18)\d{9}$)/;     
    return this.optional(element) || (length == 11 && mobile.test(value));       
}, "请正确填写您的手机号码");       
     
//电话号码验证       
jQuery.validator.addMethod("isTel", function(value, element) {       
    var tel = /^\d{3,4}-?\d{7,9}$/;    //电话号码格式010-12345678   
    return this.optional(element) || (tel.test(value));       
}, "请正确填写您的电话号码");   
  
//联系电话(手机/电话皆可)验证   
jQuery.validator.addMethod("isPhone", function(value,element) {
	if(value =='13800138000'){
		return false;
	}
    var length = value.length;   
    var mobile = /(^(13|14|15|17|18)\d{9}$)|(^0(([1,2]\d)|([3-9]\d{2}))\d{7,8}$)/;    
    var tel = /^\d{3,4}-?\d{7,9}$/;   
    return this.optional(element) || (tel.test(value) || mobile.test(value));   
  
}, "请正确填写您的联系电话");
jQuery.validator.addMethod("cleanAfterField", function(value,element,param) {
	$(element).parent().find(param.field).html("");
	return true;   
	
}, "清除");
/**
 * 验证身份证号码有效性的方法
 * */
jQuery.validator.addMethod("sfzjy",issfz, "您输入的身份证号码不合法");
function issfz(value,element,idType) {
    if (idType==0||$(idType).val() == 1) {
	    card_number = value.toLowerCase();
	    var aCity = {11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"};
	    if (!/^\d{17}(\d|x)$/i.test(card_number)) {
	        //身份证不能为空
	        return false;
	    } else {
	        card_number = card_number.replace(/x$/i, "a");
	        if (aCity[parseInt(card_number.substr(0, 2))] == null) {
	            //你的身份证地区非法
	            return false;
	        } else {
	            var sBirthday = card_number.substr(6, 4) + "-" + Number(card_number.substr(10, 2)) + "-" + Number(card_number.substr(12, 2));
	            var d = new Date(sBirthday.replace(/-/g, "/"));
	            if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) {
	                //身份证上的出生日期非法
	                return false;
	            } else {
	                var iSum = 0;
	                for (var i = 17; i >= 0; i--) {
	                    iSum += (Math.pow(2, i) % 11) * parseInt(card_number.charAt(17 - i), 11);
	                }
	                if (iSum % 11 != 1) {
	                    //你输入的身份证号非法
	                    return false;
	                }
	                return true;
	                //aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女")
	            }
	        }
	    }
    } else {
        return true;
    }
}
//计算某个字符在字符串中的个数,支持中文
var findStr = function (str,word){
	var tem = 0;//用来计数;
	for(var i=0;i<str.length;i++){
		if(str.charCodeAt(i) == word){
			tem++;
		}
	}
	return tem;	
};
//得到字符总数,支持中文,一个中文数量上算作2
function getChars(str) {
    var i = 0;
    var c = 0.0;
    var unicode = 0;
    var len = 0;
    if (str == null || str == "") {
        return 0;
    }
    len = str.length;
    for (i = 0; i < len; i++) {
        unicode = str.charCodeAt(i);
        if (unicode < 127) { //判断是单字符还是双字符
            c += 1;
        } else { //chinese
            c += 2;
        }
    }
    return c;
}
//截取字符,支持中文
function sb_substr(str, startp, endp) {
    var i = 0;
    c = 0;
    unicode = 0;
    rstr = '';
    var len = str.length;
    var sblen = sb_strlen(str);
    if (startp < 0) {
        startp = sblen + startp;
    }
    if (endp < 1) {
        endp = sblen + endp; // - ((str.charCodeAt(len-1) < 127) ? 1 : 2);
    }
    // 寻找起点
    for (i = 0; i < len; i++) {
        if (c >= startp) {
            break;
        }
        var unicode = str.charCodeAt(i);
        if (unicode < 127) {
            c += 1;
        } else {
            c += 2;
        }
    }
    // 开始取
    for (i = i; i < len; i++) {
        var unicode = str.charCodeAt(i);
        if (unicode < 127) {
            c += 1;
        } else {
            c += 2;
        }
        rstr += str.charAt(i);
        if (c >= endp) {
            break;
        }
    }
    return rstr;
}
//军官证验证
jQuery.validator.addMethod("isjunguanzheng",isjunguanzheng , "请输入正确的军官证号");
function isjunguanzheng(value, element,idType) {
    if (idType==0||$(idType).val() == 2) {
		var reg = /\S{8,10}/;
		value = value.replace(/(^\s*)|(\s*$)/g, "");
		if (reg.test(value) === false) {
			return false; 
		} else {
			return true;
		}
    } else {
        return true;
    }
}
//验证港澳通行证
jQuery.validator.addMethod("checkHkongMacao",isHkongMacao, "请输入正确的港澳通行证号");
function isHkongMacao(value, element, idType) {
    if (idType==0||$(idType).val() == 4) {
        var a = /\S{9,12}/;
        return a.test(value);
    } else {
        return true;
    }
}
//验证台胞证
jQuery.validator.addMethod("checkTaiw", isTaiw, "请输入正确的台胞证证号");
function isTaiw(value, element, idType) {
    if (idType==0||$(idType).val() == 5) {
        var d = /\d{8,11}/;
        return d.test(value);
    } else {
        return true;
    }
}
//验证就诊卡 
jQuery.validator.addMethod("isJZCard", function(value, element) {       
    var jzcard = /^[000|T]/;    // T000或0009（00095或00096）开头的十位 T000000123或0009501000
    return this.optional(element) || (jzcard.test(value));       
}, "请正确填写您的就诊卡号");

//验证护照
jQuery.validator.addMethod("checkPassport",isPassport , "请输入正确的护照号");
function isPassport(value, element, idType) {
    if (idType==0||$(idType).val() == 3) {
        var c = /\S{8,14}/;
        return c.test(value);
    } else {
        return true;
    }
}
//验证密码强度
jQuery.validator.addMethod("passstrong", function(value, element, e) {
	if (e==true) {		
		var a = true;
		var d = new RegExp("(?![a-z]+$|[A-Z]+$|[0-9]+$|_+$)^[a-zA-Z0-9_]{6,12}$");
		if(d.test(value)){
			a = true;
		}else{
			a = false;
		}
		return a;
	} else {
		return true;
	}
}, "请使用数字和字母的混合作为密码!");
//验证所有证件号
jQuery.validator.addMethod("allIdType", function(value, element, e) {
	var ok = false;
	if(issfz(value, element, e)||isPassport(value, element, e)||isTaiw(value, element, e)||isHkongMacao(value, element, e)||isjunguanzheng(value, element, e)){
		ok = true;
	}
	return ok;
    
}, "请输入正确的证件号!");

