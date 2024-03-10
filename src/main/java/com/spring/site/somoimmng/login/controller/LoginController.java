package com.spring.site.somoimmng.login.controller;

import com.spring.site.somoimmng.login.service.LoginService;
import com.spring.global.util.EncUtil;
import com.spring.global.util.LoginUtil;
import java.util.List;
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
        String userPw = (String) paramMap.get("userPw");
        userPw = EncUtil.decrypt(userPw, "somoim");
        loginService.insertUserMng(paramMap);
        mv.setViewName("jsonView");
        return mv;
    }

    // 소모임 선택 페이지
    @RequestMapping(value = "login/workspace", method = {RequestMethod.POST, RequestMethod.GET})
    public ModelAndView workspace() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("login/workspace");
        return mv;
    }

    // 소모임 목록 조회
    @RequestMapping(value = "login/choiceSomoim", method = {RequestMethod.POST, RequestMethod.GET})
    public ModelAndView choiceSomoim(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();
        Map<String, Object> userMap = LoginUtil.getInfo();
        userMap.put("SMI_SEQ", paramMap.get("smiSeq"));
        LoginUtil.setSecurityUserDetail(userMap);
        mv.setViewName("jsonView");
        return mv;
    }

    // 소모임 목록 조회
    @RequestMapping(value = "login/selectSomoim", method = {RequestMethod.POST, RequestMethod.GET})
    public ModelAndView selectSomoim(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();
        paramMap.put("userSeq", LoginUtil.getInfo().get("userSeq"));
        List<Map<String, Object>> somoimList = loginService.selectSomoim(paramMap);
        mv.addObject("somoimList", somoimList);
        mv.setViewName("jsonView");
        return mv;
    }

    // 모임 등록
    @RequestMapping(value = "login/insertSmiMng", method = {RequestMethod.POST, RequestMethod.GET})
    public ModelAndView insertSmiMng(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();
        paramMap.put("userSeq", LoginUtil.getInfo().get("userSeq"));
        loginService.insertSmiMng(paramMap);
        mv.setViewName("jsonView");
        return mv;
    }

}
