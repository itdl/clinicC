package com.client.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by BikeBoy on 2017/3/29.
 */
@Controller
public class indexCtl {
    @RequestMapping(value="/",method= RequestMethod.GET)
    public String goIndex(){
        return "index";
    }

    @RequestMapping(value="/cinfo",method= RequestMethod.GET)
    public String clinicInfo(){
        return "clinicInfo";
    }

    @RequestMapping(value="/ninfo",method= RequestMethod.GET)
    public String noticeInfo(){
        return "noticeInfo";
    }

    @RequestMapping(value="/stopRepn",method= RequestMethod.GET)
    public String stopRepn(){
        return "stopRepn";
    }

    @RequestMapping(value="/sc",method= RequestMethod.GET)
    public String selCancel(){
        return "selCancel";
    }

    @RequestMapping(value="/register",method= RequestMethod.GET)
    public String register(){
        return "register";
    }
}
