package com.spring.site.bible.bib.controller;

import com.spring.site.bible.bib.service.BibService;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class BibController {

    @Autowired
    private BibService bibService;

    // 성경보기
    @RequestMapping(value = "bib/bibView", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView bibView(@RequestParam Map<String, Object> paramMap) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("bib/bibView");
        return mv;
    }

    // 성경 조회하기
    @RequestMapping(value = "/bib/selectBibVers", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectBibVers(@RequestParam Map<String, Object> paramMap) throws Exception {

        ModelAndView mv = new ModelAndView();

        List<Map<String, Object>> bibList = bibService.selectBibVers(paramMap);

        mv.addObject("bibList", bibList);

        mv.setViewName("jsonView");
        return mv;
    }

}
