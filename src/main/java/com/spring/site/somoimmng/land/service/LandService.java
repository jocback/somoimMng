package com.spring.site.somoimmng.land.service;

import com.spring.site.somoimmng.land.mapper.LandMapper;
import java.util.HashMap;
import java.util.Map;
import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LandService {

    @Autowired
    private LandMapper landMapper;

    public Map<String, Object> getSaleInfo(Map<String, Object> paramMap) {

        Map<String, Object> resultMap = new HashMap<String, Object>();
        Document doc;
        String url = (String) paramMap.get("url");

        try {
            doc = Jsoup.connect(url).get();
            Elements dtEl = doc.select("div dl div dt");
            Elements ddEl = doc.select("div dl div dd");

            for(int i=0; i<dtEl.size(); i++) {
                String dtStr = String.valueOf(dtEl.eq(i)).replaceAll("<[^>]*>","").replaceAll("(\r\n|\r|\n|\n\r)", " ").trim();
                String ddStr = String.valueOf(ddEl.eq(i)).replaceAll("<[^>]*>","").replaceAll("(\r\n|\r|\n|\n\r)", " ").replaceAll(" ","");

                if(dtStr.contains("보증금/월세")) {
                    resultMap.put("deposit", ddStr);
                } if(dtStr.contains("관리비")) {
                    resultMap.put("admnCost", ddStr);
                } if(dtStr.contains("공급면적")) {
                    resultMap.put("supplyArea", ddStr);
                } if(dtStr.contains("전용면적")) {
                    resultMap.put("exclArea", ddStr);
                } if(dtStr.contains("층")) {
                    resultMap.put("floor", ddStr);
                } if(dtStr.contains("향")) {
                    resultMap.put("facing", ddStr);
                } if(dtStr.contains("방/욕실")) {
                    resultMap.put("room", ddStr);
                } if(dtStr.contains("복층여부")) {
                    resultMap.put("duplex", ddStr);
                } if(dtStr.contains("입주가능일")) {
                    resultMap.put("moveInDate", ddStr);
                } if(dtStr.contains("매물번호")) {
                    resultMap.put("saleNumber", ddStr);
                } if(dtStr.contains("매물소개")) {
                    resultMap.put("saleIntroduce", ddStr);
                }
            }
        } catch(Exception e) {
            e.printStackTrace();
        }

        return resultMap;
    }


}
