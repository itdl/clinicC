package com.client.controller;

import com.client.model.UserMdl;
import com.client.service.UserSrv;
import com.client.util.GlobalVar;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * 用户登录操作
 * @author mpc
 * @time 2017-4-11
 */
@Controller
public class LoginCtl {
    @Resource
    private UserSrv userSrv;

    /**
     * 用户登录
     * @param req
     * @return
     */
    @RequestMapping(value="/login",method= RequestMethod.POST)
    @ResponseBody
    public Map<String,Object> login(HttpServletRequest req){
        Map<String,Object> param = new HashMap<String,Object>();
        param.put("password",req.getParameter("password"));
        if(req.getParameter("userSms")!=null)
            param.put("userSms",req.getParameter("userSms").trim());
        if(req.getParameter("userName")!=null)
            param.put("userName",req.getParameter("userName").trim());
        UserMdl user = userSrv.loginCheck(param);
        param.clear();
        if(user != null){
            req.getSession().setAttribute(GlobalVar.UINFO,user);
            req.getSession().setAttribute("uname",user.getUserName());
            param.put("result","T");
            param.put("msg","你好-"+user.getUserName()+",欢迎登录就诊平台!");
            return param;
        }
        param.put("result","F");
        param.put("msg","用户名或密码错误!");
        return param;
    }

    /**
     * 退出登录
     * @param request
     * @param res
     */
    @RequestMapping(value = "/exit",method = RequestMethod.GET)
    public void exitAcount(HttpServletRequest request, HttpServletResponse res) {
        request.getSession().removeAttribute(GlobalVar.UINFO);
        request.getSession().invalidate();
        try {
            res.sendRedirect("/");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
