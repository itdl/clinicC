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

    @RequestMapping(value="/regr",method= RequestMethod.GET)
    public String register(){
        return "register";
    }

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> register(HttpServletRequest req) {
        Map<String, Object> param = new HashMap<String, Object>();
        param.put("userSms", req.getParameter("sms"));
        param.put("userName", req.getParameter("userName"));
        try {
            UserMdl uCheck = userSrv.selUser(param);
            if (uCheck != null) {
                if(param.get("userName").equals(uCheck.getUserName())){
                    param.put("msg", "用户名称已存在!");
                    param.put("result", "F");
                    return param;
                }
                if(param.get("userName").equals(uCheck.getUserSms())){
                    param.put("msg", "手机号已存在!");
                    param.put("result", "F");
                    return param;
                }
            }
        } catch (Exception e) {
            param.clear();
            param.put("msg", "网络异常!");
            param.put("result", "F");
            return param;
        }
        UserMdl user = new UserMdl();
        user.setUserName(req.getParameter("userName"));
        user.setUserIdtype(Integer.parseInt(req.getParameter("idType")));
        user.setUserIsshefn(req.getParameter("isshefn"));
        user.setUserJzd(req.getParameter("jzd"));
        user.setUserPassword(req.getParameter("passWord"));
        user.setUserSex(Integer.parseInt(req.getParameter("sex")));
        user.setUserSms(req.getParameter("sms"));
        user.setUserBirthday(req.getParameter("birthday"));
        try {
            userSrv.register(user);
        } catch (Exception e) {
            e.printStackTrace();
            param.clear();
            param.put("msg", "网络异常!");
            param.put("result", "F");
            return param;
        }
        req.getSession().setAttribute(GlobalVar.UINFO, user);
        param.put("msg", "注册成功!");
        param.put("result", "T");
        return param;
    }
}
