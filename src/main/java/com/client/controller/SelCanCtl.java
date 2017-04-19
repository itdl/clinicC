package com.client.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

/**
 * Created by BikeBoy on 2017/4/19.
 */
@Controller
public class SelCanCtl {

    @RequestMapping(value="/sc",method= RequestMethod.GET)
    public String selCancel(){
        return "selCancel";
    }
}
