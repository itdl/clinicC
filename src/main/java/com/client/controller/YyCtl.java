package com.client.controller;

import com.client.config.ParamCfg;
import com.client.model.YyRegisterMdl;
import com.client.service.YySrv;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.thymeleaf.util.StringUtils;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
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
}
