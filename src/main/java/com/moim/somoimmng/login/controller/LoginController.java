package com.moim.somoimmng.login.controller;

import com.moim.somoimmng.login.service.LoginService;
import java.util.Map;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LoginController {

    @Autowired
    private LoginService loginService;

    // 로그인 페이지
    @RequestMapping(value = "login/loginForm", method = {RequestMethod.POST, RequestMethod.GET})
    public ModelAndView loginForm(HttpServletRequest request) {
        ModelAndView mv = new ModelAndView();
        HttpSession session = request.getSession();

        mv.addObject("redirectUrl", session.getAttribute("redirectUrl"));

        mv.setViewName("login/loginForm");
        return mv;
    }

    // 회원 등록 페이지
    @RequestMapping(value = "login/register", method = {RequestMethod.POST, RequestMethod.GET})
    public ModelAndView register() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("login/register");
        return mv;

    }

    // 회원 등록
    @RequestMapping(value = "login/joinUser", method = {RequestMethod.POST, RequestMethod.GET})
    public ModelAndView joinUser(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();
        loginService.insertUserMng(paramMap);
        mv.setViewName("jsonView");
        return mv;
    }

}
