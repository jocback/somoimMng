package com.moim.somoimmng.loc.controller;

import com.moim.somoimmng.loc.service.LocService;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LocController {

    @Autowired
    private LocService locService;


    // 회원 등록 페이지
    @RequestMapping(value="loc/locMap", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView locMap(@RequestParam Map<String, Object> paramMap) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("loc/locMap");
        return mv;
    }
}
