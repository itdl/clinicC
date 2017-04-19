package com.client.controller;

import com.client.model.YyRegisterMdl;
import com.client.service.YySrv;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
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
    public ModelAndView selYy(@RequestParam String sms, ModelAndView model) {
        model.setViewName("selCancel");
        if(sms==null||sms.equals(""))
            return model;
        Map<String,Object> param = new HashMap<>();
        param.put("sms",sms);
        List<YyRegisterMdl> yys = yySrv.selYyUnion(param);
        if(yys!=null)
            model.addObject("yys",yys);
        model.setViewName("selCancel");
        return model;
    }
}
