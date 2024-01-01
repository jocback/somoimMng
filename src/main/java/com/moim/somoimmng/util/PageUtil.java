package com.moim.somoimmng.util;

import com.github.pagehelper.Page;
import java.util.HashMap;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Component;

@Slf4j
@Component
public class PageUtil {

    public static Map<String, Object> getPageInfo(Page<Map<String, Object>> page) {
        Map<String, Object> pageMap = new HashMap<String, Object>();
        pageMap.put("pageNum", page.getPageNum());
        pageMap.put("pageSize", page.getPageSize());
        pageMap.put("total", page.getTotal());
        return pageMap;
    }

}
