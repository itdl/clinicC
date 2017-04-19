package com.client.controller;

import com.client.service.indexSrv;
import com.client.util.DateUtil;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.util.*;

/**
 * Created by BikeBoy on 2017/3/29.
 */
@Controller
public class IndexCtl {
    @Resource
    private indexSrv indexSrv;

    @RequestMapping(value="/",method= RequestMethod.GET)
    public ModelAndView goIndex(ModelAndView model, HttpServletRequest req){
        String maxDate = indexSrv.selMaxDate();
        Date date = DateUtil.AddWeek(Calendar.WEEK_OF_YEAR,-1,DateUtil.GetDate(maxDate));

        List<Map<String,Object>> dates = new ArrayList<Map<String,Object>>();
        Map<String,Object> dateMap = new HashMap<String,Object>();
        for(int i=1;i<8;i++){
            dateMap = new HashMap<String,Object>();
            date = DateUtil.AddDay(date,1);
            dateMap.put("date",DateUtil.FormatDate(date));
            dateMap.put("week",DateUtil.GetWeek(date));

            Map<String,Object> valMap = new HashMap<String,Object>();
            String value= DateUtil.FormatDate(date);
            valMap.put("sw",value+"_1");
            valMap.put("zw",value+"_2");
            valMap.put("xw",value+"_3");
            dateMap.put("vals",valMap);

            dates.add(dateMap);
        }
        model.addObject("dates",dates);
        model.setViewName("index");
        return model;
    }

    @RequestMapping(value="/cinfo",method= RequestMethod.GET)
    public String clinicInfo(){
        return "clinicInfo";
    }

    @RequestMapping(value="/ninfo",method= RequestMethod.GET)
    public String noticeInfo(){
        return "noticeInfo";
    }
}
