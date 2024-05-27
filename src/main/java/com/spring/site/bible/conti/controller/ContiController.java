package com.spring.site.bible.conti.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.spring.global.util.LoginUtil;
import com.spring.global.util.PageUtil;
import com.spring.site.bible.conti.service.ContiService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ContiController {

    @Autowired
    private ContiService contiService;

    // 콘티 목록
    @RequestMapping(value = "conti/contiList", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView contiList(@RequestParam Map<String, Object> paramMap) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("conti/contiList");
        return mv;
    }

    // 콘티 조회하기
    @RequestMapping(value="conti/selectContiMng", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectContiMng(@RequestParam Map<String, Object> paramMap
            , @RequestParam(value = "pageNum", defaultValue = "1") int pageNum
            , @RequestParam(value = "pageSize", defaultValue = "10") int pageSize
            , @RequestParam(value = "orderBy", defaultValue = "DEFAULT") String orderBy) throws Exception {
        ModelAndView mv = new ModelAndView();
        orderBy = "CONTI_SEQ*1 DESC";
        PageHelper.startPage(pageNum, pageSize, orderBy);
        Page<Map<String, Object>> page = contiService.selectContiMng(paramMap);

        mv.addObject("page", page);
        mv.addObject("totalInfo", PageUtil.getPageInfo(page));
        mv.setViewName("jsonView");
        return mv;
    }

    // 콘티 등록화면
    @RequestMapping(value = "conti/contiRegister", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView bibConti(@RequestParam Map<String, Object> paramMap) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("conti/contiRegister");
        return mv;
    }

    // 콘티 등록하기
    @RequestMapping(value="conti/registerContiMng", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView registerContiMng(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();
        paramMap.put("smiSeq", LoginUtil.getInfoValue("smiSeq"));
        paramMap.put("smiSeq", "1");
        contiService.registerContiMng(paramMap);

        mv.setViewName("jsonView");
        return mv;
    }

    // 찬양 선택
    @RequestMapping(value="popup/conti/selScorePopup", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selScorePopup(@RequestParam Map<String, Object> paramMap) {
        ModelAndView mv = new ModelAndView();

        mv.addObject(paramMap);
        mv.addObject("contiSeq", paramMap.get("contiSeq"));

        mv.setViewName("popup/conti/selScorePopup");
        return mv;
    }

    // 악보 조회하기(자동완성)
    @RequestMapping(value="conti/selectScoreAutoCmpt", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectScoreAutoCmpt(@RequestParam Map<String, Object> paramMap
            , @RequestParam(value = "pageNum", defaultValue = "1") int pageNum
            , @RequestParam(value = "pageSize", defaultValue = "10") int pageSize
            , @RequestParam(value = "orderBy", defaultValue = "DEFAULT") String orderBy) throws Exception {
        ModelAndView mv = new ModelAndView();
        orderBy = "SCORE_NO*1 DESC";
        PageHelper.startPage(pageNum, pageSize, orderBy);
        Page<Map<String, Object>> page = contiService.selectScore(paramMap);

        mv.addObject("page", page);
        mv.addObject("totalInfo", PageUtil.getPageInfo(page));
        mv.setViewName("jsonView");
        return mv;
    }

    // 콘티 보기
    @RequestMapping(value="popup/conti/viewContiPopup", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView viewContiPopup(@RequestParam Map<String, Object> paramMap) {
        ModelAndView mv = new ModelAndView();

        List<Map<String, Object>> contiScoreList = contiService.selectContiScoreList(paramMap);
        mv.addObject(paramMap);
        mv.addObject("contiScoreList", contiScoreList);

        mv.setViewName("popup/conti/viewContiPopup");
        return mv;
    }


    // 찬양목록
    @RequestMapping(value = "conti/scoreList", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView scoreList(@RequestParam Map<String, Object> paramMap) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("conti/scoreList");
        return mv;
    }

    // 악보 조회하기
    @RequestMapping(value="conti/selectScore", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectScore(@RequestParam Map<String, Object> paramMap
            , @RequestParam(value = "pageNum", defaultValue = "1") int pageNum
            , @RequestParam(value = "pageSize", defaultValue = "10") int pageSize
            , @RequestParam(value = "orderBy", defaultValue = "DEFAULT") String orderBy) throws Exception {
        ModelAndView mv = new ModelAndView();
        orderBy = "SCORE_NO*1 DESC";
        PageHelper.startPage(pageNum, pageSize, orderBy);
        Page<Map<String, Object>> page = contiService.selectScore(paramMap);

        mv.addObject("page", page);
        mv.addObject("totalInfo", PageUtil.getPageInfo(page));
        mv.setViewName("jsonView");
        return mv;
    }

    // 성경 말씀 업로드 하기
    @RequestMapping(value = "/conti/uploadScore", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView uploadScore(@RequestParam(value="uploadFile", required = false) MultipartFile[] uploadFiles, @RequestParam Map<String, Object> paramMap) throws Exception {

        ModelAndView mv = new ModelAndView();

        contiService.uploadScore(uploadFiles, paramMap);

        mv.setViewName("jsonView");
        return mv;
    }

}
