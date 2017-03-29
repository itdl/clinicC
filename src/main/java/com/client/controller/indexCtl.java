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
        System.out.println("**************");
        return "index";
    }
}
