package com.client.controller;

import com.client.config.ParamCfg;
import com.client.model.UserMdl;
import com.client.model.YyRegisterMdl;
import com.client.service.YySrv;
import com.client.util.ComnUtil;
import com.client.util.DateUtil;
import com.client.util.GlobalVar;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by BikeBoy on 2017/4/17.
 */
@Controller
public class YyCtl {
    @Resource
    private YySrv yySrv;
    @Resource
    private ParamCfg paramCfg;

    @RequestMapping(value="/yyCheck",method= RequestMethod.POST)
    public String yyCheck(@RequestParam String dt,
                          HttpServletRequest req,RedirectAttributes attr){
        if(dt ==null){
            attr.addFlashAttribute("id",dt);
            attr.addFlashAttribute("msg","您未选择预约时间!");
            return "redirect:/";
        }
        String[] condition = StringUtils.split(dt,"_");
        Map<String,Object> param = new HashMap<String,Object>();
        param.put("registerDate",condition[0]);
        param.put("registerTime",condition[1]);
        List<YyRegisterMdl> yy = yySrv.selYyCount(param);
        if(yy.get(0).getRegisterCount() > paramCfg.getRegisterTimes()){
            attr.addFlashAttribute("id",dt);
            attr.addFlashAttribute("msg","已满约!");
            return "redirect:/";
        }
        req.getSession().setAttribute("id",dt);
        return "redirect:/yyRegister";
    }

    /**
     * 跳转至预订页面
     * @param req
     * @param model
     * @return
     */
    @RequestMapping(value="/yyRegister")
    public ModelAndView goYy(HttpServletRequest req,ModelAndView model){
        String id = String.valueOf(req.getSession().getAttribute("id"));
        String[] param = StringUtils.split(id,"_");
        model.addObject("_date",param[0]);
        model.addObject("_time",param[1]);
        model.setViewName("yyRegister");
        return model;
    }

    /**
     * 预约信息提交
     * @param req
     * @return
     */
    @RequestMapping(value="/yy",method = RequestMethod.POST)
    public Map<String,Object> submitYy(HttpServletRequest req){
        UserMdl user = (UserMdl)req.getSession().getAttribute(GlobalVar.UINFO);
        Map<String,Object> param = new HashMap<String,Object>();
        param.put("registerDate",req.getParameter("date"));
        param.put("registerTime",req.getParameter("time"));
        param.put("userId",user.getUserId());
        String today = StringUtils.substring( DateUtil.FormatDate(new Date()),0,10 );
        if( req.getParameter("date").compareTo(today)<0 ){
            param.clear();
            param.put("result","F");
            param.put("msg","请在就诊前一天预约");
            return param;
        }
        try{
            YyRegisterMdl yyCheck = yySrv.selYyHisty(param);
            if(yyCheck!=null){
                param.clear();
                param.put("result","F");
                StringBuilder msg = new StringBuilder()
                        .append("您已预约")
                        .append(req.getParameter("date"))
                        .append("日")
                        .append(ComnUtil.GetTimeZh(req.getParameter("time")))
                        .append(",请及时就诊");
                param.put("msg",msg.toString());
                return param;
            }
        }catch (Exception e){
            param.clear();
            param.put("result","F");
            param.put("msg","网络异常!");
            return param;
        }

        YyRegisterMdl yy = new YyRegisterMdl();
        yy.setRegisterDate(req.getParameter("date"));
        yy.setRegisterTime(req.getParameter("time"));
        yy.setRemarks(req.getParameter("remarks"));
        yy.setRptFlg(0);
        yy.setRptType(Integer.parseInt(req.getParameter("rptType")));
        yy.setStood(0);
        yy.setUserId(user.getUserId());
        yy.setWorkAddr(req.getParameter("workAddr"));
        yy.setWorkInfo(req.getParameter("workInfo"));
        try{
            yySrv.addYy(yy);
        }catch(Exception e){
            e.printStackTrace();
            param.put("result","F");
            param.put("msg","网络异常!");
            return param;
        }
        param.put("result","T");
        param.put("msg","预约成功!");
        return param;
    }
}
