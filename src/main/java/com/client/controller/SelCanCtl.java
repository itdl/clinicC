package com.client.controller;

import com.client.model.UserMdl;
import com.client.model.YyRegisterMdl;
import com.client.service.YySrv;
import com.client.util.GlobalVar;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by BikeBoy on 2017/4/19.
 */
@Controller
public class SelCanCtl {
    @Resource
    private YySrv yySrv;

    @RequestMapping(value="/sc",method= RequestMethod.GET)
    public String selCancel(){
        return "selCancel";
    }

    @RequestMapping(value = "/selYy", method = RequestMethod.POST)
    public ModelAndView selYy(@RequestParam String sms,
                              HttpServletRequest req,ModelAndView model) {
        model.setViewName("selCancel");
        if(sms==null||sms.equals(""))
            return model;
        Map<String,Object> param = new HashMap<>();
        param.put("sms",sms);
        List<YyRegisterMdl> yys = yySrv.selYyUnion(param);
        if(yys!=null)
            model.addObject("yys",yys);
        if(yys.size()>4)
            model.addObject("yysize",yys.size());
        model.setViewName("selCancel");
        model.addObject("sms",sms);
        return model;
    }

    @RequestMapping(value="/yycancel",method = RequestMethod.POST)
    @ResponseBody
    public Map<String,Object> yyCancel(HttpServletRequest req){
        Map<String,Object> param = new HashMap<String,Object>();
        UserMdl user = (UserMdl) req.getSession().getAttribute(GlobalVar.UINFO);
        param.put("userId",user.getUserId());
        param.put("sms",req.getParameter("sms"));
        String[] dt = req.getParameter("dt").split(",");
        param.put("registerDate",dt[0]);
        param.put("registerTime",dt[1]);
        try{
            yySrv.yyCancel(param);
        }catch (Exception e){
            e.printStackTrace();
            param.clear();
            param.put("result","F");
            param.put("result","网络异常请稍后再试");
            return param;
        }
        param.clear();
        param.put("result","T");
        param.put("result","您已取消预约");
        return param;
    }
}
