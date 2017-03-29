// 头部登录效果
/*头部点击效果*/
 $(function(){
        var $djdl_li1=$("#djdl_menui ul li");
        $djdl_li1.click(function(){
            $(this).addClass("djdl_selected")            //当前<li>元素高亮
                   .siblings().removeClass("djdl_selected");  //去掉其它同辈<li>元素的高亮
            var index =  $djdl_li1.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
            $("#djdl_tab_id form")       //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
                    .eq(index).show()  //显示 <li>元素对应的<div>元素
                    .siblings().hide(); //隐藏其它几个同辈的<div>元素
        })
    })
	


	
/*帮助中心的效果*/
$(function() {
		$(".top_help").mouseover(function() {
			$(".top_help_h").show();
		});
		$(".top_help").mouseout(function() {
			$(".top_help_h").hide();
		});
});

/*同级医院和同区域医院效果*/
 $(function(){
        var $div_li =$(".kfyuks_right_tab_menu ul li");
        $div_li.click(function(){
            $(this).addClass("kfyuks_right_selected")            //当前<li>元素高亮
                   .siblings().removeClass("kfyuks_right_selected");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
            $(".kfyuks_right_tab_box > ul")       //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
                    .eq(index).show()   //显示 <li>元素对应的<div>元素
                    .siblings().hide(); //隐藏其它几个同辈的<div>元素
        });
    });
	
	
	
/*预约挂号头部——点击时的效果*/
$(function(){	

	/*医院类型的点亮效果*/
	$(".yiyuanxz_dh1 dl dt>a").click(function(){
			$(this).addClass("yiyuanxz_dt_all");
			$(".yiyuanxz_dh1 dd li>a").addClass("yiyuanxz_dh1_li_bs").parent().siblings().children("a").removeClass("yiyuanxz_dh1_li_bs");
	});
	$(".yiyuanxz_dh1 dd li>a").click(function(){	
			$(this).addClass("yiyuanxz_dh1_li_bs").parent().siblings().children("a").removeClass("yiyuanxz_dh1_li_bs");
			$(".yiyuanxz_dh1 dl dt>a").removeClass("yiyuanxz_dt_all");
	});
	
	$(".yiyuanxz_dh2 dl dt>a").click(function(){
			$(this).addClass("yiyuanxz_dt_all");
			$(".yiyuanxz_dh2 dd li>a").addClass("yiyuanxz_dh1_li_bs").parent().siblings().children("a").removeClass("yiyuanxz_dh1_li_bs");
	});
	$(".yiyuanxz_dh2 dd li>a").click(function(){	
			$(this).addClass("yiyuanxz_dh1_li_bs").parent().siblings().children("a").removeClass("yiyuanxz_dh1_li_bs");
			$(".yiyuanxz_dh2 dl dt>a").removeClass("yiyuanxz_dt_all");
	});
	$(".yiyuanxz_dh3 dl dt>a").click(function(){
			$(this).addClass("yiyuanxz_dt_all");
			$(".yiyuanxz_dh3 dd li>a").addClass("yiyuanxz_dh1_li_bs").parent().siblings().children("a").removeClass("yiyuanxz_dh1_li_bs");
	});
	$(".yiyuanxz_dh3 dd li>a").click(function(){	
			$(this).addClass("yiyuanxz_dh1_li_bs").parent().siblings().children("a").removeClass("yiyuanxz_dh1_li_bs");
			$(".yiyuanxz_dh3 dl dt>a").removeClass("yiyuanxz_dt_all");
	});
	
	/*按医院类型列表的点亮效果*/
	$(".yiyuan_content_1").mouseover(function(){
			$(this).addClass("yiyuan_content_1_color")
			
			
	});
	$(".yiyuan_content_1").mouseout(function(){
			$(this).removeClass("yiyuan_content_1_color");
			
			
	});
	/*预约挂号导航的点亮效果*/
	$(".yuyueguahao_ul>li>a").click(function(){
			$(this).addClass("xzbs_color").parent().siblings().children("a").removeClass("xzbs_color");
			
	});
	/*底部分页的点亮效果*/
	$(".yiyuan_list_rq_ul>li>a").click(function(){
			$(this).addClass("yiyuan_list_rq_xzd").parent().siblings().children("a").removeClass("yiyuan_list_rq_xzd");	
			$(".yiyuan_list_rq_next").removeClass("yiyuan_list_rq_xgjz");	
	});
	$(".yiyuan_list_rq_next").click(function(){
				$(this).addClass("yiyuan_list_rq_xgjz");	
	});	
	
	/*个人中心首页表格点亮*/
	$("#row_01 .grzx_right_co_tr").mouseover(function(){
			$(this).addClass("grzx_tr_bs");	
	});
	$("#row_01 .grzx_right_co_tr").mouseout(function(){
			$(this).removeClass("grzx_tr_bs");	
	});
	$("#row_01 .grzx_right_co_tr").click(function(){
			$(this).addClass("grzx_tr_bs2").siblings().removeClass("grzx_tr_bs2");	
	});
	/*个人中心首页左侧效果*/
	$(".grzx_left_ul>li>a").click(function(){
			$(this).addClass("grzx_left_ul_a").parent().siblings().children("a").removeClass("grzx_left_ul_a");
			
			
	});
	/*个人中心首页个人信息修改*/
	$(".grxx_form_dl_dd a").click(function(){
			$(this).addClass("grxx_f_bs").siblings().removeClass("grxx_f_bs");
			
			
	});
	/*收藏医院底部分页的点亮效果*/
	$(".sc_list_rq_ul>li>a").click(function(){
			$(this).addClass("sc_list_rq_xzd").parent().siblings().children("a").removeClass("sc_list_rq_xzd");
			
			
	});
	/*收藏医院点击点亮效果*/
	$(".scyy_content").mouseover(function(){
			$(this).addClass("scyy_bgcolor");
	});
	$(".scyy_content").mouseout(function(){
			$(this).removeClass("scyy_bgcolor");
	});
	/*帮助中心鼠标滑过点亮效果*/
	$(".help_right_content_dl dt").click(function(){
			$(this).addClass("hp_r_dl_dt1").siblings("dt").removeClass("hp_r_dl_dt1")		
	});
	$(".help_right_content_dl dt").mouseover(function(){
			$(this).addClass("hp_r_dl_dt")		
	});
	/*帮助中心鼠标滑过点亮效果*/
	$(".help_right_content_dl dt").mouseout(function(){
			$(this).removeClass("hp_r_dl_dt");		
	});
	/*帮助中心账号找回原因点击点亮效果*/
	$(".help_r_dl2 dd a").click(function(){
			$(this).addClass("help_r_dl2_color").siblings().removeClass("help_r_dl2_color");		
	});
	/*注册页面男女变色*/
	$(".rg_nr_boy").click(function(){
			$(this).addClass("rg_nr_acolor").siblings().removeClass("rg_nr_acolor");	
			return false;	
	});
	/*注册页面男女变色*/
	$(".rg_nr_girl").click(function(){
			$(this).addClass("rg_nr_acolor").siblings().removeClass("rg_nr_acolor");	
			return false;	
	});
	/*按科室预约界面头部点亮效果*/
	$(".ksorder_ul li a").click(function(){
			$(this).addClass("ksorder_ul_color").parent().siblings().children("a").removeClass("ksorder_ul_color");		
	});
	
});


/*个人中心首页表单*/

$(function(){

// alert("hello world"); 
  var dv2=$(".grzx_right_co_tr");
  dv2.click(function(){
	  var grzx_right=$(this);
	  if(grzx_right.next("tr").is(":hidden")){
	   		grzx_right.next("tr").show().siblings(".child_row_01").hide();
   		 }else{
 	 		grzx_right.next("tr").hide();
		}
	});
});
/*个人中心取消预约弹窗*/
/*$(function(){
	
	$(".yuyuequxiao").click(function(){
			$("#qxyuyue").show();
	});
	$(".qxyuyue_close").click(function(){
			$("#qxyuyue").hide();
	});
	$(".qxyuyue_qd").click(function(){
			$("#qxyuyue").hide();
	});
	$(".qxyuyue_qx").click(function(){
			$("#qxyuyue").hide();
	});
});*/
/*个人中心_管理人页面删除效果*/
$(function(){
	
	$(".grzx_con2_scjzr").click(function(){
			$("#scjzr").show();
	});
	$(".scjzr_close").click(function(){
			$("#scjzr").hide();
	});
	/*$(".scjzr_qd").click(function(){
			$("#scjzr").hide();
	});*/
	$(".scjzr_qx").click(function(){
			$("#scjzr").hide();
	});
});
/*个人中心_个人信息修改效果*/
 $(function(){
        var $div_li =$(".grxxxg_top ul li");
        $div_li.click(function(){
            $(this).addClass("grxxxg_selected")            //当前<li>元素高亮
                   .siblings().removeClass("grxxxg_selected");  //去掉其它同辈<li>元素的高亮
        });
    });
/*个人中心修改方式*/	
$(function() {
		$(".grxx_form_sc").click(function() {
			$(".grxx_form_dl2").show();
			$(".grxx_form_dl3").hide();
			
		});
		$(".grxx_form_xg").click(function() {
			$(".grxx_form_dl2").hide();
			$(".grxx_form_dl3").show();
			
		});
	});	
/*修改信息成功弹窗*/
$(function(){
	
	
	$(".zizhu_now_qr_close").click(function(){
			$("#zizhu_now_qr").hide();
	});
	$(".zizhu_now_qr_qd").click(function(){
			$("#zizhu_now_qr").hide();
	});

});
/*判断图片大小和格式*/
/* $(function(){
  $(".xiugaitouxiang_sctx").change( function(){
  var filepath=$("input[name='upFile']").val();
  var extStart=filepath.lastIndexOf(".");
  var ext=filepath.substring(extStart,filepath.length).toUpperCase();
  if(ext!=".PNG"&&ext!=".GIF"&&ext!=".JPG"){
  alert("图片限于png,gif,jpg格式");
  return false;
  }else{$("#name01").text(ext)}
  var file_size = 0;
  if ( $.browser.msie) {
  var img=new Image();
  img.src=filepath;
  while(true){
  if(img.fileSize > 0){
  if(img.fileSize>2048){
  alert("图片不大于2MB。");
  }else{
  var num03 = img.fileSize/1024;
  num04 = num03.toFixed(2)
  $(".size02").text(num04+"KB");
  }
  break;
  }
  }
  } else {
  file_size = this.files[0].size;
  console.log(file_size/1024/1024 + " MB");
  var size = file_size / 1024;
  if(size > 2048){
  alert("上传的文件大小不能超过2M！");
  }else{
  var num01 = file_size/1024;
  num02 = num01.toFixed(2)
  $("#size01").text(num02 + " KB");
  }
  }
  return true;
  });
  });*/
 
 
/*帮助中心*/
$(function(){

  var dv=$(".help_right_content_dl dt");
  dv.click(function(){
	  var aixuexi=$(this);
	  if(aixuexi.next("dd").is(":hidden")){
	   		aixuexi.next("dd").show().siblings("dd").hide();	
	}else{
 	 		aixuexi.next("dd").hide();
		}
	});
	/*个人中心的意见反馈页面的 textarea*/
 $("#yjfk_message").click(function (){ 
	 if($("#yjfk_message").val() == '请输入您的意见，我们会根据您的反馈认真改进。'){
		 $("#yjfk_message").val(''); 
	 }
  }); 
});

 
 /*帮助中心账号找回的原因*/	
$(function(){
	$(".help_r_dl2_name").click(function(){
			$(".help_r_dl4").hide();
			$(".help_r_dl3").hide();
	});
	
	$(".help_r_dl2_bdsjcw").click(function(){
			$(".help_r_dl4").hide();
			$(".help_r_dl3").show();
	});
	$(".help_r_dl2_qtyy").click(function(){
			$(".help_r_dl3").hide();
			$(".help_r_dl4").show();
	});
	
});
 

 
 
 /*判断文件大小*/
/* $(function(){
  $(".bk_jzjl_box_blsc").change( function(){
  var filepath=$("input[name='upFile']").val();
  var extStart=filepath.lastIndexOf(".");
  var ext=filepath.substring(extStart,filepath.length).toUpperCase();
  
  var file_size = 0;
  if ( $.browser.msie) {
  var img=new Image();
  img.src=filepath;
  while(true){
  if(img.fileSize > 0){
  if(img.fileSize>2048){
  alert("文件不大于2MB。");
   return false;
  }else{
  var num03 = img.fileSize/1024;
  num04 = num03.toFixed(2)
  $(".size02").text(num04+"KB");
  }
  break;
  }
  }
  } else {
  file_size = this.files[0].size;
  console.log(file_size/1024/1024 + " MB");
  var size = file_size / 1024;
  if(size > 2048){
  alert("上传的文件大小不能超过2M！");
  }else{
  var num01 = file_size/1024;
  num02 = num01.toFixed(2)
  $("#size01").text(num02 + " KB");
  }
  }
  return true;
  });
  });*/
 
/*病例上传点击显示隐藏*/
$(function() {
	var $booking_jzjl=$(".booking_jzjl_box");
	var $booking_jzjl2=$(".booking_jzjl_box2");
    $(".bk_jzjl_box_top_span").click(function() {
        $(this).text($(".bk_jzjl_box_content").is(":hidden") ? "-" : "+");
        $(".bk_jzjl_box_content").slideToggle();
    });
	$(".bk_jzjl_box_top h3").click(function() {
        $(".bk_jzjl_box_top_span").text($(".bk_jzjl_box_content").is(":hidden") ? "-" : "+");
        $(".bk_jzjl_box_content").slideToggle();
    });
	
	$(".bk_rmjzjl").click(function(){
			$booking_jzjl.hide();
			$(".bk_jzjlnumber2").text($booking_jzjl.is(":hidden")?"1":"2")
			$("#booking_add_btn").css("background","#2CA6E0");
			$("#booking_add_btn").css("color","#fff");
			return false;
	});
	$(".bk_jzjl_box_top_span2").click(function() {
        $(this).text($(".bk_jzjl_box_content2").is(":hidden") ? "-" : "+");
        $(".bk_jzjl_box_content2").slideToggle();
    });
	$(".bk_jzjl_box_top2 h3").click(function() {
        $(".bk_jzjl_box_top_span2").text($(".bk_jzjl_box_content2").is(":hidden") ? "-" : "+");
        $(".bk_jzjl_box_content2").slideToggle();
    });
	$(".bk_rmjzjl2").click(function(){
			$booking_jzjl2.hide();
			$("#booking_add_btn").css("background","#2CA6E0");
			$("#booking_add_btn").css("color","#fff");
			return false;
	});
	
	$("#booking_add_btn").click(function(){
			$booking_jzjl.show();
			$booking_jzjl2.show();
			$("#booking_add_btn").css("background","#eee");
			$("#booking_add_btn").css("color","#000");
			$(".bk_jzjlnumber2").text($booking_jzjl.is(":hidden")?"1":"2");
	}); 
});

/*检查经历上传点击显示隐藏*/
$(function() {
	var $booking_jcjl=$(".booking_jcjl_box");
	var $booking_jcjl2=$(".booking_jcjl_box2");
    $(".bk_jcjl_box_top_span").click(function() {
        $(this).text($(".bk_jcjl_box_content").is(":hidden") ? "-" : "+");
        $(".bk_jcjl_box_content").slideToggle();
    });
	 $(".bk_jcjl_box_top h3").click(function() {
        $(".bk_jcjl_box_top_span").text($(".bk_jcjl_box_content").is(":hidden") ? "-" : "+");
        $(".bk_jcjl_box_content").slideToggle();
    });
	
	$(".bk_jc_rmjzjl").click(function(){
			$booking_jcjl.hide();
			$("#booking_add_btn2").css("background","#2CA6E0");
			$("#booking_add_btn2").css("color","#fff");
			$(".bk_jcjlnumber2").text($booking_jcjl.is(":hidden")?"1":"2");
			return false;
	});
	$(".bk_jcjl_box_top_span2").click(function() {
        $(this).text($(".bk_jcjl_box_content2").is(":hidden") ? "-" : "+");
        $(".bk_jcjl_box_content2").slideToggle();
    });
	$(".bk_jcjl_box_top2 h3").click(function() {
        $(".bk_jcjl_box_top_span2").text($(".bk_jcjl_box_content2").is(":hidden") ? "-" : "+");
        $(".bk_jcjl_box_content2").slideToggle();
    });
	
	$(".bk_jc_rmjzjl2").click(function(){
			$booking_jcjl2.hide();
			$("#booking_add_btn2").css("background","#2CA6E0");
			$("#booking_add_btn2").css("color","#fff");
			return false;
	});
	
	$("#booking_add_btn2").click(function(){
			$booking_jcjl.show();
			$booking_jcjl2.show();
			$("#booking_add_btn2").css("background","#eee");
			$("#booking_add_btn2").css("color","#000");
			$(".bk_jcjlnumber2").text($booking_jcjl.is(":hidden")?"1":"2");
			
	}); 
	
	
});



/*按科室挂号头部效果*/
$(function() {
    $("#ksgh_top_block").click(function() {
        $(this).text($(".ksgh_top_ul2").is(":hidden") ? "收缩全部" : "展开全部");
        $(".ksgh_top_ul2").slideToggle("slow");
    });
});

/*按科室挂号的左侧点亮效果*/

$(function(){
	$(".ksgh_c_nav li").click(function(){
			$(this).addClass("ksgh_c_nav_color").siblings().removeClass("ksgh_c_nav_color");
			
	});
	
	
	$(".ksgh_c_nav li a").click(function(){
			$(this).addClass("ksgh_c_nav_a").parent().siblings().children("a").removeClass("ksgh_c_nav_a");
		
	});
	/*按科室挂号的左侧去除最后一个元素的border*/
			var ksghz=$(".ksgh_c_nav");
				ksghz.each(function(){
				ksghz.find("li:last").css("border-bottom","0");
				});
			
	
	/*按科室挂号医院类型的点亮效果*/
	$(".ksghny_dh1 dl dt>a").click(function(){
			$(this).addClass("ksghny_dt_all");
			$(".ksghny_dh1 dd li>a").addClass("ksghny_dh1_li_bs").parent().siblings().children("a").removeClass("ksghny_dh1_li_bs");
	});
	$(".ksghny_dh1 dd li>a").click(function(){	
			$(this).addClass("ksghny_dh1_li_bs").parent().siblings().children("a").removeClass("ksghny_dh1_li_bs");
			$(".ksghny_dh1 dl dt>a").removeClass("ksghny_dt_all");
	});
	
	$(".ksghny_dh2 dl dt>a").click(function(){
			$(this).addClass("ksghny_dt_all");
			$(".ksghny_dh2 dd li>a").addClass("ksghny_dh1_li_bs").parent().siblings().children("a").removeClass("ksghny_dh1_li_bs");
	});
	$(".ksghny_dh2 dd li>a").click(function(){	
			$(this).addClass("ksghny_dh1_li_bs").parent().siblings().children("a").removeClass("ksghny_dh1_li_bs");
			$(".ksghny_dh2 dl dt>a").removeClass("ksghny_dt_all");
	});
	$(".ksghny_dh3 dl dt>a").click(function(){
			$(this).addClass("ksghny_dt_all");
			$(".ksghny_dh3 dd li>a").addClass("ksghny_dh1_li_bs").parent().siblings().children("a").removeClass("ksghny_dh1_li_bs");
	});
	$(".ksghny_dh3 dd li>a").click(function(){	
			$(this).addClass("ksghny_dh1_li_bs").parent().siblings().children("a").removeClass("ksghny_dh1_li_bs");
			$(".ksghny_dh3 dl dt>a").removeClass("ksghny_dt_all");
	});
	
});

/*按科室挂号内页的头部效果*/
$(function() {
    $(".ksghny_top_block").click(function() {
		
		if($(".ksghny_top_nr").hasClass("ksghny_top_display")){
			$(this).text("收缩");
			$(".ksghny_top_nr").removeClass("ksghny_top_display");
		}else{
			$(this).text("展开");
			$(".ksghny_top_nr").addClass("ksghny_top_display");
		}
    });
});
/*按科室挂号列表的点亮效果*/
$(function() {
	$(".ksyiyuan_content_1").mouseover(function(){
			$(this).addClass("ksyiyuan_content_1_color");
	});
	$(".ksyiyuan_content_1").mouseout(function(){
			$(this).removeClass("ksyiyuan_content_1_color");
		
	});
});
/*按科室预约内页的头部效果*/
$(function() {
    $(".ksorder_a_block").click(function() {
        $(this).text($(".ksorder_box_pdisplay").is(":hidden") ? "收缩" : "展开");
        $(".ksorder_box_pdisplay").slideToggle();
    });
});
/*鼠标滑过科室预约界面的内容*/
$(function() {
	$(".ksorder_djgh_dr1").mouseover(function(){
		$(this).addClass("ksorder_djgh_dr1_bg");
	});
	$(".ksorder_djgh_dr1").mouseout(function(){
	$(this).removeClass("ksorder_djgh_dr1_bg");
	});
});
/*儿童医院预约的内容*/
$(function() {
	$(".ek_hrsfz").click(function(){
			$(this).addClass("ek_bgcolor");
			$(".Rese_eksf").show();
			$(".Rese_ekqt").hide();
			$("#huanershengri").hide();
			$(".Rese_db_dl3").hide();
			$(".ek_qt").removeClass("ek_bgcolor");
			return false;
	});
	$(".ek_qt").click(function(){
			$(".ek_hrsfz").removeClass("ek_bgcolor");
			$(this).addClass("ek_bgcolor");
			$(".Rese_eksf").hide();
			$("#huanershengri").show();
			$(".Rese_db_dl3").show();
			$(".Rese_ekqt").show();
			return false;
	});
	$(".Rese_db_dl3 a").click(function(){
			$(this).addClass("ek_bgcolor2").siblings().removeClass("ek_bgcolor2");
			return false;
	});
	/*个人信息页面*/
	$(".grzxnv a").click(function(){
			$(this).addClass("ek_bgcolor2").siblings().removeClass("ek_bgcolor2");
			return false;
	});
	/*电力医院*/
	$(".Rese_dlyy a").click(function(){
			$(this).addClass("resedl_bgcolor").siblings().removeClass("resedl_bgcolor");
			return false;
	});
	$(".Rese_dlyy2 a").click(function(){
			$(this).addClass("resedl_bgcolor2").siblings().removeClass("resedl_bgcolor2");
			return false;
	});
	
});


/*首页左侧导航*/
$(document).ready(function(){//加载dom
		if (!$("#index_top_guid").is(":animated")){//首先判断是否处于动画状态
			var lis = $("#index_top_guid ul.index_top_nav li");
//遍历文档树
			lis.each(function(i){	
			 	var timoutid=null;
				$(this).bind("mouseover", i, function(){
					hideTimer=setTimeout(
					function(){
						$("#index_top_showvalue").show();
						var hv = $("#index_top_hdvalue").children().eq(i);
						$("#index_top_showvalue").html(hv.html());
					},200);
					$(this).addClass("index_top_nav_licolor")
						$("#index_top_showvalue").bind("mouseover", function(){
							$("#index_top_showvalue").show();
						});
				 });
				 //鼠标滑过
				$(this).bind("mouseout",function(){
						clearTimeout(hideTimer);
						$(this).removeClass('index_top_nav_licolor');
				});
			});
//控制鼠标移除事件
 				$("#index_top_guid,#index_top_showvalue").mouseleave(function(){  
					$("#index_top_showvalue").hide();
					
				});  
			    $(".index_top_nav_p").mouseover(function(){
					 $(this).addClass("index_top_nav_p2")
					 $("#index_top_showvalue").hide();	
			    });	
				 $(".index_top_nav_p").mouseout(function(){
					 $(this).removeClass("index_top_nav_p2");
				});		                 
		};
		
	
});


/*焦点图*/
$(document).ready(function (){
	
	//点击小图切换大图
	$("#index_thumbnail li a").click(function(){
		$(".index_jdt_pic img").hide().attr({ "src": $(this).attr("href"), "title": $("> img", this).attr("title") });
		$("#index_thumbnail li.index_jdtcurrent").removeClass("index_jdtcurrent");
		$(this).parents("li").addClass("index_jdtcurrent");
		return false;
	});
	$(".index_jdt_pic>img").load(function(){
		$(".index_jdt_pic>img:hidden").show();
	});
	
	//小图片左右滚动
	var $slider = $('.index_jdtslider ul');
	var $slider_child_l = $('.index_jdtslider ul li').length;
	var $slider_width = $('.index_jdtslider ul li').width();
	
	$slider.width($slider_child_l * $slider_width)+$('.index_jdtslider ul li').css({margin: '0 5px 0 0'});
	
	var slider_count = 0;
	
	if ($slider_child_l < 4) {
		$('#index_jdtbtn_right').css({cursor: 'auto'});
		$('#index_jdtbtn_right').removeClass("index_jdtdasabled");
	};
	
	$('#index_jdtbtn_right').click(function() {
		if ($slider_child_l < 4 || slider_count >= $slider_child_l - 4) {
			return false;
		}
	
		slider_count++;
		$slider.animate({left: '-=' + $slider_width + 'px'}, 'fast');
		slider_pic();
	});
	
	$('#index_jdtbtn_left').click(function() {
		if (slider_count <= 0) {
			return false;
		}
		slider_count--;
		$slider.animate({left: '+=' + $slider_width + 'px'}, 'fast');
		slider_pic();
	});
	
	function slider_pic() {
		if (slider_count >= $slider_child_l - 4) {
			$('#index_jdtbtn_right').css({cursor: 'auto'});
			$('#index_jdtbtn_right').addClass("index_jdtdasabled");
		}
		else if (slider_count > 0 && slider_count <= $slider_child_l - 4) {
			$('#index_jdtbtn_left').css({cursor: 'pointer'});
			$('#index_jdtbtn_left').removeClass("index_jdtdasabled");
			$('#index_jdtbtn_right').css({cursor: 'pointer'});
			$('#index_jdtbtn_right').removeClass("index_jdtdasabled");
		}
		else if (slider_count <= 0) {
			$('#index_jdtbtn_left').css({cursor: 'auto'});
			$('#index_jdtbtn_left').addClass("index_jdtdasabled");
		}
	}
	
});

/*首页中部医院的切换效果*/
 $(function(){
        var $div_li =$(".index_c_tab_menu ul li");
        $div_li.click(function(){
            $(this).addClass("index_c_selected")            //当前<li>元素高亮
                   .siblings().removeClass("index_c_selected");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
            $(".index_c_tab_box .index_c_div")       //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
                    .eq(index).show()   //显示 <li>元素对应的<div>元素
                    .siblings().hide(); //隐藏其它几个同辈的<div>元素
        });
		
		/*第二层*/
		
		var $div_li2 =$(".index_c_d_tul li");
        $div_li2.click(function(){
            $(this).addClass("index_c_d_lbg")            //当前<li>元素高亮
                   .siblings().removeClass("index_c_d_lbg");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li2.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
            $(".index_hos_box .index_hos_box_nr")       //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
                    .eq(index).show()   //显示 <li>元素对应的<div>元素
                    .siblings().hide(); //隐藏其它几个同辈的<div>元素
        });
		
		/*科室*/
		var $div_li3 =$(".index_c_ks_tul li");
        $div_li3.click(function(){
            $(this).addClass("index_c_ks_lbg")            //当前<li>元素高亮
                   .siblings().removeClass("index_c_ks_lbg");  //去掉其它同辈<li>元素的高亮
            var index =  $div_li3.index(this);  // 获取当前点击的<li>元素 在 全部li元素中的索引。
            $(".index_ks_box .index_ks_box_nr")       //选取子节点。不选取子节点的话，会引起错误。如果里面还有div 
                    .eq(index).show()   //显示 <li>元素对应的<div>元素
                    .siblings().hide(); //隐藏其它几个同辈的<div>元素
        });
		
});



/*按疾病挂号的左边人体图*/
$(function(){
		$(".jbss_anniu").click(function(){
			$(".jibingpepole_nvz").stop().fadeIn(1000).show();	
			$(".jibingpepole_menz").hide();	
			$(".jibingpepole_menb").hide();	
			$(".jibingpepole_nvb").hide();	
			$(".jibingpepole_old").hide();
			$(".jibingpepole_children").hide();
		});
			
		$(".jbss_anniu2").click(function(){
			$(".jibingpepole_menz").stop().fadeIn(1000).show();	
			$(".jibingpepole_nvz").hide();	
			$(".jibingpepole_menb").hide();	
			$(".jibingpepole_nvb").hide();	
			$(".jibingpepole_old").hide();
			$(".jibingpepole_children").hide();
		});
		/*状态为男正面的时候*/	
		$(".jbss_anniu1").click(function(){
				$(".jibingpepole_menb").stop().fadeIn(1000).show();
				$(".jibingpepole_nvz").hide();	
				$(".jibingpepole_menz").hide();	
				$(".jibingpepole_nvb").hide();	
				$(".jibingpepole_old").hide();
			$(".jibingpepole_children").hide();		
		});
		/*状态为男背面的时候*/	
		$(".jbss_anniu3").click(function(){
				$(".jibingpepole_menz").stop().fadeIn(1000).show();
				$(".jibingpepole_nvz").hide();	
				$(".jibingpepole_menb").hide();	
				$(".jibingpepole_nvb").hide();
				$(".jibingpepole_old").hide();
			$(".jibingpepole_children").hide();			
		});	
		/*状态为女正面的时候*/	
		$(".jbss_anniu4").click(function(){
				$(".jibingpepole_nvb").stop().fadeIn(1000).show();
				$(".jibingpepole_nvz").hide();	
				$(".jibingpepole_menz").hide();	
				$(".jibingpepole_menb").hide();	
				$(".jibingpepole_old").hide();
			 $(".jibingpepole_children").hide();	
			
		});
		/*状态为女背面的时候*/	
		$(".jbss_anniu5").click(function(){
				$(".jibingpepole_nvz").stop().fadeIn(1000).show();
				$(".jibingpepole_nvb").hide();	
				$(".jibingpepole_menb").hide();	
				$(".jibingpepole_menz").hide();	
				$(".jibingpepole_old").hide();
		    	$(".jibingpepole_children").hide();		
		});	
		
		$(".jbss_age1").click(function(){
				$(".jibingpepole_menz").stop().fadeIn(1000).show();
				$(".jibingpepole_nvb").hide();	
				$(".jibingpepole_menb").hide();	
				$(".jibingpepole_nvz").hide();		
				$(".jibingpepole_old").hide();
				$(".jibingpepole_children").hide();	
		});
		$(".jbss_ch").click(function(){
				$(".jibingpepole_children").stop().fadeIn(1000).show();
				$(".jibingpepole_nvb").hide();	
				$(".jibingpepole_menb").hide();	
				$(".jibingpepole_nvz").hide();		
				$(".jibingpepole_old").hide();
				$(".jibingpepole_menz").hide();	
		});	
		$(".jbss_old").click(function(){
				$(".jibingpepole_old").stop().fadeIn(1000).show();
				$(".jibingpepole_nvb").hide();	
				$(".jibingpepole_menb").hide();	
				$(".jibingpepole_nvz").hide();		
				$(".jibingpepole_children").hide();
				$(".jibingpepole_menz").hide();	
		});
		
		
	})
	
/*按疾病挂号首页*/
$(document).ready(function(){//加载dom
			//男正面
			var jba1= $(".jibingpepole_cent_an a");
//遍历文档树
			jba1.each(function(i){
				$(this).bind("click", i, function(){
					$("#disease_showvalue").show();
					var diycnr1= $("#disea_box").children().eq(i);
					$("#disease_showvalue").html(diycnr1.html());
					$("#disease_showvalue").bind("click", function(){
						$("#disease_showvalue").show();
						
					});
				});
				
			});
			//男背面
			var jba2= $(".jibingpepole_cent_an2 a");
//遍历文档树
			jba2.each(function(i){
				$(this).bind("click", i, function(){
					$("#disease_showvalue").show();
					var diycnr2= $("#disea_b_box").children().eq(i);
					$("#disease_showvalue").html(diycnr2.html());
					$("#disease_showvalue").bind("click", function(){
						$("#disease_showvalue").show();
						
					});
				});
				
			});
			//女正面
			var jba3= $(".jibingpepole_cent_an3 a");
//遍历文档树
			jba3.each(function(i){
				$(this).bind("click", i, function(){
					$("#disease_showvalue").show();
					var diycnr3= $("#disea_nvz_box").children().eq(i);
					$("#disease_showvalue").html(diycnr3.html());
					$("#disease_showvalue").bind("click", function(){
						$("#disease_showvalue").show();
						
					});
				});
				
			});
			//女背面
			var jba4= $(".jibingpepole_cent_an4 a");
//遍历文档树
			jba4.each(function(i){
				$(this).bind("click", i, function(){
					$("#disease_showvalue").show();
					var diycnr4= $("#disea_nvb_box").children().eq(i);
					$("#disease_showvalue").html(diycnr4.html());
					$("#disease_showvalue").bind("click", function(){
						$("#disease_showvalue").show();
						
					});
				});
				
			});
			//人物选择按钮
			var renw= $(".jbss_old");
			renw.each(function(){
				$(this).bind("click",function(){
						var renwnr= $("#disea_old_box").children()
						$("#disease_showvalue").html(renwnr.html());
						$("#disease_showvalue").bind("click", function(){
						$("#disease_showvalue").show();
						
					});
				});
					
			});
			
			var renw2= $(".jbss_ch");
			renw2.each(function(){
				$(this).bind("click",function(){
						var renwnr2= $("#disea_children_box").children()
						$("#disease_showvalue").html(renwnr2.html());
						$("#disease_showvalue").bind("click", function(){
						$("#disease_showvalue").show();
					});
				});
					
			});
			var renw3= $(".jbss_age1");
			renw3.each(function(){
				$(this).bind("click",function(){
						var renwnr3= $("#disea_box").children()
						$("#disease_showvalue").html(renwnr3.html());
						$("#disease_showvalue").bind("click", function(){
						$("#disease_showvalue").show();
						
					});
				});
					
			});
			/*去除最后一个元素的border*/
			var dlborder=$(".disease_ycnr");
				dlborder.each(function(){
				dlborder.find("dl:last").css("border-bottom","0")
				});
			var dlborder2=$("#disease_showvalue");
				dlborder2.each(function(){
				dlborder2.find("dl:last").css("border-bottom","0")
				});
			
			
});

/*阻止首页弹窗的右击鼠标默认行为*/
$("#index_top_showvalue").ready(function(){  
    $("#index_top_showvalue").bind("contextmenu",function(e){   
          return false;   
    });
});

/*验证表单*/
$(function(){
	//var $rg_nr_input=$(".rg_nr_input");
//	var $rg_nr_input3=$(".rg_nr_input3");
//	$rg_nr_input.bind("focus",function(){
//		$(this).removeClass("rg_nr_input_color");	
//	});
//	$rg_nr_input.bind("blur",function(){
//		if($(this).val()==""){
//				$(this).addClass("rg_nr_input_color");
//			}else{
//				$(this).removeClass("rg_nr_input_color");	
//			}
//	});
//	$rg_nr_input3.bind("focus",function(){
//		$(this).removeClass("rg_nr_input_color");	
//	});
//	$rg_nr_input3.bind("blur",function(){
//		if($(this).val()==""){
//				$(this).addClass("rg_nr_input_color");
//			}else{
//				$(this).removeClass("rg_nr_input_color");	
//			}
//	});
//	/*姓名*/
//	$("#rg_nr_name").focus(function(){
//		$(this).siblings().removeClass("rg_nr_dl_o").text("");	
//	});
//	$("#rg_nr_name").blur(function(){
//		if($(this).val()==""){
//				$(this).siblings().addClass("rg_nr_dl_o").text("请您输入真实姓名");
//			}
//	});
//	/*证件号码*/
//	$("#rg_nr_zjhm").focus(function(){
//		$(this).siblings().removeClass("rg_nr_dl_o").text("");	
//	});
//	$("#rg_nr_zjhm").blur(function(){
//		if($(this).val()==""){
//				$(this).siblings().addClass("rg_nr_dl_o").text("请您输入有效证件号码");
//			}
//	});
//	
//	/*确认证件号码*/
//	$("#rg_nr_qrzjhm").focus(function(){
//		$(this).siblings().removeClass("rg_nr_dl_o").text("");	
//	});
//	$("#rg_nr_qrzjhm").blur(function(){
//		if($(this).val()==""){
//				$(this).siblings().addClass("rg_nr_dl_o").text("请您再次有效证件号码");
//			}
//	});
//	/*用户密码*/
//	$("#rg_nr_password").focus(function(){
//		$(this).siblings().removeClass("rg_nr_dl_o").text("");	
//	});
//	$("#rg_nr_password").blur(function(){
//		if($(this).val()==""){
//				$(this).siblings().addClass("rg_nr_dl_o").text("请您输入登录密码");
//			}
//	});
//	/*确认密码*/
//	$("#rg_nr_agin_password").focus(function(){
//		$(this).siblings().removeClass("rg_nr_dl_o").text("");	
//	});
//	$("#rg_nr_agin_password").blur(function(){
//		if($(this).val()==""){
//				$(this).siblings().addClass("rg_nr_dl_o").text("请您再次输入登录密码");
//			}
//	});
//	/*手机号码*/
//	$("#rg_nr_sjhm").focus(function(){
//		$(this).siblings("p").removeClass("rg_nr_dl_o").text("");	
//	});
//	$("#rg_nr_sjhm").blur(function(){
//		if($(this).val()==""){
//				$(this).siblings("p").addClass("rg_nr_dl_o").text("请您输入有效手机号码");
//			}
//	});
//	/*图片验证码*/
//	$("#rg_nr_dl_yzm").focus(function(){
//		$(this).parent().siblings("p").removeClass("rg_nr_dl_o").text("");	
//	});
//	$("#rg_nr_dl_yzm").blur(function(){
//		if($(this).val()==""){
//				$(this).parent().siblings("p").addClass("rg_nr_dl_o").text("请您输入图片验证码");
//		}
//	});
//	/*图片验证码*/
//	$("#rg_nr_dl_s_sjyzm").focus(function(){
//		$(this).parent().siblings("p").removeClass("rg_nr_dl_o").text("");	
//	});
//	$("#rg_nr_dl_s_sjyzm").blur(function(){
//		if($(this).val()==""){
//				$(this).parent().siblings("p").addClass("rg_nr_dl_o").text("请您输入手机验证码");
//		}
//	});
//	/*本人同意*/
//	var $rg_nr_dl_radio=$("#rg_nr_dl_radio");
//	$rg_nr_dl_radio.bind("click",function(){
//		if($(this).attr("checked")){
//			$(this).parent().siblings("p").removeClass("rg_nr_dl_o").text("");	
//		}else{
//			$(this).parent().siblings("p").addClass("rg_nr_dl_o").text("请接收服务协议");
//		}
//	});

	/*点击注册为空时*/
	$("#regist_btn").click(function(){
		if($(".rg_nr_dl dd input").val()==""){
			$(".rg_nr_dl dd input").addClass("rg_nr_input_color");	
		}else{
			$(".rg_nr_dl dd input").removeClass("rg_nr_input_color");	
		}
		
	});
});
/*返回顶部*/

$(document).ready(function(){
	$fhdb_retop=$('<a href="#" id="fhdb_retop"></a>');
	$fhdb_retop.appendTo('#fhdb');
	$('#fhdb').click(function(){
		$('body,html').animate({scrollTop:0},1000); 
		$(this).fadeOut(1000);
		return false;
	});
	var $retop = $('#fhdb');
	function backTopLeft(){
		var btLeft = $(window).width() / 2 + 510;
		if (btLeft <= 1020){
			$retop.css({ 'left': 1020 });
		}else{
			$retop.css({ 'left': btLeft }); 
		}
	};
	backTopLeft();
	$(window).resize(backTopLeft);
	$(window).scroll(function(){
		if ($(document).scrollTop() === 0){
			$retop.hide();
		}else{
			$retop.show();
		};
		
	});
	 
});


/*按疾病挂号头部效果*/
$(function() {
    $("#disease_top_block").click(function() {
		$(this).text($(".disease_top_ul2").is(":hidden") ? "收缩全部" : "展开全部");
        $(".disease_top_ul2").slideToggle("slow");
    });
});
/*预约挂号的点击预约效果*/
/*$(function(){
	$(".ksorder_kyy").click(function(){
		$(this).addClass("ksorder_bgcol").parent("tr").siblings().children(".ksorder_kyy").removeClass("ksorder_bgcol");	
		$(this).addClass("ksorder_bgcol").siblings().removeClass("ksorder_bgcol");
		if($(".ksorder_kyy").hasClass("ksorder_bgcol")){
			  $(document).scrollTop(600);
		}	
		$(".ksorder_ym").removeClass("ksorder_ym1");	
	});
	
	$(".ksorder_ym").click(function(){
		$(this).addClass("ksorder_ym1").parent("tr").siblings().children(".ksorder_ym").removeClass("ksorder_ym1");	
		$(this).addClass("ksorder_ym1").siblings().removeClass("ksorder_ym1");
		if($(".ksorder_ym").hasClass("ksorder_ym1")){
			  $(document).scrollTop(600);
		}	
		$(".ksorder_kyy").removeClass("ksorder_bgcol");	
	});
	
	$('.ksorder_btn_right').click(function(){
		$('.ksorder_kyy').removeClass("ksorder_bgcol");	
		$('.ksorder_ym').removeClass("ksorder_ym1");	
	})
	$('.ksorder_btn_left').click(function(){
		$('.ksorder_kyy').removeClass("ksorder_bgcol");	
		$('.ksorder_ym').removeClass("ksorder_ym1");
	})
});
*/

//后增弹窗
	
	
	 /*点击登录的弹窗*/
	 $(document).ready(function () {
		 /*个人中新的就诊人添加里的弹窗*/
         $(".grzx_r_c3_qd").click(function () {
			 /*实名认证失败*/
             center("#use_smrztc",".use_smrztc_qr");
			  /*实名认证中*/
			 center("#use_smrztc2",".use_smrztc_qr");
         });
		 /*use_info的弹窗*/
		 $(".gxxxg_qd").click(function () {
			 /*手机绑定唯一联系人结束*/
             center("#use_iphon_onlyid","#use_iphon_close",".use_iphon_qdan");
			 /*实名认证中*/
			 center("#use_smrzzid");
			 /*实名认证失败*/
			 center("#use_smrzsbid","#use_smrzsb_close");
			 /*没有注册过*/
			 center("#use_smrzmzcid","#use_smrzmzc_close");
			 /*实名信息与真实信息不一致*/
			  center("#use_use_smxxtruid","#use_smxxtru_close",".use_smxxtru_qdan");
         });
      });
	  // 居中
		function center(obj,bgcol,bgcol2) {
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
		   closeWindow(bgcol,bgcol2);
		}
	  //关闭窗口的方法 
	  function closeWindow(bgcol,bgcol2){ 
		  $(bgcol).click(function(){ 
			  $(this).parent().hide(); 
			   $("#bg").css("display", "none");
		}); 
		$(bgcol2).click(function(){ 
			  $(this).parent().hide(); 
			   $("#bg").css("display", "none");
		});
	  } 
	  
	  /*弹窗 end*/
	  
/*实名认证中*/
$(function(){
        var timeIndex = 0;
        var url = "";
        $(document).ready(function(){
            var regex = /dateTime=(\d+)/;
            var src = location.toString();
            if(src.match(regex)){
                timeIndex = src.match(regex)[1];
            }
            url = $(".ysdl_ul_denglu");
            setTime();
            setInterval(setTime, 1000);
        });
        function setTime(){
            var hour = parseInt(timeIndex / 3600);
            var minutes = parseInt((timeIndex % 3600) / 60);
            var seconds = parseInt(timeIndex % 60);
            hour = hour < 10 ? "0" + hour : hour;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            $(".divTime").text(hour + ":" + minutes + ":" + seconds);
            timeIndex++;
           
        }
});  
	
/*点击登录之后出现一段文字*/
$(function(){
	$(".hl_tsxx").click(function(){
		if($(".hl_tsxx_yc").hide()){
			$(".hl_tsxx_yc").show();
		}else{
			$(".hl_tsxx_yc").hide()	
		}
	});	
	
});  
