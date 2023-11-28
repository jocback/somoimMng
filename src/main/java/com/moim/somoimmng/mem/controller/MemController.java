package com.moim.somoimmng.mem.controller;

import com.moim.somoimmng.mem.service.MemService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class MemController {

    @Autowired
    private MemService memService;

    // 회원 등록 페이지
    @RequestMapping(value="mem/memRegister", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView register() {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("mem/memRegister");
        return mv;
    }

    // 회원 등록하기
    @RequestMapping(value="mem/join", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView join(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();

        memService.insertMemMng(paramMap);

        mv.setViewName("jsonView");
        return mv;
    }


    // 회원 조회 페이지
    @RequestMapping(value="mem/memList", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView memList() throws Exception {
        ModelAndView mv = new ModelAndView();

        mv.setViewName("mem/memList");
        return mv;
    }

    // 회원 조회하기
    @RequestMapping(value="mem/selectMemMng", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectMemMng(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();
        List<Map<String, Object>> memList = memService.selectMemMng(paramMap);
        mv.addObject("memList", memList);
        mv.setViewName("jsonView");
        return mv;
    }

    // 회원 목록 가져오기
    @RequestMapping(value="mem/getMemList", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView getMemList(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();
        List<Map<String, Object>> memList = memService.getMemList(paramMap);
        mv.addObject("memList", memList);
        mv.setViewName("jsonView");
        return mv;
    }



}
