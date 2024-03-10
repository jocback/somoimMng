package com.spring.site.somoimmng.loc.controller;

import com.spring.site.somoimmng.loc.service.LocService;
import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.Reader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class LocController {

    @Autowired
    private LocService locService;


    // 회원 등록 페이지
    @RequestMapping(value="loc/locMap", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView locMap(@RequestParam Map<String, Object> paramMap) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("loc/locMap");
        return mv;
    }

    // 회원 등록 페이지
    @RequestMapping(value="popup/locMapPopup", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView locMapPopup(@RequestParam Map<String, Object> paramMap) {
        ModelAndView mv = new ModelAndView();
        mv.setViewName("popup/locMapPopup");
        return mv;
    }

    // 멤버 목록 가져오기
    @RequestMapping(value="loc/getAutoComp", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView getMemList(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();
        String resultStr = "";
        try {
            URL u = new URL("https://map.kakao.com/api/dapi/suggest/hub?service=local-suggest&q="+paramMap.get("keyword").toString());
            URLConnection uc = u.openConnection();
            try(InputStream raw = uc.getInputStream()){
                InputStream buffer = new BufferedInputStream(raw);
                Reader reader = new InputStreamReader(buffer);
                int c;

                while((c=reader.read())!=-1) {
//                    System.out.print((char)c);
                    resultStr += (char)c;
                }
            }
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        mv.addObject("result", resultStr);
        mv.setViewName("jsonView");
        return mv;
    }

    // 소모임장소 조회
    @RequestMapping(value="loc/selectMapStoreList", method = {RequestMethod.GET, RequestMethod.POST})
    public ModelAndView selectSchStoreList(@RequestParam Map<String, Object> paramMap) throws Exception {
        ModelAndView mv = new ModelAndView();
        List<Map<String, Object>> mapStoreList = locService.selectMapStoreList(paramMap);
        mv.addObject("mapStoreList", mapStoreList);

        mv.setViewName("jsonView");
        return mv;
    }

//    public static void main(String[] args) {
//        // TODO Auto-generated method stub
//        try {
//            URL u = new URL("https://map.kakao.com/api/dapi/suggest/hub?service=local-suggest&q=%EA%B0%95%EB%82%A8\n");
//            URLConnection uc = u.openConnection();
//            try(InputStream raw = uc.getInputStream()){
//                InputStream buffer = new BufferedInputStream(raw);
//                Reader reader = new InputStreamReader(buffer);
//                int c;
//                String resultStr = "";
//                while((c=reader.read())!=-1) {
////                    System.out.print((char)c);
//                    resultStr += (char)c;
//                }
//                System.out.println(resultStr);
//            }
//        } catch (MalformedURLException e) {
//            // TODO Auto-generated catch block
//            e.printStackTrace();
//        } catch (IOException e) {
//            // TODO Auto-generated catch block
//            e.printStackTrace();
//        }
//
//    }
}
