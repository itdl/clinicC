package com.client.filter;

import com.client.util.GlobalVar;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * 登录拦截器
 * @author mpc
 * @time 2017/03/12
 */
@Component
public class SessionIntercepter implements HandlerInterceptor {
    @Override
    public boolean preHandle(HttpServletRequest req, HttpServletResponse res, Object o) throws Exception {
        Object loginUser = req.getSession().getAttribute(GlobalVar.UINFO);
        if (loginUser != null) {
            return true;
        }
        if(req.getHeader("X-Requested-With").equals("XMLHttpRequest")){
            res.setContentType("text/html;charset=UTF-8");
            res.getWriter().write("{\"result\":\"F\",\"msg\":\"您未登录!\"}");
        }
        return false;
    }

    @Override
    public void postHandle(HttpServletRequest req, HttpServletResponse res, Object o, ModelAndView mv) throws Exception {
    }

    @Override
    public void afterCompletion(HttpServletRequest req, HttpServletResponse res, Object o, Exception e) throws Exception {
    }
}