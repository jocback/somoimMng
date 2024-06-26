package com.spring.site.somoimmng.mem.controller;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.spring.site.somoimmng.mem.service.MemService;
import com.spring.global.util.LoginUtil;
import com.spring.global.util.PageUtil;
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

    // 멤버 등록 페이지
    @RequestMapping(value="mem/memRegister", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView register(@RequestParam Map<String, Object> paramMap) {
        ModelAndView mv = new ModelAndView();
        mv.addObject("type", paramMap.get("type"));
        mv.addObject("memSeq", paramMap.get("memSeq"));
        mv.setViewName("mem/memRegister");
        return mv;
    }

    // 멤버 등록하기
    @RequestMapping(value="mem/join", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView join(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();
        paramMap.put("smiSeq", LoginUtil.getInfoValue("smiSeq"));

        memService.insertMemMng(paramMap);

        mv.setViewName("jsonView");
        return mv;
    }

    // 일정 수정하기
    @RequestMapping(value="mem/modifyMemMng", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView modifyMemMng(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();

        memService.modifyMemMng(paramMap);

        mv.setViewName("jsonView");
        return mv;
    }

    // 일정 삭제하기
    @RequestMapping(value="mem/deleteMemMng", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView deleteMemMng(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();
        memService.deleteMemMng(paramMap);
        mv.setViewName("jsonView");
        return mv;
    }


    // 멤버 조회 페이지
    @RequestMapping(value="mem/memList", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView memList() throws Exception {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("mem/memList");
        return mv;
    }

    // 멤버 조회하기
    @RequestMapping(value="mem/selectMemMng", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectMemMng(@RequestParam Map<String, Object> paramMap
            , @RequestParam(value = "pageNum", defaultValue = "1") int pageNum
            , @RequestParam(value = "pageSize", defaultValue = "10") int pageSize
            , @RequestParam(value = "orderBy", defaultValue = "DEFAULT") String orderBy) throws Exception {
        ModelAndView mv = new ModelAndView();
        paramMap.put("smiSeq", LoginUtil.getInfoValue("smiSeq"));
        orderBy = "MEM_SEQ DESC";
        PageHelper.startPage(pageNum, pageSize, orderBy);
        Page<Map<String, Object>> page = memService.selectMemMng(paramMap);

        mv.addObject("page", page);
        mv.addObject("totalInfo", PageUtil.getPageInfo(page));
        mv.setViewName("jsonView");
        return mv;
    }

    // 멤버 목록 가져오기
    @RequestMapping(value="mem/getMemList", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView getMemList(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();
        paramMap.put("smiSeq", LoginUtil.getInfoValue("smiSeq"));
        List<Map<String, Object>> memList = memService.getMemList(paramMap);
        mv.addObject("memList", memList);
        mv.setViewName("jsonView");
        return mv;
    }

    // 멤버 상세조회
    @RequestMapping(value="mem/selectMemDetail", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectMemDetail(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();
        paramMap.put("smiSeq", LoginUtil.getInfoValue("smiSeq"));
        Map<String, Object> resultMap = memService.selectMemDetail(paramMap);
        mv.addObject("memDetail", resultMap);

        mv.setViewName("jsonView");
        return mv;
    }

    // 일정상세팝업
    @RequestMapping(value="popup/mem/memDetailPopup", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView memDetailPopup(@RequestParam Map<String, Object> paramMap) {
        ModelAndView mv = new ModelAndView();

        mv.addObject(paramMap);
        mv.addObject("memSeq", paramMap.get("memSeq"));

        mv.setViewName("popup/mem/memDetailPopup");
        return mv;
    }

}
