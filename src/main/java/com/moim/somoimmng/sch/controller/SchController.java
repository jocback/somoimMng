package com.moim.somoimmng.sch.controller;

import com.moim.somoimmng.sch.service.SchService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class SchController {

    @Autowired
    private SchService schService;

    // 일정 조회 페이지
    @RequestMapping(value="sch/schList", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView schList() throws Exception {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("sch/schList");
        return mv;
    }

    // 일정 조회하기
    @RequestMapping(value = "/sch/selectSmiSche", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectSmiSche(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();

        List<Map<String,Object>> schList = schService.selectSmiSche(paramMap);
        mv.addObject("schList", schList);

        mv.setViewName("jsonView");
        return mv;
    }

    // 일정 등록 페이지
    @RequestMapping(value="sch/schRegister", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView memList(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();
        mv.addObject(paramMap);
        mv.addObject("type", paramMap.get("type"));
        mv.addObject("schSeq", paramMap.get("schSeq"));

        mv.setViewName("sch/schRegister");
        return mv;
    }

    // 일정 등록하기
    @RequestMapping(value="sch/insertSmiSche", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView insertSmiSche(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();

        Object obj = paramMap.get("seqArr");
        List<String> strList = (List<String>) obj;

        paramMap.put("smiSeq", "1");
        schService.insertSmiSche(paramMap);

        mv.setViewName("jsonView");
        return mv;
    }

    // 일정 상세조회
    @RequestMapping(value="sch/selectSchDetail", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectSchDetail(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();

        Map<String, Object> resultMap = schService.selectSchDetail(paramMap);
        mv.addObject("schDetail", resultMap);

        mv.setViewName("jsonView");
        return mv;
    }

    // 일정 수정하기
    @RequestMapping(value="sch/modifySmiSche", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView modifySmiSche(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();

        Object obj = paramMap.get("seqArr");
        List<String> strList = (List<String>) obj;

        paramMap.put("smiSeq", "1");
        schService.modifySmiSche(paramMap);

        mv.setViewName("jsonView");
        return mv;
    }

    // 일정 삭제하기
    @RequestMapping(value="sch/deleteSmiSche", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView deleteSmiSche(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();

        Object obj = paramMap.get("seqArr");
        List<String> strList = (List<String>) obj;

        paramMap.put("smiSeq", "1");
        schService.deleteSmiSche(paramMap);

        mv.setViewName("jsonView");
        return mv;
    }

}
