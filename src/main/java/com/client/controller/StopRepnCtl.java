package com.client.controller;

import com.client.model.YyconfigMdl;
import com.client.service.YySrv;
import com.client.util.ComnUtil;
import com.client.util.DateUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by BikeBoy on 2017/4/19.
 */
@Controller
public class StopRepnCtl {
    @Resource
    private YySrv yySrv;

    @RequestMapping(value="/stopRepn",method= RequestMethod.GET)
    public ModelAndView stopRepn(ModelAndView model){
        Map<String,Object> param = new HashMap<String,Object>();
        param.put("registerDate", DateUtil.FormatDate(new Date()));
        List<YyconfigMdl> yyConfigs = yySrv.stopRepnList(param);
        model.setViewName("stopRepn");
        if(yyConfigs==null)
            return model;
        for(int i=0;i<yyConfigs.size();i++){
            YyconfigMdl yyconfig = yyConfigs.get(i);
            String[] times =StringUtils.split( yyconfig.getRegisterTime(),',');
            StringBuilder timesStr = new StringBuilder();
            for(int j=0;j<times.length;j++){
                timesStr.append(ComnUtil.GetTimeZh(times[j])).append(",");
            }
            yyConfigs.get(i).setRegisterDate(StringUtils.substring(yyconfig.getRegisterDate(),0,10));
            yyConfigs.get(i).setRegisterTime(timesStr.substring(0,timesStr.length()-1));
            yyConfigs.get(i).setRegisterUsed(yyconfig.getRegisterUsed().equals("1")?"接诊":"停诊");
        }
        model.addObject("yycfgs",yyConfigs);
        return model;
    }
}
