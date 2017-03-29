function checkLoginedOrSendPost(hospitalId) {
	if (isNaN(hospitalId)) {
		alert("参数非法!");
		return;
	}
	$.ajax({
		url : basePath + "u/bookmark.htm",
		type : "post",
		dataType : 'json',
		data : {
			hospitalId : hospitalId,
			isAjax : true
		},
		success : function(response) {
			if (!response.hasError) {
				alert("添加关注成功!");
				// 不刷新页面，只将 “关注医院”文字替换成“已关注”,并去掉onclick事件
				$(".guanzhuyiyuan").text("已关注").removeAttr("onclick");
				// window.location.href = basePath + "hospital/info/" +
				// hospitalId + ".htm";
			} else {
				if (response.code == 2009) {
					// 用户未登陆
					popCenterWindow('#djdl', '#djdl_close');
				} else {
					alert(response.msg);
				}
			}
		}
	});
}
function delUserAttention(hid) {
	if (isNaN(hid)) {
		alert("参数非法!");
		return;
	}
	var cel = confirm("确认取消吗？");
	if(cel == true){
		$.ajax({
			url : basePath + "u/delmark.htm",
			type : "post",
			dataType : 'json',
			data : {
				hid : hid,
				isAjax:true
			},
			success : function(response) {
				if (!response.hasError) {
					window.location.reload();
				} else {
					if (response.code == 2009) {
						// 用户未登陆
						popCenterWindow('#djdl', '#djdl_close');
					} else {
						alert(response.msg);
					}
				}
			}
		});
	}else{
		return false;
	}
}
