package com.moim.somoimmng.dashboard.controller;

import com.moim.somoimmng.dashboard.service.DashboardService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    // 통계 페이지
    @RequestMapping(value="/", method = {RequestMethod.GET, RequestMethod.POST})
    public String main(@RequestParam Map<String, Object> paramMap) throws Exception {
        return "redirect:/dashboard/statistics";
    }

    // 통계 페이지
    @RequestMapping(value="dashboard/statistics", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView statistics(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();

        mv.setViewName("dashboard/statistics");
        return mv;
    }

    // 친한 멤버 조회
    @RequestMapping(value="dashboard/selectOftMem", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView join(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();

        List<Map<String, Object>> oftList = dashboardService.selectOftMem(paramMap);

        mv.addObject("oftList", oftList);
        mv.setViewName("jsonView");
        return mv;
    }
    // 최근 일정 조회
    @RequestMapping(value="dashboard/selectRcntSch", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectRcntSch(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();

        List<Map<String, Object>> schList = dashboardService.selectRcntSch(paramMap);

        mv.addObject("schList", schList);
        mv.setViewName("jsonView");
        return mv;
    }

    // 참석한 일정 조회
    @RequestMapping(value="dashboard/selectAtnSch", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectAtnSch(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();

        List<Map<String, Object>> atnSchList = dashboardService.selectAtnSch(paramMap);

        mv.addObject("atnSchList", atnSchList);
        mv.setViewName("jsonView");
        return mv;
    }

    // 자주 보는 멤버
    @RequestMapping(value="dashboard/selectLstAtnDate", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectLstAtnDate(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();

        List<Map<String, Object>> lstList = dashboardService.selectLstAtnDate(paramMap);

        mv.addObject("lstList", lstList);
        mv.setViewName("jsonView");
        return mv;
    }

    // 참여횟수 조회
    @RequestMapping(value="dashboard/selectMemAtnCnt", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectMemAtnCnt(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();

        List<Map<String, Object>> lstList = dashboardService.selectMemAtnCnt(paramMap);

        mv.addObject("atnCntList", lstList);
        mv.setViewName("jsonView");
        return mv;
    }
}
