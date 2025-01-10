package com.spring.site.somoimmng.michelin.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.spring.global.util.LoginUtil;
import com.spring.global.util.PageUtil;
import com.spring.site.somoimmng.michelin.service.MichelinService;
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
public class MichelinController {

    @Autowired
    private MichelinService michelinService;

    // 미쉐린 목록
    @RequestMapping(value = "michelin/michelinList", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView michelinList(@RequestParam Map<String, Object> paramMap) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("michelin/michelinList");
        return mv;
    }

    // 미쉐린 지도
    @RequestMapping(value = "michelin/michelinMap", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView michelinMap(@RequestParam Map<String, Object> paramMap) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("michelin/michelinMap");
        return mv;
    }

    // 미쉐린 업로드
    @RequestMapping(value = "/michelin/uploadMichelin", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView uploadScore(@RequestParam(value="uploadFile", required = false) MultipartFile[] uploadFiles) throws Exception {

        ModelAndView mv = new ModelAndView();

        michelinService.uploadMichelin(uploadFiles);

        mv.setViewName("jsonView");
        return mv;
    }

    // 미쉐린 조회하기
    @RequestMapping(value = "/michelin/selectMichelin", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectMichelin(@RequestParam Map<String, Object> paramMap
            , @RequestParam(value = "pageNum", defaultValue = "1") int pageNum
            , @RequestParam(value = "pageSize", defaultValue = "10") int pageSize
            , @RequestParam(value = "orderBy", defaultValue = "DEFAULT") String orderBy) throws Exception {
        ModelAndView mv = new ModelAndView();
        paramMap.put("smiSeq", LoginUtil.getInfoValue("smiSeq"));
        orderBy = "MICHELIN_SEQ ASC";

        PageHelper.startPage(pageNum, pageSize, orderBy);
        Page<Map<String, Object>> page = michelinService.selectMichelin(paramMap);

        mv.addObject("page", page);
        mv.addObject("totalInfo", PageUtil.getPageInfo(page));

        mv.setViewName("jsonView");
        return mv;
    }

    // 미쉐린 지도 조회
    @RequestMapping(value="/michelin/selectMapMichelinList", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectMapMichelinList(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();
        List<Map<String, Object>> mapStoreList = michelinService.selectMapMichelinList(paramMap);
        mv.addObject("mapMichelinList", mapStoreList);

        mv.setViewName("jsonView");
        return mv;
    }



}
