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
import java.util.HashMap;
import java.util.Map;

/**
 * 用户操作类
 * @author mpc
 * @time 2017-4-11
 */
@Controller
public class UserCtl {
    @Resource
    private UserSrv userSrv;

    @RequestMapping(value="/register",method= RequestMethod.POST)
    @ResponseBody
    public Map<String,Object> register(HttpServletRequest req){
        UserMdl user = new UserMdl();
        Map<String,Object> param = new HashMap<String,Object>();
        user.setUserName(req.getParameter("userName"));
        user.setUserIdtype(Integer.parseInt(req.getParameter("idType")));
        user.setUserIsshefn(req.getParameter("isshefn"));
        user.setUserJzd(req.getParameter("jzd"));
        user.setUserPassword(req.getParameter("passWord"));
        user.setUserSex(Integer.parseInt(req.getParameter("sex")));
        user.setUserSms(req.getParameter("sms"));
        user.setUserBirthday(req.getParameter("birthday"));
        try{
            userSrv.register(user);
        }catch(Exception e){
            e.printStackTrace();
            param.clear();
            param.put("msg","注册失败!");
            param.put("result","F");
            return param;
        }
        req.getSession().setAttribute(GlobalVar.UINFO,user);
        param.put("msg","注册成功!");
        param.put("result","T");
        return param;
    }
}
