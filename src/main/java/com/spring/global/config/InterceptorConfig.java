package com.spring.global.config;

import com.google.gson.Gson;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

@Component
public class InterceptorConfig implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
            Object handler) throws Exception {
        return HandlerInterceptor.super.preHandle(request, response, handler);
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
            ModelAndView modelAndView) throws Exception {
        Map<String, Object> paramMap = new HashMap<>();
        Enumeration e = request.getParameterNames();

        String url = request.getRequestURL().toString();
        System.out.println(url);

        Map<String, Object> map = new HashMap<>();
        while ( e.hasMoreElements() ){
            String name = (String) e.nextElement();
            String[] values = request.getParameterValues(name);
            if(values.length>1){
                map.put(name, values);
            }else {
                map.put(name, values[0]);
            }
        }

        String json = new Gson().toJson(map);
        System.out.println(json);
        if(modelAndView==null) {
            modelAndView = new ModelAndView();
        }
        modelAndView.addObject("jsonStr", json);
    }
}
