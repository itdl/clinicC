package com.client.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;

/**
 * Created by BikeBoy on 2017/4/10.
 */
public class UserCtl {

    @RequestMapping(value="/register",method= RequestMethod.POST)
    public ModelAndView register(HttpServletRequest req, ModelAndView model){


        model.setViewName("/");
        return model;
    }
}
