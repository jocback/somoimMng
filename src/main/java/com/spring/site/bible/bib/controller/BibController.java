package com.spring.site.bible.bib.controller;

import com.spring.site.bible.bib.service.BibService;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
}
