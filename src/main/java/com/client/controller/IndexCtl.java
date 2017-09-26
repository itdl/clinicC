package com.client.controller;

import com.client.model.YyconfigMdl;
import com.client.service.YySrv;
import com.client.service.indexSrv;
import com.client.util.DateUtil;
import com.client.util.GlobalVar;
import org.apache.commons.lang3.StringUtils;
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
    @Resource
    private YySrv yySrv;

    @RequestMapping(value="/",method= RequestMethod.GET)
    public ModelAndView goIndex(ModelAndView model, HttpServletRequest req){
        /** 停诊日期 */
        Map<String,Object> param = new HashMap<String,Object>();
        param.put("registerDate", DateUtil.FormatDate(new Date(), GlobalVar.DATETIME));
        param.put("registerUsed", 0);
        List<YyconfigMdl> stopRepns = yySrv.stopRepnList(param);
        if(stopRepns!=null){
            List<String> stopRepnIds = new ArrayList<>();
            YyconfigMdl yycfg;
            StringBuilder idBuilder = new StringBuilder();
            for(int i=0;i<stopRepns.size();i++){
                yycfg = stopRepns.get(i);
                String[] times = StringUtils.split(yycfg.getRegisterTime(),",");
                for(int j=0;j<times.length;j++){
                    //拼接停诊Id
                    idBuilder.append(StringUtils.substring(yycfg.getRegisterDate(),0,10))
                            .append("_")
                            .append(times[j]);
                    stopRepnIds.add(idBuilder.toString());
                    idBuilder.delete(0,idBuilder.length());
                }
            }
            model.addObject("stopids",stopRepnIds);
        }
        /** 获取最新七天日期 */
        String maxDate = indexSrv.selMaxDate();
        Date date = DateUtil.AddWeek(Calendar.WEEK_OF_YEAR,-1,DateUtil.GetDate(maxDate));

        List<Map<String,Object>> dates = new ArrayList<Map<String,Object>>();
        Map<String,Object> dateMap = new HashMap<String,Object>();
        for(int i=1;i<8;i++){
            dateMap = new HashMap<String,Object>();
            date = DateUtil.AddDay(date,1);
            dateMap.put("date",DateUtil.FormatDate(date,GlobalVar.DATE));
            dateMap.put("week",DateUtil.GetWeek(date));

            Map<String,Object> valMap = new HashMap<String,Object>();
            String value= DateUtil.FormatDate(date,GlobalVar.DATE);
            valMap.put("sw",value+"_1");
            valMap.put("zw",value+"_2");
            valMap.put("xw",value+"_3");
            dateMap.put("vals",valMap);

            dates.add(dateMap);
        }
        String nowdate= DateUtil.FormatDate(new Date(), GlobalVar.DATETIME);
        int dateout = StringUtils.substring(nowdate,11).compareTo("14:00:00");
        model.addObject("dateout",dateout>0?0:1);
        model.addObject("dates",dates);//后台逻辑产生的数据返回到前台
        model.setViewName("index");//后台数据在前台那个页面显示
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
