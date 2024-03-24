package com.spring.site.somoimmng.land.controller;

import com.spring.site.somoimmng.land.service.LandService;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LandController {

    @Autowired
    private LandService landService;


    @RequestMapping(value = "/land/addLand", method = {RequestMethod.POST, RequestMethod.GET})
    public ModelAndView addLand(@RequestParam Map<String, Object> paramMap) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("land/addLand");
        return mv;
    }

    @RequestMapping(value = "/land/getSaleInfo", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView insertUrl(@RequestParam Map<String, Object> paramMap) {
        ModelAndView mv = new ModelAndView();
        Map<String, Object> resultMap = landService.getSaleInfo(paramMap);
        mv.addObject("result", resultMap);
        mv.setViewName("jsonView");
        return mv;
    }

}
