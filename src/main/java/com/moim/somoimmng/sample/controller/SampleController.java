package com.moim.somoimmng.sample.controller;

import com.moim.somoimmng.sample.service.SampleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SampleController {

    @Autowired
    private SampleService sampleService;

    @RequestMapping(value="index", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView indeX() {
        ModelAndView mv = new ModelAndView();

        String testString = sampleService.selectTest();
        System.out.println(testString);


        mv.setViewName("index");
        return mv;
    }

    @RequestMapping(value="sample/quix", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView quix() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sample/quix");
        return mv;
    }

    @RequestMapping(value="index/index", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView subindex() {
        ModelAndView mv = new ModelAndView();

        String testString = sampleService.selectTest();
        System.out.println(testString);


        mv.setViewName("sample/index");
        return mv;
    }

}
